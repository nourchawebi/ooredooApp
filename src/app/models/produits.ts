export class Produit {
  idProduit: number;
  libelle: string;
  description: string;
  prixHC: number;
  prixHT: number;
  tva: string;
  marque: string;
  etat: number;
  creationDate: Date;
  livraisonGratuite: number;

  constructor() {
    this.idProduit = 0;
    this.libelle = '';
    this.description = '';
    this.prixHC = 0;
    this.prixHT = 0;
    this.tva = '';
    this.marque = '';
    this.etat = 0;
    this.creationDate = new Date();
    this.livraisonGratuite = 0;
  }
}
