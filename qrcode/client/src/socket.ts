import { io } from 'socket.io-client';

const url = `${window.location.href}`.replace('5173','8080').replace('/login',"")

export const socket = io(url);
console.log(url);