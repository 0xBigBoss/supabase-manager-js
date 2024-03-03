/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BackupsService } from './services/BackupsService';
import { CustomHostnameBetaService } from './services/CustomHostnameBetaService';
import { DatabaseBranchesBetaService } from './services/DatabaseBranchesBetaService';
import { DatabaseReadonlyModeService } from './services/DatabaseReadonlyModeService';
import { DatabaseVersionUpgradeBetaService } from './services/DatabaseVersionUpgradeBetaService';
import { FunctionsService } from './services/FunctionsService';
import { NetworkBansBetaService } from './services/NetworkBansBetaService';
import { NetworkRestrictionsBetaService } from './services/NetworkRestrictionsBetaService';
import { OauthBetaService } from './services/OauthBetaService';
import { OrganizationsService } from './services/OrganizationsService';
import { PgsodiumBetaService } from './services/PgsodiumBetaService';
import { ProjectsService } from './services/ProjectsService';
import { ProjectsBetaService } from './services/ProjectsBetaService';
import { ProjectsConfigService } from './services/ProjectsConfigService';
import { ReadReplicasBetaService } from './services/ReadReplicasBetaService';
import { SecretsService } from './services/SecretsService';
import { ServicesService } from './services/ServicesService';
import { SnippetsService } from './services/SnippetsService';
import { SslEnforcementBetaService } from './services/SslEnforcementBetaService';
import { SsoService } from './services/SsoService';
import { StorageService } from './services/StorageService';
import { VanitySubdomainBetaService } from './services/VanitySubdomainBetaService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class SupabaseManagementClient {
    public readonly backups: BackupsService;
    public readonly customHostnameBeta: CustomHostnameBetaService;
    public readonly databaseBranchesBeta: DatabaseBranchesBetaService;
    public readonly databaseReadonlyMode: DatabaseReadonlyModeService;
    public readonly databaseVersionUpgradeBeta: DatabaseVersionUpgradeBetaService;
    public readonly functions: FunctionsService;
    public readonly networkBansBeta: NetworkBansBetaService;
    public readonly networkRestrictionsBeta: NetworkRestrictionsBetaService;
    public readonly oauthBeta: OauthBetaService;
    public readonly organizations: OrganizationsService;
    public readonly pgsodiumBeta: PgsodiumBetaService;
    public readonly projects: ProjectsService;
    public readonly projectsBeta: ProjectsBetaService;
    public readonly projectsConfig: ProjectsConfigService;
    public readonly readReplicasBeta: ReadReplicasBetaService;
    public readonly secrets: SecretsService;
    public readonly services: ServicesService;
    public readonly snippets: SnippetsService;
    public readonly sslEnforcementBeta: SslEnforcementBetaService;
    public readonly sso: SsoService;
    public readonly storage: StorageService;
    public readonly vanitySubdomainBeta: VanitySubdomainBetaService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.backups = new BackupsService(this.request);
        this.customHostnameBeta = new CustomHostnameBetaService(this.request);
        this.databaseBranchesBeta = new DatabaseBranchesBetaService(this.request);
        this.databaseReadonlyMode = new DatabaseReadonlyModeService(this.request);
        this.databaseVersionUpgradeBeta = new DatabaseVersionUpgradeBetaService(this.request);
        this.functions = new FunctionsService(this.request);
        this.networkBansBeta = new NetworkBansBetaService(this.request);
        this.networkRestrictionsBeta = new NetworkRestrictionsBetaService(this.request);
        this.oauthBeta = new OauthBetaService(this.request);
        this.organizations = new OrganizationsService(this.request);
        this.pgsodiumBeta = new PgsodiumBetaService(this.request);
        this.projects = new ProjectsService(this.request);
        this.projectsBeta = new ProjectsBetaService(this.request);
        this.projectsConfig = new ProjectsConfigService(this.request);
        this.readReplicasBeta = new ReadReplicasBetaService(this.request);
        this.secrets = new SecretsService(this.request);
        this.services = new ServicesService(this.request);
        this.snippets = new SnippetsService(this.request);
        this.sslEnforcementBeta = new SslEnforcementBetaService(this.request);
        this.sso = new SsoService(this.request);
        this.storage = new StorageService(this.request);
        this.vanitySubdomainBeta = new VanitySubdomainBetaService(this.request);
    }
}

