import { generateId } from "../utils/GenerateId.js"

export class House {

    constructor(houseData) {
        this.id = generateId()
        this.year = houseData.year
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.sqft = houseData.sqft
        this.price = houseData.price
        this.description = houseData.description
        this.imgURL = houseData.imgUrl
    }

    get HTMLTemplate() {
        /*HTML*/
        return (`<div class="col-12 col-md-4">
            <div class="mb-2 bg-secondary border border-dark border-3 p-0 shadow text-center rounded">
            <img src=${this.imgURL}
                alt="House :D" class="img-fluid rounded">
            <h1>$${this.price}</h1>
            <h2>${this.bedrooms} bedroom, ${this.bathrooms} bath</h2>
            <h3>${this.sqft} sqft property</h3>
            <h4>built in ${this.year}</h4>
            <p>${this.description}</p>
            <button class="btn btn-primary mb-1">BUY NOW</button>
        </div>
        </div>`)
    }
}
