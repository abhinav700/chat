const socket=io('http://localhost:8000');
const form=document.getElementsByClassName('form')
const messageInput=document.getElementsByClassName('tosend');
const messageContainer=document.querySelector('.container');
let name1=prompt("Enter  your name please");
socket.emit('new-user-joined',name1);
// socket.on('user-joined',data)
// prompt("Enter your name to join");