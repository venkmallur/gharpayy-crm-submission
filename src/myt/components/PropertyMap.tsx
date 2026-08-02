import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Property } from '@/myt/lib/types';
import L from 'leaflet';

// Fix Leaflet's default icon path issues with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// A simple mapping from zone names to rough lat/lng coordinates in Bangalore
const ZONE_COORDS: Record<string, [number, number]> = {
  'Koramangala': [12.9352, 77.6245],
  'Indiranagar': [12.9784, 77.6408],
  'HSR Layout': [12.9121, 77.6446],
  'Whitefield': [12.9698, 77.7499],
  'Marathahalli': [12.9569, 77.7011],
  'BTM Layout': [12.9166, 77.6101],
};

export function PropertyMap({ properties, onSelect }: { properties: Property[], onSelect: (p: Property) => void }) {
  const center: [number, number] = properties.length > 0 
    ? (ZONE_COORDS[properties[0].area] || [12.9716, 77.5946])
    : [12.9716, 77.5946]; // Default to Bangalore center

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-border">
      <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {properties.map(p => {
          // Jitter slightly so properties in the same zone don't overlap perfectly
          const baseCoord = ZONE_COORDS[p.area] || [12.9716, 77.5946];
          const jitterLat = baseCoord[0] + (Math.random() - 0.5) * 0.01;
          const jitterLng = baseCoord[1] + (Math.random() - 0.5) * 0.01;
          
          return (
            <Marker 
              key={p.id} 
              position={[jitterLat, jitterLng]}
              eventHandlers={{ click: () => onSelect(p) }}
            >
              <Popup>
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.area}</div>
                <div className="text-xs mt-1">₹{p.basePrice}/mo</div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
