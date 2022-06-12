import { Injectable} from "@nestjs/common";
import fetch from "cross-fetch";

@Injectable()
export class CountryService {
    async findAll(): Promise<any> {
        const response = await fetch('https://app.requestly.io/delay/1000/https://pokeapi.co/api/v2/pokemon/ditto')
        return response.json()
    }
}