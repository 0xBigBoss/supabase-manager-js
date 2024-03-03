/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RemoveReadReplicaBody } from '../models/RemoveReadReplicaBody';
import type { SetUpReadReplicaBody } from '../models/SetUpReadReplicaBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReadReplicasBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Set up a read replica
     * @returns any
     * @throws ApiError
     */
    public setUpReadReplica({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: SetUpReadReplicaBody,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/read-replicas/setup',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to set up read replica`,
            },
        });
    }
    /**
     * Remove a read replica
     * @returns any
     * @throws ApiError
     */
    public removeReadReplica({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: RemoveReadReplicaBody,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/read-replicas/remove',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to remove read replica`,
            },
        });
    }
}
