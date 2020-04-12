import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from "@ngx-translate/core";
import { Subject } from "rxjs";

import { AppFooterComponent } from "./app-footer.component";

export class Loader implements TranslateLoader {
  private translations = new Subject();
  $translations = this.translations.asObservable();
  getTranslation(lang: string) {
    console.log(`called with ${lang}`);
    return this.$translations;
  }
}

export function LoaderFactory() {
  return new Loader();
}

export class Awol implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return "... and many more";
  }
}

@NgModule({
  declarations: [AppFooterComponent],
  imports: [
    BrowserModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: LoaderFactory,
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: Awol,
      },
    }),
  ],
  exports: [AppFooterComponent, TranslateModule],
})
export class AppFooterModule {}
