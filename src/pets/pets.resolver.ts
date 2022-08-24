import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePetInput } from 'src/dto/create-Pet.input';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver()
export class PetsResolver {

    constructor(private petsService:PetsService) {}

    @Query(returns => [Pet])
    async pets(): Promise<any> {
        return this.petsService.findAll();
    }


    @Mutation(returns => Pet)
    async createPet(@Args("createPetInput") createPetInput:CreatePetInput): Promise<any> {
        return this.petsService.createPet(createPetInput);
    }


}
