import { useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [editingUser, setEditingUser] = useState(null);
    const [editingUsername, setEditingUsername] = useState('');

    const handleEditUser = (user) => {
        setEditingUser(user);
        setEditingUsername(user.username);
    };

    const handleUpdateUser = () => {
        if (editingUsername.trim() === '') return;

        const updatedUsers = users.map(user => 
            user.email === editingUser.email ? { ...user, username: editingUsername } : user
        );

        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setEditingUser(null);
        setEditingUsername('');
    };

    const handleDeleteUser = (email) => {
        const updatedUsers = users.filter(user => user.email !== email);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    return (
        <div>
            <h2 className="text-xl font-semibold border-b pb-2">Manage Users</h2>
            <ul className="mt-4 space-y-4">
                {users.map(user => (
                    <li key={user.email} className="p-4 bg-gray-50 border rounded-lg flex justify-between items-center">
                        <span className="font-bold">{user.username}</span>
                        <div>
                            <button className="text-blue-500 mr-2" onClick={() => handleEditUser(user)}>Edit</button>
                            <button className="text-red-500" onClick={() => handleDeleteUser(user.email)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {editingUser && (
                <div className="mt-4">
                    <h3 className="text-lg">Editing User: {editingUser.username}</h3>
                    <input
                        className="p-2 border border-gray-300 rounded"
                        type="text"
                        value={editingUsername}
                        onChange={(e) => setEditingUsername(e.target.value)}
                    />
                    <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleUpdateUser}>Update User</button>
                </div>
            )}
        </div>
    );
};

export default ManageUsers;
