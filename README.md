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

### example

```
$ cat app-1.yaml app-2.yaml
---
  name: app-1
  script: "index.js"
  cwd: "/Users/rainevi/code/app-1/"
---
  name: app-2
  script: "index.js"
  cwd: "/Users/rainevi/code/app-2/"

$ pm2-yaml start .
[PM2] Process launched
[PM2] Process launched
┌──────────┬────┬──────┬───────┬────────┬───────────┬────────┬─────────────┬──────────┐
│ App name │ id │ mode │ PID   │ status │ restarted │ uptime │      memory │ watching │
├──────────┼────┼──────┼───────┼────────┼───────────┼────────┼─────────────┼──────────┤
│ app-1    │ 17 │ fork │ 48851 │ online │         0 │ 0s     │ 15.066 MB   │ disabled │
│ app-2    │ 18 │ fork │ 48852 │ online │         0 │ 0s     │ 15.180 MB   │ disabled │
└──────────┴────┴──────┴───────┴────────┴───────────┴────────┴─────────────┴──────────┘
```
