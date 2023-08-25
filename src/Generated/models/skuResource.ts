/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseSkuResource } from './baseSkuResource';
import type { patchSkuUsageAdditionalData } from './patchSkuUsageAdditionalData';
import type { postSkuUsageAdditionalData } from './postSkuUsageAdditionalData';

export type skuResource = (baseSkuResource & postSkuUsageAdditionalData & patchSkuUsageAdditionalData);
