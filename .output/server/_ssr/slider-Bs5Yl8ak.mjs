import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, T as Track, a as Range, b as Thumb } from "../_libs/radix-ui__react-slider.mjs";
import { q as cn } from "./router-xBhBcQRf.mjs";
const Slider = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", "data-tsd-source": "/src/components/ui/slider.tsx:15:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Range, { className: "absolute h-full bg-primary", "data-tsd-source": "/src/components/ui/slider.tsx:16:7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", "data-tsd-source": "/src/components/ui/slider.tsx:18:5" })
    ]
  }
));
Slider.displayName = Root.displayName;
export {
  Slider as S
};
