/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Domain } from './Domain';
import type { SamlDescriptor } from './SamlDescriptor';
export type UpdateProviderResponse = {
    id: string;
    saml?: SamlDescriptor;
    domains?: Array<Domain>;
    created_at?: string;
    updated_at?: string;
};

