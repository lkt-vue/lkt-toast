import { defineComponent as $, ref as m, computed as l, onMounted as B, resolveComponent as b, createElementBlock as v, openBlock as c, normalizeClass as C, createElementVNode as i, createVNode as N, createBlock as _, createCommentVNode as w, unref as E, getCurrentInstance as H, Fragment as L, renderList as M, mergeProps as R } from "vue";
import { extractI18nValue as U } from "lkt-vue-kernel";
const y = class y {
};
y.canvas = void 0, y.defaultCloseIcon = "";
let f = y;
const o = class o {
  static open(n) {
    o.components.push({ ...n, zIndex: o.zIndex }), ++o.zIndex;
  }
  static close(n) {
    const s = o.components.findIndex((u) => u.zIndex === n);
    s >= 0 && (o.components.splice(s, 1), o.components.length === 0 && (o.zIndex = 1e3));
  }
};
o.components = [], o.zIndex = 1e3;
let p = o;
const K = (t) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  p.open(t), f.canvas.refresh();
}, P = (t) => {
  if (!f.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  p.close(t), f.canvas.refresh();
}, j = {
  class: "lkt-toast-inner",
  ref: "inner"
}, A = { class: "lkt-toast-header" }, D = ["innerHTML"], z = /* @__PURE__ */ $({
  __name: "LktToast",
  props: {
    type: {},
    text: {},
    icon: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  },
  setup(t) {
    const n = t, s = m(100), u = n.duration ?? 1e4, d = m(null), k = m(!1), h = l(() => {
      let r = [];
      return k.value && r.push("is-visible"), n.positionX && r.push(`animation-${n.positionX}`), r.join(" ");
    }), x = l(() => U(n.text)), g = () => {
      P(n.zIndex);
    }, I = () => {
      d.value.pause();
    }, T = () => {
      d.value.start();
    };
    return B(() => {
      setTimeout(() => {
        k.value = !0;
      }, 100);
    }), (r, e) => {
      const V = b("lkt-icon"), a = b("lkt-progress");
      return c(), v("section", {
        class: C(["lkt-toast", h.value]),
        onMouseenter: I,
        onMousemove: I,
        onMouseleave: T
      }, [
        i("div", j, [
          i("div", A, [
            r.icon ? (c(), _(V, {
              key: 0,
              icon: r.icon
            }, null, 8, ["icon"])) : w("", !0),
            i("div", {
              class: "lkt-toast-text",
              innerHTML: x.value
            }, null, 8, D),
            i("div", {
              class: "lkt-toast-close",
              onClick: e[0] || (e[0] = (X) => E(P)(r.zIndex))
            }, e[2] || (e[2] = [
              i("i", { class: "lkt-icon-close" }, null, -1)
            ]))
          ]),
          N(a, {
            ref_key: "progressRef",
            ref: d,
            modelValue: s.value,
            "onUpdate:modelValue": e[1] || (e[1] = (X) => s.value = X),
            duration: E(u),
            type: "decremental",
            "value-format": "hidden",
            "pause-on-hover": "",
            onEnd: g
          }, null, 8, ["modelValue", "duration"])
        ], 512)
      ], 34);
    };
  }
}), F = { class: "lkt-toast-canvas" }, q = /* @__PURE__ */ $({
  __name: "LktToastCanvas",
  setup(t, { expose: n }) {
    const s = m(0), u = H(), d = m([]), k = () => {
      s.value = s.value + 1, setTimeout(() => {
        var e;
        (e = u == null ? void 0 : u.proxy) == null || e.$forceUpdate();
      }, 1);
    }, h = l(() => (s.value, p.components.filter((e) => e.positionX === "left"))), x = l(() => (s.value, p.components.filter((e) => e.positionX === "center"))), g = l(() => (s.value, p.components.filter((e) => e.positionX === "right"))), I = l(() => h.value.length === 0 ? "" : "is-visible"), T = l(() => x.value.length === 0 ? "" : "is-visible"), r = l(() => g.value.length === 0 ? "" : "is-visible");
    return n({
      refresh: k
    }), (e, V) => (c(), v("section", F, [
      i("div", {
        class: C(["lkt-toast-stack left-stack", I.value])
      }, [
        (c(!0), v(L, null, M(h.value, (a) => (c(), _(z, R({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2),
      i("div", {
        class: C(["lkt-toast-stack center-stack", T.value])
      }, [
        (c(!0), v(L, null, M(x.value, (a) => (c(), _(z, R({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2),
      i("div", {
        class: C(["lkt-toast-stack right-stack", r.value])
      }, [
        (c(!0), v(L, null, M(g.value, (a) => (c(), _(z, R({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2)
    ]));
  }
}), O = {
  install: (t) => {
    t.component("lkt-toast-canvas") === void 0 && t.component("lkt-toast-canvas", q), t.component("lkt-toast") === void 0 && t.component("lkt-toast", z);
  }
}, Q = (t) => {
  f.canvas = t;
};
export {
  P as closeToast,
  O as default,
  K as openToast,
  Q as setToastCanvas
};
