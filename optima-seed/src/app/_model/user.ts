export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    enabled: boolean;
    totp: boolean;
    emailVerified: boolean;
    disableableCredentialTypes: object[];
    requiredActions: object[];
    notBefore: number;
    groups: string[];
    credentials: [{
        type: string;
        value: string;
        temporary: boolean;
    }];
    attributes: [Map<string, string>];
}
