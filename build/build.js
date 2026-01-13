import { defineComponent as $, mergeDefaults as E, ref as k, computed as c, onMounted as F, resolveComponent as H, createElementBlock as p, openBlock as l, normalizeClass as h, createElementVNode as r, createVNode as N, createBlock as z, createCommentVNode as w, unref as v, mergeProps as y, getCurrentInstance as A, Fragment as P, renderList as b } from "vue";
import { extractI18nValue as X, LktSettings as U, ProgressValueFormat as j, ProgressAnimation as O, getDefaultValues as S, Toast as q } from "lkt-vue-kernel";
const M = class M {
};
M.canvas = void 0, M.defaultCloseIcon = "";
let f = M;
const o = class o {
  static open(s) {
    o.components.push({ ...s, zIndex: o.zIndex }), ++o.zIndex;
  }
  static close(s) {
    const n = o.components.findIndex((i) => i.zIndex === s);
    n >= 0 && (o.components.splice(n, 1), o.components.length === 0 && (o.zIndex = 1e3));
  }
};
o.components = [], o.zIndex = 1e3;
let d = o;
const se = (e) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  d.open(e), f.canvas.refresh();
}, D = (e) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  d.close(e), f.canvas.refresh();
}, G = {
  class: "lkt-toast-inner",
  ref: "inner"
}, J = { class: "lkt-toast-header" }, K = { class: "lkt-toast-header-text" }, Q = ["innerHTML"], W = ["innerHTML"], L = /* @__PURE__ */ $({
  __name: "LktToast",
  props: /* @__PURE__ */ E({
    type: {},
    text: {},
    details: {},
    icon: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  }, S(q)),
  setup(e) {
    const s = e, n = k(100), i = s.duration ?? 1e4, u = k(null), x = k(!1), g = c(() => {
      let t = [];
      return x.value && t.push("is-visible"), s.positionX && t.push(`animation-${s.positionX}`), t.join(" ");
    }), _ = c(() => X(s.text)), C = c(() => X(s.details)), V = U.defaultCloseToastIcon, I = () => {
      u.value.pause();
    }, R = () => {
      u.value.start();
    };
    return F(() => {
      setTimeout(() => {
        x.value = !0;
      }, 100);
    }), (t, m) => {
      const a = H("lkt-icon"), B = H("lkt-progress");
      return l(), p("section", {
        class: h(["lkt-toast", g.value]),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        onMouseenter: I,
        onMousemove: I,
        onMouseleave: R
      }, [
        r("div", G, [
          r("div", J, [
            r("div", K, [
              e.icon ? (l(), z(a, {
                key: 0,
                icon: e.icon
              }, null, 8, ["icon"])) : w("", !0),
              r("div", {
                class: "lkt-toast-text",
                innerHTML: _.value
              }, null, 8, Q)
            ]),
            r("div", {
              class: "lkt-toast-close",
              onClick: m[0] || (m[0] = (T) => v(D)(e.zIndex))
            }, [
              r("i", {
                class: h(v(V))
              }, null, 2)
            ])
          ]),
          r("div", {
            class: "lkt-toast-details",
            innerHTML: C.value
          }, null, 8, W),
          N(B, y({
            ref_key: "progressRef",
            ref: u,
            modelValue: n.value,
            "onUpdate:modelValue": m[1] || (m[1] = (T) => n.value = T)
          }, {
            duration: v(i),
            animation: {
              type: v(O).Decremental,
              autoplay: !0,
              externalControl: !1,
              to: 0,
              from: 100
            },
            valueFormat: v(j).Hidden,
            pauseOnHover: !0,
            events: {
              updatedVisibleProgress: (T) => {
                T === 0 && v(D)(s.zIndex);
              }
            }
          }), null, 16, ["modelValue"])
        ], 512)
      ], 34);
    };
  }
}), Y = { class: "lkt-toast-canvas" }, Z = /* @__PURE__ */ $({
  __name: "LktToastCanvas",
  setup(e, { expose: s }) {
    const n = k(0), i = A(), u = k([]), x = () => {
      n.value = n.value + 1, setTimeout(() => {
        var t;
        (t = i == null ? void 0 : i.proxy) == null || t.$forceUpdate();
      }, 1);
    }, g = c(() => (n.value, d.components.filter((t) => t.positionX === "left"))), _ = c(() => (n.value, d.components.filter((t) => t.positionX === "center"))), C = c(() => (n.value, d.components.filter((t) => t.positionX === "right"))), V = c(() => g.value.length === 0 ? "" : "is-visible"), I = c(() => _.value.length === 0 ? "" : "is-visible"), R = c(() => C.value.length === 0 ? "" : "is-visible");
    return s({
      refresh: x
    }), (t, m) => (l(), p("section", Y, [
      r("div", {
        class: h(["lkt-toast-stack left-stack", V.value])
      }, [
        (l(!0), p(P, null, b(g.value, (a) => (l(), z(L, y({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, { ref_for: !0 }, a), null, 16))), 128))
      ], 2),
      r("div", {
        class: h(["lkt-toast-stack center-stack", I.value])
      }, [
        (l(!0), p(P, null, b(_.value, (a) => (l(), z(L, y({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, { ref_for: !0 }, a), null, 16))), 128))
      ], 2),
      r("div", {
        class: h(["lkt-toast-stack right-stack", R.value])
      }, [
        (l(!0), p(P, null, b(C.value, (a) => (l(), z(L, y({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, { ref_for: !0 }, a), null, 16))), 128))
      ], 2)
    ]));
  }
}), ne = {
  install: (e) => {
    e.component("lkt-toast-canvas") === void 0 && e.component("lkt-toast-canvas", Z), e.component("lkt-toast") === void 0 && e.component("lkt-toast", L);
  }
}, oe = (e) => {
  f.canvas = e;
};
export {
  D as closeToast,
  ne as default,
  se as openToast,
  oe as setToastCanvas
};
