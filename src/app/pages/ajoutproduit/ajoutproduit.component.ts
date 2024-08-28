import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {Produit} from "../../models/produits";
@Component({
  selector: 'app-ajoutreclamation',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.scss']
})
export class AjoutproduitComponent {
  produitForm: FormGroup;
  produit: Produit = new Produit();
  message: string = '';
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private produitService: ProductService,
    private router: Router
  ) {
    this.produitForm = this.fb.group({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      prixHC: [0, Validators.required],
      prixHT: [0, Validators.required],
     tva: ['', Validators.required],
      marque: ['', Validators.required],
      etat: [0, Validators.required],
      livraisonGratuite: [0, Validators.required],
      creationDate: [new Date()]
    });
  }

  onSubmit(): void {
    if (this.produitForm.valid) {
      this.produit = this.produitForm.value;
 console.log(this.produit)
      this.produitService.createProduit(this.produit).subscribe({
        next: () => {
          this.error = '';
          this.message = 'Produit ajouté avec succès';
          Swal.fire({
            icon: 'success',
            title: 'Ajout',
            text: 'Produit ajouté avec succès',
          });

          setTimeout(() => {
            this.router.navigate(['acceuil/produits']);
          }, 1000);
        },
        error: (error) => {
          if (error.status === 400) {
            this.error = error.error;
          } else {
            this.error = 'Erreur lors de l\'ajout du produit';
          }
          console.error(error);
        }
      });
    }
  }
}
