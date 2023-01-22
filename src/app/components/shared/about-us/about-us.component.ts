import { Component, OnInit } from '@angular/core';

export enum TYPE_CARD_ABOUT_US {
  TEXT = "text",
  BULLET = "bullet",
}

export interface CARD_ABOUT_US {
    title: string,
    body: string | string[],
    size: string,
    type: TYPE_CARD_ABOUT_US,
    lineHeight: string,
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title!: string;
  cards: Array<CARD_ABOUT_US> = [];

  ngOnInit(): void {
    this.title = "O projeto NOVA CHANCE é uma ONG formalizada em 2021 que tem como objetivo a geração de melhores oportunidades de vida através da educação e cultura para jovens do Jardim Aracati.";

    this.createCardObj("MISSÃO",`Promover qualidade de vida no Jardim Aracati (comunidade muriçoca) em SP.<br><br>Realizar trabalhos sociais com familias em situação de vunerabilidade e risco social, assim como a realização de ações que visam resgatar e dignidade humana e a cidadania plena, respeitando o meio ambiente.<br><br>Atender às necessidades educacionais e cultaris dos diversos membros das famílias  da comunidade; crianças, adolescentes e idosos - sempre seguindo os valores propostos pelo projeto.`, "15px", "24px", TYPE_CARD_ABOUT_US.TEXT);

    this.createCardObj("VISÃO",`Ser reconhecido como um projeto educacional, auto-sustentável e integrado à comunidade que proporciona aos seus beneficiários oportunidades de desenvolvimento pessoal para que possam realizar seus sonhos.`, "20px",  "32px", TYPE_CARD_ABOUT_US.TEXT);

    this.createCardObj("VALORES",["Transparência", "Solidariedade", "Respeito", "Empatia", "Caráter"], "28px",  "36px", TYPE_CARD_ABOUT_US.BULLET);

    console.log(this.cards);
  }

  private createCardObj(title: string, body: string | string[], size: string, lineHeight: string, type: TYPE_CARD_ABOUT_US): void {
    this.cards.push({
      title: title,
      body: body,
      size: size,
      type: type,
      lineHeight: lineHeight,
    });
  }

}
