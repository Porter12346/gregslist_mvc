import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
    constructor() {
        console.log("houses service init")
    }

    createHouse(houseData) {
        let houses = AppState.houses
        let house = new House(houseData)
        houses.push(house)
    }
}

export const housesService = new HousesService