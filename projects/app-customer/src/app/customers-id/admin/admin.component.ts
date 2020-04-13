import { Component, OnInit } from "@angular/core";

@Component({
  selector: "halodoc-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  pathsplit: string[] = window.location.href.split("/");
  urlParam: string = this.pathsplit[this.pathsplit.length - 2];

  constructor() {}

  ngOnInit(): void {}
}
