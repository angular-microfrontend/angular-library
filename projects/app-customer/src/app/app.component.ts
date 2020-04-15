import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "batavia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  currentLang: string;
  data: any;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translationChanged(window.localStorage.getItem("lang") || "en");
    this.data = {
      common: {
        translation: this.currentLang,
      },
      header: {
        name: "from customer's module",
      },
      aside: {
        module: "customer",
      },
      footer: {
        name: "from customer's module",
      },
    };
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
