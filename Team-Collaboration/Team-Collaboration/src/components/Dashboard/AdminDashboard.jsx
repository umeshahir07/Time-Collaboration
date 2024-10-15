import ManageUsers from './ManageUsers';
import ManageTasks from './ManageTasks';
import ChatBox from '../Messaging/ChatBox';

const AdminDashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div className="mt-6">
                <ManageUsers />
            </div>
            <div className="mt-6">
                <ManageTasks />
            </div>
            <div className="mt-6">
                <h2 className="text-xl">Chat with Users</h2>
                <ChatBox />
            </div>
        </div>
    );
};

export default AdminDashboard;
