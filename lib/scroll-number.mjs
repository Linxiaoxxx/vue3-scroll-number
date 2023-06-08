import { defineComponent as x, ref as h, watch as S, computed as v, openBlock as r, createElementBlock as l, Fragment as u, renderList as i, normalizeClass as g, normalizeStyle as s, createElementVNode as m, toDisplayString as k } from "vue";
const N = { style: { display: "flex", "align-items": "center" } }, $ = {
  name: "scroll-number"
}, o = /* @__PURE__ */ x({
  ...$,
  props: {
    number: {
      type: Number,
      default: 0
    },
    h: {
      type: Number,
      // 数字高度
      default: 24
    },
    color: {
      type: [String],
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."], a = h([]);
    S(
      () => t.number,
      (n) => {
        a.value = n.toString().split("");
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const d = v(() => ({
      ...t.customStyle,
      height: `${t.h}px`,
      fontSize: `${t.h}px`
    })), y = (n) => n !== "." ? { transform: `translate(0,-${+n * t.h}px)` } : { transform: `translate(0,-${10 * t.h}px)` };
    return (n, B) => (r(), l("div", N, [
      (r(!0), l(u, null, i(a.value, (c, f) => (r(), l("div", {
        key: f,
        class: g(["number", { dot: c === "." }]),
        style: s(d.value)
      }, [
        m("div", {
          class: "scroll-container",
          style: s({ ...y(c) })
        }, [
          (r(), l(u, null, i(p, (_, b) => m("div", {
            key: b,
            class: "scroll-single",
            style: s({ color: e.color })
          }, k(_), 5)), 64))
        ], 4)
      ], 6))), 128))
    ]));
  }
});
o.install = (e) => {
  e.component(o.name, o);
};
const z = (e) => {
  e.component("scroll-number", o);
}, E = { install: z };
export {
  o as ScrollNumber,
  E as default
};
