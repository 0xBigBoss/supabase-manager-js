/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateAuthConfigBody = {
    site_url?: string;
    disable_signup?: boolean;
    jwt_exp?: number;
    smtp_admin_email?: string;
    smtp_host?: string;
    smtp_port?: string;
    smtp_user?: string;
    smtp_pass?: string;
    smtp_max_frequency?: number;
    smtp_sender_name?: string;
    mailer_allow_unverified_email_sign_ins?: boolean;
    mailer_autoconfirm?: boolean;
    mailer_subjects_invite?: string;
    mailer_subjects_confirmation?: string;
    mailer_subjects_recovery?: string;
    mailer_subjects_email_change?: string;
    mailer_subjects_magic_link?: string;
    mailer_templates_invite_content?: string;
    mailer_templates_confirmation_content?: string;
    mailer_templates_recovery_content?: string;
    mailer_templates_email_change_content?: string;
    mailer_templates_magic_link_content?: string;
    mfa_max_enrolled_factors?: number;
    uri_allow_list?: string;
    external_email_enabled?: boolean;
    external_phone_enabled?: boolean;
    saml_enabled?: boolean;
    security_captcha_enabled?: boolean;
    security_captcha_provider?: string;
    security_captcha_secret?: string;
    sessions_timebox?: number;
    sessions_inactivity_timeout?: number;
    sessions_single_per_user?: boolean;
    sessions_tags?: string;
    rate_limit_email_sent?: number;
    rate_limit_sms_sent?: number;
    rate_limit_verify?: number;
    rate_limit_token_refresh?: number;
    mailer_secure_email_change_enabled?: boolean;
    refresh_token_rotation_enabled?: boolean;
    password_hibp_enabled?: boolean;
    password_min_length?: number;
    password_required_characters?: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789' | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789' | 'abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*()_+-=[]{};\'\\:"|<>?,./`~' | '';
    security_manual_linking_enabled?: boolean;
    security_update_password_require_reauthentication?: boolean;
    security_refresh_token_reuse_interval?: number;
    mailer_otp_exp?: number;
    sms_autoconfirm?: boolean;
    sms_max_frequency?: number;
    sms_otp_exp?: number;
    sms_otp_length?: number;
    sms_provider?: string;
    sms_messagebird_access_key?: string;
    sms_messagebird_originator?: string;
    sms_test_otp?: string;
    sms_test_otp_valid_until?: string;
    sms_textlocal_api_key?: string;
    sms_textlocal_sender?: string;
    sms_twilio_account_sid?: string;
    sms_twilio_auth_token?: string;
    sms_twilio_content_sid?: string;
    sms_twilio_message_service_sid?: string;
    sms_twilio_verify_account_sid?: string;
    sms_twilio_verify_auth_token?: string;
    sms_twilio_verify_message_service_sid?: string;
    sms_vonage_api_key?: string;
    sms_vonage_api_secret?: string;
    sms_vonage_from?: string;
    sms_template?: string;
    hook_mfa_verification_attempt_enabled?: boolean;
    hook_mfa_verification_attempt_uri?: string;
    hook_password_verification_attempt_enabled?: boolean;
    hook_password_verification_attempt_uri?: string;
    hook_custom_access_token_enabled?: boolean;
    hook_custom_access_token_uri?: string;
    external_apple_enabled?: boolean;
    external_apple_client_id?: string;
    external_apple_secret?: string;
    external_apple_additional_client_ids?: string;
    external_azure_enabled?: boolean;
    external_azure_client_id?: string;
    external_azure_secret?: string;
    external_azure_url?: string;
    external_bitbucket_enabled?: boolean;
    external_bitbucket_client_id?: string;
    external_bitbucket_secret?: string;
    external_discord_enabled?: boolean;
    external_discord_client_id?: string;
    external_discord_secret?: string;
    external_facebook_enabled?: boolean;
    external_facebook_client_id?: string;
    external_facebook_secret?: string;
    external_figma_enabled?: boolean;
    external_figma_client_id?: string;
    external_figma_secret?: string;
    external_github_enabled?: boolean;
    external_github_client_id?: string;
    external_github_secret?: string;
    external_gitlab_enabled?: boolean;
    external_gitlab_client_id?: string;
    external_gitlab_secret?: string;
    external_gitlab_url?: string;
    external_google_enabled?: boolean;
    external_google_client_id?: string;
    external_google_secret?: string;
    external_google_additional_client_ids?: string;
    external_google_skip_nonce_check?: boolean;
    external_kakao_enabled?: boolean;
    external_kakao_client_id?: string;
    external_kakao_secret?: string;
    external_keycloak_enabled?: boolean;
    external_keycloak_client_id?: string;
    external_keycloak_secret?: string;
    external_keycloak_url?: string;
    external_linkedin_oidc_enabled?: boolean;
    external_linkedin_oidc_client_id?: string;
    external_linkedin_oidc_secret?: string;
    external_notion_enabled?: boolean;
    external_notion_client_id?: string;
    external_notion_secret?: string;
    external_slack_enabled?: boolean;
    external_slack_client_id?: string;
    external_slack_secret?: string;
    external_spotify_enabled?: boolean;
    external_spotify_client_id?: string;
    external_spotify_secret?: string;
    external_twitch_enabled?: boolean;
    external_twitch_client_id?: string;
    external_twitch_secret?: string;
    external_twitter_enabled?: boolean;
    external_twitter_client_id?: string;
    external_twitter_secret?: string;
    external_workos_enabled?: boolean;
    external_workos_client_id?: string;
    external_workos_secret?: string;
    external_workos_url?: string;
    external_zoom_enabled?: boolean;
    external_zoom_client_id?: string;
    external_zoom_secret?: string;
};
