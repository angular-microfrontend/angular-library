import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AppHeaderModule } from "app-header";
import { AppFooterModule } from "app-footer";
import { AppAsideModule } from "app-aside";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerFilterComponent } from "./customers/customer-filter/customer-filter.component";
import { CustomerListComponent } from "./customers/customer-list/customer-list.component";
import { SharedModule } from "./shared/shared.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: "http://localhost:7454/api/",
      suffix: ".json",
    },
    {
      prefix: "http://localhost:7454/customer/",
      suffix: ".json",
    },
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerFilterComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    AppFooterModule,
    AppAsideModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/customers" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
