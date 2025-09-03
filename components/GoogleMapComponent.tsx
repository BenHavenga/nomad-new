"use client";

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      try {
        const google = await loader.load();
        const { Map } = google.maps;

        const location = { lat: 53.3297, lng: -6.2274 }; // Coordinates for 31 Clyde Road, Ballsbridge
        
        if (mapRef.current) {
          const map = new Map(mapRef.current, {
            center: location,
            zoom: 15,
            styles: [
              {
                "elementType": "geometry",
                "stylers": [{ "color": "#242f3e" }]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#242f3e" }]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#746855" }]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#d59563" }]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#d59563" }]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{ "color": "#263c3f" }]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#6b9a76" }]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#38414e" }]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#212a37" }]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9ca5b3" }]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{ "color": "#746855" }]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#1f2835" }]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#f3d19c" }]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#17263c" }]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#515c6d" }]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#17263c" }]
              }
            ]
          });

          // Add a marker
          new google.maps.Marker({
            position: location,
            map: map,
            title: "Nomad AI"
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full" />
  );
}
