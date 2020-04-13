import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "batavia-app-aside",
  template: `
    <p>
      {{ "aside.title" | translate }}
    </p>
  `,
  styles: [],
})
export class AppAsideComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
}
