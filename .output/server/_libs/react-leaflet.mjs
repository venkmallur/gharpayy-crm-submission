var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, R as React } from "./react.mjs";
import { u as useLeafletContext, c as createControlComponent, a as createPathComponent, b as updateCircle, d as createElementObject, e as extendContext, f as createLayerComponent, g as updateMediaOverlay, h as createContainerComponent, i as createControlHook, L as LeafletContext, j as createElementHook, k as createLeafletContext, l as addClassName, m as createOverlayComponent, n as createLayerHook, o as createTileLayerComponent, p as updateGridLayer, w as withPane } from "./react-leaflet__core.mjs";
import { a as leafletSrcExports } from "./leaflet.mjs";
import { r as reactDomExports } from "./react-dom.mjs";

function useMap() {
  return useLeafletContext().map;
}
__name(useMap, "useMap");
function useMapEvent(type, handler) {
  const map = useMap();
  reactExports.useEffect(/* @__PURE__ */ __name(function addMapEventHandler() {
    map.on(type, handler);
    return /* @__PURE__ */ __name(function removeMapEventHandler() {
      map.off(type, handler);
    }, "removeMapEventHandler");
  }, "addMapEventHandler"), [
    map,
    type,
    handler
  ]);
  return map;
}
__name(useMapEvent, "useMapEvent");
function useMapEvents(handlers) {
  const map = useMap();
  reactExports.useEffect(/* @__PURE__ */ __name(function addMapEventHandlers() {
    map.on(handlers);
    return /* @__PURE__ */ __name(function removeMapEventHandlers() {
      map.off(handlers);
    }, "removeMapEventHandlers");
  }, "addMapEventHandlers"), [
    map,
    handlers
  ]);
  return map;
}
__name(useMapEvents, "useMapEvents");
const AttributionControl = createControlComponent(/* @__PURE__ */ __name(function createAttributionControl(props) {
  return new leafletSrcExports.Control.Attribution(props);
}, "createAttributionControl"));
const Circle = createPathComponent(/* @__PURE__ */ __name(function createCircle({ center, children: _c, ...options }, ctx) {
  const circle = new leafletSrcExports.Circle(center, options);
  return createElementObject(circle, extendContext(ctx, {
    overlayContainer: circle
  }));
}, "createCircle"), updateCircle);
const CircleMarker = createPathComponent(/* @__PURE__ */ __name(function createCircleMarker({ center, children: _c, ...options }, ctx) {
  const marker = new leafletSrcExports.CircleMarker(center, options);
  return createElementObject(marker, extendContext(ctx, {
    overlayContainer: marker
  }));
}, "createCircleMarker"), updateCircle);
const FeatureGroup = createPathComponent(/* @__PURE__ */ __name(function createFeatureGroup({ children: _c, ...options }, ctx) {
  const group = new leafletSrcExports.FeatureGroup([], options);
  return createElementObject(group, extendContext(ctx, {
    layerContainer: group,
    overlayContainer: group
  }));
}, "createFeatureGroup"));
const GeoJSON = createPathComponent(/* @__PURE__ */ __name(function createGeoJSON({ data, ...options }, ctx) {
  const geoJSON = new leafletSrcExports.GeoJSON(data, options);
  return createElementObject(geoJSON, extendContext(ctx, {
    overlayContainer: geoJSON
  }));
}, "createGeoJSON"), /* @__PURE__ */ __name(function updateGeoJSON(layer, props, prevProps) {
  if (props.style !== prevProps.style) {
    if (props.style == null) {
      layer.resetStyle();
    } else {
      layer.setStyle(props.style);
    }
  }
}, "updateGeoJSON"));
const ImageOverlay = createLayerComponent(/* @__PURE__ */ __name(function createImageOverlay({ bounds, url, ...options }, ctx) {
  const overlay = new leafletSrcExports.ImageOverlay(url, bounds, options);
  return createElementObject(overlay, extendContext(ctx, {
    overlayContainer: overlay
  }));
}, "createImageOverlay"), /* @__PURE__ */ __name(function updateImageOverlay(overlay, props, prevProps) {
  updateMediaOverlay(overlay, props, prevProps);
  if (props.bounds !== prevProps.bounds) {
    const bounds = props.bounds instanceof leafletSrcExports.LatLngBounds ? props.bounds : new leafletSrcExports.LatLngBounds(props.bounds);
    overlay.setBounds(bounds);
  }
  if (props.url !== prevProps.url) {
    overlay.setUrl(props.url);
  }
}, "updateImageOverlay"));
const LayerGroup = createLayerComponent(/* @__PURE__ */ __name(function createLayerGroup({ children: _c, ...options }, ctx) {
  const group = new leafletSrcExports.LayerGroup([], options);
  return createElementObject(group, extendContext(ctx, {
    layerContainer: group
  }));
}, "createLayerGroup"));
const useLayersControlElement = createElementHook(/* @__PURE__ */ __name(function createLayersControl({ children: _c, ...options }, ctx) {
  const control = new leafletSrcExports.Control.Layers(void 0, void 0, options);
  return createElementObject(control, extendContext(ctx, {
    layersControl: control
  }));
}, "createLayersControl"), /* @__PURE__ */ __name(function updateLayersControl(control, props, prevProps) {
  if (props.collapsed !== prevProps.collapsed) {
    if (props.collapsed === true) {
      control.collapse();
    } else {
      control.expand();
    }
  }
}, "updateLayersControl"));
const useLayersControl = createControlHook(useLayersControlElement);
const LayersControl = createContainerComponent(useLayersControl);
function createControlledLayer(addLayerToControl) {
  return /* @__PURE__ */ __name(function ControlledLayer(props) {
    const parentContext = useLeafletContext();
    const propsRef = reactExports.useRef(props);
    const [layer, setLayer] = reactExports.useState(null);
    const { layersControl, map } = parentContext;
    const addLayer = reactExports.useCallback((layerToAdd) => {
      if (layersControl != null) {
        if (propsRef.current.checked) {
          map.addLayer(layerToAdd);
        }
        addLayerToControl(layersControl, layerToAdd, propsRef.current.name);
        setLayer(layerToAdd);
      }
    }, [
      addLayerToControl,
      layersControl,
      map
    ]);
    const removeLayer = reactExports.useCallback((layerToRemove) => {
      layersControl?.removeLayer(layerToRemove);
      setLayer(null);
    }, [
      layersControl
    ]);
    const context = reactExports.useMemo(() => {
      return extendContext(parentContext, {
        layerContainer: {
          addLayer,
          removeLayer
        }
      });
    }, [
      parentContext,
      addLayer,
      removeLayer
    ]);
    reactExports.useEffect(() => {
      if (layer !== null && propsRef.current !== props) {
        if (props.checked === true && (propsRef.current.checked == null || propsRef.current.checked === false)) {
          map.addLayer(layer);
        } else if (propsRef.current.checked === true && (props.checked == null || props.checked === false)) {
          map.removeLayer(layer);
        }
        propsRef.current = props;
      }
    });
    return props.children ? /* @__PURE__ */ React.createElement(LeafletContext, {
      value: context
    }, props.children) : null;
  }, "ControlledLayer");
}
__name(createControlledLayer, "createControlledLayer");
LayersControl.BaseLayer = createControlledLayer(/* @__PURE__ */ __name(function addBaseLayer(layersControl, layer, name) {
  layersControl.addBaseLayer(layer, name);
}, "addBaseLayer"));
LayersControl.Overlay = createControlledLayer(/* @__PURE__ */ __name(function addOverlay(layersControl, layer, name) {
  layersControl.addOverlay(layer, name);
}, "addOverlay"));
function MapContainerComponent({ bounds, boundsOptions, center, children, className, id, placeholder, style, whenReady, zoom, ...options }, forwardedRef) {
  const [props] = reactExports.useState({
    className,
    id,
    style
  });
  const [context, setContext] = reactExports.useState(null);
  const mapInstanceRef = reactExports.useRef(void 0);
  reactExports.useImperativeHandle(forwardedRef, () => context?.map ?? null, [
    context
  ]);
  const mapRef = reactExports.useCallback((node) => {
    if (node !== null && !mapInstanceRef.current) {
      const map = new leafletSrcExports.Map(node, options);
      mapInstanceRef.current = map;
      if (center != null && zoom != null) {
        map.setView(center, zoom);
      } else if (bounds != null) {
        map.fitBounds(bounds, boundsOptions);
      }
      if (whenReady != null) {
        map.whenReady(whenReady);
      }
      setContext(createLeafletContext(map));
    }
  }, []);
  reactExports.useEffect(() => {
    return () => {
      context?.map.remove();
    };
  }, [
    context
  ]);
  const contents = context ? /* @__PURE__ */ React.createElement(LeafletContext, {
    value: context
  }, children) : placeholder ?? null;
  return /* @__PURE__ */ React.createElement("div", {
    ...props,
    ref: mapRef
  }, contents);
}
__name(MapContainerComponent, "MapContainerComponent");
const MapContainer = /* @__PURE__ */ reactExports.forwardRef(MapContainerComponent);
const Marker = createLayerComponent(/* @__PURE__ */ __name(function createMarker({ position, ...options }, ctx) {
  const marker = new leafletSrcExports.Marker(position, options);
  return createElementObject(marker, extendContext(ctx, {
    overlayContainer: marker
  }));
}, "createMarker"), /* @__PURE__ */ __name(function updateMarker(marker, props, prevProps) {
  if (props.position !== prevProps.position) {
    marker.setLatLng(props.position);
  }
  if (props.icon != null && props.icon !== prevProps.icon) {
    marker.setIcon(props.icon);
  }
  if (props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset) {
    marker.setZIndexOffset(props.zIndexOffset);
  }
  if (props.opacity != null && props.opacity !== prevProps.opacity) {
    marker.setOpacity(props.opacity);
  }
  if (marker.dragging != null && props.draggable !== prevProps.draggable) {
    if (props.draggable === true) {
      marker.dragging.enable();
    } else {
      marker.dragging.disable();
    }
  }
}, "updateMarker"));
const DEFAULT_PANES = [
  "mapPane",
  "markerPane",
  "overlayPane",
  "popupPane",
  "shadowPane",
  "tilePane",
  "tooltipPane"
];
function omitPane(obj, pane) {
  const { [pane]: _p, ...others } = obj;
  return others;
}
__name(omitPane, "omitPane");
function createPane(name, props, context) {
  if (DEFAULT_PANES.indexOf(name) !== -1) {
    throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${name}`);
  }
  if (context.map.getPane(name) != null) {
    throw new Error(`A pane with this name already exists: ${name}`);
  }
  const parentPaneName = props.pane ?? context.pane;
  const parentPane = parentPaneName ? context.map.getPane(parentPaneName) : void 0;
  const element = context.map.createPane(name, parentPane);
  if (props.className != null) {
    addClassName(element, props.className);
  }
  if (props.style != null) {
    for (const key of Object.keys(props.style)) {
      element.style[key] = props.style[key];
    }
  }
  return element;
}
__name(createPane, "createPane");
function PaneComponent(props, forwardedRef) {
  const [paneName] = reactExports.useState(props.name);
  const [paneElement, setPaneElement] = reactExports.useState(null);
  reactExports.useImperativeHandle(forwardedRef, () => paneElement, [
    paneElement
  ]);
  const context = useLeafletContext();
  const newContext = reactExports.useMemo(() => ({
    ...context,
    pane: paneName
  }), [
    context
  ]);
  reactExports.useEffect(() => {
    setPaneElement(createPane(paneName, props, context));
    return /* @__PURE__ */ __name(function removeCreatedPane() {
      const pane = context.map.getPane(paneName);
      pane?.remove?.();
      if (context.map._panes != null) {
        context.map._panes = omitPane(context.map._panes, paneName);
        context.map._paneRenderers = omitPane(
          // @ts-ignore map internals
          context.map._paneRenderers,
          paneName
        );
      }
    }, "removeCreatedPane");
  }, []);
  return props.children != null && paneElement != null ? /* @__PURE__ */ reactDomExports.createPortal(/* @__PURE__ */ React.createElement(LeafletContext, {
    value: newContext
  }, props.children), paneElement) : null;
}
__name(PaneComponent, "PaneComponent");
const Pane = /* @__PURE__ */ reactExports.forwardRef(PaneComponent);
const Polygon = createPathComponent(/* @__PURE__ */ __name(function createPolygon({ positions, ...options }, ctx) {
  const polygon = new leafletSrcExports.Polygon(positions, options);
  return createElementObject(polygon, extendContext(ctx, {
    overlayContainer: polygon
  }));
}, "createPolygon"), /* @__PURE__ */ __name(function updatePolygon(layer, props, prevProps) {
  if (props.positions !== prevProps.positions) {
    layer.setLatLngs(props.positions);
  }
}, "updatePolygon"));
const Polyline = createPathComponent(/* @__PURE__ */ __name(function createPolyline({ positions, ...options }, ctx) {
  const polyline = new leafletSrcExports.Polyline(positions, options);
  return createElementObject(polyline, extendContext(ctx, {
    overlayContainer: polyline
  }));
}, "createPolyline"), /* @__PURE__ */ __name(function updatePolyline(layer, props, prevProps) {
  if (props.positions !== prevProps.positions) {
    layer.setLatLngs(props.positions);
  }
}, "updatePolyline"));
const Popup = createOverlayComponent(/* @__PURE__ */ __name(function createPopup(props, context) {
  const popup = new leafletSrcExports.Popup(props, context.overlayContainer);
  return createElementObject(popup, context);
}, "createPopup"), /* @__PURE__ */ __name(function usePopupLifecycle(element, context, { position }, setOpen) {
  reactExports.useEffect(/* @__PURE__ */ __name(function addPopup() {
    const { instance } = element;
    function onPopupOpen(event) {
      if (event.popup === instance) {
        instance.update();
        setOpen(true);
      }
    }
    __name(onPopupOpen, "onPopupOpen");
    function onPopupClose(event) {
      if (event.popup === instance) {
        setOpen(false);
      }
    }
    __name(onPopupClose, "onPopupClose");
    context.map.on({
      popupopen: onPopupOpen,
      popupclose: onPopupClose
    });
    if (context.overlayContainer == null) {
      if (position != null) {
        instance.setLatLng(position);
      }
      instance.openOn(context.map);
    } else {
      context.overlayContainer.bindPopup(instance);
    }
    return /* @__PURE__ */ __name(function removePopup() {
      context.map.off({
        popupopen: onPopupOpen,
        popupclose: onPopupClose
      });
      context.overlayContainer?.unbindPopup();
      context.map.removeLayer(instance);
    }, "removePopup");
  }, "addPopup"), [
    element,
    context,
    setOpen,
    position
  ]);
}, "usePopupLifecycle"));
const Rectangle = createPathComponent(/* @__PURE__ */ __name(function createRectangle({ bounds, ...options }, ctx) {
  const rectangle = new leafletSrcExports.Rectangle(bounds, options);
  return createElementObject(rectangle, extendContext(ctx, {
    overlayContainer: rectangle
  }));
}, "createRectangle"), /* @__PURE__ */ __name(function updateRectangle(layer, props, prevProps) {
  if (props.bounds !== prevProps.bounds) {
    layer.setBounds(props.bounds);
  }
}, "updateRectangle"));
const ScaleControl = createControlComponent(/* @__PURE__ */ __name(function createScaleControl(props) {
  return new leafletSrcExports.Control.Scale(props);
}, "createScaleControl"));
const useSVGOverlayElement = createElementHook(/* @__PURE__ */ __name(function createSVGOverlay(props, context) {
  const { attributes, bounds, ...options } = props;
  const container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  container.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  if (attributes != null) {
    for (const name of Object.keys(attributes)) {
      container.setAttribute(name, attributes[name]);
    }
  }
  const overlay = new leafletSrcExports.SVGOverlay(container, bounds, options);
  return createElementObject(overlay, context, container);
}, "createSVGOverlay"), updateMediaOverlay);
const useSVGOverlay = createLayerHook(useSVGOverlayElement);
function SVGOverlayComponent({ children, ...options }, forwardedRef) {
  const { instance, container } = useSVGOverlay(options).current;
  reactExports.useImperativeHandle(forwardedRef, () => instance);
  return container == null || children == null ? null : /* @__PURE__ */ reactDomExports.createPortal(children, container);
}
__name(SVGOverlayComponent, "SVGOverlayComponent");
const SVGOverlay = /* @__PURE__ */ reactExports.forwardRef(SVGOverlayComponent);
const TileLayer = createTileLayerComponent(/* @__PURE__ */ __name(function createTileLayer({ url, ...options }, context) {
  const layer = new leafletSrcExports.TileLayer(url, withPane(options, context));
  return createElementObject(layer, context);
}, "createTileLayer"), /* @__PURE__ */ __name(function updateTileLayer(layer, props, prevProps) {
  updateGridLayer(layer, props, prevProps);
  const { url } = props;
  if (url != null && url !== prevProps.url) {
    layer.setUrl(url);
  }
}, "updateTileLayer"));
const Tooltip = createOverlayComponent(/* @__PURE__ */ __name(function createTooltip(props, context) {
  const tooltip = new leafletSrcExports.Tooltip(props, context.overlayContainer);
  return createElementObject(tooltip, context);
}, "createTooltip"), /* @__PURE__ */ __name(function useTooltipLifecycle(element, context, { position }, setOpen) {
  reactExports.useEffect(/* @__PURE__ */ __name(function addTooltip() {
    const container = context.overlayContainer;
    if (container == null) {
      return;
    }
    const { instance } = element;
    const onTooltipOpen = /* @__PURE__ */ __name((event) => {
      if (event.tooltip === instance) {
        if (position != null) {
          instance.setLatLng(position);
        }
        instance.update();
        setOpen(true);
      }
    }, "onTooltipOpen");
    const onTooltipClose = /* @__PURE__ */ __name((event) => {
      if (event.tooltip === instance) {
        setOpen(false);
      }
    }, "onTooltipClose");
    container.on({
      tooltipopen: onTooltipOpen,
      tooltipclose: onTooltipClose
    });
    container.bindTooltip(instance);
    return /* @__PURE__ */ __name(function removeTooltip() {
      container.off({
        tooltipopen: onTooltipOpen,
        tooltipclose: onTooltipClose
      });
      if (container._map != null) {
        container.unbindTooltip();
      }
    }, "removeTooltip");
  }, "addTooltip"), [
    element,
    context,
    setOpen,
    position
  ]);
}, "useTooltipLifecycle"));
const VideoOverlay = createLayerComponent(/* @__PURE__ */ __name(function createVideoOverlay({ bounds, url, ...options }, ctx) {
  const overlay = new leafletSrcExports.VideoOverlay(url, bounds, options);
  if (options.play === true) {
    overlay.getElement()?.play();
  }
  return createElementObject(overlay, extendContext(ctx, {
    overlayContainer: overlay
  }));
}, "createVideoOverlay"), /* @__PURE__ */ __name(function updateVideoOverlay(overlay, props, prevProps) {
  updateMediaOverlay(overlay, props, prevProps);
  if (typeof props.url === "string" && props.url !== prevProps.url) {
    overlay.setUrl(props.url);
  }
  const video = overlay.getElement();
  if (video != null) {
    if (props.play === true && !prevProps.play) {
      video.play();
    } else if (!props.play && prevProps.play === true) {
      video.pause();
    }
  }
}, "updateVideoOverlay"));
const WMSTileLayer = createTileLayerComponent(/* @__PURE__ */ __name(function createWMSTileLayer({ eventHandlers: _eh, params = {}, url, ...options }, context) {
  const layer = new leafletSrcExports.TileLayer.WMS(url, {
    ...params,
    ...withPane(options, context)
  });
  return createElementObject(layer, context);
}, "createWMSTileLayer"), /* @__PURE__ */ __name(function updateWMSTileLayer(layer, props, prevProps) {
  updateGridLayer(layer, props, prevProps);
  if (props.params != null && props.params !== prevProps.params) {
    layer.setParams(props.params);
  }
}, "updateWMSTileLayer"));
const ZoomControl = createControlComponent(/* @__PURE__ */ __name(function createZoomControl(props) {
  return new leafletSrcExports.Control.Zoom(props);
}, "createZoomControl"));
export {
  AttributionControl,
  Circle,
  CircleMarker,
  FeatureGroup,
  GeoJSON,
  ImageOverlay,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Pane,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  SVGOverlay,
  ScaleControl,
  TileLayer,
  Tooltip,
  VideoOverlay,
  WMSTileLayer,
  ZoomControl,
  useMap,
  useMapEvent,
  useMapEvents
};
