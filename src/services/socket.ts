import socketio from 'socket.io-client';

const socket = socketio('https://backend108hour.herokuapp.com');
// socketio('http://192.168.0.40:3333');

socket.on('connect', () => {
  console.log('Connected to websocket.');
});

export default socket;
