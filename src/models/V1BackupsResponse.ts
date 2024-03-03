/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { V1Backup } from './V1Backup';
import type { V1PhysicalBackup } from './V1PhysicalBackup';
export type V1BackupsResponse = {
    region: string;
    walg_enabled: boolean;
    pitr_enabled: boolean;
    backups: Array<V1Backup>;
    physical_backup_data: V1PhysicalBackup;
};

