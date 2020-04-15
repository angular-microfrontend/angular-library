import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AppHeaderModule } from "app-header";
import { AppFooterModule } from "app-footer";
import { AppAsideModule } from "app-aside";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: "http://localhost:7454/api/",
      suffix: ".json",
    },
    {
      prefix: "assets/i18n-orders/",
      suffix: ".json",
    },
  ]);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    AppFooterModule,
    AppAsideModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/orders" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
