/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseUpgradeStatusResponse } from '../models/DatabaseUpgradeStatusResponse';
import type { ProjectUpgradeEligibilityResponse } from '../models/ProjectUpgradeEligibilityResponse';
import type { ProjectUpgradeInitiateResponse } from '../models/ProjectUpgradeInitiateResponse';
import type { UpgradeDatabaseBody } from '../models/UpgradeDatabaseBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DatabaseVersionUpgradeBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Upgrades the project's Postgres version
     * @returns ProjectUpgradeInitiateResponse
     * @throws ApiError
     */
    public upgradeProject({
        ref,
        requestBody,
    }: {
        /**
         * Project ref
         */
        ref: string,
        requestBody: UpgradeDatabaseBody,
    }): CancelablePromise<ProjectUpgradeInitiateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/projects/{ref}/upgrade',
            path: {
                'ref': ref,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Failed to initiate project upgrade`,
            },
        });
    }
    /**
     * Returns the project's eligibility for upgrades
     * @returns ProjectUpgradeEligibilityResponse
     * @throws ApiError
     */
    public upgradeEligibilityInformation({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<ProjectUpgradeEligibilityResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/upgrade/eligibility',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to determine project upgrade eligibility`,
            },
        });
    }
    /**
     * Gets the latest status of the project's upgrade
     * @returns DatabaseUpgradeStatusResponse
     * @throws ApiError
     */
    public getUpgradeStatus({
        ref,
    }: {
        /**
         * Project ref
         */
        ref: string,
    }): CancelablePromise<DatabaseUpgradeStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/projects/{ref}/upgrade/status',
            path: {
                'ref': ref,
            },
            errors: {
                500: `Failed to retrieve project upgrade status`,
            },
        });
    }
}
