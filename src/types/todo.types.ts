import { Document } from 'mongoose';

interface Todo extends Document {
  id: string;
  title: string;
  text: string;
  photo: string;
  created_at: Date;
  updated_at: Date;
}

export default Todo;
