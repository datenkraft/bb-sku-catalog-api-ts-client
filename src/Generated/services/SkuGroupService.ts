/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newSkuGroup } from '../models/newSkuGroup';
import type { skuGroup } from '../models/skuGroup';
import { request as __request } from '../core/request';

export class SkuGroupService {

    /**
     * Add a SKU Group
     * Add a SKU Group
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns skuGroup Created
     * @throws ApiError
     */
    public static async postSkuGroup(
        requestBody: newSkuGroup,
    ): Promise<errorResponse | skuGroup> {
        const result = await __request({
            method: 'POST',
            path: `/sku-group`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Get a SKU Group by skuGroupId
     * Get a SKU Group by skuGroupId
     * @param skuGroupId SKU Group Id
     * @returns skuGroup OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSkuGroup(
        skuGroupId: string,
    ): Promise<skuGroup | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku-group/${skuGroupId}`,
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