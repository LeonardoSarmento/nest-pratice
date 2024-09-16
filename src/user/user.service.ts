import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUserWelcome(): string {
    return 'Welcome User';
  }

  throwException() {
    throw new NotFoundException('User not found');
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) this.throwException();

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email já cadastrado');
      }
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) this.throwException();
    try {
      await this.userRepository.update({ id }, updateUserDto);

      return this.userRepository.findOneBy({ id });
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email já cadastrado');
      }
      throw error;
    }
  }

  async remove(id: number): Promise<{ message: string; data: User }> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) this.throwException();

    user.remove();

    return { message: `User of Id: ${id} was removed`, data: user };
  }
}
