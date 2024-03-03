/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostgrestConfigWithJWTSecretResponse } from '../models/PostgrestConfigWithJWTSecretResponse';
import type { UpdatePostgrestConfigBody } from '../models/UpdatePostgrestConfigBody';
import type { V1PostgrestConfigResponse } from '../models/V1PostgrestConfigResponse';
import type { V1ServiceHealthResponse } from '../models/V1ServiceHealthResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets project's postgrest config
     * @returns PostgrestConfigWithJWTSecretResponse
     * @throws ApiError
     */
    public getPostgRestConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<PostgrestConfigWithJWTSecretResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/postgrest',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's postgrest config`,
            },
        });
    }
    /**
     * Updates project's postgrest config
     * @returns V1PostgrestConfigResponse
     * @throws ApiError
     */
    public updatePostgRestConfig({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: UpdatePostgrestConfigBody,
    }): CancelablePromise<V1PostgrestConfigResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/projects/{ref}/postgrest',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project's postgrest config`,
            },
        });
    }
    /**
     * Gets project's service health status
     * @returns V1ServiceHealthResponse
     * @throws ApiError
     */
    public checkServiceHealth({
        ref,
        services,
        timeoutMs,
    }: {
        /**
         * Project ref
         */
        ref: string,
        services: Array<'auth' | 'db' | 'pooler' | 'realtime' | 'rest' | 'storage'>,
        timeoutMs?: number,
    }): CancelablePromise<Array<V1ServiceHealthResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/health',
            path: {
                'ref': ref,
            },
            query: {
                'timeout_ms': timeoutMs,
                'services': services,
            },
            errors: {
                500: `Failed to retrieve project's service health status`,
            },
        });
    }
}
