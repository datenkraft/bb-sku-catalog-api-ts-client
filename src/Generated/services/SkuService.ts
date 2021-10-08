/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { sku } from '../models/sku';
import { request as __request } from '../core/request';

export class SkuService {

    /**
     * Add a SKU
     * Add a SKU
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns sku Created
     * @throws ApiError
     */
    public static async postSku(
        requestBody: sku,
    ): Promise<errorResponse | sku> {
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
     * @returns sku OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSku(
        skuCode: string,
    ): Promise<sku | errorResponse> {
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