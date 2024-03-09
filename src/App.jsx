//import { useState } from 'react'


function App() {
 

  return ( 
  
  <div className="p-5 h-screen bg-black">
    <div className="container mx-auto bg-gray-900 h-full flex flex-col">
      <div className="flex-grow"> </div>
      <div className="h-[100px] p-3 flex justify-center items-center bg-gray-700">
        <input 
        placeholder="Escreva algo..."
        type="text" 
        className="w-full p-2 bg-transparente text-white border-white border-2 round-md outline-none" />  
        <button className="bg-violet-600 px-3 py-2 rounded-md mx-2 text-white cursor-pointer">Enviar</button>
      </div>
    </div>
  </div>
  
  
  );
}

export default App;
