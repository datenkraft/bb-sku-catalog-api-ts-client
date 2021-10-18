/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { error } from './error';
import type { sku } from './sku';

export type postSkuConflictErrorResponse = {
    /**
     * errors
     */
    errors?: Array<(error & {
        /**
         * Extra
         */
        extra?: {
            /**
             * SKUs
             */
            skus?: Array<sku>,
        },
    })>;
}
