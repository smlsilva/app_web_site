import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ViewHome } from "./view/Home/angular.component";

@Component ({
    standalone: true,
    selector: "app-root",
    imports: [ViewHome, RouterOutlet],
    templateUrl: "./app.html",
    styles: ""
})
export class ComponentMain {
    
}