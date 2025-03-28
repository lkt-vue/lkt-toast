import { defineComponent as D, mergeDefaults as N, ref as m, computed as c, onMounted as w, resolveComponent as E, createElementBlock as p, openBlock as l, normalizeClass as k, createElementVNode as r, createVNode as U, createBlock as C, createCommentVNode as j, unref as M, getCurrentInstance as A, Fragment as R, renderList as V, mergeProps as X } from "vue";
import { extractI18nValue as P, LktSettings as F, getDefaultValues as S, Toast as q } from "lkt-vue-kernel";
const z = class z {
};
z.canvas = void 0, z.defaultCloseIcon = "";
let f = z;
const a = class a {
  static open(s) {
    a.components.push({ ...s, zIndex: a.zIndex }), ++a.zIndex;
  }
  static close(s) {
    const n = a.components.findIndex((u) => u.zIndex === s);
    n >= 0 && (a.components.splice(n, 1), a.components.length === 0 && (a.zIndex = 1e3));
  }
};
a.components = [], a.zIndex = 1e3;
let v = a;
const te = (e) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  v.open(e), f.canvas.refresh();
}, $ = (e) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  v.close(e), f.canvas.refresh();
}, G = {
  class: "lkt-toast-inner",
  ref: "inner"
}, J = { class: "lkt-toast-header" }, K = { class: "lkt-toast-header-text" }, O = ["innerHTML"], Q = ["innerHTML"], T = /* @__PURE__ */ D({
  __name: "LktToast",
  props: /* @__PURE__ */ N({
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
    const s = e, n = m(100), u = s.duration ?? 1e4, d = m(null), h = m(!1), g = c(() => {
      let i = [];
      return h.value && i.push("is-visible"), s.positionX && i.push(`animation-${s.positionX}`), i.join(" ");
    }), x = c(() => P(s.text)), _ = c(() => P(s.details)), L = F.defaultCloseToastIcon, y = () => {
      $(s.zIndex);
    }, I = () => {
      d.value.pause();
    }, o = () => {
      d.value.start();
    };
    return w(() => {
      setTimeout(() => {
        h.value = !0;
      }, 100);
    }), (i, t) => {
      const H = E("lkt-icon"), B = E("lkt-progress");
      return l(), p("section", {
        class: k(["lkt-toast", g.value]),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        onMouseenter: I,
        onMousemove: I,
        onMouseleave: o
      }, [
        r("div", G, [
          r("div", J, [
            r("div", K, [
              i.icon ? (l(), C(H, {
                key: 0,
                icon: i.icon
              }, null, 8, ["icon"])) : j("", !0),
              r("div", {
                class: "lkt-toast-text",
                innerHTML: x.value
              }, null, 8, O)
            ]),
            r("div", {
              class: "lkt-toast-close",
              onClick: t[0] || (t[0] = (b) => M($)(i.zIndex))
            }, [
              r("i", {
                class: k(M(L))
              }, null, 2)
            ])
          ]),
          r("div", {
            class: "lkt-toast-details",
            innerHTML: _.value
          }, null, 8, Q),
          U(B, {
            ref_key: "progressRef",
            ref: d,
            modelValue: n.value,
            "onUpdate:modelValue": t[1] || (t[1] = (b) => n.value = b),
            duration: M(u),
            type: "decremental",
            "value-format": "hidden",
            "pause-on-hover": "",
            onEnd: y
          }, null, 8, ["modelValue", "duration"])
        ], 512)
      ], 34);
    };
  }
}), W = { class: "lkt-toast-canvas" }, Y = /* @__PURE__ */ D({
  __name: "LktToastCanvas",
  setup(e, { expose: s }) {
    const n = m(0), u = A(), d = m([]), h = () => {
      n.value = n.value + 1, setTimeout(() => {
        var o;
        (o = u == null ? void 0 : u.proxy) == null || o.$forceUpdate();
      }, 1);
    }, g = c(() => (n.value, v.components.filter((o) => o.positionX === "left"))), x = c(() => (n.value, v.components.filter((o) => o.positionX === "center"))), _ = c(() => (n.value, v.components.filter((o) => o.positionX === "right"))), L = c(() => g.value.length === 0 ? "" : "is-visible"), y = c(() => x.value.length === 0 ? "" : "is-visible"), I = c(() => _.value.length === 0 ? "" : "is-visible");
    return s({
      refresh: h
    }), (o, i) => (l(), p("section", W, [
      r("div", {
        class: k(["lkt-toast-stack left-stack", L.value])
      }, [
        (l(!0), p(R, null, V(g.value, (t) => (l(), C(T, X({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: t.zIndex
        }, t), null, 16))), 128))
      ], 2),
      r("div", {
        class: k(["lkt-toast-stack center-stack", y.value])
      }, [
        (l(!0), p(R, null, V(x.value, (t) => (l(), C(T, X({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: t.zIndex
        }, t), null, 16))), 128))
      ], 2),
      r("div", {
        class: k(["lkt-toast-stack right-stack", I.value])
      }, [
        (l(!0), p(R, null, V(_.value, (t) => (l(), C(T, X({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: t.zIndex
        }, t), null, 16))), 128))
      ], 2)
    ]));
  }
}), se = {
  install: (e) => {
    e.component("lkt-toast-canvas") === void 0 && e.component("lkt-toast-canvas", Y), e.component("lkt-toast") === void 0 && e.component("lkt-toast", T);
  }
}, ne = (e) => {
  f.canvas = e;
};
export {
  $ as closeToast,
  se as default,
  te as openToast,
  ne as setToastCanvas
};
