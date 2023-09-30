import * as React from 'react';
import {useState, useCallback} from 'react';
import Map, {
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  MapRef,
} from 'react-map-gl';

import DrawControl from './DrawControl';
import ControlPanel from './ControlPanel';
import GeocoderControl from './GeocoderControl';
import bbox from '@turf/bbox';
import InstructionsMapOne from './InstructionsMapOne';
import InstructionsMapTwo from './InstructionsMapTwo';
import { Check } from '@mui/icons-material';


const TOKEN = 'pk.eyJ1IjoiYWR1Y2hhdGUiLCJhIjoibWlwdzdCWSJ9.r3Fu1PMbaQ7qxSCA5GBwlA'; // Set your mapbox token here

export default function PolygonMap(props: {setDrawnMapData: (mapParms: Object) => void;}) {
  const [features, setFeatures] = useState<any>({});
  const [isHasShownModal, setIsHasShownModal] = useState<boolean>(false);
  const [base64ImageExport, setBase64ImageExport] = useState<string>('');
  const [isInstructinsOneOpen, setIsInstructinsOneOpen] = useState<boolean>(true);
  const [isInstructinsTwoOpen, setIsInstructinsTwoOpen] = useState<boolean>(false);
  const [locationResult, setLocationResult] = useState<Object>({});
  const mapRef = React.useRef<MapRef>();

  const handleToggle = (isOpen: boolean) => {
    setIsInstructinsOneOpen(isOpen);
  };

  const handleExportData = () => {
    props.setDrawnMapData({
      imageUrlEncoded: mapRef.current.getCanvas().toDataURL(),
      features: features,
      location: locationResult
    });
  }

  const handleToggleTwo = (isOpen: boolean) => {
    setIsInstructinsTwoOpen(isOpen);
    setIsHasShownModal(true);
    if(isOpen === false){
      const [minLng, minLat, maxLng, maxLat] = bbox(features[Object.keys(features)[0]]);
  
      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {padding: 40, duration: 1000}
      );
      
    }
  };

  React.useEffect(() => {
    if(Object.keys(features).length === 1 && !isHasShownModal){
      setIsInstructinsTwoOpen(true);
    }
    
    
  }, [features])

 


  const onGeolocateResult = useCallback((e: any) => {
    setLocationResult(e);
  }, []);

  

  const onUpdate = useCallback((e: any) => {
    setFeatures((currFeatures: any) => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback((e: any) => {
    setFeatures((currFeatures: any) => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  return (
    <>
    <div id="map">
      <Map
        initialViewState={{
          longitude: -91.874,
          latitude: 42.76,
          zoom: 12
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={TOKEN}
        preserveDrawingBuffer={true}
        ref={mapRef}
      > <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" onResult={onGeolocateResult}/>
        <DrawControl
          position="top-left"
          displayControlsDefault={false}
          controls={{
            polygon: true,
            trash: true
          }}
          defaultMode="draw_polygon"
          onCreate={onUpdate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        {Object.keys(features).length > 1 && 
        <div 
          className="text-center btn-green btn-map cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" 
          onClick={handleExportData}>
          <div className="justify-between">
            <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
            &nbsp;Go to Next Step</span>
            </div>
        </div>}
      </Map>
      <ControlPanel polygons={Object.values(features)} />
    </div>
    <span onClick={handleExportData}>Next Step</span>
    <InstructionsMapOne isOpen={isInstructinsOneOpen} handleToggle={handleToggle}/>
    <InstructionsMapTwo isOpen={isInstructinsTwoOpen} handleToggle={handleToggleTwo}/>
    <img src={base64ImageExport} />
    </>
  );
}


