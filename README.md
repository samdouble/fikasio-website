# fikasio-website

This is the website for [fikas.io](https://fikas.io)

## Technologies & Languages

- Node
- TypeScript
- Next.js
- React
- CircleCI
- DigitalOcean App Platform

## Development

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

1. Push to any branch.
2. CircleCI will launch a Next.js build.
3. The DigitalOcean App Platform is automatically going to serve the new version of the website


This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
