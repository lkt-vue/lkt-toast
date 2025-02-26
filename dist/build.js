import { defineComponent as p, computed as f, createElementBlock as i, openBlock as c, normalizeClass as k, createElementVNode as l, renderSlot as x, ref as u, getCurrentInstance as I, Fragment as T, renderList as C, createBlock as z, mergeProps as y } from "vue";
class L {
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
const a = class a {
};
a.controller = new L(), a.canvas = void 0, a.defaultCloseIcon = "";
let t = a;
const $ = {
  class: "lkt-toast-inner",
  ref: "inner"
}, w = { class: "lkt-toast-content" }, m = /* @__PURE__ */ p({
  __name: "LktToast",
  props: {
    type: {},
    text: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  },
  setup(e) {
    const s = f(() => [].join(" "));
    return (n, o) => (c(), i("section", {
      class: k(["lkt-toast", s.value])
    }, [
      o[0] || (o[0] = l("div", { class: "lkt-toast-close" }, null, -1)),
      l("div", $, [
        l("section", w, [
          x(n.$slots, "default")
        ])
      ], 512)
    ], 2));
  }
}), B = { class: "lkt-toast-canvas" }, E = /* @__PURE__ */ p({
  __name: "LktToastCanvas",
  setup(e, { expose: s }) {
    const n = u(0), o = I(), v = u([]), h = () => {
      n.value = n.value + 1, setTimeout(() => {
        var r;
        (r = o == null ? void 0 : o.proxy) == null || r.$forceUpdate();
      }, 1);
    }, _ = f(() => (n.value, t.controller.components));
    return s({
      refresh: h
    }), (r, R) => (c(), i("section", B, [
      (c(!0), i(T, null, C(_.value, (d) => (c(), z(m, y({
        ref_for: !0,
        ref_key: "instanceReferences",
        ref: v,
        key: d.zIndex
      }, d), null, 16))), 128))
    ]));
  }
}), g = (e) => {
  if (!t.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  t.controller.open(e), t.canvas.refresh();
}, j = (e) => {
  if (!t.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  t.controller.close(e), t.canvas.refresh();
}, F = {
  install: (e) => {
    e.component("lkt-toast-canvas") === void 0 && e.component("lkt-toast-canvas", E), e.component("lkt-toast") === void 0 && e.component("lkt-toast", m);
  }
}, N = (e) => {
  t.canvas = e;
};
export {
  j as closeToast,
  F as default,
  g as openToast,
  N as setToastCanvas
};
