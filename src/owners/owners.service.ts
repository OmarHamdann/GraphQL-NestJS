import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}

  async create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return await this.ownerRepository.save(newOwner);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }

  async findOne(id: number): Promise<Owner> {
    return await this.ownerRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return await this.ownerRepository.update(id, updateOwnerInput);
  }

  async remove(id: number): Promise<any> {
    return await this.ownerRepository.delete(id);
  }
}
