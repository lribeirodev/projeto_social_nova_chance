import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  public requestData<T>(route: ActivatedRoute, component: string) {
    return new Promise<T>((resolve : any, reject) => {
      route.data.subscribe((data) => {
        fetch(`${data['content']}/${component}.json`).then((content) =>
          resolve(content.json())
        );
      });
    });
  }
}
