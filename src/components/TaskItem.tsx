import React, { useState } from 'react';
import { Task } from '../types/task';
import { FiTrash2, FiEdit2, FiCheck, FiX } from 'react-icons/fi';

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleEditSave = () => {
        if (newTitle.trim() !== '') {
            onEdit(task.id, newTitle.trim());
            setIsEditing(false);
        }
    };

    const handleCancelEdit = () => {
        setNewTitle(task.title);
        setIsEditing(false);
    };

    return (
        <div
            className={`flex justify-between items-center p-4 rounded-lg shadow-md mb-3 transition-all ${task.completed ? 'bg-green-300/50 border-green-400' : 'bg-gray-50'
                }`}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleEditSave();
                        if (e.key === 'Escape') handleCancelEdit();
                    }}
                    className="flex-1 px-2 py-2 mr-2 border border-blue-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
            ) : (
                <div
                    onClick={() => onToggle(task.id)}
                    className={`cursor-pointer flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                        }`}
                >
                    {task.title}
                </div>
            )}
            <div className="flex items-center gap-2">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleEditSave}
                            className="text-green-500 hover:text-green-600 cursor-pointer"
                        >
                            <FiCheck size={20} />
                        </button>
                        <button
                            onClick={handleCancelEdit}
                            className="text-gray-500 hover:text-gray-600 cursor-pointer"
                        >
                            <FiX size={20} />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        >
                            <FiEdit2 size={20} />
                        </button>
                        <button
                            onClick={() => onDelete(task.id)}
                            className="text-red-500 hover:text-red-600 cursor-pointer"
                        >
                            <FiTrash2 size={20} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskItem;
