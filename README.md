# AngularAuthApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploying to Netlify

1. Push the `Lab7` project to a GitHub repository.
2. In Netlify, connect that repository and set the build command to `npm run build`.
3. Set the publish directory to `dist/angular-auth-app/browser`.
4. Netlify will use `netlify.toml` and the `_redirects` file from `src/public` to support Angular routing.
5. If your API is hosted elsewhere, keep `src/environments/environment.prod.ts` pointing to that public API URL.

## Backend and database

The frontend is separated from the backend. The `node-mysql-api` folder is the backend that uses MySQL.

To use a real database:

1. Deploy the backend to a host like Railway, Render, or Heroku.
2. Use a hosted MySQL database service and set the database credentials as environment variables.
3. Update `Lab7/src/environments/environment.prod.ts` with the public backend URL.
4. Deploy the frontend to Netlify.

The backend can read DB configuration from environment variables, and a `.env.example` file is included in `node-mysql-api`.
