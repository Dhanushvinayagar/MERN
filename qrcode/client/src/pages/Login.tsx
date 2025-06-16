import { useState } from "react"
import { useNavigate, useParams } from "react-router";
import { socket } from "../socket";

type Formdata = {
    user: string,
    password: string
}


const Login = () => {
    const [formData, setFormData] = useState<Formdata>({
        user:'',
        password:''
    })
    const id = new URL(window.location.href).searchParams.get('id')

    const navigate = useNavigate()
    
    const handleClick = () => {
        if(formData.user && formData.password){
            console.log(socket.id);
            
            socket.emit('login',{
                socket_id:id
                ,...formData
            })

            socket.on('loginSuccess',(data) => {
                console.log(data.message);
                navigate('/success')
            })

        }
    }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <p>User</p>
        <input type="text" placeholder="Enter User ID" onChange={(e) => setFormData({...formData, user: e.target.value})} />
        <p>Password</p>
        <input type="password" placeholder="Enter Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />

        <br />
        <br />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  )
}

export default Login