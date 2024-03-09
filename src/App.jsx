//import { useState } from 'react'

function ChatMessage({ message, type }){
  return(
    <div className={`flex w-full ${
      type == "send" ? "justfy-start" : "justify-end"}`}>
      
      {type == "send" ? (
        <div className="bg-violet-500 p-2 rounded-b-lg rounded-tr-lg text-white">`{message}</div>
      ) : (
        <div className="bg-white p-2 rounded-b-lg rounded-tl-lg text-black">{message}</div>
      )}

    </div>

  )


}


function App() {
 




  return ( 
  <div className="p-5 h-screen bg-black">
    <div className="container mx-auto bg-gray-900 h-full flex flex-col">
      <div className="flex-grow p-3 flex flex-row items-end"> 
        <div className="w-full">
          <ChatMessage type={"recieve"} message={"Opa, beleza?"} />
          <ChatMessage type={"send"} message={"Opa, beleza?"} />
          <ChatMessage type={"recieve"} message={"Opa, beleza?"} />
        </div>
      </div>
      <div className="h-[100px] p-3 flex justify-center items-center bg-gray-700">
        <input 
        placeholder="Escreva algo..."
        type="text" 
        className="w-full p-2 bg-transparent text-white border-white border-2 round-md outline-none" />  
        <button className="bg-violet-600 px-3 py-2 rounded-md mx-2 text-white cursor-pointer">Enviar</button>
      </div>
    </div>
  </div>
  
  
  );
}

export default App;
