import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from "@ngx-translate/core";
import { Subject } from "rxjs";

import { AppAsideComponent } from "./app-aside.component";
import { CoreModule } from "./core/core.module";

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
    CommonModule,
    CoreModule,
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
