import { Resolver,Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { CreatePetInput } from 'src/pets/dto/create-Pet.input';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
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


    @ResolveField(returns => Owner)
    owner(@Parent() pet: Pet): Promise<Owner> {
        return this.petsService.getOwner(pet.ownerId);
    }

    @Mutation(() => Pet)
     removePet(@Args("id",{type:()=> Int}) id: number) {
   
        return  this.petsService.remove(id);
    }




}
