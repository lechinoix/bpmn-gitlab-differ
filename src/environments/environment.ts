// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { GITLAB_TOKEN } from './environment.secret';

export const environment = {
  production: false,
  gitProvider: {
    baseUrl: 'http://repo1.laforge.cloud.bpifrance.fr',
    graphQLPath: '/api/graphql',
    restPath: '/api/v4',
    token: GITLAB_TOKEN
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
