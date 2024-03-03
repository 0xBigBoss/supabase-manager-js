/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OAuthTokenBody = {
    grant_type: 'authorization_code' | 'refresh_token';
    client_id: string;
    client_secret: string;
    code?: string;
    code_verifier?: string;
    redirect_uri?: string;
    refresh_token?: string;
};

