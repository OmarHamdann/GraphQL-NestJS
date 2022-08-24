import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetInput } from 'src/dto/create-Pet.input';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
   // private readonly pets: Pet[];
    
    // constructor() {
    //     this.pets = [
    //     {
    //         id: 1,
    //         name: 'Max',
    //         type: 'dog',
    //     },
    //     {
    //         id: 2,
    //         name: 'Tom',
    //         type: 'cat',
    //     },
    //     {
    //         id: 3,
    //         name: 'Simba',
    //         type: 'cat',
    //     },
    //     ];
    // }

    constructor(@InjectRepository(Pet) private readonly  petRepository: Repository<Pet>) {}
    
    async findAll(): Promise<Pet[]> {
        return await this.petRepository.find(); //select * from pet
    }

    async createPet(createPetInput:CreatePetInput): Promise<Pet> {
        const pet = this.petRepository.create(createPetInput); //newPet = new Pet ();new.name =new.type

        return await this.petRepository.save(pet);//insert into pet (name, type) values (:name, :type)
    }

    

}
