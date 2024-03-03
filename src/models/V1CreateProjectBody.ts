/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DesiredInstanceSize } from './DesiredInstanceSize';
export type V1CreateProjectBody = {
    /**
     * Database password
     */
    db_pass: string;
    /**
     * Name of your project, should not contain dots
     */
    name: string;
    /**
     * Slug of your organization
     */
    organization_id: string;
    /**
     * Subscription plan is now set on organization level and is ignored in this request
     * @deprecated
     */
    plan?: 'free' | 'pro';
    /**
     * Region you want your server to reside in
     */
    region: 'us-east-1' | 'us-west-1' | 'us-west-2' | 'ap-east-1' | 'ap-southeast-1' | 'ap-northeast-1' | 'ap-northeast-2' | 'ap-southeast-2' | 'eu-west-1' | 'eu-west-2' | 'eu-west-3' | 'eu-central-1' | 'ca-central-1' | 'ap-south-1' | 'sa-east-1';
    /**
     * @deprecated
     */
    kps_enabled?: boolean;
    desired_instance_size?: DesiredInstanceSize;
};

