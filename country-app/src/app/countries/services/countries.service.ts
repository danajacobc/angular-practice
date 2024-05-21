import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode( country: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${country}`)
    .pipe(
      map( c => c.length > 0 ? c[0]: null ),
      catchError( () => of(null))
    );
  }

  searchCapital( term: string ): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
                .pipe(
                  catchError( error => {
                    console.log(`No se encontro ningún país con el termino: ${term}`);
                    return of([])
                  } )
                );
  }

  searchCountry( term: string ): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
                .pipe(
                  catchError( error => {
                    console.log(`No se encontro ningún país con el termino: ${term}`);
                    return of([])
                  } )
                );
  }

  //Acá 'region' debería ser un valor estatico, porque van a ser siempre las mismas regiones.
  searchRegion( region: string ): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
                .pipe(
                  catchError( error => {
                    console.log(`No se encontro ningún país con el termino: ${region}`);
                    return of([])
                  } )
                );
  }

}
