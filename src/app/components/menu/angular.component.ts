import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: "app-menu",
    templateUrl: "menu.html",
    styleUrl: "style.css"
})

export class MenuComponent {

    isLogin() {
        return false;
    }

}