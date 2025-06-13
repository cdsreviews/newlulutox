import {
    j as e,
    c as a
} from "./index.D3n7OuFx.js";
import {
    A as i
} from "./index.D6gIORo7.js";
import {
    r as n
} from "./index.BVOCwoKb.js";
import "./index.B1QDvrv-.js";
const c = () => e.jsx("div", {
        className: "bg-background text-white text-center",
        children: e.jsx("a", {
            className: "flex items-center justify-center uppercase text-xl gap-1 text-white h-full",
            href: "/",
            children: e.jsx("img", {
                src: "/logo-c4.png",
                alt: "",
                className: "w-60 align-middle"
            })
        })
    }),
    f = ({
        navs: s
    }) => {
        const [t, o] = n.useState(!1);
        return n.useEffect(() => {
            const r = () => {
                const l = window.scrollY;
                o(l > 800)
            };
            return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r)
        }, []), e.jsxs("header", {
            className: "sticky top-0 z-20 md:relative",
            children: [e.jsx("div", {
                className: a(["transition-transform duration-300", {
                    "-translate-y-full": t,
                    "translate-y-0": !t
                }]),
                children: e.jsx(c, {})
            }), t && s && e.jsx("div", {
                className: a(["absolute left-0 right-0 top-0 -z-10  transition-transform duration-300 bg-white shadow-md py-2", {
                    "translate-y-full": !t,
                    "translate-y-0": t
                }, "md:hidden"]),
                children: e.jsx(i, {
                    className: "not-prose",
                    headerClassName: "!text-base !font-bold",
                    open: !1,
                    navs: s
                })
            })]
        })
    };
export {
    f as Header
};