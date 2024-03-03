/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunctionResponse } from '../models/FunctionResponse';
import type { FunctionSlugResponse } from '../models/FunctionSlugResponse';
import type { V1CreateFunctionBody } from '../models/V1CreateFunctionBody';
import type { V1UpdateFunctionBody } from '../models/V1UpdateFunctionBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FunctionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a function
     * Creates a function and adds it to the specified project.
     * @returns FunctionResponse
     * @throws ApiError
     */
    public createFunction({
        ref,
        requestBody,
        slug,
        name,
        verifyJwt,
        importMap,
        entrypointPath,
        importMapPath,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: V1CreateFunctionBody,
        slug?: string,
        name?: string,
        verifyJwt?: boolean,
        importMap?: boolean,
        entrypointPath?: string,
        importMapPath?: string,
    }): CancelablePromise<FunctionResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/functions',
            path: {
                'ref': ref,
            },
            query: {
                'slug': slug,
                'name': name,
                'verify_jwt': verifyJwt,
                'import_map': importMap,
                'entrypoint_path': entrypointPath,
                'import_map_path': importMapPath,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to create project's function`,
            },
        });
    }
    /**
     * List all functions
     * Returns all functions you've previously added to the specified project.
     * @returns FunctionResponse
     * @throws ApiError
     */
    public getFunctions({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<Array<FunctionResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/functions',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's functions`,
            },
        });
    }
    /**
     * Retrieve a function
     * Retrieves a function with the specified slug and project.
     * @returns FunctionSlugResponse
     * @throws ApiError
     */
    public getFunction({
        ref,
        functionSlug,
    }: {
        /**
         * Project ref
         */
        ref: string,
        /**
         * Function slug
         */
        functionSlug: string,
    }): CancelablePromise<FunctionSlugResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/functions/{function_slug}',
            path: {
                'ref': ref,
                'function_slug': functionSlug,
            },
            errors: {
                500: `Failed to retrieve function with given slug`,
            },
        });
    }
    /**
     * Update a function
     * Updates a function with the specified slug and project.
     * @returns FunctionResponse
     * @throws ApiError
     */
    public updateFunction({
        ref,
        functionSlug,
        requestBody,
        slug,
        name,
        verifyJwt,
        importMap,
        entrypointPath,
        importMapPath,
    }: {
        /**
         * Project ref
         */
        ref: string,
        /**
         * Function slug
         */
        functionSlug: string,
        requestBody: V1UpdateFunctionBody,
        slug?: string,
        name?: string,
        verifyJwt?: boolean,
        importMap?: boolean,
        entrypointPath?: string,
        importMapPath?: string,
    }): CancelablePromise<FunctionResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/projects/{ref}/functions/{function_slug}',
            path: {
                'ref': ref,
                'function_slug': functionSlug,
            },
            query: {
                'slug': slug,
                'name': name,
                'verify_jwt': verifyJwt,
                'import_map': importMap,
                'entrypoint_path': entrypointPath,
                'import_map_path': importMapPath,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update function with given slug`,
            },
        });
    }
    /**
     * Delete a function
     * Deletes a function with the specified slug from the specified project.
     * @returns any
     * @throws ApiError
     */
    public deleteFunction({
        ref,
        functionSlug,
    }: {
        /**
         * Project ref
         */
        ref: string,
        /**
         * Function slug
         */
        functionSlug: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/functions/{function_slug}',
            path: {
                'ref': ref,
                'function_slug': functionSlug,
            },
            errors: {
                500: `Failed to delete function with given slug`,
            },
        });
    }
    /**
     * Retrieve a function body
     * Retrieves a function body for the specified slug and project.
     * @returns any
     * @throws ApiError
     */
    public getFunctionBody({
        ref,
        functionSlug,
    }: {
        /**
         * Project ref
         */
        ref: string,
        /**
         * Function slug
         */
        functionSlug: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/functions/{function_slug}/body',
            path: {
                'ref': ref,
                'function_slug': functionSlug,
            },
            errors: {
                500: `Failed to retrieve function body with given slug`,
            },
        });
    }
}
