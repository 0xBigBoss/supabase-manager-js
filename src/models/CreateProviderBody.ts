/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttributeMapping } from './AttributeMapping';
export type CreateProviderBody = {
    /**
     * What type of provider will be created
     */
    type: 'saml';
    metadata_xml?: string;
    metadata_url?: string;
    domains?: Array<string>;
    attribute_mapping?: AttributeMapping;
};

