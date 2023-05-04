import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import * as Todos from '../models/todos.schema';
import { Model } from 'mongoose';
import Todo from 'src/types/todo.types';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly Todos: Model<Todo>) {}

  async create(
    createTodoDto: CreateTodoDto,
    file: Express.Multer.File,
  ) /* : Promise<Todo[]> */ {
    // const todos = await this.Todos.find();

    console.log(file);

    // return todos;
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
