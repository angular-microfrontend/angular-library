import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentLang: string;
  data: any;
  constructor(private translate: TranslateService) {}

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
