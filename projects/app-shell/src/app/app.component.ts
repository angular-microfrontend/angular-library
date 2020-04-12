import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LinkInterface } from "../shared/link-interface";
import { LinksService } from "../core/links.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentLang: string;
  data: any;
  links: LinkInterface[] = [];
  constructor(
    private translate: TranslateService,
    private linkService: LinksService
  ) {}

  ngOnInit() {
    this.translationChanged("en");
    this.data = {
      common: {
        translation: this.currentLang,
      },
      header: {
        name: "from app shell",
      },
      footer: {
        name: "from app shell",
      },
    };

    this.linkService.getLinks().subscribe((linksData: LinkInterface[]) => {
      console.log(linksData);
      this.links = linksData;
    });
  }

  translationChanged(langid) {
    this.currentLang = langid;
    this.translate.use(langid);
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
