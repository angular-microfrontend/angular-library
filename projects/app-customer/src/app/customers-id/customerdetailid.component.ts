import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "halodoc-customerdetailid",
  templateUrl: "./customerdetailid.component.html",
  styleUrls: ["./customerdetailid.component.scss"],
})
export class CustomerdetailidComponent implements OnInit {
  customerId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.customerId = parseInt(params.get("id"));
    });
  }
}
