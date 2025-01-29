import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

interface AddTaskProps {
    onAdd: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleAdd = () => {
        if (title.trim() !== '') {
            onAdd(title);
            setTitle('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
                onClick={handleAdd}
                className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
            >
                <IoIosAdd className='text-xl' />
            </button>
        </div>
    );
};

export default AddTask;
