/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V1BackupsResponse } from '../models/V1BackupsResponse';
import type { V1RestorePitrBody } from '../models/V1RestorePitrBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BackupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Lists all backups
     * @returns V1BackupsResponse
     * @throws ApiError
     */
    public getBackups({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<V1BackupsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/database/backups',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to get backups`,
            },
        });
    }
    /**
     * Restores a PITR backup for a database
     * @returns any
     * @throws ApiError
     */
    public v1RestorePitr({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: V1RestorePitrBody,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/database/backups/restore-pitr',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
