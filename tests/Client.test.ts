import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { SkuCatalogApiClient } from '../dist';

// Exclude local test (only working in local dev environment)
describe.skip('Client Test (local)', () => {
  test('Initialize and use the generated Client', (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID_LOCAL ?? '',
      clientSecret: process.env.DEV_CLIENT_SECRET_LOCAL ?? '',
    };

    SkuCatalogApiClient.init(configOptions)
      .then(() => {
        SkuCatalogApiClient.Generated.SkuService.getSku(
          'freshdesk-resolved_tickets'
        )
          .then((sku) => {
            expect(sku).toEqual({
              skuCode: 'freshdesk-resolved_tickets',
              skuGroupId: '54b56814-b503-435c-9bbb-5194de0886ec',
              name: 'Freshdesk - resolved tickets',
              unit: 'Ticket',
            });
            done();
          })
          .catch((error) => {
            done(error);
          });
      })
      .catch((error) => {
        done(error);
      });
  });
});

describe('Client Test (staging)', () => {
  test('Initialize and use the generated Client', (done) => {
    const configOptions: ConfigOptions = {
      clientId: process.env.DEV_CLIENT_ID_STAGING ?? '',
      clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
      oAuthTokenHost:
        'https://authentication-api.staging.backbone.datenkraft.info',
    };

    SkuCatalogApiClient.init(
      configOptions,
      'https://sku-catalog-api.staging.backbone.datenkraft.info/v1'
    )
      .then(() => {
        SkuCatalogApiClient.Generated.SkuService.getSku(
          'freshdesk-resolved_tickets'
        )
          .then((sku) => {
            expect(sku).toEqual({
              skuCode: 'freshdesk-resolved_tickets',
              skuGroupId: '54b56814-b503-435c-9bbb-5194de0886ec',
              name: 'Freshdesk - resolved tickets',
              unit: 'Ticket',
            });
            done();
          })
          .catch((error) => {
            done(error);
          });
      })
      .catch((error) => {
        done(error);
      });
  });
});
