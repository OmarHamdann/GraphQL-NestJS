import { Resolver,Query } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver()
export class PetsResolver {

    constructor(private petsService:PetsService) {}

    @Query(returns => [Pet])
    async pets(): Promise<any> {
        return this.petsService.findAll();
    }

}
