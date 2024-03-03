/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PgsodiumConfigResponse } from '../models/PgsodiumConfigResponse';
import type { UpdatePgsodiumConfigBody } from '../models/UpdatePgsodiumConfigBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PgsodiumBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets project's pgsodium config
     * @returns PgsodiumConfigResponse
     * @throws ApiError
     */
    public getPgsodiumConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<PgsodiumConfigResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/pgsodium',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's pgsodium config`,
            },
        });
    }
    /**
     * Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible.
     * @returns PgsodiumConfigResponse
     * @throws ApiError
     */
    public updatePgsodiumConfig({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: UpdatePgsodiumConfigBody,
    }): CancelablePromise<PgsodiumConfigResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{ref}/pgsodium',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project's pgsodium config`,
            },
        });
    }
}
