import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class PagesService {

  changeTitle(route: ActivatedRoute): void{
    route.data.subscribe(data => {
      window.document.title = data['title'];
    });
  };

}
