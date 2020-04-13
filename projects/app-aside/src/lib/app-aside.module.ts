import { NgModule } from "@angular/core";
import { AppAsideComponent } from "./app-aside.component";

import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from "@ngx-translate/core";
import { Subject } from "rxjs";

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
  declarations: [AppAsideComponent],
  imports: [
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
  exports: [AppAsideComponent, TranslateModule],
})
export class AppAsideModule {}
