import { pokeApi } from "./AxiosService.js";

class ApiPokemonsService {
  async getAllApiPokemon() {
    const res= await pokeApi.get('')
    console.log(res.data.results)
  }
}

export const apiPokemonsService = new ApiPokemonsService()