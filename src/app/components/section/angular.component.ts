import { Component } from "@angular/core";
import { IProjetos } from "../../interfaces/IProjetos";
import { CommonModule } from "@angular/common";

@Component ({
    standalone: true,
    imports: [CommonModule],
    selector: "app-section",
    templateUrl: "section.html",
    styleUrl: "style.css"
})

export class SectionComponent {

  public target: boolean = true;

  projetos: IProjetos[] = [
    { nome: "API REST", descricao: "projeto teste para criação de cards intuitivos", nameLink:"Github", link: "github.com"},
    {
      nome: "JOGO DA COBRINHA",
      descricao: "projeASDFSADFASDFA ASDFASDFASvos",
      nameLink:"Github",
      link: "https://github.com/smlsilva",
      nameLink2: "API INTEGRADA",
      link2: "https://google.com"
    },
    { nome: "GOOGLE", descricao: "asdfasdf asdfasdf asdfasdf asdf asdf", nameLink:"Github", link: "google.com"},
    { nome: "TESTE", descricao: "aSDFASDFASDsdASDFSFf asASDFSDFSdf", nameLink:"OLA", link: "google.com", nameLink2: "Google"},
    { nome: "GOOGLE", descricao: "asdfasdf asdfasdf asdfasdf asdf asdf", nameLink:"Github", link: "google.com"},
    { nome: "GOOGLE", descricao: "asdfasdf asdfasdf asdfasdf asdf asdf", nameLink:"Github", link: "google.com"},
    { nome: "GOOGLE", descricao: "asdfasdf asdfasdf asdfasdf asdf asdf", nameLink:"Github", link: "google.com"}
  ]

}
