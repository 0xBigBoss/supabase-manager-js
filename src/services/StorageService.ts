/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V1StorageBucketResponse } from '../models/V1StorageBucketResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StorageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Lists all buckets
     * @returns V1StorageBucketResponse
     * @throws ApiError
     */
    public getBuckets({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<Array<V1StorageBucketResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/storage/buckets',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to get list of buckets`,
            },
        });
    }
}
