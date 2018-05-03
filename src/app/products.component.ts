import {Component, OnInit, OnDestroy} from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

 @Component({
     selector: 'app-products',
     templateUrl: './products.component.html'
 })
 export class ProductsComponent implements OnInit, OnDestroy {
    productName;
    isDisabled = false;
    products= ['A Book', 'A Car'];
    private productsSubscription: Subscription;


     //when ProductsComponent is created, this constructor runs.
     //When it does, we are saying argument of type ProductsService should be given to it.
     //Angular has to know what that is in order to give it
     //So we add it to Providers in app.module.ts
     //adding "private" or "public" in front of productsService will also bind it as a
     //property of the class and not simply an argument to the constructor
     constructor(private productsService: ProductsService){

         setTimeout(()=> {
            //  this.productName = 'A Tree';
            this.isDisabled = false;
            
         }, 3000);
        
     }

    //intialization doen by angular at start fo the app
    //safe and good practice
     ngOnInit(){
        this.products = this.productsService.getProducts();
        //this will keep us informed of changes continuously
        this.productsSubscription = this.productsService.productsUpdated.subscribe(()=>{
            this.products = this.productsService.getProducts();
        }
       );
     }

     ngOnDestroy(){
        this.productsSubscription.unsubscribe();
     }

     onAddProduct(form){
         //this.products.push(this.productName);
         if(form.valid){
            // this.products.push(form.value.productName);
            this.productsService.addProduct(form.value.productName);
         }
     }

     onRemoveProduct(productName: string){
        this.products = this.products.filter(p => p !== productName);
     }
 }