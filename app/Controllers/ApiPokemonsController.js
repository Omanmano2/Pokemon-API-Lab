
import { apiPokemonsService } from "../Services/ApiPokemonsService.js";

async function _getAllPokemon(){
  try {
    await apiPokemonsService.getAllApiPokemon()
  } catch (error) {
    console.error(error)
  }
}
export class ApiPokemonsController{
  constructor(){
    _getAllPokemon()
  }
}