import { Post } from 'src/post/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  label: string;

  @Column({ type: 'varchar', length: 50 })
  value: string;

  @Column({ type: 'boolean' })
  disable?: boolean;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post' })
  post: Post;

  @CreateDateColumn()
  CreatedAt: Date;

  @CreateDateColumn()
  UpdatedAt: Date;
}
