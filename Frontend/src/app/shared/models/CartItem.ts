import {Food} from "./Food";

export class CartItem{
    constructor(food:Food){

    }
    food!:Food;
    quantity:number =1;
    price: number =this.food.price;
}