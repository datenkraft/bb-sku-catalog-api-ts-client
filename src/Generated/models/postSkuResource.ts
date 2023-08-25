/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { baseSkuResource } from './baseSkuResource';
import type { postSkuUsageAdditionalData } from './postSkuUsageAdditionalData';

export type postSkuResource = (baseSkuResource & postSkuUsageAdditionalData);
