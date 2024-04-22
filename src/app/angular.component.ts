import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/angular.component";
import { SectionComponent } from "./components/section/angular.component";

@Component ({
    standalone: true,
    selector: "app-root",
    imports: [HeaderComponent, SectionComponent],
    templateUrl: "./app.html",
    styles: ""
})
export class ComponentMain {
    
}