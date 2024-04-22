import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "../../services/login.service";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: "app-menu",
    templateUrl: "menu.html",
    styleUrl: "style.css"
})

export class MenuComponent {
    
    private service = inject(UserService);

    validador: boolean = false;

    isLogin() {
        return this.validador;
    }

    logged() {
        this.validador = this.validador ? false : true;
    }
    
    logout() {
        this.validador = false;
    }

}