/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseSkuResource } from './baseSkuResource';
import type { patchSkuUsageAdditionalData } from './patchSkuUsageAdditionalData';

export type patchSkuResource = (baseSkuResource & patchSkuUsageAdditionalData);
