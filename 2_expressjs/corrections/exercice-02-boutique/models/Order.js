export default class Order {
    constructor(id, customer, products) {
        this.id = id;
        this.client = customer;
        this.products = products;
    }
}