import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
    private readonly pets: Pet[];
    
    constructor() {
        this.pets = [
        {
            id: 1,
            name: 'Max',
            type: 'dog',
        },
        {
            id: 2,
            name: 'Tom',
            type: 'cat',
        },
        {
            id: 3,
            name: 'Simba',
            type: 'cat',
        },
        ];
    }
    
    async findAll(): Promise<Pet[]> {
        return Promise.resolve(this.pets);
    }
    
    findOne(id: number): Pet {
        return this.pets.find(pet => pet.id === id);
    }
}
