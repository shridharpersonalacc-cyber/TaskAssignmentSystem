export interface TaskModel {
    id: string;
    title: string;
    desc: string;
    status: 'Todo' | 'InProgress' | 'Done';
    priority: 'Low' | 'Medium' | 'High';
    dueDate: Date;
}