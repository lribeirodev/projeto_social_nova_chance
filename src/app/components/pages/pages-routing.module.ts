import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: 'Home',
    data: {
      title: "Nova Chance - Plantando Sonhos na Comunidade",
      content: "/assets/pages/home/"
    },
    component: PagesComponent,
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
  },
  {
    path: "Doar",
    data: {
      title: "Nova Chance - Seja um amigo do Projeto Nova Chance",
      content: "/assets/pages/doar/"
    },
    component: PagesComponent,
    loadChildren: () => import("./donation/donation.module").then(m => m.DonationModule),
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: '/Home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
