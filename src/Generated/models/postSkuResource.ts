/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseSkuResource } from './baseSkuResource';

export type postSkuResource = (baseSkuResource & {
    /**
     * SKU Code
     */
    skuCode?: string,
});
