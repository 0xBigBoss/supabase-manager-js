/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SslEnforcementRequest } from '../models/SslEnforcementRequest';
import type { SslEnforcementResponse } from '../models/SslEnforcementResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SslEnforcementBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get project's SSL enforcement configuration.
     * @returns SslEnforcementResponse
     * @throws ApiError
     */
    public getSslEnforcementConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<SslEnforcementResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/ssl-enforcement',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's SSL enforcement config`,
            },
        });
    }
    /**
     * Update project's SSL enforcement configuration.
     * @returns SslEnforcementResponse
     * @throws ApiError
     */
    public updateSslEnforcementConfig({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: SslEnforcementRequest,
    }): CancelablePromise<SslEnforcementResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{ref}/ssl-enforcement',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project's SSL enforcement configuration.`,
            },
        });
    }
}
