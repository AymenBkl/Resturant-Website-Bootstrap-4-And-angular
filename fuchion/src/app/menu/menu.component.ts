import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  category : string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.getRouteQuery();
  }


  getRouteQuery() : void {
    this.route.queryParamMap.
    subscribe(
      paramas => {
        const param = paramas.get('category');
        if (param === null){
          this.category = "special";
        }
        else {
          this.category = param;
        }
      });
  }
}
