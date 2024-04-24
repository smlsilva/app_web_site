import { Injectable } from "@angular/core";

// REALIZANDO INJEÇÃO DE DEPENDENCIA
@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor() {}

    getUser() {
        return ["Samuel", "Fernanda", "Marcelo"];
    }
}