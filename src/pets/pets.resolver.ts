import { Resolver,Query, Mutation, Args, Int } from '@nestjs/graphql';
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

    @Query(returns => Pet)
    async getPet(@Args("id",{type:()=> Int}) id: number): Promise<any> {
        return this.petsService.findOne(id);
    }



    @Mutation(returns => Pet)
    async createPet(@Args("createPetInput") createPetInput:CreatePetInput): Promise<any> {
        return this.petsService.createPet(createPetInput);
    }


}
