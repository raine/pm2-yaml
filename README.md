# pm2-yaml

Get JSON app declaration for PM2 from a directory where each YAML file is an
app.

```
Usage: pm2-yaml [dir with yaml] {start, stop, restart, delete}
```

Takes advantage of this feature: [JSON app configuration via pipe from stdout](https://github.com/Unitech/PM2/blob/development/ADVANCED_README.md#json-app-configuration-via-pipe-from-stdout)
