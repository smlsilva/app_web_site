import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/IUser";
import { Observable, catchError, retry } from "rxjs";

// REALIZANDO INJEÇÃO DE DEPENDENCIA
@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient) {}
    
    private url:string = "http://localhost:5185/v1/api/aluno";

    httpOption = {
        headers: new HttpHeaders({"Content-type":"application/json"})
    }

    getUser():Observable<IUser[]> {
        return this.http.get<IUser[]>(this.url)
        .pipe(
            retry(2)
        )
    }
}