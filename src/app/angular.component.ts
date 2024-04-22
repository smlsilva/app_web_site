import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/angular.component";
import { MainComponent } from "./components/main/angular.component";

@Component ({
    standalone: true,
    selector: "app-root",
    imports: [HeaderComponent, MainComponent],
    templateUrl: "./app.html",
    styles: ""
})
export class ComponentMain {
    
}