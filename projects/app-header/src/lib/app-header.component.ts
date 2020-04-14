import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "batavia-app-header",
  template: `
    <div class="app-header-container">
      <div class="app-header">
        {{ "header.title" | translate }} {{ _data.header.name }}
      </div>
      <ul class="languages-container">
        <li
          *ngFor="let lang of languages"
          [class.active]="lang === currentLang"
          (click)="updateLanguageTranslation(lang)"
        >
          {{ "languages." + lang | translate }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./app-header.component.css"],
})
export class AppHeaderComponent implements OnInit, OnChanges {
  languages = ["en", "id"];
  currentLang: string;
  header: any;
  _data: any;

  @Input() data: any;
  @Output() dataUpdated = new EventEmitter();

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    this._data = changes.data.currentValue;
    this.currentLang = this._data.common.translation;
    this.header = this._data.header;
  }

  updateLanguageTranslation(lang: string) {
    window.localStorage.setItem("lang", lang);
    this.currentLang = lang;
    this.dataUpdated.emit({ translationId: lang });
  }
}
