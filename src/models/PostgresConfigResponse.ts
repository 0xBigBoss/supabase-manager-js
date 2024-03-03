/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PostgresConfigResponse = {
    statement_timeout?: string;
    effective_cache_size?: string;
    maintenance_work_mem?: string;
    max_connections?: number;
    max_locks_per_transaction?: number;
    max_parallel_maintenance_workers?: number;
    max_parallel_workers?: number;
    max_parallel_workers_per_gather?: number;
    max_worker_processes?: number;
    shared_buffers?: string;
    work_mem?: string;
    session_replication_role?: 'origin' | 'replica' | 'local';
};

