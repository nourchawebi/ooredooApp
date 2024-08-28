import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModifierproduitComponent} from "../modifierproduit/modifierproduit.component";
import {PageEvent} from "@angular/material/paginator";
import {ProductService} from "../../services/product.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  constructor(private fb: FormBuilder,private reclamationService: ProductService,private router:Router,public dialog: MatDialog) {}
  ngOnInit() {

    this.getproducts();

  }
  message:string ='';
  public produits:any = [];
  getproducts(){

    this.reclamationService.getAllProduits().subscribe(
      {
        next:(response)=>{
                 this.message="success"
          this.produits =
          this.filteredproduits = response;
                 console.log(response)
          this.paginateReclamations();


        }
      }
    )

  };
  Ondeletereclamation(id: number | undefined){
    if(id!= null){
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.reclamationService.deleteProduit(id).subscribe(
            data => {
              Swal.fire('Supprimé!', 'Votre fichier a été supprimé.', 'success');
              this.filteredproduits = this.produits.filter((reclamation: any) => reclamation.idProduit !== id);
              this.getproducts();

            },
            error => {
              console.error('Erreur lors de la suppression:', error);
            }
          );

        }
      });
    }
    this.paginateReclamations();
    }


  filteredproduits:any = [];
  selectedStatus = '';
  filterReclamations() {
    if (this.selectedStatus) {
      this.filteredproduits = this.produits.filter((reclamation: any) => reclamation.status === this.selectedStatus);
    } else {
      this.filteredproduits = this.produits;
    }
    this.paginateReclamations();
  }


  selectedReclamation: any;

  openDialog(reclamation: any) {
    this.selectedReclamation = reclamation;
    const dialogRef = this.dialog.open(ModifierproduitComponent, {
      width: 'auto', // specify width as per your requirement
      data: {produit: reclamation } // pass data to your dialog component if needed
    });
    dialogRef.componentInstance.update.subscribe((updatedReclamation: any) => {
      // Find the index of the updated reclamation in the array
      const index = this.produits.findIndex((item: any) => item.idProduit === updatedReclamation.idProduit);
      if (index !== -1) {
        // Update the corresponding reclamation in the array
        this.produits[index].libelle = updatedReclamation.libelle;
        this.produits[index].description = updatedReclamation.description;
        this.produits[index].marque= updatedReclamation.marque;

        // Reapply filtering logic if filteredReclamations is derived from reclamations

          this.filteredproduits = this.produits;


      }
    });
    this.paginateReclamations();
  }
  searchKeyword: string = '';


  paginatedReclamations: any = [];
  pageSize = 3;
  currentPage = 0;

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.paginateReclamations();
  }

  paginateReclamations() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedReclamations = this.filteredproduits.slice(startIndex, endIndex);
  }

}
