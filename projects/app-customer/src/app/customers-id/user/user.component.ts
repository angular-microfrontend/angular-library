import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "halodoc-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  pathsplit: string[] = window.location.href.split("/");
  urlParam: string = this.pathsplit[this.pathsplit.length - 2];
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  translateKey(key: string) {
    let translated;
    this.translateService.get(key).subscribe((text) => (translated = text));
    return translated;
  }
}
