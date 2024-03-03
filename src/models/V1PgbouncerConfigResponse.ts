/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type V1PgbouncerConfigResponse = {
    pool_mode?: 'transaction' | 'session' | 'statement';
    default_pool_size?: number;
    ignore_startup_parameters?: string;
    max_client_conn?: number;
    connection_string?: string;
};

