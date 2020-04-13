import { Component, OnInit } from "@angular/core";

import { ICustomerAlbum } from "../shared/interfaces";
import { DataService } from "../core/data.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private translateService: TranslateService
  ) {}

  people: ICustomerAlbum[] = [];
  filteredPeople: ICustomerAlbum[] = [];
  filterText: string = "";

  filterChanged(value) {
    if (value === "") {
      this.people = this.filteredPeople;
    } else {
      this.people = this.filteredPeople.filter(
        (item: ICustomerAlbum) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.body.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((customers: ICustomerAlbum[]) => {
      this.people = this.filteredPeople = customers;
    });
  }

  translateKey(key: string) {
    let translated;
    this.translateService.get(key).subscribe((text) => (translated = text));
    return translated;
  }
}
