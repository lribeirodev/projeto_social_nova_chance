import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: 'Home',
    data: {
      title: "Nova Chance - Mudando Sonhos na Comunidade",
    },
    component: PagesComponent,
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
  },
  {
    path: "Doar",
    data: {
      title: "Seja um amigo do Projeto Nova Chance",
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
