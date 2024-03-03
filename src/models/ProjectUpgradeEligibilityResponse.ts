/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectVersion } from './ProjectVersion';
export type ProjectUpgradeEligibilityResponse = {
    eligible: boolean;
    current_app_version: string;
    latest_app_version: string;
    target_upgrade_versions: Array<ProjectVersion>;
    potential_breaking_changes: Array<string>;
    duration_estimate_hours: number;
    legacy_auth_custom_roles: Array<string>;
    extension_dependent_objects: Array<string>;
};

