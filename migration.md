# Migration from 1.x.x to 2.x

## Reason for migration

New version was written in TS and a bit changed the arguments list to make it more convenient and flexible

## Steps

* update to the new version (2.x)
* map arguments on object props. I.e:

```ts
const props = {
  data: data,
  filename: filename,
  delimiter: delimiter
}
csvDownload(props);
```
