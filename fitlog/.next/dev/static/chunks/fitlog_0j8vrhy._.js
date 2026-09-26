(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/fitlog/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/fitlog/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/fitlog/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$context$2f$PlanContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/context/PlanContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LINKS = [
    {
        href: "/#library",
        label: "Workout"
    },
    {
        href: "/my-plan",
        label: "My Plan"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { metrics, saved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$context$2f$PlanContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlan"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isActive = (href)=>{
        if (href === "/my-plan") return pathname === "/my-plan";
        if (href.startsWith("/#")) return pathname === "/";
        return pathname === href;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex shrink-0 items-center gap-2.5",
                        onClick: ()=>setOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "FitLog logo",
                                width: 28,
                                height: 28,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-lg font-bold tracking-wide text-white",
                                children: [
                                    "FIT",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent",
                                        children: "LOG"
                                    }, void 0, false, {
                                        fileName: "[project]/fitlog/components/Navbar.js",
                                        lineNumber: 33,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fitlog/components/Navbar.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-2 md:flex",
                        children: LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `rounded-md px-3 py-2 text-sm font-semibold transition ${isActive(link.href) ? "bg-bg-card text-accent" : "text-muted hover:text-white"}`,
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/fitlog/components/Navbar.js",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/fitlog/components/Navbar.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-2.5 md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/my-plan",
                                className: "badge-plan",
                                "aria-label": "Items in today's plan",
                                children: [
                                    "Plan ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: metrics.exercises
                                    }, void 0, false, {
                                        fileName: "[project]/fitlog/components/Navbar.js",
                                        lineNumber: 58,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/my-plan",
                                className: "badge-saved",
                                "aria-label": "Saved items",
                                children: [
                                    "Saved ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: saved.length
                                    }, void 0, false, {
                                        fileName: "[project]/fitlog/components/Navbar.js",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fitlog/components/Navbar.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center justify-center rounded-md border border-line p-2 text-white md:hidden",
                        onClick: ()=>setOpen((o)=>!o),
                        "aria-label": "Toggle menu",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/fitlog/components/Navbar.js",
                            lineNumber: 71,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/fitlog/components/Navbar.js",
                            lineNumber: 71,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fitlog/components/Navbar.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fitlog/components/Navbar.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-line bg-bg px-5 pb-5 pt-3 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-1",
                        children: LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setOpen(false),
                                    className: `block rounded-md px-3 py-2.5 text-sm font-semibold ${isActive(link.href) ? "bg-bg-card text-accent" : "text-muted"}`,
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/fitlog/components/Navbar.js",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/fitlog/components/Navbar.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/my-plan",
                                className: "badge-plan",
                                onClick: ()=>setOpen(false),
                                children: [
                                    "Plan ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: metrics.exercises
                                    }, void 0, false, {
                                        fileName: "[project]/fitlog/components/Navbar.js",
                                        lineNumber: 95,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/my-plan",
                                className: "badge-saved",
                                onClick: ()=>setOpen(false),
                                children: [
                                    "Saved ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: saved.length
                                    }, void 0, false, {
                                        fileName: "[project]/fitlog/components/Navbar.js",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fitlog/components/Navbar.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fitlog/components/Navbar.js",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fitlog/components/Navbar.js",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fitlog/components/Navbar.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Navbar, "VsIvTob3BUVbIqKubdU7VJsVXvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$context$2f$PlanContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlan"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fitlog/components/ToastContainer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/fitlog/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/fitlog/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/fitlog/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/fitlog/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$context$2f$PlanContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/context/PlanContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ICONS = {
    default: __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
    info: __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
    warn: __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
};
function ToastContainer() {
    _s();
    const { toasts, dismissToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$context$2f$PlanContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlan"])();
    if (!toasts.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0",
        children: toasts.map((toast)=>{
            const Icon = ICONS[toast.tone] || ICONS.default;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-toast-in flex items-center gap-3 rounded-lg border border-line bg-bg-card2 px-4 py-3 shadow-xl shadow-black/40",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 18,
                        className: "shrink-0 text-accent"
                    }, void 0, false, {
                        fileName: "[project]/fitlog/components/ToastContainer.js",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex-1 text-sm font-medium text-white",
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/fitlog/components/ToastContainer.js",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>dismissToast(toast.id),
                        className: "shrink-0 text-muted transition hover:text-white",
                        "aria-label": "Dismiss notification",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/fitlog/components/ToastContainer.js",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fitlog/components/ToastContainer.js",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                ]
            }, toast.id, true, {
                fileName: "[project]/fitlog/components/ToastContainer.js",
                lineNumber: 22,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/fitlog/components/ToastContainer.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ToastContainer, "7OoBXFPbW0yH+Vl4s5e9VQqKKxQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$context$2f$PlanContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlan"]
    ];
});
_c = ToastContainer;
var _c;
__turbopack_context__.k.register(_c, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/fitlog/context/PlanContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlanProvider",
    ()=>PlanProvider,
    "usePlan",
    ()=>usePlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fitlog/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const PlanContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";
const PLAN_CAP = 5;
function readStorage(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function writeStorage(key, value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch  {
    // ignore quota / private-mode errors
    }
}
function PlanProvider({ children }) {
    _s();
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hydrate from localStorage on mount (client only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlanProvider.useEffect": ()=>{
            setPlan(readStorage(PLAN_KEY));
            setSaved(readStorage(SAVED_KEY));
            setHydrated(true);
        }
    }["PlanProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlanProvider.useEffect": ()=>{
            if (hydrated) writeStorage(PLAN_KEY, plan);
        }
    }["PlanProvider.useEffect"], [
        plan,
        hydrated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlanProvider.useEffect": ()=>{
            if (hydrated) writeStorage(SAVED_KEY, saved);
        }
    }["PlanProvider.useEffect"], [
        saved,
        hydrated
    ]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[showToast]": (message, tone = "default")=>{
            const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
            setToasts({
                "PlanProvider.useCallback[showToast]": (t)=>[
                        ...t,
                        {
                            id,
                            message,
                            tone
                        }
                    ]
            }["PlanProvider.useCallback[showToast]"]);
            window.setTimeout({
                "PlanProvider.useCallback[showToast]": ()=>{
                    setToasts({
                        "PlanProvider.useCallback[showToast]": (t)=>t.filter({
                                "PlanProvider.useCallback[showToast]": (toast)=>toast.id !== id
                            }["PlanProvider.useCallback[showToast]"])
                    }["PlanProvider.useCallback[showToast]"]);
                }
            }["PlanProvider.useCallback[showToast]"], 2800);
        }
    }["PlanProvider.useCallback[showToast]"], []);
    const dismissToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[dismissToast]": (id)=>{
            setToasts({
                "PlanProvider.useCallback[dismissToast]": (t)=>t.filter({
                        "PlanProvider.useCallback[dismissToast]": (toast)=>toast.id !== id
                    }["PlanProvider.useCallback[dismissToast]"])
            }["PlanProvider.useCallback[dismissToast]"]);
        }
    }["PlanProvider.useCallback[dismissToast]"], []);
    const addToPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[addToPlan]": (workout)=>{
            let added = false;
            setPlan({
                "PlanProvider.useCallback[addToPlan]": (prev)=>{
                    if (prev.some({
                        "PlanProvider.useCallback[addToPlan]": (w)=>w.id === workout.id
                    }["PlanProvider.useCallback[addToPlan]"])) {
                        showToast("Already in today's plan", "info");
                        return prev;
                    }
                    if (prev.length >= PLAN_CAP) {
                        showToast("Today's plan is full (5 lifts max)", "warn");
                        return prev;
                    }
                    added = true;
                    return [
                        ...prev,
                        {
                            ...workout,
                            done: false
                        }
                    ];
                }
            }["PlanProvider.useCallback[addToPlan]"]);
            if (added) showToast("Added to today's plan");
        }
    }["PlanProvider.useCallback[addToPlan]"], [
        showToast
    ]);
    const addToSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[addToSaved]": (workout)=>{
            let added = false;
            setSaved({
                "PlanProvider.useCallback[addToSaved]": (prev)=>{
                    if (prev.some({
                        "PlanProvider.useCallback[addToSaved]": (w)=>w.id === workout.id
                    }["PlanProvider.useCallback[addToSaved]"])) {
                        showToast("Already saved for later", "info");
                        return prev;
                    }
                    added = true;
                    return [
                        ...prev,
                        workout
                    ];
                }
            }["PlanProvider.useCallback[addToSaved]"]);
            if (added) showToast("Saved for later");
        }
    }["PlanProvider.useCallback[addToSaved]"], [
        showToast
    ]);
    const removeFromPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[removeFromPlan]": (id)=>{
            setPlan({
                "PlanProvider.useCallback[removeFromPlan]": (prev)=>prev.filter({
                        "PlanProvider.useCallback[removeFromPlan]": (w)=>w.id !== id
                    }["PlanProvider.useCallback[removeFromPlan]"])
            }["PlanProvider.useCallback[removeFromPlan]"]);
            showToast("Removed from today's plan");
        }
    }["PlanProvider.useCallback[removeFromPlan]"], [
        showToast
    ]);
    const removeFromSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[removeFromSaved]": (id)=>{
            setSaved({
                "PlanProvider.useCallback[removeFromSaved]": (prev)=>prev.filter({
                        "PlanProvider.useCallback[removeFromSaved]": (w)=>w.id !== id
                    }["PlanProvider.useCallback[removeFromSaved]"])
            }["PlanProvider.useCallback[removeFromSaved]"]);
            showToast("Removed from saved");
        }
    }["PlanProvider.useCallback[removeFromSaved]"], [
        showToast
    ]);
    const markAsDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[markAsDone]": (id)=>{
            setPlan({
                "PlanProvider.useCallback[markAsDone]": (prev)=>prev.map({
                        "PlanProvider.useCallback[markAsDone]": (w)=>w.id === id ? {
                                ...w,
                                done: !w.done
                            } : w
                    }["PlanProvider.useCallback[markAsDone]"])
            }["PlanProvider.useCallback[markAsDone]"]);
            showToast("Marked as done");
        }
    }["PlanProvider.useCallback[markAsDone]"], [
        showToast
    ]);
    const isInPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[isInPlan]": (id)=>plan.some({
                "PlanProvider.useCallback[isInPlan]": (w)=>w.id === id
            }["PlanProvider.useCallback[isInPlan]"])
    }["PlanProvider.useCallback[isInPlan]"], [
        plan
    ]);
    const isSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlanProvider.useCallback[isSaved]": (id)=>saved.some({
                "PlanProvider.useCallback[isSaved]": (w)=>w.id === id
            }["PlanProvider.useCallback[isSaved]"])
    }["PlanProvider.useCallback[isSaved]"], [
        saved
    ]);
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlanProvider.useMemo[metrics]": ()=>{
            const exercises = plan.length;
            const minutes = plan.reduce({
                "PlanProvider.useMemo[metrics].minutes": (sum, w)=>sum + (Number(w.duration) || 0)
            }["PlanProvider.useMemo[metrics].minutes"], 0);
            const calories = plan.reduce({
                "PlanProvider.useMemo[metrics].calories": (sum, w)=>sum + (Number(w.caloriesBurned) || 0)
            }["PlanProvider.useMemo[metrics].calories"], 0);
            return {
                exercises,
                minutes,
                calories
            };
        }
    }["PlanProvider.useMemo[metrics]"], [
        plan
    ]);
    const value = {
        plan,
        saved,
        metrics,
        planCap: PLAN_CAP,
        hydrated,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
        toasts,
        showToast,
        dismissToast
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/fitlog/context/PlanContext.js",
        lineNumber: 151,
        columnNumber: 10
    }, this);
}
_s(PlanProvider, "0tKs2hPODW0wa68aF55r+V0RHCc=");
_c = PlanProvider;
function usePlan() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fitlog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PlanContext);
    if (!ctx) throw new Error("usePlan must be used within a PlanProvider");
    return ctx;
}
_s1(usePlan, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "PlanProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=fitlog_0j8vrhy._.js.map