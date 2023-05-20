import {db} from './dbconf.js';
import { addDoc, collection,Timestamp,setDoc, doc, query, where, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const dboperations = {
    sentMsg(text){
        // console.log(db);
        // const dateTime = new Date();
        const sent_msg =  addDoc(collection(db,"messages"),{
            msg:text,
            time: Timestamp.now(),
        });
        return sent_msg;
    },
    register(name,pass){
        const profile = addDoc(collection(db,'profiles'),{
            name: name,
            password: pass 
        })
    }
};


export default dboperations;