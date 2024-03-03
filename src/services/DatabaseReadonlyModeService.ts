/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReadOnlyStatusResponse } from '../models/ReadOnlyStatusResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DatabaseReadonlyModeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns project's readonly mode status
     * @returns ReadOnlyStatusResponse
     * @throws ApiError
     */
    public getReadOnlyModeStatus({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<ReadOnlyStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/readonly',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to get project readonly mode status`,
            },
        });
    }
    /**
     * Disables project's readonly mode for the next 15 minutes
     * @returns any
     * @throws ApiError
     */
    public temporarilyDisableReadonlyMode({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/readonly/temporary-disable',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to disable project's readonly mode`,
            },
        });
    }
}
