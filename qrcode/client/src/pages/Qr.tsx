import { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import { socket } from "../socket"
import { useNavigate } from "react-router"

const url = `${window.location.href}login`

const Qr = () => {
    const [socketId, setSocketId] = useState<string|undefined|null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const handleConnect = () => {
            setSocketId(socket.id);
            socket.emit("qrscan", socket.id);
        };

        // Listen for connection and store socket ID
        socket.on("connect", handleConnect);

        socket.on('qrconnect',(data)=>{
            console.log(data);
        })

        socket.on('mobileLoginSuccess',(data)=>{
            console.log(data);
            if(data?.success){
                navigate('/success')
            }
        })

        // Cleanup event listener on unmount
        return () => {
            socket.off("connect", handleConnect);
        };
    }, []);

    console.log(`${url}?id=${socketId}`);
    
    return (
        <>
        {
            socketId ? (
                <div>
                <h1>Scan the QR</h1>
                <div style={{ height: "auto", margin: "0 auto", width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={`${url}?id=${socketId}`}
                        viewBox={`0 0 256 256`}
                        />
                </div>
            </div>
            ) :<></>
        }
        </>
    )
}

export default Qr