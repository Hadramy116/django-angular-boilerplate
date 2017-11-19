### Getting Started
Run Following commands:

```
cd frontend
yarn install
# or
npm install
```

> You have to have Node (version >= 6) installed on your machine. This project depends on `webpack-dev-server` which recommends you use version 6 for the moment because there are some known issues with version 7. *In my machine I have been using node v7 with no issues.*

### Serving through Django
Run:

```
yarn build
```
Now run the django server and hit: `host:port/front/index`
### Running in development mode
```sh
yarn start
# or
npm start # I haven't tested it with npm though
```

The app is available on [localhost:3000](http://localhost:3000)

### Building for production
```sh
yarn run build
```

### Running the production build
```
yarn run preview
```

The app is available on [localhost:3000](http://localhost:3000)

### Testing

Sorry, no tests yet. Use it at your own risk.

### Linting

```sh
yarn run lint
# or to autofix
yarn run lint:fix
```
