import { useState } from 'react';

const ManageTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
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
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        setNewTaskTitle('');
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setEditingTaskTitle(task.title);
    };

    const handleUpdateTask = () => {
        if (editingTaskTitle.trim() === '') return;

        const updatedTasks = tasks.map(task => 
            task.id === editingTask.id ? { ...task, title: editingTaskTitle } : task
        );

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setEditingTask(null);
        setEditingTaskTitle('');
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div>
            <h2 className="text-xl font-semibold border-b pb-2">Manage Tasks</h2>
            <div className="mb-4">
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Add new task"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleAddTask}>Add Task</button>
            </div>
            <ul className="mt-4 space-y-4">
                {tasks.map(task => (
                    <li key={task.id} className="p-4 bg-gray-50 border rounded-lg flex justify-between items-center">
                        <span className="font-bold">{task.title}</span>
                        <div>
                            <button className="text-blue-500 mr-2" onClick={() => handleEditTask(task)}>Edit</button>
                            <button className="text-red-500" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {editingTask && (
                <div className="mt-4">
                    <h3 className="text-lg">Editing Task: {editingTask.title}</h3>
                    <input
                        className="p-2 border border-gray-300 rounded"
                        type="text"
                        value={editingTaskTitle}
                        onChange={(e) => setEditingTaskTitle(e.target.value)}
                    />
                    <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleUpdateTask}>Update Task</button>
                </div>
            )}
        </div>
    );
};

export default ManageTasks;
