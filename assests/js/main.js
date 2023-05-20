window.addEventListener('load',bindEvents);
import {db} from './dbconf.js';
import dboperations from './dbOperations.js';
function bindEvents(){
    document.getElementById('send-btn').addEventListener('click',sendMsg);
    register();
    console.log(db);
}

function sendMsg(){
    const messages = document.getElementById('send-msg-input').value;
    document.getElementById('send-msg-input').value = '';
    console.log(messages);
    const dbMsg = dboperations.sentMsg(messages);
    dbMsg.then(()=>console.log('Added On DB'));
}

function register(){
    const name = prompt("Enter the id ");
    const pass = prompt("Enter the password ");
    const dbProfile = dboperations.register(name,pass);
    dbProfile.then(()=>console.log("Profile Created"));
}