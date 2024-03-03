/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V1RunQueryBody } from '../models/V1RunQueryBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Run sql query
     * @returns any
     * @throws ApiError
     */
    public v1RunQuery({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: V1RunQueryBody,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/database/query',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to run sql query`,
            },
        });
    }
    /**
     * Enables Database Webhooks on the project
     * @returns any
     * @throws ApiError
     */
    public v1EnableDatabaseWebhooks({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/database/webhooks/enable',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to enable Database Webhooks on the project`,
            },
        });
    }
}
