import { Component, OnInit } from "@angular/core";
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
          <a [href]="link.link">
            {{ "nav-links." + link.name | translate }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class AppAsideComponent implements OnInit {
  links: LinkInterface[] = [];
  constructor(
    private translate: TranslateService,
    private linkService: LinksService
  ) {}

  ngOnInit(): void {
    this.linkService.getLinks().subscribe((linksData: LinkInterface[]) => {
      this.links = linksData;
    });
  }
}
