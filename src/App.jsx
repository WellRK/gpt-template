//import { useState } from 'react'

import { useEffect, useState } from "react";
import {io} from 'socket.io-client';

function ChatMessage({ message, type }){
  return(
    <div className={`flex w-full ${
      type === "send" ? "justify-start" : "justify-end"
      }`}
    >
      
      {type === "send" ? (
        <div className="bg-violet-500 p-2 rounded-b-lg rounded-tr-lg text-white">`
          {message}
        </div>
      ) : (
        <div className="bg-white p-2 rounded-b-lg rounded-tl-lg text-black">
          {message.split('*').map( (line, index) => (
           <p key={index}>{line} </p> 
            
          ))}
        </div>
      
      )}
    </div>
  );
}



const newSocket = io("http://localhost:3000/");
function App() {
 
  const [newSocket, setNewSocket] = useState(null);
  const [input_message, setInputMessage] = useState("");
  const [messages, setMessages] = useState([{
    type: "send",
    message: "Bem vindo ao chatGPT!",
  }]);
  

  useEffect(() => {
    const newSocket = io("http://localhost:3000/");
    setNewSocket(newSocket);

    newSocket.on("response", (message) => {   
      setMessages( (prev) => [...prev, { type: "receive", message: message.output }] );
    });  
  }, []);

 
  const sendMessage = () => {
          
    setMessages( (prev) => [...prev, { type:"send", message: input_message}] );
      setInputMessage("");
      newSocket.emit("message", input_message);

  };

  
  return ( 
  <div className="p-5 h-screen bg-black">
    <div className="container mx-auto bg-gray-900 h-full flex flex-col">
      <div className="flex-grow p-3 flex flex-row items-end"> 
        <div className="w-full space-y-3 overflow-scroll h-[80vh]">
          {messages.map( (message, index) => (
            <ChatMessage
              key={index}
              message={message.message}
              type={message.type}
            />
          ))}
        </div>
      </div>
      <div className="h-[100px] p-3 flex justify-center items-center bg-gray-700">
        <input 
          onKeyDown={(e) =>{
            if (e.key === "Enter") {
              sendMessage();
            }
          }}

          value={input_message}
          onChange={(e) => setInputMessage(e.target.value)}

          placeholder="Escreva algo..."
          type="text" 
          className="w-full p-2 bg-transparent text-white border-white border-2 round-md outline-none" 
        />  
        <button 
          onClick={sendMessage} 
          className="bg-violet-600 px-3 py-2 rounded-md mx-2 text-white cursor-pointer">
            Enviar
        </button>
      </div>
    </div>
  </div>
  
  
  );
}

export default App;
