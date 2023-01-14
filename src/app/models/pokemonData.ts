export type PokemonData = {
    name:string
    id:number
    sprites: {
        front_default: String
    }
    types:{
        slot: number
        type: {
            name:string
            url: string
        }
    }[]

}