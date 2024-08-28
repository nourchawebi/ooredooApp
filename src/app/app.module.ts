import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutproduitComponent } from './pages/ajoutproduit/ajoutproduit.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './frontoffice/header/header.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { TestComponent } from './frontoffice/test/test.component';
import { HeaderfooterComponent } from './frontoffice/headerfooter/headerfooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { ProduitsComponent } from './pages/produits/produits.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { DetailsproduitComponent } from './pages/detailsproduit/detailsproduit.component';
import { ModifierproduitComponent } from './pages/modifierproduit/modifierproduit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";

import { AcceuilComponent } from './pages/acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    AjoutproduitComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    HeaderfooterComponent,
    ProduitsComponent,
    DetailsproduitComponent,
    ModifierproduitComponent,
    AcceuilComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,



  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]

})
export class AppModule { }
