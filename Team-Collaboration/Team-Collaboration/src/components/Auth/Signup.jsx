
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const success = registerUser(username, email, password); 
        if (success) {
            localStorage.setItem('username', username);
            navigate('/login');
        } else {
            alert('Signup failed, email already exists');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 bg-white p-6 rounded shadow-md">
                <h2 className="text-xl mb-4">Signup</h2>
                <form onSubmit={handleSignup}>
                    <input
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="w-full p-2 bg-blue-500 text-white rounded"
                        type="submit"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
