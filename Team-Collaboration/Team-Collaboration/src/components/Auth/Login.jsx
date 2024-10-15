import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const loggedInUser = await loginUser(email, password); 

        if (loggedInUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser)); 
            localStorage.setItem('username', loggedInUser.username); 

            if (loggedInUser.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/dashboard');
            }
            window.location.reload();
        } else {
            alert('Invalid credentials'); 
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 bg-white p-6 rounded shadow-md">
                <h2 className="text-xl mb-4">Login</h2>
                <form onSubmit={handleLogin}>
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
                        Login
                    </button>
                    <Link to="/signup">
                        <p className="text-blue-600 mt-4">You don't have an account? Sign up here.</p>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
