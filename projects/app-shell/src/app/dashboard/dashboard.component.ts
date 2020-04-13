import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  translateKey(key: string) {
    let translated;
    this.translateService.get(key).subscribe((text) => (translated = text));
    return translated;
  }
}
