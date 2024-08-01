
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Backend API

Backend API can be found here : `https://github.com/Laura398/alten-shop-back.git`. Install and run it following the backend repository README.md.
Make sure in `src/app/product/product.service.ts` :
- line 9 is commented
- line 10 is not commented
- line 11 is as follow :
```typescript
private isJsonServer: boolean = false;
```

## Json server

If you want to use Json server instead of backend, run `npm run server` to launch the Json server. It is available at endpoint `http://localhost:3008/data`.
In `src/app/product/product.service.ts` :
- uncomment line 9
- comment line 10
- write this instead of line 11 :
```typescript
private isJsonServer: boolean = true;
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## serve a Build

$ npm i -g serve
$ cd dist/product-trial
\$ serve

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
