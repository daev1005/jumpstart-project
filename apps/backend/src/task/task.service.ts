import { Task } from './types/task.entity';
import { TaskCategory } from './types/category';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { UpdateTaskDTO } from './dtos/update-task.dto';
import { Label } from '../label/types/label.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, DeleteResult } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
        @InjectRepository(Label)
        private readonly labelRepository: Repository<Label>,
    ) {}

    // Saves a new task to the 'tasks' table using the given CreateTaskDTO
    // should throw a BadRequestException if the title field is null
    async createTask(createTaskDto: CreateTaskDTO): Promise<Task> {
        if (!createTaskDto.title || !createTaskDto.description || !createTaskDto.category) {
            throw new BadRequestException('Title, description, and category are required');
        }
        const newtask = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(newtask);
    }

    // Updates a task by its ID using the given UpdateTaskDTO
    async updateTask(id: number, updateTaskDto: UpdateTaskDTO): Promise<Task> {
        // should throw a BadRequestException if the task with the given ID does not exist
        // should throw a BadRequestException if none of the title, description, or due date is provided in the given DTO
        // should throw a BadRequestException if the title field is null
    }

    // Retrieves all tasks from the 'tasks' table
    async getAllTasks() {
    }

    // Deletes a task by its ID
    async deleteTask(id: number): Promise<DeleteResult> {
        // should throw a BadRequestException if the task with the given ID does not exist
    }

    // Update a task's category by its ID
    async updateTaskCategory(id: number, newCategory: TaskCategory) {
        // should throw a BadRequestException if the task with the given ID does not exist
    }

    // Adds labels to a task by its ID using the given array of label IDs
    async addTaskLabels(taskId: number, labelIds: number[]) {
        // should throw a BadRequestException if the task with the given ID does not exist
        // should throw a BadRequestException if any of the labels with the given IDs do not exist
    }

    // Removes labels from a task by its ID using the given array of label IDs
    async removeTaskLabels(taskId: number, labelIds: number[]) {
        // should throw a BadRequestException if the task with the given ID does not exist
        // should throw a BadRequestException if any of the labels with the given IDs do not exist
    }

    // Get a task by its ID
    async getTaskById(id: number): Promise<Task> {
        // should throw a BadRequestException if the task with the given ID does not exist
        const task = await this.taskRepository.findOne({
            where: { id },
            relations: ['labels'],
        });
        if (!task) {
            throw new BadRequestException(`Task with ID ${id} does not exist`);
        }

        return task;
    }
}
