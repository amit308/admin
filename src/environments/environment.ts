// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/v1/',
  //apiBaseUrl: 'https://dev-onlinefoodinventoryde.herokuapp.com/v1/',
  //apiBaseUrl: 'https://demo-foodinventoryde.herokuapp.com/v1/',
  //apiBaseUrl: 'https://foodinventoryuk.herokuapp.com/v1/',
  //apiBaseUrl: 'https://foodinventorygerman.herokuapp.com/v1/',
  socketURL: 'http://localhost:3000',
  //socketURL: 'https://dev-onlinefoodinventoryde.herokuapp.com',
  //socketURL: 'https://demo-foodinventoryde.herokuapp.com',
  cover: 'http://localhost:3000/v1/restaurantService/downloadRestaurantImage?option=COVER&id=',
  logo: 'http://localhost:3000/v1/restaurantService/downloadRestaurantImage?option=ICON&id='
};
