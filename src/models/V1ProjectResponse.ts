/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V1DatabaseResponse } from './V1DatabaseResponse';
export type V1ProjectResponse = {
    /**
     * Id of your project
     */
    id: string;
    /**
     * Slug of your organization
     */
    organization_id: string;
    /**
     * Name of your project
     */
    name: string;
    /**
     * Region of your project
     */
    region: string;
    /**
     * Creation timestamp
     */
    created_at: string;
    database?: V1DatabaseResponse;
};

