import { JSDOM } from "jsdom"
import { Blob } from 'blob-polyfill';
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
global.Blob = Blob
