/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BranchResponse = {
    id: string;
    name: string;
    project_ref: string;
    parent_project_ref: string;
    is_default: boolean;
    git_branch?: string;
    pr_number?: number;
    reset_on_push: boolean;
    status: 'CREATING_PROJECT' | 'RUNNING_MIGRATIONS' | 'MIGRATIONS_PASSED' | 'MIGRATIONS_FAILED';
    created_at: string;
    updated_at: string;
};

