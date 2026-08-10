import { katex } from "@mdit/plugin-katex";
import { defineConfig } from "vitepress";

const base = process.env.GITHUB_ACTIONS ? "/CS224N/" : "/";

export default defineConfig({
    base,
    description: "NLP notebook by done",
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
        socialLinks: [
            {
                ariaLabel: "course",
                icon: "internetarchive",
                link: "https://web.stanford.edu/class/cs224n/",
            },
            { icon: "github", link: "https://github.com/onedonedone/CS224N" },
        ],
    },
    title: "donetown",
});
