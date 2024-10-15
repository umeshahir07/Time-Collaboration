import { useState } from 'react';
import ChatBox from '../Messaging/ChatBox';

const UserDashboard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Complete React project', status: 'In Progress' },
        { id: 2, title: 'Submit assignment', status: 'Pending' },
        { id: 3, title: 'Grocery shopping', status: 'Completed' },
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [editingTaskTitle, setEditingTaskTitle] = useState('');

    const handleAddTask = () => {
        if (newTaskTitle.trim() === '') return;
        const newTask = {
            id: tasks.length + 1,
            title: newTaskTitle,
            status: 'Pending',
        };
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setEditingTaskTitle(task.title);
    };

    const handleUpdateTask = () => {
        if (editingTaskTitle.trim() === '') return;
        setTasks(tasks.map(task => (task.id === editingTask.id ? { ...task, title: editingTaskTitle } : task)));
        setEditingTask(null);
        setEditingTaskTitle('');
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const recentActivities = [
        { id: 1, message: 'Added a new task: Complete React project', date: '2024-10-15' },
        { id: 2, message: 'Updated task: Grocery shopping to Completed', date: '2024-10-14' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-semibold mb-6">User Dashboard</h1>
                
                <div className="mb-6">
                    <input
                        className="p-2 border border-gray-300 rounded"
                        type="text"
                        placeholder="Add new task"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <button
                        className="ml-2 p-2 bg-blue-500 text-white rounded"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Your Tasks</h2>
                    <ul className="mt-4 space-y-4">
                        {tasks.map(task => (
                            <li key={task.id} className="p-4 bg-gray-50 border rounded-lg flex justify-between items-center">
                                <span className="font-bold text-lg">{task.title}</span>
                                <span className={`text-sm font-semibold ${task.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                                    {task.status}
                                </span>
                                <div>
                                    <button
                                        className="text-blue-500 mr-2"
                                        onClick={() => handleEditTask(task)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleDeleteTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {editingTask && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold border-b pb-2">Editing Task</h2>
                        <input
                            className="p-2 border border-gray-300 rounded"
                            type="text"
                            value={editingTaskTitle}
                            onChange={(e) => setEditingTaskTitle(e.target.value)}
                        />
                        <button
                            className="ml-2 p-2 bg-blue-500 text-white rounded"
                            onClick={handleUpdateTask}
                        >
                            Update Task
                        </button>
                    </div>
                )}

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold border-b pb-2">Recent Activities</h2>
                    <ul className="mt-4 space-y-4">
                        {recentActivities.map(activity => (
                            <li key={activity.id} className="p-4 bg-gray-50 border rounded-lg">
                                <span>{activity.message}</span> <span className="text-gray-500 text-sm">({activity.date})</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold border-b pb-2">Chat</h2>
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
