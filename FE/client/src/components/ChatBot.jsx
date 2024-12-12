import { useState } from "react";
import axios from 'axios';
// import load from './loading.gif';

const ChatBot =({ onClose }) => {
    const [chatInput, setChatInput] = useState("");
    const [chatOutput, setChatOutput] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const OnSubmitHandeler = async (e) => {
      e.preventDefault();
    
      try {
        // Use POST request and send the chatInput in the request body
        setIsloading(true);
        const response = await axios.post("http://localhost:5000/api/chat_bot/", { userQuery: chatInput });
        setIsloading(false);
        console.log(response);
    
        setChatOutput(response.data.response);
      } catch (error) {
        console.error("Error during API request:", error);
      }
    };
    return (
      <div
        className="h-96 bg-teal-600 text-white rounded-lg shadow-lg 
                   flex flex-col transition-transform duration-500 ease-in-out transform translate-y-0"
      >
        {/* Header */}
        <div className="bg-teal-700 px-4 py-2 rounded-t-lg flex justify-between items-center">
          <h1 className="font-bold text-lg">AlumnAI</h1>
          <button
            className="text-white text-lg"
            onClick={onClose} // Trigger close animation
          >
            &times;
          </button>
        </div>
  
        {/* Chat body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white text-black">
          {isLoading && "loading..."}
          {chatOutput}
        </div>
  
        {/* Input box */}
        <div className="p-4 text-black bg-gray-100 rounded-b-lg flex items-center">
          <input
            type="text"
            onChange={(e)=>{setChatInput(e.target.value)}}
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Type a message here..."
          />
          <button onClick={OnSubmitHandeler} className="ml-2 bg-teal-500 text-white p-2 rounded-md" type="submit">
            &#9658;
          </button>
        </div>
      </div>
    );
  };
  
  export default ChatBot;
  