import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";
import { parseCache } from "vue/compiler-sfc";

const base = process.env.GITHUB_ACTIONS ? "/CS224N/" : "/";

export default defineConfig({
    base,
    description: "notebook scaffold.",
    head: [["link", { href: `${base}icon/dt.ico`, rel: "icon" }]],
    markdown: { config: (md) => void md.use(katex) },
    srcExclude: ["public/**"],
    themeConfig: {
        logo: "/icon/dt.png",
        notFound: {
            linkLabel: "Home",
            linkText: "Home",
            quote: "Living is keeping the absurd alive.",
            title: "NOTHINGNESS",
        },
        sidebar: [
            {
                items: [
                    { link: "/code", text: "Code" },
                    { link: "/math", text: "Math" },
                ],
                text: "Examples",
            },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/onedonedone/donetown" }],
    },
    title: "donetown",
    vite: { plugins: [{ handleHotUpdate: () => void parseCache.clear(), name: "clear-cache" }] },
});
