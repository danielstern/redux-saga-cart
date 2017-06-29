export const connect = ()=>{
    const io = window.io;
    const socket = io();
    return socket;
}