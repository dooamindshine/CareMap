import React, { useEffect, useMemo, useState } from "react";
import { LargeText } from "../../styling/common";
import { getUserData } from "../../localredux/user";
import withBase from "hocs/base_page";
import { MapHomeParent } from "./styles";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "images/lotties/loading.json";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import Navbar from "components/menu/NavBar";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import ControlPanel from './control-panel';
import Pin from './pin';

import data from "./data.js";

const TOKEN =
  "pk.eyJ1IjoiZG9vYSIsImEiOiJjbHg0bzI2Y2swem1sMmtxdW5uZjlydmRrIn0.nQrXB1maCAt9ApRsglWolQ";

function MapHome() {
  const [popupInfo, setPopupInfo] = useState(null);
console.log(data)
  const pins = useMemo(
    () =>
      data.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <MapHomeParent>
      <Navbar />
      <AnimatePresence>
        <Map
          initialViewState={{
            latitude: 40,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={TOKEN}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />

          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                {popupInfo.city}, {popupInfo.state} |{" "}
                <a
                  target="_new"
                  href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                >
                  Wikipedia
                </a>
              </div>
              <img width="100%" src={popupInfo.image} />
            </Popup>
          )}
        </Map>

        <ControlPanel />
      </AnimatePresence>
    </MapHomeParent>
  );
}

export default withBase(MapHome);
