import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
    constructor() {
        AppState.on('houses', this.drawHouses)
        console.log('houses controller init')
        this.drawHouses()
    }

    drawHouses() {
        console.log('Drawing Houses')
        let HTMLInject = ''
        AppState.houses.forEach((house) => {
            HTMLInject += house.HTMLTemplate
        });
        setHTML('houseCardSection', HTMLInject)
    }
}