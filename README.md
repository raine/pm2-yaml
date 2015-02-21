# pm2-yaml [![npm version](https://img.shields.io/npm/v/pm2-yaml.svg)](https://www.npmjs.com/package/pm2-yaml)

Generate JSON app declaration for PM2 from a directory where each YAML file is an
app.

Takes advantage of this feature: [JSON app configuration via pipe from stdout](https://github.com/Unitech/PM2/blob/development/ADVANCED_README.md#json-app-configuration-via-pipe-from-stdout)

```sh
npm install -g pm2-yaml
```

### usage

```
pm2-yaml {start, stop, restart, delete} [dir with yaml]
```
