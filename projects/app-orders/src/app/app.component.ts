import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "batavia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentLang: string;
  data: object;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translationChanged(window.localStorage.getItem("lang"));
    this.data = {
      common: {
        translation: this.currentLang,
      },
      header: {
        name: "from orders page",
      },
      footer: {
        name: "from orders page",
      },
    };
  }

  translationChanged(langid) {
    this.currentLang = langid;
    this.translate.use(langid);
  }

  dataUpdated(value) {}
}
