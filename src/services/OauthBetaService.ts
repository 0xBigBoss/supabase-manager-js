/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OAuthTokenBody } from '../models/OAuthTokenBody';
import type { OAuthTokenResponse } from '../models/OAuthTokenResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OauthBetaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Authorize user through oauth
     * @returns void
     * @throws ApiError
     */
    public authorize({
        clientId,
        responseType,
        redirectUri,
        scope,
        state,
        responseMode,
        codeChallenge,
        codeChallengeMethod,
    }: {
        clientId: string,
        responseType: 'code' | 'token' | 'id_token token',
        redirectUri: string,
        scope?: string,
        state?: string,
        responseMode?: string,
        codeChallenge?: string,
        codeChallengeMethod?: 'plain' | 'sha256' | 'S256',
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/oauth/authorize',
            query: {
                'client_id': clientId,
                'response_type': responseType,
                'redirect_uri': redirectUri,
                'scope': scope,
                'state': state,
                'response_mode': responseMode,
                'code_challenge': codeChallenge,
                'code_challenge_method': codeChallengeMethod,
            },
        });
    }
    /**
     * Exchange auth code for user's access and refresh token
     * @returns OAuthTokenResponse
     * @throws ApiError
     */
    public token({
        formData,
    }: {
        formData: OAuthTokenBody,
    }): CancelablePromise<OAuthTokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/oauth/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}
