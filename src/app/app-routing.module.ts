import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutproduitComponent} from "./pages/ajoutproduit/ajoutproduit.component";
import {HeaderfooterComponent} from "./frontoffice/headerfooter/headerfooter.component";
import {ProduitsComponent} from "./pages/produits/produits.component";
import {DetailsproduitComponent} from "./pages/detailsproduit/detailsproduit.component";
import {AcceuilComponent} from "./pages/acceuil/acceuil.component";

const routes: Routes = [

  { path:'acceuil',
    component : HeaderfooterComponent,
    children:[
      {
        path:'',
        component: AcceuilComponent
      },
      { path:'ajoutproduit',
        component : AjoutproduitComponent},
      { path:'produits',
        component : ProduitsComponent},
      { path: 'produit/:id', component:DetailsproduitComponent },

    ],
  },
  // Optionally, you can add a catch-all route for undefined paths
  { path: '**', redirectTo: 'acceuil' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
