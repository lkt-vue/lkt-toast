import { defineComponent as $, mergeDefaults as B, ref as m, computed as c, onMounted as D, resolveComponent as b, createElementBlock as v, openBlock as l, normalizeClass as C, createElementVNode as i, createVNode as N, createBlock as _, createCommentVNode as w, unref as E, getCurrentInstance as H, Fragment as L, renderList as M, mergeProps as R } from "vue";
import { extractI18nValue as U, getDefaultValues as j, Toast as A } from "lkt-vue-kernel";
const y = class y {
};
y.canvas = void 0, y.defaultCloseIcon = "";
let p = y;
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
let f = o;
const S = (t) => {
  if (!p.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  f.open(t), p.canvas.refresh();
}, P = (t) => {
  if (!p.canvas) {
    console.warn("ToastCanvas not defined");
    return;
  }
  f.close(t), p.canvas.refresh();
}, F = {
  class: "lkt-toast-inner",
  ref: "inner"
}, q = { class: "lkt-toast-header" }, G = ["innerHTML"], z = /* @__PURE__ */ $({
  __name: "LktToast",
  props: /* @__PURE__ */ B({
    type: {},
    text: {},
    icon: {},
    positionX: {},
    duration: {},
    buttonConfig: {},
    zIndex: {}
  }, j(A)),
  setup(t) {
    const n = t, s = m(100), u = n.duration ?? 1e4, d = m(null), k = m(!1), h = c(() => {
      let r = [];
      return k.value && r.push("is-visible"), n.positionX && r.push(`animation-${n.positionX}`), r.join(" ");
    }), g = c(() => U(n.text)), x = () => {
      P(n.zIndex);
    }, I = () => {
      d.value.pause();
    }, T = () => {
      d.value.start();
    };
    return D(() => {
      setTimeout(() => {
        k.value = !0;
      }, 100);
    }), (r, e) => {
      const V = b("lkt-icon"), a = b("lkt-progress");
      return l(), v("section", {
        class: C(["lkt-toast", h.value]),
        onMouseenter: I,
        onMousemove: I,
        onMouseleave: T
      }, [
        i("div", F, [
          i("div", q, [
            r.icon ? (l(), _(V, {
              key: 0,
              icon: r.icon
            }, null, 8, ["icon"])) : w("", !0),
            i("div", {
              class: "lkt-toast-text",
              innerHTML: g.value
            }, null, 8, G),
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
            onEnd: x
          }, null, 8, ["modelValue", "duration"])
        ], 512)
      ], 34);
    };
  }
}), J = { class: "lkt-toast-canvas" }, K = /* @__PURE__ */ $({
  __name: "LktToastCanvas",
  setup(t, { expose: n }) {
    const s = m(0), u = H(), d = m([]), k = () => {
      s.value = s.value + 1, setTimeout(() => {
        var e;
        (e = u == null ? void 0 : u.proxy) == null || e.$forceUpdate();
      }, 1);
    }, h = c(() => (s.value, f.components.filter((e) => e.positionX === "left"))), g = c(() => (s.value, f.components.filter((e) => e.positionX === "center"))), x = c(() => (s.value, f.components.filter((e) => e.positionX === "right"))), I = c(() => h.value.length === 0 ? "" : "is-visible"), T = c(() => g.value.length === 0 ? "" : "is-visible"), r = c(() => x.value.length === 0 ? "" : "is-visible");
    return n({
      refresh: k
    }), (e, V) => (l(), v("section", J, [
      i("div", {
        class: C(["lkt-toast-stack left-stack", I.value])
      }, [
        (l(!0), v(L, null, M(h.value, (a) => (l(), _(z, R({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2),
      i("div", {
        class: C(["lkt-toast-stack center-stack", T.value])
      }, [
        (l(!0), v(L, null, M(g.value, (a) => (l(), _(z, R({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2),
      i("div", {
        class: C(["lkt-toast-stack right-stack", r.value])
      }, [
        (l(!0), v(L, null, M(x.value, (a) => (l(), _(z, R({
          ref_for: !0,
          ref_key: "instanceReferences",
          ref: d,
          key: a.zIndex
        }, a), null, 16))), 128))
      ], 2)
    ]));
  }
}), W = {
  install: (t) => {
    t.component("lkt-toast-canvas") === void 0 && t.component("lkt-toast-canvas", K), t.component("lkt-toast") === void 0 && t.component("lkt-toast", z);
  }
}, Y = (t) => {
  p.canvas = t;
};
export {
  P as closeToast,
  W as default,
  S as openToast,
  Y as setToastCanvas
};
