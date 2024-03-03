/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchDetailResponse } from '../models/BranchDetailResponse';
import type { BranchResponse } from '../models/BranchResponse';
import type { CreateBranchBody } from '../models/CreateBranchBody';
import type { UpdateBranchBody } from '../models/UpdateBranchBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DatabaseBranchesBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get database branch config
     * Fetches configurations of the specified database branch
     * @returns BranchDetailResponse
     * @throws ApiError
     */
    public getBranchDetails({
        branchId,
    }: {
        /**
         * Branch ID
         */
        branchId: string,
    }): CancelablePromise<BranchDetailResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/branches/{branch_id}',
            path: {
                'branch_id': branchId,
            },
            errors: {
                500: `Failed to retrieve database branch`,
            },
        });
    }
    /**
     * Update database branch config
     * Updates the configuration of the specified database branch
     * @returns BranchResponse
     * @throws ApiError
     */
    public updateBranch({
        branchId,
        requestBody,
    }: {
        /**
         * Branch ID
         */
        branchId: string,
        requestBody: UpdateBranchBody,
    }): CancelablePromise<BranchResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/branches/{branch_id}',
            path: {
                'branch_id': branchId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to update database branch`,
            },
        });
    }
    /**
     * Delete a database branch
     * Deletes the specified database branch
     * @returns any
     * @throws ApiError
     */
    public deleteBranch({
        branchId,
    }: {
        /**
         * Branch ID
         */
        branchId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/branches/{branch_id}',
            path: {
                'branch_id': branchId,
            },
            errors: {
                500: `Failed to delete database branch`,
            },
        });
    }
    /**
     * List all database branches
     * Returns all database branches of the specified project.
     * @returns BranchResponse
     * @throws ApiError
     */
    public getBranches({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<Array<BranchResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/branches',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve database branches`,
            },
        });
    }
    /**
     * Create a database branch
     * Creates a database branch from the specified project.
     * @returns BranchResponse
     * @throws ApiError
     */
    public createBranch({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: CreateBranchBody,
    }): CancelablePromise<BranchResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/branches',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to create database branch`,
            },
        });
    }
    /**
     * Disables preview branching
     * Disables preview branching for the specified project
     * @returns any
     * @throws ApiError
     */
    public disableBranch({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/projects/{ref}/branches',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to disable preview branching`,
            },
        });
    }
}
