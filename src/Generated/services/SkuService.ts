/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { skuResource } from '../models/skuResource';
import type { skuResourceCollection } from '../models/skuResourceCollection';
import { request as __request } from '../core/request';

export class SkuService {

    /**
     * Query skus by skuCodes
     * Query skus by skuCodes or skuGroupIds.
     * @param filterSkuCodes skuCodes filter
     * @param filterSkuGroupIds skuGroupIds filter
     * @returns skuResourceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSkuCollection(
        filterSkuCodes?: string,
        filterSkuGroupIds?: string,
    ): Promise<skuResourceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku`,
            query: {
                'filter[skuCodes]': filterSkuCodes,
                'filter[skuGroupIds]': filterSkuGroupIds,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add a SKU
     * Add a SKU
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns skuResource Created
     * @throws ApiError
     */
    public static async postSku(
        requestBody: skuResource,
    ): Promise<errorResponse | skuResource> {
        const result = await __request({
            method: 'POST',
            path: `/sku`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a SKU by skuCode
     * Get a SKU by skuCode
     * @param skuCode SKU Code
     * @returns skuResource OK
     * @returns errorResponse Unexpected error
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
                500: `Server error`,
            },
        });
        return result.body;
    }

}