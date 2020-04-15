import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LinkInterface } from "./shared/link-interface";
import { LinksService } from "./core/links.service";

@Component({
  selector: "batavia-app-aside",
  template: `
    <p>{{ "aside.title" | translate }}</p>
    <nav>
      <ul>
        <li *ngFor="let link of links">
          <a [href]="link.link" [class.active]="getActiveLink(link.link)">
            {{ "nav-links." + link.name | translate }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [".active { font-weight: bold }"],
})
export class AppAsideComponent implements OnInit, OnChanges {
  @Input() data: any;
  _data: any;
  routeModule: string;
  links: LinkInterface[] = [];
  currentPath: any;
  constructor(
    private translate: TranslateService,
    private linkService: LinksService
  ) {}

  getActiveLink(link) {
    return link === window.location.pathname;
    // this.routeModule = this._data.aside.module;
    // const pathName = window.location.pathname;
    // if (pathName.split("/")[1].includes(this.routeModule)) {
    //   console.log("i find you");
    // }
    // return true;
  }

  ngOnChanges(changes) {
    this._data = changes.data.currentValue;
  }

  ngOnInit(): void {
    this.linkService.getLinks().subscribe((linksData: LinkInterface[]) => {
      this.links = linksData;
    });
  }
}
