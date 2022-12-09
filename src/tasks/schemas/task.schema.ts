import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean,
});

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type TaskDocument = HydratedDocument<Task>;

// @Schema({ collection: 'tasks' })
// export class Task {
//   @Prop()
//   title: string;

//   @Prop()
//   description: string;

//   @Prop()
//   done: boolean;
// }

// export const TaskSchema = SchemaFactory.createForClass(Task);
