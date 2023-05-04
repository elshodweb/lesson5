import { Schema } from 'mongoose';

const TodosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default TodosSchema;
