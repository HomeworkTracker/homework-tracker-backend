## MySQL Setup
Setup `.env` file as you would like similar to the `.env.example` file. 

Create a `sqlData` folder in the root directory, this will be where the MySQL volume is linked to. Finally run
```
docker-compose up
```
Also note the use of `-d` flag to run the container as detached

## Scripts

### `npm run build:live`
Runs nodemon along with typescript build and runs the program, watches the entirety of the `src` folder. This is the main script to run for development.

### `npm run build`
Builds the project into the `build` folder.

### `npm run lint`
Run linting for the `src` folder