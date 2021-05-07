import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  liste : boolean;
  ajouter : boolean;
  produit : Product;

  constructor() { 
    this.liste = true;
    this.ajouter = false;

  }

  ngOnInit(): void {
  }

  toggleAjouter(){
    this.liste = false;
    this.ajouter = true;
  }

  toggleListe(){
    this.ajouter = false;
    this.liste = true;
  }

}
