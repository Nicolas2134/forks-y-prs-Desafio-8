import * as products from "./products.json";

class Product {
	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	id: number;
	name: string;
	price: number;

	static findProductsBelow(precioBase: number) {
		const resultado = products.filter((p) => {
			return p.price < precioBase;
		});
		return resultado;
	}
}

class User {
	constructor(name: string) {
		this.name = name;
	}
	name: string;
	products: Product[] = [];
	addProduct(newProduct: Product) {
		this.products.push(newProduct);
	}
	addProducts(newProducts: Product[]) {
		return (this.products = this.products.concat(newProducts));
	}
}

export { User, Product };
