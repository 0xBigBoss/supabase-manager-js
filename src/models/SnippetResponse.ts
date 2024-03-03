/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SnippetContent } from './SnippetContent';
import type { SnippetProject } from './SnippetProject';
import type { SnippetUser } from './SnippetUser';
export type SnippetResponse = {
    id: string;
    inserted_at: string;
    updated_at: string;
    type: 'sql';
    visibility: 'user' | 'project' | 'org' | 'public';
    name: string;
    description: string | null;
    project: SnippetProject;
    owner: SnippetUser;
    updated_by: SnippetUser;
    content: SnippetContent;
};

