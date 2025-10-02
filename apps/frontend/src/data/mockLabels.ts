import { Label } from '../types/types';
import { mockTasks } from './mockTasks';

export const mockLabels: Label[] = [
    {
        id: 1,
        name: 'Urgent',
        color: '#FF0000',
        tasks: [
            mockTasks[0],
            mockTasks[1],
        ],
    },
    {
        id: 2,
        name: 'Feature',
        color: '#00BFFF',
        tasks: [
            mockTasks[3],
            mockTasks[5],
            mockTasks[2],
        ],
    },
    {
        id: 3,
        name: 'Bug',
        color: '#FFA500',
        tasks: [
            mockTasks[4],
            mockTasks[1],
        ],
    },
    {
        id: 4,
        name: 'Documentation',
        color: '#32CD32',
        tasks: [
            mockTasks[0],
        ],
    },
];
