import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export enum CARD_FRONT_ACTION_POSITION {
  LEFT = "position__left",
  RIGHT = "position__right",
}

export interface CARD_FRONT_ACTION {
  title: string,
  body: string,
  imageSrc: string,
  position: CARD_FRONT_ACTION_POSITION,
}

@Component({
  selector: 'app-front-actions',
  templateUrl: './front-actions.component.html',
  styleUrls: ['./front-actions.component.scss']
})
export class FrontActionsComponent implements OnInit {

  title!: string;
  cards: Array<CARD_FRONT_ACTION> = [];

  ngOnInit(): void {
    this.title = "Atividades recorrentes que levam a esperança para familias e crianças";

    this.createCardFrontAction("futebol", `Os treinos de futebol ocorrem todas as tardes de sábados, para as crianças de 7 a 15 anos. O futebol é um ótimo esporte para estimular o trabalho em equipe enquanto pratica-se uma atividade prazerosa e divertida. Além disso, trabalhamos valores como empatia, perdão e respeito.`, "./assets/images/gallery/front-actions/image_0.png", CARD_FRONT_ACTION_POSITION.LEFT);

    this.createCardFrontAction("roda de conversa e leitura", `A roda de leitura atende semanalmente crianças de 7 a 12 anos. Nelas são trabalhadas temáticas ligadas a “valores” como respeito, amor, honestidade, igualdade, caráter e empatia, estimulando-as a desenvolver boas atitudes éticas e morais, além de ser um estímulo para que sigam se alfabetizando e estudando. Já as rodas de conversa são direcionadas a adolescentes, com objetivo de abordar temas relacionados ao desenvolvimento pessoal.`, "./assets/images/gallery/front-actions/image_1.png", CARD_FRONT_ACTION_POSITION.RIGHT);

    this.createCardFrontAction("palestras", `Oferecemos palestras nas quais o Anderson conta sobre sua história e os aprendizados que teve ao longo de sua trajetória de superação. Estas palestras podem ocorrer em escolas, cursos, empresas, sendo muito bem recebidas por adolescentes e adultos.`, "./assets/images/gallery/front-actions/image_2.png", CARD_FRONT_ACTION_POSITION.LEFT);

    this.createCardFrontAction("atendimento às famílias", `Como elemento estratégico da nossa atuação na comunidade, nós realizamos reuniões periódicas com as famílias para ouvir suas necessidades e também contar sobre as novidades do projeto. Além disso, realizamos os cadastros das famílias de forma sistematizada, para que possamos ter as informações necessárias à realização de nossas atividades.`, "./assets/images/gallery/front-actions/image_3.png", CARD_FRONT_ACTION_POSITION.RIGHT);

    this.createCardFrontAction("brinquedoteca", `Em 2021 estreamos a brinquedoteca, na qual oferecemos brinquedos e livros às crianças da comunidade durante os períodos de atendimento. Com isso, estimulamos a criatividade e permitimos que as crianças aprendam brincando.`, "./assets/images/gallery/front-actions/image_4.png", CARD_FRONT_ACTION_POSITION.LEFT);

  }

  createCardFrontAction(title: string, body: string, imageSrc: string, position: CARD_FRONT_ACTION_POSITION): void {
    this.cards.push({
      title: title.toUpperCase(),
      body: body,
      imageSrc: imageSrc,
      position: position,
    })
  }

}
