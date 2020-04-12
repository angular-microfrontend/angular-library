import { Component, Input, OnChanges, OnInit } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "batavia-app-footer",
  template: ` <div class="app-footer">
    {{ "footer.title" | translate }} {{ _data.footer.name }}
  </div>`,
  styles: [
    ".app-footer { display: flex; justify-content: center; align-items: center; height: 100%; }",
  ],
})
export class AppFooterComponent implements OnInit, OnChanges {
  _data: any;
  footer: any;
  @Input() data: any;
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    this._data = changes.data.currentValue;
    this.footer = this._data.footer;
  }
}
