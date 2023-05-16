import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfopPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfopPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    //console.log('Servicio de infoPagina listo')

    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfopPagina) => {

          this.cargada = true;
          this.info = resp;
          console.log(resp);

        });

   }
}
