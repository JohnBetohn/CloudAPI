interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'bz8iWgkHL3DteUgPHl2OgsJY3Qn7FxKy',
  domain: 'cloudapi.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
