import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerDetailComponent } from "./customer-detail.component";
import { CustomerDetailRoutingModule } from "./customer-detail-routing.module";

@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [CommonModule, CustomerDetailRoutingModule]
})
export class CustomerDetailModule {}
