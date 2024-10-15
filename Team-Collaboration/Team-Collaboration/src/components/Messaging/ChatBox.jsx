import  { useState } from 'react';

const ChatBox = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                text: message,
                sender: 'You',
                timestamp: new Date().toLocaleTimeString(),
            };

            setChatHistory([...chatHistory, newMessage]);
            setMessage(''); 
        }
    };

    return (
        <div className="chatbox bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="chat-history bg-white p-4 mb-4 h-64 overflow-y-auto border rounded">
                {chatHistory.map((msg, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-semibold">{msg.sender}</span> at {msg.timestamp}:
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-l"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-r"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
