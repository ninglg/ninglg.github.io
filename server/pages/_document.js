const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_1bcaf646._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__c13c000c._.js");
runtime.getOrInstantiateRuntimeModule("[project]/pages/_document.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_document.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
