import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
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

    createHouse() {
        debugger
        event.preventDefault()
        const form = event.target
        const houseData = getFormData(form)
        housesService.createHouse(houseData)
        // @ts-ignore
        form.reset()

    }
}