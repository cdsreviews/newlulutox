import {
    j as t,
    c
} from "./index.D3n7OuFx.js";
import {
    a as g
} from "./index.B1QDvrv-.js";
import {
    r as u
} from "./index.BVOCwoKb.js";
const b = {},
    j = {
        "Last updated": "Dernière mise à jour",
        "Things we like": "Avantages",
        "Things we don't like": "Inconvénients",
        "Fact-checked by": "Vérifié par",
        "Table Of Content": "Table des matières"
    },
    y = {
        de: b,
        fr: j
    },
    w = (o, n, a) => {
        let l = "en";
        typeof window < "u" && (l = window.GV ? .lang);
        let i = y[l];
        if (!i) return n || o;
        const e = i[o] || n;
        return e ? typeof e == "string" || typeof e == "function" ? e : typeof e == "function" ? e({ ...a
        }) : e : o
    },
    v = ({
        className: o,
        navs: n,
        title: a = w("Table Of Content"),
        headerClassName: l,
        open: i = !0
    }) => {
        const [e, p] = u.useState(i), [h, x] = u.useState(""), f = u.useRef(null);
        return u.useEffect(() => {
            const r = {
                root: null,
                rootMargin: "20px 0px 0px 0px",
                threshold: 0
            };
            return f.current = new IntersectionObserver(d => {
                d.forEach(s => {
                    s.isIntersecting && x(s.target.id)
                })
            }, r), n.forEach(d => {
                const s = d.href.replace("#", ""),
                    m = document.getElementById(s);
                m && f.current ? .observe(m)
            }), () => {
                f.current && f.current.disconnect()
            }
        }, [n]), t.jsxs("section", {
            className: c(["", o]),
            children: [a && t.jsxs("h3", {
                className: c(["text-xl font-semibold px-5 p-2 flex justify-between items-center select-none hover:bg-gray-100 cursor-pointer", l]),
                onClick: () => p(!e),
                children: [a, t.jsx("span", {
                    children: t.jsx(g, {
                        className: c({
                            "rotate-180 transition-transform duration-300": e
                        })
                    })
                })]
            }), t.jsx("ul", {
                className: c(["p-5 space-y-1 leading-8 border-t", e ? "block mt-2 md:mt-0" : "hidden"]),
                children: n.map(r => {
                    const s = r.href.replace("#", "") === h;
                    return t.jsx("li", {
                        children: t.jsx("a", {
                            onClick: () => !i && p(!1),
                            href: r.href,
                            className: c("hover:underline", s ? "text-blue-600 font-medium" : "text-gray-700"),
                            children: r.title
                        })
                    }, r.href)
                })
            })]
        })
    };
export {
    v as A, w as i
};