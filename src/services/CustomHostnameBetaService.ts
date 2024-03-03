/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateCustomHostnameBody } from '../models/UpdateCustomHostnameBody';
import type { UpdateCustomHostnameResponse } from '../models/UpdateCustomHostnameResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomHostnameBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets project's custom hostname config
     * @returns UpdateCustomHostnameResponse
     * @throws ApiError
     */
    public getCustomHostnameConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<UpdateCustomHostnameResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/custom-hostname',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's custom hostname config`,
            },
        });
    }
    /**
     * Deletes a project's custom hostname configuration
     * @returns any
     * @throws ApiError
     */
    public removeCustomHostnameConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/custom-hostname',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to delete project custom hostname configuration`,
            },
        });
    }
    /**
     * Updates project's custom hostname configuration
     * @returns UpdateCustomHostnameResponse
     * @throws ApiError
     */
    public createCustomHostnameConfig({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: UpdateCustomHostnameBody,
    }): CancelablePromise<UpdateCustomHostnameResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/custom-hostname/initialize',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project custom hostname configuration`,
            },
        });
    }
    /**
     * Attempts to verify the DNS configuration for project's custom hostname configuration
     * @returns UpdateCustomHostnameResponse
     * @throws ApiError
     */
    public reverify({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<UpdateCustomHostnameResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/custom-hostname/reverify',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to verify project custom hostname configuration`,
            },
        });
    }
    /**
     * Activates a custom hostname for a project.
     * @returns UpdateCustomHostnameResponse
     * @throws ApiError
     */
    public activate({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<UpdateCustomHostnameResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/custom-hostname/activate',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to activate project custom hostname configuration`,
            },
        });
    }
}
