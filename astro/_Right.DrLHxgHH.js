import {
    j as e,
    c as d
} from "./index.D3n7OuFx.js";
import "./index.BVOCwoKb.js";
import {
    A as n,
    i
} from "./index.D6gIORo7.js";
import "./index.B1QDvrv-.js";
const m = ({
        className: t,
        logo: s,
        rate: r = 4.9,
        title: a,
        children: o,
        button: l
    }) => e.jsxs("div", {
        className: d("max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white border", t),
        children: [e.jsxs("div", {
            className: "text-white rounded-t-2xl relative bg-background",
            children: [e.jsxs("div", {
                className: "flex items-center gap-2 p-3",
                children: [e.jsx("img", {
                    className: " w-20 h-20",
                    src: s,
                    alt: ""
                }), e.jsx("div", {
                    className: "text-xl font-semibold leading-snug text-white",
                    children: a
                })]
            }), e.jsxs("div", {
                className: "bg-white text-black px-2 py-0.5 rounded-xl text-sm font-medium flex items-center shadow absolute -bottom-3 left-2 z-10",
                children: [e.jsx("span", {
                    className: "mr-1",
                    children: r
                }), " ⭐"]
            })]
        }), o && e.jsx("div", {
            className: "px-6 py-5 space-y-3",
            children: o
        }), l && e.jsx("div", {
            className: "px-6 pb-6",
            children: e.jsx("a", {
                className: "w-full bg-primary text-center h-12 flex justify-center items-center rounded-lg hover:bg-primary/90 text-white! font-bold",
                href: l.outurl,
                children: l.text
            })
        })]
    }),
    b = ({
        className: t,
        review: s
    }) => e.jsxs("div", {
        className: d("sticky top-0", t),
        children: [e.jsx(n, {
            title: i("Table Of Content"),
            className: " not-prose mb-5 border border-gray-200 rounded-xl shadow",
            navs: s.navs || []
        }), e.jsx(m, {
            logo: s.brandPromoCard ? .pic,
            title: s.brandPromoCard ? .title,
            className: "mb-5 not-prose hidden md:block",
            button: { ...s.brandPromoCard ? .button,
                outurl : s.outurl
            },
            children: e.jsx("ul", {
                className: "space-y-2",
                children: (s.brandPromoCard ? .txts || []).map((r, a) => e.jsx("li", {
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                }, a))
            })
        })]
    });
export {
    b as Right
};