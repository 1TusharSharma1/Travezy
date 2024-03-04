import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { styled } from '@mui/system';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoidGhldHVzaGFyc2hhcm1hIiwiYSI6ImNscnhlbm81ZTB4MHoyam14bmtldGZhb2IifQ.hXsEzi-gJBIx-8-PUTz8Pg';

const MapContainer = styled('div')({
  height: '85vh', // Adjust height as needed
  width: '100%',
});

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const mapContainerRef = useRef(null);
  const map = useRef(null); // Use a ref to store the map instance

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates.lng, coordinates.lat],
      zoom: 12,
    });

    // Add navigation control (zoom in/out) to the map
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      map.current.resize();
    });

    // Event listener for map movement to update bounds and center
    map.current.on('moveend', () => {
      const { lat, lng } = map.current.getCenter();
      setCoordinates({ lat, lng });

      const bounds = map.current.getBounds();
      setBounds({
        ne: bounds.getNorthEast().toArray(),
        sw: bounds.getSouthWest().toArray(),
      });
    });
    
    // Cleanup function to remove map instance
    return () => map.current && map.current.remove();
  }, []); // Empty dependency array ensures this effect runs only once

  // Re-center map when coordinates change
  useEffect(() => {
    if (!map.current) return; // Ensure map is initialized
    
    map.current.flyTo({
      center: [coordinates.lng, coordinates.lat],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }, [coordinates]);

  return <MapContainer ref={mapContainerRef} />;
};

export default Map;
