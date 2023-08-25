/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseSkuResource } from './baseSkuResource';

export type patchSkuResource = (baseSkuResource & {
    /**
     * Active
     */
    active?: boolean,
});
