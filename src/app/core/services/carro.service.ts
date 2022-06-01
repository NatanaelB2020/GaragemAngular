import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Carro } from 'src/app/models/carro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private apiUrl = 'http://localhost:3000/carros';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiUrl);
  }

  public getById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.apiUrl}/${id}`);
  }

  public add(request: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.apiUrl, request);
  }

  public update(request: Carro, id: string): Observable<Carro> {
    return this.http.put<Carro>(`${this.apiUrl}/${id}`, request);
  }

  public delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
