/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProviderBody } from '../models/CreateProviderBody';
import type { CreateProviderResponse } from '../models/CreateProviderResponse';
import type { DeleteProviderResponse } from '../models/DeleteProviderResponse';
import type { GetProviderResponse } from '../models/GetProviderResponse';
import type { ListProvidersResponse } from '../models/ListProvidersResponse';
import type { UpdateProviderBody } from '../models/UpdateProviderBody';
import type { UpdateProviderResponse } from '../models/UpdateProviderResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SsoService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new SSO provider
     * @returns CreateProviderResponse
     * @throws ApiError
     */
    public createProviderForProject({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: CreateProviderBody,
    }): CancelablePromise<CreateProviderResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/config/auth/sso/providers',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `SAML 2.0 support is not enabled for this project`,
            },
        });
    }
    /**
     * Lists all SSO providers
     * @returns ListProvidersResponse
     * @throws ApiError
     */
    public listAllProviders({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<ListProvidersResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/config/auth/sso/providers',
            path: {
                'ref': ref,
            },
            errors: {
                404: `SAML 2.0 support is not enabled for this project`,
            },
        });
    }
    /**
     * Gets a SSO provider by its UUID
     * @returns GetProviderResponse
     * @throws ApiError
     */
    public getProviderById({
        ref,
        providerId,
    }: {
        /**
         * Project ref
         */
        ref: string,
        providerId: string,
    }): CancelablePromise<GetProviderResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}',
            path: {
                'ref': ref,
                'provider_id': providerId,
            },
            errors: {
                404: `Either SAML 2.0 was not enabled for this project, or the provider does not exist`,
            },
        });
    }
    /**
     * Updates a SSO provider by its UUID
     * @returns UpdateProviderResponse
     * @throws ApiError
     */
    public updateProviderById({
        ref,
        providerId,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        providerId: string,
        requestBody: UpdateProviderBody,
    }): CancelablePromise<UpdateProviderResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}',
            path: {
                'ref': ref,
                'provider_id': providerId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Either SAML 2.0 was not enabled for this project, or the provider does not exist`,
            },
        });
    }
    /**
     * Removes a SSO provider by its UUID
     * @returns DeleteProviderResponse
     * @throws ApiError
     */
    public removeProviderById({
        ref,
        providerId,
    }: {
        /**
         * Project ref
         */
        ref: string,
        providerId: string,
    }): CancelablePromise<DeleteProviderResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/config/auth/sso/providers/{provider_id}',
            path: {
                'ref': ref,
                'provider_id': providerId,
            },
            errors: {
                404: `Either SAML 2.0 was not enabled for this project, or the provider does not exist`,
            },
        });
    }
}
