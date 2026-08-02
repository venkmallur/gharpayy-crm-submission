var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import "../_libs/react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
__name(genId, "genId");
__name2(genId, "genId");
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = /* @__PURE__ */ __name2((toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, "addToRemoveQueue");
const reducer = /* @__PURE__ */ __name2((state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
}, "reducer");
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
__name(dispatch, "dispatch");
__name2(dispatch, "dispatch");
function toast({ ...props }) {
  const id = genId();
  const update = /* @__PURE__ */ __name2((props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), "update");
  const dismiss = /* @__PURE__ */ __name2(() => dispatch({ type: "DISMISS_TOAST", toastId: id }), "dismiss");
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: /* @__PURE__ */ __name2((open) => {
        if (!open) dismiss();
      }, "onOpenChange")
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
__name(toast, "toast");
__name2(toast, "toast");
export {
  toast as t
};
