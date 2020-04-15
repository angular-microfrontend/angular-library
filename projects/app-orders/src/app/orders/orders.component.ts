import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "batavia-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  translateKey(key: string) {
    let translated;
    this.translateService.get(key).subscribe((text) => (translated = text));
    return translated;
  }
}
