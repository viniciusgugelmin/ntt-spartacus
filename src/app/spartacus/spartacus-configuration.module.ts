import {NgModule} from '@angular/core';
import {translationChunksConfig, translations} from "@spartacus/assets";
import {FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig} from "@spartacus/core";
import {defaultCmsContentProviders, layoutConfig, mediaConfig} from "@spartacus/storefront";
import {customTranslations} from "src/assets/src/translations";

@NgModule({
  declarations: [],
  imports: [],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: {...customTranslations }
      },
    }), provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3'
      }
    }), provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
        }
      },
    }), provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa'],
      },
    })]
})
export class SpartacusConfigurationModule {
}
