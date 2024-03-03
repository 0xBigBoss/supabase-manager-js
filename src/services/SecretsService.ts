/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSecretBody } from '../models/CreateSecretBody';
import type { SecretResponse } from '../models/SecretResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SecretsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all secrets
     * Returns all secrets you've previously added to the specified project.
     * @returns SecretResponse
     * @throws ApiError
     */
    public getSecrets({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<Array<SecretResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/secrets',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's secrets`,
            },
        });
    }
    /**
     * Bulk create secrets
     * Creates multiple secrets and adds them to the specified project.
     * @returns any
     * @throws ApiError
     */
    public createSecrets({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: Array<CreateSecretBody>,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/secrets',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to create project's secrets`,
            },
        });
    }
    /**
     * Bulk delete secrets
     * Deletes all secrets with the given names from the specified project
     * @returns any
     * @throws ApiError
     */
    public deleteSecrets({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: Array<string>,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/secrets',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to delete secrets with given names`,
            },
        });
    }
}
