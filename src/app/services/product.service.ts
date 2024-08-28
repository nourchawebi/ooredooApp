import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {Produit} from "../models/produits";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient, private router: Router

  )  { }
  private baseUrl : string ='http://localhost:8082/Produits'

  // Get all products
  getAllProduits() {
    return this.http.get<Produit[]>(this.baseUrl);
  }
  // Get a product by ID
  getProduitById(id: number) {
    return this.http.get<Produit>(`${this.baseUrl}/${id}`);
  }

  // Create a new product
  createProduit(produit: Produit){
    return this.http.post<Produit>(`${this.baseUrl}C`, produit);
  }

  // Update an existing product
  updateProduit(id: number, produit: Produit){
    return this.http.put<Produit>(`${this.baseUrl}U/${id}`, produit);
  }

  // Delete a product by ID
  deleteProduit(id: number) {
    return this.http.delete<void>(`${this.baseUrl}D/${id}`);
  }
















}
