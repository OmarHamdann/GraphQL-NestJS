import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetInput } from 'src/dto/create-Pet.input';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {

    constructor(@InjectRepository(Pet) private readonly  petRepository: Repository<Pet>) {}
    
    async findAll(): Promise<Pet[]> {
        return await this.petRepository.find(); //select * from pet
    }

    async findOne(id: number): Promise<Pet> {
        return await this.petRepository.findOneOrFail({where: {id}}); //select * from pet where id = :id
    }


    async createPet(createPetInput:CreatePetInput): Promise<Pet> {
        const pet = this.petRepository.create(createPetInput); //newPet = new Pet ();new.name =new.type

        return await this.petRepository.save(pet);//insert into pet (name, type) values (:name, :type)
    }

    

}
