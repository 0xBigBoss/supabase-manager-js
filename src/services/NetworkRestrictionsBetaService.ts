/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NetworkRestrictionsRequest } from '../models/NetworkRestrictionsRequest';
import type { NetworkRestrictionsResponse } from '../models/NetworkRestrictionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NetworkRestrictionsBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets project's network restrictions
     * @returns NetworkRestrictionsResponse
     * @throws ApiError
     */
    public getNetworkRestrictions({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<NetworkRestrictionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/network-restrictions',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's network restrictions`,
            },
        });
    }
    /**
     * Updates project's network restrictions
     * @returns NetworkRestrictionsResponse
     * @throws ApiError
     */
    public applyNetworkRestrictions({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: NetworkRestrictionsRequest,
    }): CancelablePromise<NetworkRestrictionsResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/network-restrictions/apply',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project network restrictions`,
            },
        });
    }
}
