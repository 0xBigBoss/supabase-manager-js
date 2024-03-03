/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKeyResponse } from '../models/ApiKeyResponse';
import type { TypescriptResponse } from '../models/TypescriptResponse';
import type { V1CreateProjectBody } from '../models/V1CreateProjectBody';
import type { V1ProjectRefResponse } from '../models/V1ProjectRefResponse';
import type { V1ProjectResponse } from '../models/V1ProjectResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all projects
     * Returns a list of all projects you've previously created.
     * @returns V1ProjectResponse
     * @throws ApiError
     */
    public getProjects(): CancelablePromise<Array<V1ProjectResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects',
        });
    }
    /**
     * Create a project
     * @returns V1ProjectResponse
     * @throws ApiError
     */
    public createProject({
        requestBody,
    }: {
        requestBody: V1CreateProjectBody,
    }): CancelablePromise<V1ProjectResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get project api keys
     * @returns ApiKeyResponse
     * @throws ApiError
     */
    public getProjectApiKeys({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<Array<ApiKeyResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/api-keys',
            path: {
                'ref': ref,
            },
        });
    }
    /**
     * Deletes the given project
     * @returns V1ProjectRefResponse
     * @throws ApiError
     */
    public deleteProject({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<V1ProjectRefResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}',
            path: {
                'ref': ref,
            },
        });
    }
    /**
     * Generate TypeScript types
     * Returns the TypeScript types of your schema for use with supabase-js.
     * @returns TypescriptResponse
     * @throws ApiError
     */
    public getTypescriptTypes({
        ref,
        includedSchemas = 'public',
    }: {
        /**
         * Project ref
         */
        ref: string,
        includedSchemas?: string,
    }): CancelablePromise<TypescriptResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/types/typescript',
            path: {
                'ref': ref,
            },
            query: {
                'included_schemas': includedSchemas,
            },
            errors: {
                500: `Failed to generate TypeScript types`,
            },
        });
    }
}
