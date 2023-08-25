/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { patchSkuResource } from '../models/patchSkuResource';
import type { postSkuResource } from '../models/postSkuResource';
import type { skuResource } from '../models/skuResource';
import type { skuResourceCollection } from '../models/skuResourceCollection';
import { request as __request } from '../core/request';

export class SkuService {

    /**
     * Query skus
     * Query skus
     * @param filterSkuCodes skuCodes filter
     * @param filterSkuGroupIds skuGroupIds filter
     * @param filterActive active filter
     * @returns skuResourceCollection OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getSkuCollection(
        filterSkuCodes?: string,
        filterSkuGroupIds?: string,
        filterActive?: boolean,
    ): Promise<skuResourceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku`,
            query: {
                'filter[skuCodes]': filterSkuCodes,
                'filter[skuGroupIds]': filterSkuGroupIds,
                'filter[active]': filterActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Add a SKU
     * Add a SKU
     * @param requestBody
     * @returns errorResponse Unexpected Error
     * @returns skuResource Created
     * @throws ApiError
     */
    public static async postSku(
        requestBody: postSkuResource,
    ): Promise<errorResponse | skuResource> {
        const result = await __request({
            method: 'POST',
            path: `/sku`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Get a SKU by skuCode
     * Get a SKU by skuCode
     * @param skuCode SKU Code
     * @returns skuResource OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getSku(
        skuCode: string,
    ): Promise<skuResource | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku/${skuCode}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

    /**
     * Update one or more fields of a SKU
     * Update one or more fields of a SKU
     * @param skuCode SKU Code
     * @param requestBody
     * @returns skuResource OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async patchSku(
        skuCode: string,
        requestBody: patchSkuResource,
    ): Promise<skuResource | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/sku/${skuCode}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Unprocessable Entity`,
                422: `Not Found`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

}