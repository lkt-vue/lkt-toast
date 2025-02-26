import { defineComponent as k, computed as p, createElementBlock as f, openBlock as i, normalizeClass as _, createElementVNode as a, ref as v, getCurrentInstance as T, Fragment as I, renderList as C, createBlock as z, mergeProps as L } from "vue";
import { extractI18nValue as y } from "lkt-vue-kernel";
class $ {
  constructor() {
    this.components = [], this.zIndex = 1e3;
  }
  open(s) {
    console.log("openToast: ", s), this.components.push({ ...s, zIndex: this.zIndex }), ++this.zIndex;
  }
  close(s) {
    const n = this.components.findIndex((o) => o.zIndex === s);
    n && (delete this.components[n], this.components.length === 0 && (this.zIndex = 1e3));
  }
}
const c = class c {
};
c.controller = new $(), c.canvas = void 0, c.defaultCloseIcon = "";
let e = c;
const w = {
  class: "lkt-toast-inner",
  ref: "inner"
}, B = ["innerHTML"], h = /* @__PURE__ */ k({
  __name: "LktToast",
  props: {
    type: {},
    text: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  },
  setup(t) {
    const s = t, n = p(() => [].join(" ")), o = p(() => y(s.text));
    return (d, r) => (i(), f("section", {
      class: _(["lkt-toast", n.value])
    }, [
      r[0] || (r[0] = a("div", { class: "lkt-toast-close" }, null, -1)),
      a("div", w, [
        a("div", {
          class: "lkt-toast-content",
          innerHTML: o.value
        }, null, 8, B)
      ], 512)
    ], 2));
  }
}), g = { class: "lkt-toast-canvas" }, E = { class: "lkt-toast-stack right-stack" }, H = /* @__PURE__ */ k({
  __name: "LktToastCanvas",
  setup(t, { expose: s }) {
    const n = v(0), o = T(), d = v([]), r = () => {
      n.value = n.value + 1, setTimeout(() => {
        var u;
        (u = o == null ? void 0 : o.proxy) == null || u.$forceUpdate();
      }, 1);
    }, x = p(() => (n.value, e.controller.components));
    return s({
      refresh: r
    }), (u, l) => (i(), f("section", g, [
      l[0] || (l[0] = a("div", { class: "lkt-toast-stack left-stack" }, null, -1)),
      l[1] || (l[1] = a("div", { class: "lkt-toast-stack center-stack" }, null, -1)),
      a("div", E, [
        (i(!0), f(I, null, C(x.value, (m) => (i(), z(h, L({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: m.zIndex
        }, m), null, 16))), 128))
      ])
    ]));
  }
}), V = (t) => {
  if (!e.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  e.controller.open(t), e.canvas.refresh();
}, b = (t) => {
  if (!e.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  e.controller.close(t), e.canvas.refresh();
}, j = {
  install: (t) => {
    t.component("lkt-toast-canvas") === void 0 && t.component("lkt-toast-canvas", H), t.component("lkt-toast") === void 0 && t.component("lkt-toast", h);
  }
}, F = (t) => {
  e.canvas = t;
};
export {
  b as closeToast,
  j as default,
  V as openToast,
  F as setToastCanvas
};
