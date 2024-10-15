import { Link, useNavigate } from "react-router-dom"; 
const Header = () => {
    const username = localStorage.getItem('username'); 
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('username'); 
        localStorage.removeItem('loggedInUser'); 
        navigate('/login');
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-200">
            {username ? (
                <>
                   
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-2">
                            {username.charAt(0).toUpperCase()} 
                        </div>
                        <p>{username}</p>
                    </div>
                    <div className="flex gap-3 font-bold text-xl me-5">
                        <Link to={"/admin"}><div>Admin</div></Link>
                        <Link to={"/dashboard"}><div>User</div></Link>
                    </div>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
};

export default Header;
