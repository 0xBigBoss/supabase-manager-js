/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingPlanId } from './BillingPlanId';
export type V1OrganizationSlugResponse = {
    plan?: BillingPlanId;
    opt_in_tags: Array<'AI_SQL_GENERATOR_OPT_IN' | 'PREVIEW_BRANCHES_OPT_IN'>;
    id: string;
    name: string;
};

