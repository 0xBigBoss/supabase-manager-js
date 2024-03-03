/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateCustomHostnameResponse = {
    status: '1_not_started' | '2_initiated' | '3_challenge_verified' | '4_origin_setup_completed' | '5_services_reconfigured';
    custom_hostname: string;
    data: Record<string, any>;
};

