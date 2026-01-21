import { defineComponent as H, mergeDefaults as D, ref as m, computed as a, onMounted as $, resolveComponent as z, createElementBlock as d, openBlock as r, normalizeClass as v, createElementVNode as n, createVNode as S, createBlock as h, createCommentVNode as B, unref as i, mergeProps as T, getCurrentInstance as E, Fragment as V, renderList as R } from "vue";
import { extractI18nValue as P, LktSettings as F, closeToast as b, ProgressValueFormat as N, ProgressAnimation as A, getDefaultValues as U, Toast as j, ToastController as y } from "lkt-vue-kernel";
import { closeToast as oe, openToast as ne } from "lkt-vue-kernel";
const O = {
  class: "lkt-toast-inner",
  ref: "inner"
}, q = { class: "lkt-toast-header" }, w = { class: "lkt-toast-header-text" }, G = ["innerHTML"], J = ["innerHTML"], L = /* @__PURE__ */ H({
  __name: "LktToast",
  props: /* @__PURE__ */ D({
    type: {},
    text: {},
    class: {},
    details: {},
    icon: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  }, U(j)),
  setup(t) {
    const s = t, l = m(100), u = s.duration ?? 1e4, c = m(null), p = m(!1), k = a(() => {
      let e = [];
      return p.value && e.push("is-visible"), s.positionX && e.push(`animation-${s.positionX}`), s.class && e.push(s.class), e.join(" ");
    }), _ = a(() => P(s.text)), g = a(() => P(s.details)), I = F.defaultCloseToastIcon, x = () => {
      c.value.pause();
    }, M = () => {
      c.value.start();
    };
    return $(() => {
      setTimeout(() => {
        p.value = !0;
      }, 100);
    }), (e, f) => {
      const o = z("lkt-icon"), X = z("lkt-progress");
      return r(), d("section", {
        class: v(["lkt-toast", k.value]),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        onMouseenter: x,
        onMousemove: x,
        onMouseleave: M
      }, [
        n("div", O, [
          n("div", q, [
            n("div", w, [
              t.icon ? (r(), h(o, {
                key: 0,
                icon: t.icon
              }, null, 8, ["icon"])) : B("", !0),
              n("div", {
                class: "lkt-toast-text",
                innerHTML: _.value
              }, null, 8, G)
            ]),
            n("div", {
              class: "lkt-toast-close",
              onClick: f[0] || (f[0] = (C) => i(b)(t.zIndex))
            }, [
              n("i", {
                class: v(i(I))
              }, null, 2)
            ])
          ]),
          n("div", {
            class: "lkt-toast-details",
            innerHTML: g.value
          }, null, 8, J),
          S(X, T({
            ref_key: "progressRef",
            ref: c,
            modelValue: l.value,
            "onUpdate:modelValue": f[1] || (f[1] = (C) => l.value = C)
          }, {
            duration: i(u),
            animation: {
              type: i(A).Decremental,
              autoplay: !0,
              externalControl: !1,
              to: 0,
              from: 100
            },
            valueFormat: i(N).Hidden,
            pauseOnHover: !0,
            events: {
              updatedVisibleProgress: (C) => {
                C === 0 && i(b)(s.zIndex);
              }
            }
          }), null, 16, ["modelValue"])
        ], 512)
      ], 34);
    };
  }
}), K = { class: "lkt-toast-canvas" }, Q = /* @__PURE__ */ H({
  __name: "LktToastCanvas",
  setup(t, { expose: s }) {
    const l = m(0), u = E(), c = m([]), p = () => {
      l.value = l.value + 1, setTimeout(() => {
        var e;
        (e = u == null ? void 0 : u.proxy) == null || e.$forceUpdate();
      }, 1);
    }, k = a(() => (l.value, y.components.filter((e) => e.positionX === "left"))), _ = a(() => (l.value, y.components.filter((e) => e.positionX === "center"))), g = a(() => (l.value, y.components.filter((e) => e.positionX === "right"))), I = a(() => k.value.length === 0 ? "" : "is-visible"), x = a(() => _.value.length === 0 ? "" : "is-visible"), M = a(() => g.value.length === 0 ? "" : "is-visible");
    return s({
      refresh: p
    }), (e, f) => (r(), d("section", K, [
      n("div", {
        class: v(["lkt-toast-stack left-stack", I.value])
      }, [
        (r(!0), d(V, null, R(k.value, (o) => (r(), h(L, T({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: c,
          key: o.zIndex
        }, { ref_for: !0 }, o), null, 16))), 128))
      ], 2),
      n("div", {
        class: v(["lkt-toast-stack center-stack", x.value])
      }, [
        (r(!0), d(V, null, R(_.value, (o) => (r(), h(L, T({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: c,
          key: o.zIndex
        }, { ref_for: !0 }, o), null, 16))), 128))
      ], 2),
      n("div", {
        class: v(["lkt-toast-stack right-stack", M.value])
      }, [
        (r(!0), d(V, null, R(g.value, (o) => (r(), h(L, T({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: c,
          key: o.zIndex
        }, { ref_for: !0 }, o), null, 16))), 128))
      ], 2)
    ]));
  }
}), Z = {
  install: (t) => {
    t.component("lkt-toast-canvas") === void 0 && t.component("lkt-toast-canvas", Q), t.component("lkt-toast") === void 0 && t.component("lkt-toast", L);
  }
}, ee = (t) => {
  y.canvas = t;
};
export {
  oe as closeToast,
  Z as default,
  ne as openToast,
  ee as setToastCanvas
};
