/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthHealthResponse } from './AuthHealthResponse';
import type { RealtimeHealthResponse } from './RealtimeHealthResponse';
export type V1ServiceHealthResponse = {
    info?: (AuthHealthResponse | RealtimeHealthResponse);
    name: 'auth' | 'db' | 'pooler' | 'realtime' | 'rest' | 'storage';
    healthy: boolean;
    status: 'COMING_UP' | 'ACTIVE_HEALTHY' | 'UNHEALTHY';
    error?: string;
};

