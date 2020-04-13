import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerdetailidComponent } from "./customerdetailid.component";
import { CustomerDetailIdRoutingModule } from "./customerdetailid-routing.module";

@NgModule({
  declarations: [CustomerdetailidComponent],
  imports: [CommonModule, CustomerDetailIdRoutingModule],
  entryComponents: [CustomerdetailidComponent]
})
export class CustomerdetailidModule {}
