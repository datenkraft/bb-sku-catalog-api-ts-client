/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { patchSkuResource } from './patchSkuResource';
import type { postSkuResource } from './postSkuResource';

export type skuResource = (postSkuResource & patchSkuResource);
