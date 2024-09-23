import { Post } from 'src/post/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  comment: string;

  @ManyToOne(() => Post, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'posts' })
  post: Post;

  @CreateDateColumn()
  UpdatedAt: Date;

  @CreateDateColumn()
  CreatedAt: Date;
}
