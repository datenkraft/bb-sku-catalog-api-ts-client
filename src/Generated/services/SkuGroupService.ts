/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newSkuGroup } from '../models/newSkuGroup';
import type { skuGroupResource } from '../models/skuGroupResource';
import type { skuGroupResourceCollection } from '../models/skuGroupResourceCollection';
import { request as __request } from '../core/request';

export class SkuGroupService {

    /**
     * Query sku-groups by skuGroupIds
     * Query sku-groups by skuGroupIds
     * @param filterSkuGroupIds skuGroupIds filter
     * @returns skuGroupResourceCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSkuGroupCollection(
        filterSkuGroupIds?: string,
    ): Promise<skuGroupResourceCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku-group`,
            query: {
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
     * Add a SKU Group
     * Add a SKU Group
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns skuGroupResource Created
     * @throws ApiError
     */
    public static async postSkuGroup(
        requestBody: newSkuGroup,
    ): Promise<errorResponse | skuGroupResource> {
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
     * @returns skuGroupResource OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSkuGroup(
        skuGroupId: string,
    ): Promise<skuGroupResource | errorResponse> {
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