/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SnippetList } from '../models/SnippetList';
import type { SnippetResponse } from '../models/SnippetResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SnippetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Lists SQL snippets for the logged in user
     * @returns SnippetList
     * @throws ApiError
     */
    public listSnippets({
        projectRef,
    }: {
        projectRef?: string,
    }): CancelablePromise<SnippetList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/snippets',
            query: {
                'project_ref': projectRef,
            },
            errors: {
                500: `Failed to list user's SQL snippets`,
            },
        });
    }
    /**
     * Gets a specific SQL snippet
     * @returns SnippetResponse
     * @throws ApiError
     */
    public getSnippet({
        id,
    }: {
        id: string,
    }): CancelablePromise<SnippetResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/snippets/{id}',
            path: {
                'id': id,
            },
            errors: {
                500: `Failed to retrieve SQL snippet`,
            },
        });
    }
}
