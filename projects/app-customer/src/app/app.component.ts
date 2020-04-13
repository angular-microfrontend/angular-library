import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LinkInterface } from "../shared/link-interface";
import { LinksService } from "../core/links.service";

@Component({
  selector: "batavia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  currentLang: string;
  data: any;
  links: LinkInterface[] = [];
  constructor(
    private translate: TranslateService,
    private linkService: LinksService
  ) {}

  ngOnInit() {
    this.translationChanged(window.localStorage.getItem("lang") || "en");
    this.data = {
      common: {
        translation: this.currentLang,
      },
      header: {
        name: "from customer's module",
      },
      footer: {
        name: "from customer's module",
      },
    };

    this.linkService.getLinks().subscribe((linksData: LinkInterface[]) => {
      this.links = linksData;
    });
  }

  translationChanged(langid) {
    this.currentLang = langid;
    this.translate.use(langid);
    window.localStorage.setItem("lang", langid);
  }

  dataUpdated(value) {
    const { translationId } = value;
    this.translationChanged(translationId);
    this.data = {
      ...this.data,
      common: {
        ...this.data.common,
        translation: translationId,
      },
    };
  }
}
