import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private urlUsuario: string = "";

  constructor(private http: HttpClient) {
    this.urlUsuario = "http://localhost:8080/usuarios";
  }

  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuario);
  }

  public save(usuario: Usuario) {
    return this.http.post<Usuario>(this.urlUsuario, usuario);
  }

}
