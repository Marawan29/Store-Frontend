export class Product {
  id: number;
  name: string;
  description: string;
  url: string;
  price: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.url = '';
    this.price = 0;
  }
}
