### Basic run node using pm2

#### Start

```bash
pm2 start .\ecosystem.config.js
```

#### Scale instances

```js
pm2 scale app-name 3
```

#### List

```js
pm2 ls

```

#### Stop by name

```js
pm2 stop app-name
```

#### Stop all

```js
pm2 stop all
```

#### Start all

```js
pm2 start all
```

#### Start by name

```js
pm2 start app-name
```

#### Delete by name

```js
pm2 delete app-name
```

#### Delete all

```js
pm2 delete all
```

#### Display logs

```js
pm2 logs
```

```js
pm2 logs --lines 200
```

#### Terminal Based Dashboard

```js
pm2 monit
```

#### Monitoring & Diagnostic Web Interface

```js
pm2 plus
```

#### Cluster mode

```js
pm2 start app.js -i max
```
