/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NetworkRestrictionsRequest } from './NetworkRestrictionsRequest';
export type NetworkRestrictionsResponse = {
    entitlement: 'disallowed' | 'allowed';
    config: NetworkRestrictionsRequest;
    old_config?: NetworkRestrictionsRequest;
    status: 'stored' | 'applied';
};

