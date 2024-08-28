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
  createProduit(produit: Produit , image:any ){
    const formData = new FormData();
    formData.append('libelle', produit.libelle|| '');
    formData.append('description', produit.description|| '');
    formData.append('prixHC', produit.prixHC!= null ? produit.prixHC.toString() : '');
    formData.append('prixHT', produit.prixHC!= null ? produit.prixHT.toString() : '');
    formData.append('TVA', produit.tva|| '');
    formData.append('marque', produit.marque|| '');
    formData.append('etat', produit.etat!= null ? produit.etat.toString() : '');
    if ( produit.creationDate !== undefined) {
      formData.append('creationDate', produit.creationDate.toString());
    }// Ensure proper date format
    formData.append('livraisonGratuite', produit.livraisonGratuite!= null ? produit.livraisonGratuite.toString() : '');
    formData.append('picture', image);
    return this.http.post<Produit>(`${this.baseUrl}C`, formData);
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
