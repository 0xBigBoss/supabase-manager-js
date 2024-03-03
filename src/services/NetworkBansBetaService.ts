/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NetworkBanResponse } from '../models/NetworkBanResponse';
import type { RemoveNetworkBanRequest } from '../models/RemoveNetworkBanRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NetworkBansBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets project's network bans
     * @returns NetworkBanResponse
     * @throws ApiError
     */
    public getNetworkBans({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<NetworkBanResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/network-bans/retrieve',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's network bans`,
            },
        });
    }
    /**
     * Remove network bans.
     * @returns any
     * @throws ApiError
     */
    public removeNetworkBan({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: RemoveNetworkBanRequest,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/network-bans',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to remove network bans.`,
            },
        });
    }
}
