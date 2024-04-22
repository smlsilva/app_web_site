import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/angular.component";
import { SectionComponent } from "../../components/section/angular.component";

@Component({
    standalone: true,
    selector: "app-view-home-component",
    imports: [HeaderComponent, SectionComponent],
    templateUrl: "viewhome.html",
    styles: ""
})

export class ViewHome {

}