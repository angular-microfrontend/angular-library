import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerdetailidComponent } from "./customerdetailid.component";

const routes: Routes = [
  {
    path: "",
    component: CustomerdetailidComponent,
    children: [
      {
        path: "user",
        loadChildren: () => import("./user/user.module").then(m => m.UserModule)
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then(m => m.AdminModule)
      },
      {
        path: "",
        redirectTo: "user"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailIdRoutingModule {}
