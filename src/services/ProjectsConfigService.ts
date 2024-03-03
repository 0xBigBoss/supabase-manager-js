/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthConfigResponse } from '../models/AuthConfigResponse';
import type { PostgresConfigResponse } from '../models/PostgresConfigResponse';
import type { UpdateAuthConfigBody } from '../models/UpdateAuthConfigBody';
import type { UpdatePostgresConfigBody } from '../models/UpdatePostgresConfigBody';
import type { V1PgbouncerConfigResponse } from '../models/V1PgbouncerConfigResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsConfigService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets project's Postgres config
     * @returns PostgresConfigResponse
     * @throws ApiError
     */
    public getConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<PostgresConfigResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/config/database/postgres',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's Postgres config`,
            },
        });
    }
    /**
     * Updates project's Postgres config
     * @returns PostgresConfigResponse
     * @throws ApiError
     */
    public updateConfig({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: UpdatePostgresConfigBody,
    }): CancelablePromise<PostgresConfigResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/projects/{ref}/config/database/postgres',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project's Postgres config`,
            },
        });
    }
    /**
     * Get project's pgbouncer config
     * @returns V1PgbouncerConfigResponse
     * @throws ApiError
     */
    public v1GetPgbouncerConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<V1PgbouncerConfigResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/config/database/pgbouncer',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's pgbouncer config`,
            },
        });
    }
    /**
     * Gets project's auth config
     * @returns AuthConfigResponse
     * @throws ApiError
     */
    public getV1AuthConfig({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<AuthConfigResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/config/auth',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project's auth config`,
            },
        });
    }
    /**
     * Updates a project's auth config
     * @returns AuthConfigResponse
     * @throws ApiError
     */
    public updateV1AuthConfig({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: UpdateAuthConfigBody,
    }): CancelablePromise<AuthConfigResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/projects/{ref}/config/auth',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update project's auth config`,
            },
        });
    }
}
