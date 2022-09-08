# Migration from 1.x.x to 2.x

## Breaking Changes

* Named parameters are now required for passing custom `data`, `filename`, and `delimeter` props.
* Support for the IE `navigator.msSaveBlob` method was removed from the code (as it was removed in new versions of TypeScript).
* File name can be provided without `.csv` extension, it will be added automatically

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
