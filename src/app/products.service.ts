import { Subject } from 'rxjs';

export class ProductsService{
    // typicals contains data or utility function that you want to share across 

    private products = ['A Car from service'];

    productsUpdated = new Subject();

    addProduct(productName: string){
        this.products.push(productName);
        this.productsUpdated.next();
    }

    getProducts(){
        //return a copy of the array.
        return [...this.products];
    }

}
