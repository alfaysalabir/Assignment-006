module.exports = [
"[turbopack-node]/transforms/postcss.ts?config=[project]/fitlog/postcss.config.js { CONFIG => \"[project]/fitlog/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/01kx_0kd_a_2._.js",
  "chunks/[root-of-the-server]__1e1c3o8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts?config=[project]/fitlog/postcss.config.js { CONFIG => \"[project]/fitlog/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];