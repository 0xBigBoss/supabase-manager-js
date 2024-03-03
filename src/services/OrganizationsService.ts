/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganizationBodyV1 } from '../models/CreateOrganizationBodyV1';
import type { OrganizationResponseV1 } from '../models/OrganizationResponseV1';
import type { V1OrganizationMemberResponse } from '../models/V1OrganizationMemberResponse';
import type { V1OrganizationSlugResponse } from '../models/V1OrganizationSlugResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all organizations
     * Returns a list of organizations that you currently belong to.
     * @returns OrganizationResponseV1
     * @throws ApiError
     */
    public getOrganizations(): CancelablePromise<Array<OrganizationResponseV1>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/organizations',
            errors: {
                500: `Unexpected error listing organizations`,
            },
        });
    }
    /**
     * Create an organization
     * @returns OrganizationResponseV1
     * @throws ApiError
     */
    public createOrganization({
        requestBody,
    }: {
        requestBody: CreateOrganizationBodyV1,
    }): CancelablePromise<OrganizationResponseV1> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/organizations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Unexpected error creating an organization`,
            },
        });
    }
    /**
     * List members of an organization
     * @returns V1OrganizationMemberResponse
     * @throws ApiError
     */
    public v1ListOrganizationMembers({
        slug,
    }: {
        slug: string,
    }): CancelablePromise<Array<V1OrganizationMemberResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/organizations/{slug}/members',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Gets information about the organization
     * @returns V1OrganizationSlugResponse
     * @throws ApiError
     */
    public getOrganization({
        slug,
    }: {
        slug: string,
    }): CancelablePromise<V1OrganizationSlugResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/organizations/{slug}',
            path: {
                'slug': slug,
            },
        });
    }
}
