import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly companies: string;

  @IsDateString()
  @IsNotEmpty()
  readonly birthdate: Date;
}
