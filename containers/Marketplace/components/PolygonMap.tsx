import * as React from 'react';
import {useState, useCallback} from 'react';
import Map, {
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  MapRef,
} from 'react-map-gl';

import DrawControl from './DrawControl';
import GeocoderControl from './GeocoderControl';
import bbox from '@turf/bbox';
import InstructionsMapOne from './InstructionsMapOne';
import InstructionsMapTwo from './InstructionsMapTwo';
import { ArrowBack, Check } from '@mui/icons-material';
import InstructionsMapPre from './InstructionsMapPre';
import InstructionsMapFinal from './InstructionsMapFinal';


const TOKEN = 'pk.eyJ1IjoiYWR1Y2hhdGUiLCJhIjoibWlwdzdCWSJ9.r3Fu1PMbaQ7qxSCA5GBwlA'; // Set your mapbox token here

export default function PolygonMap(props: {setDrawnMapData: (mapParms: Object) => void;}) {
  const [features, setFeatures] = useState<any>({});
  const [isHasShownModal, setIsHasShownModal] = useState<boolean>(false);
  const [base64ImageExport, setBase64ImageExport] = useState<string>('');
  const [isInstructionsPreOpen, setIsInstructionsPreOpen] = useState<boolean>(true);
  const [isInstructinsOneOpen, setIsInstructionsOneOpen] = useState<boolean>(false);
  const [isInstructinsTwoOpen, setIsInstructinsTwoOpen] = useState<boolean>(false);
  const [locationResult, setLocationResult] = useState<Object>({});
  const mapRef = React.useRef<MapRef>();

  const handleTogglePre = (isOpen: boolean) => {
    setIsInstructionsPreOpen(isOpen);
  };

  const handleToggleOne = (isOpen: boolean) => {
    setIsInstructionsOneOpen(isOpen);
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
    setIsInstructionsOneOpen(true);
    console.log(e);
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

  const isContinueEnabled: boolean = (Object.keys(features).length > 1);

  return (
    <div className="form-container">
    <div id="map">
      <Map
        initialViewState={{
          longitude: -74.58389,
          latitude: 40.909789,
          zoom: 16
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={TOKEN}
        preserveDrawingBuffer={true}
        ref={mapRef}
      > <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" onResult={onGeolocateResult}/>
        
        {Object.keys(locationResult).length > 0 && <><DrawControl
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
        <NavigationControl position="top-left" /></>}
      </Map>
    </div>
    <br/><br/>
    <InstructionsMapPre isOpen={isInstructionsPreOpen} handleToggle={handleTogglePre}/>
    <InstructionsMapOne isOpen={isInstructinsOneOpen} handleToggle={handleToggleOne}/>
 
    <InstructionsMapFinal isOpen={isInstructinsTwoOpen} handleToggle={handleToggleTwo}/>
    <div className="grid justify-items-center ">
                        <div className="flex space-x-2">
                            <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(4)}}>
                                <div className="justify-between">
                                    <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Go Back</span>
                                </div>
                            </div>
                                <button className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{ isContinueEnabled && handleExportData() }} disabled={!isContinueEnabled}>
                                    <div className="justify-between">
                                        <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Continue</span>
                                    </div>
                                </button>
                        </div>
                    </div>
    </div>
  );
}


