import React from 'react';
import { Task } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default TaskList;
