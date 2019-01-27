import { observable, action } from "mobx";

class Item {
    @observable name
    @observable price
    @observable quantity
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}

class Inventory {
    @observable items = []

    @action addItem = (name) => {
        if (this.items.some(item => item.name === name)) {
            let item = this.items.find(i => i.name === name)
            item.quantity++
        } else {
            let newItem = new Item(name, 0, 1)
            this.items.push(newItem)
        }
    }
    @action buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        item.quantity === 0 ?
            this.items.splice(this.items.indexOf(item), 1) :
            item.quantity--
    }
    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
}
let inventory = new Inventory()

export default inventory