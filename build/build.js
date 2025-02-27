import { defineComponent as D, mergeDefaults as B, ref as m, computed as c, onMounted as N, resolveComponent as b, createElementBlock as p, openBlock as l, normalizeClass as I, createElementVNode as r, createVNode as w, createBlock as C, createCommentVNode as U, unref as E, getCurrentInstance as j, Fragment as M, renderList as R, mergeProps as V } from "vue";
import { extractI18nValue as P, getDefaultValues as A, Toast as F } from "lkt-vue-kernel";
const T = class T {
};
T.canvas = void 0, T.defaultCloseIcon = "";
let f = T;
const o = class o {
  static open(n) {
    o.components.push({ ...n, zIndex: o.zIndex }), ++o.zIndex;
  }
  static close(n) {
    const s = o.components.findIndex((i) => i.zIndex === n);
    s >= 0 && (o.components.splice(s, 1), o.components.length === 0 && (o.zIndex = 1e3));
  }
};
o.components = [], o.zIndex = 1e3;
let v = o;
const Z = (t) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  v.open(t), f.canvas.refresh();
}, $ = (t) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  v.close(t), f.canvas.refresh();
}, q = {
  class: "lkt-toast-inner",
  ref: "inner"
}, G = { class: "lkt-toast-header" }, J = { class: "lkt-toast-header-text" }, K = ["innerHTML"], O = ["innerHTML"], z = /* @__PURE__ */ D({
  __name: "LktToast",
  props: /* @__PURE__ */ B({
    type: {},
    text: {},
    details: {},
    icon: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  }, A(F)),
  setup(t) {
    const n = t, s = m(100), i = n.duration ?? 1e4, u = m(null), k = m(!1), h = c(() => {
      let e = [];
      return k.value && e.push("is-visible"), n.positionX && e.push(`animation-${n.positionX}`), e.join(" ");
    }), x = c(() => P(n.text)), g = c(() => P(n.details)), y = () => {
      $(n.zIndex);
    }, _ = () => {
      u.value.pause();
    }, L = () => {
      u.value.start();
    };
    return N(() => {
      setTimeout(() => {
        k.value = !0;
      }, 100);
    }), (e, d) => {
      const a = b("lkt-icon"), H = b("lkt-progress");
      return l(), p("section", {
        class: I(["lkt-toast", h.value]),
        onMouseenter: _,
        onMousemove: _,
        onMouseleave: L
      }, [
        r("div", q, [
          r("div", G, [
            r("div", J, [
              e.icon ? (l(), C(a, {
                key: 0,
                icon: e.icon
              }, null, 8, ["icon"])) : U("", !0),
              r("div", {
                class: "lkt-toast-text",
                innerHTML: x.value
              }, null, 8, K)
            ]),
            r("div", {
              class: "lkt-toast-close",
              onClick: d[0] || (d[0] = (X) => E($)(e.zIndex))
            }, d[2] || (d[2] = [
              r("i", { class: "lkt-icon-close" }, null, -1)
            ]))
          ]),
          r("div", {
            class: "lkt-toast-details",
            innerHTML: g.value
          }, null, 8, O),
          w(H, {
            ref_key: "progressRef",
            ref: u,
            modelValue: s.value,
            "onUpdate:modelValue": d[1] || (d[1] = (X) => s.value = X),
            duration: E(i),
            type: "decremental",
            "value-format": "hidden",
            "pause-on-hover": "",
            onEnd: y
          }, null, 8, ["modelValue", "duration"])
        ], 512)
      ], 34);
    };
  }
}), Q = { class: "lkt-toast-canvas" }, S = /* @__PURE__ */ D({
  __name: "LktToastCanvas",
  setup(t, { expose: n }) {
    const s = m(0), i = j(), u = m([]), k = () => {
      s.value = s.value + 1, setTimeout(() => {
        var e;
        (e = i == null ? void 0 : i.proxy) == null || e.$forceUpdate();
      }, 1);
    }, h = c(() => (s.value, v.components.filter((e) => e.positionX === "left"))), x = c(() => (s.value, v.components.filter((e) => e.positionX === "center"))), g = c(() => (s.value, v.components.filter((e) => e.positionX === "right"))), y = c(() => h.value.length === 0 ? "" : "is-visible"), _ = c(() => x.value.length === 0 ? "" : "is-visible"), L = c(() => g.value.length === 0 ? "" : "is-visible");
    return n({
      refresh: k
    }), (e, d) => (l(), p("section", Q, [
      r("div", {
        class: I(["lkt-toast-stack left-stack", y.value])
      }, [
        (l(!0), p(M, null, R(h.value, (a) => (l(), C(z, V({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2),
      r("div", {
        class: I(["lkt-toast-stack center-stack", _.value])
      }, [
        (l(!0), p(M, null, R(x.value, (a) => (l(), C(z, V({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2),
      r("div", {
        class: I(["lkt-toast-stack right-stack", L.value])
      }, [
        (l(!0), p(M, null, R(g.value, (a) => (l(), C(z, V({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2)
    ]));
  }
}), ee = {
  install: (t) => {
    t.component("lkt-toast-canvas") === void 0 && t.component("lkt-toast-canvas", S), t.component("lkt-toast") === void 0 && t.component("lkt-toast", z);
  }
}, te = (t) => {
  f.canvas = t;
};
export {
  $ as closeToast,
  ee as default,
  Z as openToast,
  te as setToastCanvas
};
