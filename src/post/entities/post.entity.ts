import { Feedback } from 'src/feedback/entities/feedback.entity';
import { Rating } from 'src/rating/entities/rating.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  body: string;

  // file: z
  //   .instanceof(File)
  //   .refine((file) => (file ? file : null); 'publication_file_required_error')
  //   .nullable();

  @Column({ type: 'varchar' })
  thumbnail?: string;

  @Column({ type: 'boolean', default: false })
  editable?: boolean;

  @OneToMany(() => Rating, (rating) => rating.post)
  ratings: Rating[];

  @OneToMany(() => Tag, (tag) => tag.post)
  tags: Tag[];

  @OneToMany(() => Feedback, (feedback) => feedback.post)
  feedbacks: Feedback[];

  @CreateDateColumn()
  CreatedAt?: Date;

  @CreateDateColumn()
  UpdatedAt?: Date;
}
