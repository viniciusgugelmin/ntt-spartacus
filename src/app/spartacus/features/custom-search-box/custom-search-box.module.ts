import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { HighlightPipe } from './highlight.pipe';
import { CustomSearchBoxComponent} from './custom-search-box.component';
import {IconModule, MediaModule} from "@spartacus/storefront";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    IconModule,
    UrlModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SearchBoxComponent: {
          component: CustomSearchBoxComponent,
        },
      },
    }),
  ],
  declarations: [CustomSearchBoxComponent, HighlightPipe],
  exports: [CustomSearchBoxComponent, HighlightPipe],
})
export class CustomSearchBoxModule {}
