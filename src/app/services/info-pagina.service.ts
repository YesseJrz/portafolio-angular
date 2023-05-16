import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfopPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfopPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.CargarEquipo();
  }

  private cargarInfo(){
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfopPagina) => {
      this.cargada = true;
      this.info = resp;

      });
  }

  private CargarEquipo(){
    //Leer el archivo JSON
    this.http.get('https://angular-html-c7b7f-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      this.equipo = resp;
      console.log(resp);

   } );
  }
}
