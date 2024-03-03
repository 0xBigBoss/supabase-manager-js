/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BranchDetailResponse = {
    db_port: number;
    ref: string;
    postgres_version: string;
    status: 'ACTIVE_HEALTHY' | 'ACTIVE_UNHEALTHY' | 'COMING_UP' | 'GOING_DOWN' | 'INACTIVE' | 'INIT_FAILED' | 'REMOVED' | 'RESTORING' | 'UNKNOWN' | 'UPGRADING' | 'PAUSING';
    db_host: string;
    db_user?: string;
    db_pass?: string;
    jwt_secret?: string;
};

