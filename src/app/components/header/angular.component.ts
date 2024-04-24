import { Component } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";

@Component({
    standalone: true,
    imports: [MenuComponent],
    selector: "app-header",
    templateUrl: "header.html",
    styleUrl: "style.css"
})

export class HeaderComponent {
    title: string = "Sam Code"
}
