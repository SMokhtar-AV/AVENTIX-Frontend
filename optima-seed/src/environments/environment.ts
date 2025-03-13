// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  keycloak: {
    issuer: 'http://localhost:8180/auth/',
    realm: 'UsersManagement',
    clientId: 'Angular-app'
  },
  admin_keycloak: 'http://localhost:8180/auth/admin/realms/UsersManagement/',
  api_host: 'http://localhost:8180'
};
