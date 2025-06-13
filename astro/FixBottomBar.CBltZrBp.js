import {
    j as t,
    c
} from "./index.D3n7OuFx.js";
import {
    r as o
} from "./index.BVOCwoKb.js";
const h = ({
    title: s = "Visit TotalAv",
    topOffset: n = 1e3,
    review: i
}) => {
    const [e, l] = o.useState(!1);
    return o.useEffect(() => {
        const r = () => {
            const a = window.scrollY;
            l(a > n)
        };
        return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r)
    }, []), t.jsx("section", {
        className: "fixed bottom-0 left-0 right-0 z-20 md:hidden",
        children: t.jsx("div", {
            className: c(["absolute left-0 right-0 bottom-0 transition-transform duration-300 bg-white border-t shadow-md p-2 z-100", {
                "translate-y-full": !e,
                "translate-y-0": e
            }]),
            children: t.jsx("a", {
                href: i.outurl,
                className: "w-full bg-primary hover:bg-primary/90 flex items-center justify-center h-12 rounded-lg text-white",
                children: s
            })
        })
    })
};
export {
    h as FixBottomBar
};