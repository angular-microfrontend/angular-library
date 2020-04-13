import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CustomersComponent,
  },
  {
    path: "details",
    loadChildren: () =>
      import("./customers-detail/customer-detail.module").then(
        (m) => m.CustomerDetailModule
      ),
  },
  {
    path: "id/:id",
    loadChildren: () =>
      import("./customers-id/customerdetailid.module").then(
        (m) => m.CustomerdetailidModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
