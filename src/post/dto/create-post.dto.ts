import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'publication_title_required_error' })
  @MinLength(1, { message: 'publication_title_min' })
  title: string;

  @IsNotEmpty({ message: 'publication_description_required_error' })
  @MinLength(1, { message: 'publication_description_min' })
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'publication_body_required_error' })
  @MinLength(1, { message: 'publication_body_min' })
  body: string;

  // file: z
  //   .instanceof(File)
  //   .refine((file) => (file ? file : null); 'publication_file_required_error')
  //   .nullable();

  @IsString()
  @IsOptional()
  thumbnail: string;
}
