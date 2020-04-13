import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "halodoc-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"],
})
export class CustomerDetailComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  translateKey(key: string) {
    let translated;
    this.translateService.get(key).subscribe((text) => (translated = text));
    return translated;
  }
}
