/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FunctionResponse = {
    id: string;
    slug: string;
    name: string;
    status: 'ACTIVE' | 'REMOVED' | 'THROTTLED';
    version: number;
    created_at: number;
    updated_at: number;
    verify_jwt?: boolean;
    import_map?: boolean;
    entrypoint_path?: string;
    import_map_path?: string;
};

