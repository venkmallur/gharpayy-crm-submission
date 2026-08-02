var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { a as leafletSrcExports } from "./leaflet.mjs";
import { r as reactExports, R as React } from "./react.mjs";
import { r as reactDomExports } from "./react-dom.mjs";
function useAttribution(map, attribution) {
  const attributionRef = reactExports.useRef(attribution);
  reactExports.useEffect(/* @__PURE__ */ __name(function updateAttribution() {
    if (attribution !== attributionRef.current && map.attributionControl != null) {
      if (attributionRef.current != null) {
        map.attributionControl.removeAttribution(attributionRef.current);
      }
      if (attribution != null) {
        map.attributionControl.addAttribution(attribution);
      }
    }
    attributionRef.current = attribution;
  }, "updateAttribution"), [
    map,
    attribution
  ]);
}
__name(useAttribution, "useAttribution");
function updateCircle(layer, props, prevProps) {
  if (props.center !== prevProps.center) {
    layer.setLatLng(props.center);
  }
  if (props.radius != null && props.radius !== prevProps.radius) {
    layer.setRadius(props.radius);
  }
}
__name(updateCircle, "updateCircle");
const CONTEXT_VERSION = 1;
function createLeafletContext(map) {
  return Object.freeze({
    __version: CONTEXT_VERSION,
    map
  });
}
__name(createLeafletContext, "createLeafletContext");
function extendContext(source, extra) {
  return Object.freeze({
    ...source,
    ...extra
  });
}
__name(extendContext, "extendContext");
const LeafletContext = reactExports.createContext(null);
function useLeafletContext() {
  const context = reactExports.use(LeafletContext);
  if (context == null) {
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  }
  return context;
}
__name(useLeafletContext, "useLeafletContext");
function createContainerComponent(useElement) {
  function ContainerComponent(props, forwardedRef) {
    const { instance, context } = useElement(props).current;
    reactExports.useImperativeHandle(forwardedRef, () => instance);
    const { children } = props;
    return children == null ? null : /* @__PURE__ */ React.createElement(LeafletContext, {
      value: context
    }, children);
  }
  __name(ContainerComponent, "ContainerComponent");
  return /* @__PURE__ */ reactExports.forwardRef(ContainerComponent);
}
__name(createContainerComponent, "createContainerComponent");
function createDivOverlayComponent(useElement) {
  function OverlayComponent(props, forwardedRef) {
    const [isOpen, setOpen] = reactExports.useState(false);
    const { instance } = useElement(props, setOpen).current;
    reactExports.useImperativeHandle(forwardedRef, () => instance);
    reactExports.useEffect(/* @__PURE__ */ __name(function updateOverlay() {
      if (isOpen) {
        instance.update();
      }
    }, "updateOverlay"), [
      instance,
      isOpen,
      props.children
    ]);
    const contentNode = instance._contentNode;
    return contentNode ? /* @__PURE__ */ reactDomExports.createPortal(props.children, contentNode) : null;
  }
  __name(OverlayComponent, "OverlayComponent");
  return /* @__PURE__ */ reactExports.forwardRef(OverlayComponent);
}
__name(createDivOverlayComponent, "createDivOverlayComponent");
function createLeafComponent(useElement) {
  function LeafComponent(props, forwardedRef) {
    const { instance } = useElement(props).current;
    reactExports.useImperativeHandle(forwardedRef, () => instance);
    return null;
  }
  __name(LeafComponent, "LeafComponent");
  return /* @__PURE__ */ reactExports.forwardRef(LeafComponent);
}
__name(createLeafComponent, "createLeafComponent");
function createControlHook(useElement) {
  return /* @__PURE__ */ __name(function useLeafletControl(props) {
    const context = useLeafletContext();
    const elementRef = useElement(props, context);
    const { instance } = elementRef.current;
    const positionRef = reactExports.useRef(props.position);
    const { position } = props;
    reactExports.useEffect(/* @__PURE__ */ __name(function addControl() {
      instance.addTo(context.map);
      return /* @__PURE__ */ __name(function removeControl() {
        instance.remove();
      }, "removeControl");
    }, "addControl"), [
      context.map,
      instance
    ]);
    reactExports.useEffect(/* @__PURE__ */ __name(function updateControl() {
      if (position != null && position !== positionRef.current) {
        instance.setPosition(position);
        positionRef.current = position;
      }
    }, "updateControl"), [
      instance,
      position
    ]);
    return elementRef;
  }, "useLeafletControl");
}
__name(createControlHook, "createControlHook");
function useEventHandlers(element, eventHandlers) {
  const eventHandlersRef = reactExports.useRef(void 0);
  reactExports.useEffect(/* @__PURE__ */ __name(function addEventHandlers() {
    if (eventHandlers != null) {
      element.instance.on(eventHandlers);
    }
    eventHandlersRef.current = eventHandlers;
    return /* @__PURE__ */ __name(function removeEventHandlers() {
      if (eventHandlersRef.current != null) {
        element.instance.off(eventHandlersRef.current);
      }
      eventHandlersRef.current = null;
    }, "removeEventHandlers");
  }, "addEventHandlers"), [
    element,
    eventHandlers
  ]);
}
__name(useEventHandlers, "useEventHandlers");
function withPane(props, context) {
  const pane = props.pane ?? context.pane;
  return pane ? {
    ...props,
    pane
  } : props;
}
__name(withPane, "withPane");
function createDivOverlayHook(useElement, useLifecycle) {
  return /* @__PURE__ */ __name(function useDivOverlay(props, setOpen) {
    const context = useLeafletContext();
    const elementRef = useElement(withPane(props, context), context);
    useAttribution(context.map, props.attribution);
    useEventHandlers(elementRef.current, props.eventHandlers);
    useLifecycle(elementRef.current, context, props, setOpen);
    return elementRef;
  }, "useDivOverlay");
}
__name(createDivOverlayHook, "createDivOverlayHook");
function splitClassName(className) {
  return className.split(" ").filter(Boolean);
}
__name(splitClassName, "splitClassName");
function addClassName(element, className) {
  for (const cls of splitClassName(className)) {
    leafletSrcExports.DomUtil.addClass(element, cls);
  }
}
__name(addClassName, "addClassName");
function createElementObject(instance, context, container) {
  return Object.freeze({
    instance,
    context,
    container
  });
}
__name(createElementObject, "createElementObject");
function createElementHook(createElement, updateElement) {
  if (updateElement == null) {
    return /* @__PURE__ */ __name(function useImmutableLeafletElement(props, context) {
      const elementRef = reactExports.useRef(void 0);
      if (!elementRef.current) elementRef.current = createElement(props, context);
      return elementRef;
    }, "useImmutableLeafletElement");
  }
  return /* @__PURE__ */ __name(function useMutableLeafletElement(props, context) {
    const elementRef = reactExports.useRef(void 0);
    if (!elementRef.current) elementRef.current = createElement(props, context);
    const propsRef = reactExports.useRef(props);
    const { instance } = elementRef.current;
    reactExports.useEffect(/* @__PURE__ */ __name(function updateElementProps() {
      if (propsRef.current !== props) {
        updateElement(instance, props, propsRef.current);
        propsRef.current = props;
      }
    }, "updateElementProps"), [
      instance,
      props,
      updateElement
    ]);
    return elementRef;
  }, "useMutableLeafletElement");
}
__name(createElementHook, "createElementHook");
function useLayerLifecycle(element, context) {
  reactExports.useEffect(/* @__PURE__ */ __name(function addLayer() {
    const container = context.layerContainer ?? context.map;
    container.addLayer(element.instance);
    return /* @__PURE__ */ __name(function removeLayer() {
      context.layerContainer?.removeLayer(element.instance);
      context.map.removeLayer(element.instance);
    }, "removeLayer");
  }, "addLayer"), [
    context,
    element
  ]);
}
__name(useLayerLifecycle, "useLayerLifecycle");
function createLayerHook(useElement) {
  return /* @__PURE__ */ __name(function useLayer(props) {
    const context = useLeafletContext();
    const elementRef = useElement(withPane(props, context), context);
    useAttribution(context.map, props.attribution);
    useEventHandlers(elementRef.current, props.eventHandlers);
    useLayerLifecycle(elementRef.current, context);
    return elementRef;
  }, "useLayer");
}
__name(createLayerHook, "createLayerHook");
function usePathOptions(element, props) {
  const optionsRef = reactExports.useRef(void 0);
  reactExports.useEffect(/* @__PURE__ */ __name(function updatePathOptions() {
    if (props.pathOptions !== optionsRef.current) {
      const options = props.pathOptions ?? {};
      element.instance.setStyle(options);
      optionsRef.current = options;
    }
  }, "updatePathOptions"), [
    element,
    props
  ]);
}
__name(usePathOptions, "usePathOptions");
function createPathHook(useElement) {
  return /* @__PURE__ */ __name(function usePath(props) {
    const context = useLeafletContext();
    const elementRef = useElement(withPane(props, context), context);
    useEventHandlers(elementRef.current, props.eventHandlers);
    useLayerLifecycle(elementRef.current, context);
    usePathOptions(elementRef.current, props);
    return elementRef;
  }, "usePath");
}
__name(createPathHook, "createPathHook");
function createControlComponent(createInstance) {
  function createElement(props, context) {
    return createElementObject(createInstance(props), context);
  }
  __name(createElement, "createElement");
  const useElement = createElementHook(createElement);
  const useControl = createControlHook(useElement);
  return createLeafComponent(useControl);
}
__name(createControlComponent, "createControlComponent");
function createLayerComponent(createElement, updateElement) {
  const useElement = createElementHook(createElement, updateElement);
  const useLayer = createLayerHook(useElement);
  return createContainerComponent(useLayer);
}
__name(createLayerComponent, "createLayerComponent");
function createOverlayComponent(createElement, useLifecycle) {
  const useElement = createElementHook(createElement);
  const useOverlay = createDivOverlayHook(useElement, useLifecycle);
  return createDivOverlayComponent(useOverlay);
}
__name(createOverlayComponent, "createOverlayComponent");
function createPathComponent(createElement, updateElement) {
  const useElement = createElementHook(createElement, updateElement);
  const usePath = createPathHook(useElement);
  return createContainerComponent(usePath);
}
__name(createPathComponent, "createPathComponent");
function createTileLayerComponent(createElement, updateElement) {
  const useElement = createElementHook(createElement, updateElement);
  const useLayer = createLayerHook(useElement);
  return createLeafComponent(useLayer);
}
__name(createTileLayerComponent, "createTileLayerComponent");
function updateGridLayer(layer, props, prevProps) {
  const { opacity, zIndex } = props;
  if (opacity != null && opacity !== prevProps.opacity) {
    layer.setOpacity(opacity);
  }
  if (zIndex != null && zIndex !== prevProps.zIndex) {
    layer.setZIndex(zIndex);
  }
}
__name(updateGridLayer, "updateGridLayer");
function updateMediaOverlay(overlay, props, prevProps) {
  if (props.bounds instanceof leafletSrcExports.LatLngBounds && props.bounds !== prevProps.bounds) {
    overlay.setBounds(props.bounds);
  }
  if (props.opacity != null && props.opacity !== prevProps.opacity) {
    overlay.setOpacity(props.opacity);
  }
  if (props.zIndex != null && props.zIndex !== prevProps.zIndex) {
    overlay.setZIndex(props.zIndex);
  }
}
__name(updateMediaOverlay, "updateMediaOverlay");
export {
  LeafletContext as L,
  createPathComponent as a,
  updateCircle as b,
  createControlComponent as c,
  createElementObject as d,
  extendContext as e,
  createLayerComponent as f,
  updateMediaOverlay as g,
  createContainerComponent as h,
  createControlHook as i,
  createElementHook as j,
  createLeafletContext as k,
  addClassName as l,
  createOverlayComponent as m,
  createLayerHook as n,
  createTileLayerComponent as o,
  updateGridLayer as p,
  useLeafletContext as u,
  withPane as w
};
