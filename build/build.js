import { defineComponent as $, mergeDefaults as E, ref as g, computed as c, onMounted as F, resolveComponent as H, createElementBlock as k, openBlock as l, normalizeClass as h, createElementVNode as r, createVNode as N, createBlock as z, createCommentVNode as w, unref as d, mergeProps as y, getCurrentInstance as A, Fragment as R, renderList as b } from "vue";
import { extractI18nValue as X, LktSettings as U, ProgressValueFormat as j, ProgressAnimation as O, getDefaultValues as S, Toast as q } from "lkt-vue-kernel";
const V = class V {
};
V.canvas = void 0, V.defaultCloseIcon = "";
let v = V;
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
let f = o;
const se = (e) => {
  if (!v.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  f.open(e), v.canvas.refresh();
}, D = (e) => {
  if (!v.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  f.close(e), v.canvas.refresh();
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
    const s = e, n = g(100), i = s.duration ?? 1e4, u = g(null), x = g(!1), _ = c(() => {
      let t = [];
      return x.value && t.push("is-visible"), s.positionX && t.push(`animation-${s.positionX}`), t.join(" ");
    }), C = c(() => X(s.text)), I = c(() => X(s.details)), M = U.defaultCloseToastIcon, T = () => {
      u.value.pause();
    }, P = () => {
      u.value.start();
    };
    return F(() => {
      setTimeout(() => {
        x.value = !0;
      }, 100);
    }), (t, m) => {
      const a = H("lkt-icon"), B = H("lkt-progress");
      return l(), k("section", {
        class: h(["lkt-toast", _.value]),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        onMouseenter: T,
        onMousemove: T,
        onMouseleave: P
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
                innerHTML: C.value
              }, null, 8, Q)
            ]),
            r("div", {
              class: "lkt-toast-close",
              onClick: m[0] || (m[0] = (p) => d(D)(e.zIndex))
            }, [
              r("i", {
                class: h(d(M))
              }, null, 2)
            ])
          ]),
          r("div", {
            class: "lkt-toast-details",
            innerHTML: I.value
          }, null, 8, W),
          N(B, y({
            ref_key: "progressRef",
            ref: u,
            modelValue: n.value,
            "onUpdate:modelValue": m[1] || (m[1] = (p) => n.value = p)
          }, {
            duration: d(i),
            animation: {
              type: d(O).Decremental,
              autoplay: !0,
              externalControl: !1,
              to: 0,
              from: 100
            },
            valueFormat: d(j).Hidden,
            pauseOnHover: !0,
            events: {
              updatedVisibleProgress: (p) => {
                console.log("updatedVisibleProgress: ", p, d(i)), p === 0 && d(D)(s.zIndex);
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
    const n = g(0), i = A(), u = g([]), x = () => {
      n.value = n.value + 1, setTimeout(() => {
        var t;
        (t = i == null ? void 0 : i.proxy) == null || t.$forceUpdate();
      }, 1);
    }, _ = c(() => (n.value, f.components.filter((t) => t.positionX === "left"))), C = c(() => (n.value, f.components.filter((t) => t.positionX === "center"))), I = c(() => (n.value, f.components.filter((t) => t.positionX === "right"))), M = c(() => _.value.length === 0 ? "" : "is-visible"), T = c(() => C.value.length === 0 ? "" : "is-visible"), P = c(() => I.value.length === 0 ? "" : "is-visible");
    return s({
      refresh: x
    }), (t, m) => (l(), k("section", Y, [
      r("div", {
        class: h(["lkt-toast-stack left-stack", M.value])
      }, [
        (l(!0), k(R, null, b(_.value, (a) => (l(), z(L, y({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, { ref_for: !0 }, a), null, 16))), 128))
      ], 2),
      r("div", {
        class: h(["lkt-toast-stack center-stack", T.value])
      }, [
        (l(!0), k(R, null, b(C.value, (a) => (l(), z(L, y({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: u,
          key: a.zIndex
        }, { ref_for: !0 }, a), null, 16))), 128))
      ], 2),
      r("div", {
        class: h(["lkt-toast-stack right-stack", P.value])
      }, [
        (l(!0), k(R, null, b(I.value, (a) => (l(), z(L, y({
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
  v.canvas = e;
};
export {
  D as closeToast,
  ne as default,
  se as openToast,
  oe as setToastCanvas
};
