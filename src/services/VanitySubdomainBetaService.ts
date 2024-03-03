/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateVanitySubdomainResponse } from '../models/ActivateVanitySubdomainResponse';
import type { SubdomainAvailabilityResponse } from '../models/SubdomainAvailabilityResponse';
import type { VanitySubdomainBody } from '../models/VanitySubdomainBody';
import type { VanitySubdomainConfigResponse } from '../models/VanitySubdomainConfigResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VanitySubdomainBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets current vanity subdomain config
     * @returns VanitySubdomainConfigResponse
     * @throws ApiError
     */
    public getVanitySubdomainConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<VanitySubdomainConfigResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/vanity-subdomain',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to get project vanity subdomain configuration`,
            },
        });
    }
    /**
     * Deletes a project's vanity subdomain configuration
     * @returns any
     * @throws ApiError
     */
    public removeVanitySubdomainConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/vanity-subdomain',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to delete project vanity subdomain configuration`,
            },
        });
    }
    /**
     * Checks vanity subdomain availability
     * @returns SubdomainAvailabilityResponse
     * @throws ApiError
     */
    public checkVanitySubdomainAvailability({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: VanitySubdomainBody,
    }): CancelablePromise<SubdomainAvailabilityResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/vanity-subdomain/check-availability',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to check project vanity subdomain configuration`,
            },
        });
    }
    /**
     * Activates a vanity subdomain for a project.
     * @returns ActivateVanitySubdomainResponse
     * @throws ApiError
     */
    public activateVanitySubdomainPlease({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: VanitySubdomainBody,
    }): CancelablePromise<ActivateVanitySubdomainResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/vanity-subdomain/activate',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to activate project vanity subdomain configuration`,
            },
        });
    }
}
