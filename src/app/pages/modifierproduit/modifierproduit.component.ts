import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {
  produit: any;
  produitForm: FormGroup;
  constructor(
    private reclamationService: ProductService,
    private router:Router,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModifierproduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.produit = data.produit;
    console.log(this.produit)
    this.produitForm = this.formBuilder.group({
      idProduit:[this.data.produit.idProduit, Validators.required],
      libelle: [this.produit. libelle, Validators.required],
      description: [this.produit. description, Validators.required],
      prixHC: [this.produit.prixHC, Validators.required],
      prixHT: [this.produit.prixHT, Validators.required],
      tva: [this.produit.tva, Validators.required],
      marque: [this.produit. marque, Validators.required],
      etat: [this.produit.etat, Validators.required],
      livraisonGratuite: [this.produit.livraisonGratuite, Validators.required],
  }); }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.produitForm = this.formBuilder.group({
      idProduit:[this.data.produit.idProduit, Validators.required],
      libelle: [this.produit. libelle, Validators.required],
      description: [this.produit. description, Validators.required],
      prixHC: [this.produit.prixHC, Validators.required],
      prixHT: [this.produit.prixHT, Validators.required],
      tva: [this.produit.tva, Validators.required],
      marque: [this.produit. marque, Validators.required],
      etat: [this.produit.etat, Validators.required],
      livraisonGratuite: [this.produit.livraisonGratuite, Validators.required],
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  @Output() update = new EventEmitter<any>();
  onSubmit() {
    if (this. produitForm.valid) {

      const produitData = this.produitForm.value;
      this.updateReclamation(this.produit.idProduit, produitData);


    }
  }
  error:string='';
  updateReclamation(id: number, reclamationData: any) {
    this.reclamationService.updateProduit(id, reclamationData)
      .subscribe({
        next: (u) => {
this.error="";
          this.data.produit.libelle = this.produit.libelle;
          this.data.produit.description = this.produit.description;
          this.data.produit.marque = this.produit.marque;
          const updatedproduit = this.produitForm.value;
          this.update.emit(updatedproduit);
          Swal.fire({
            icon: 'success',
            title: 'modifier',
            text: 'Produit modifié avec succès',
          });
          this.dialogRef.close();
        },
        error: (error) => {
          if (error.status === 400) {

            this.error = error.error;
            console.error(this.error);
          } else {

            this.error = 'Erreur lors de l\'ajout de produit';
          }

        }
      });

}
}
