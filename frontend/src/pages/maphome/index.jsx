import React, { useEffect, useMemo, useState } from "react";
import {
  addFacilities,
  getFacilities,
  getLocations,
} from "../../localredux/user";
import withBase from "hocs/base_page";
import {
  MapHomeParent,
  PopupParent,
  DelFavParent,
  DelFavButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "components/menu/NavBar";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import {
  faHeartCirclePlus,
  faHeart,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ControlPanel from "./filters";
import Pin from "./pin";
import { useCookies } from "react-cookie";
import { EMAIL, TOKEN, USERID } from "utils/constants";

import { SelectFacilities, SelectLocations } from "localredux/user/selectors";
import { useBaseProps } from "hocs/base_component";
import Colors from "styling/color";
import { SmallText, SmallTextBold } from "styling/common";

const TOKEN_MB =
  "pk.eyJ1IjoiZG9vYSIsImEiOiJjbHg0bzI2Y2swem1sMmtxdW5uZjlydmRrIn0.nQrXB1maCAt9ApRsglWolQ";

const exclude = ["idlocations", "lat", "lang", "type"];

function MapHome() {
  const [pinInfo, setPinInfo] = useState(null);
  const [localFacilities, setLocalFacilities] = useState([]);
  const { t } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const locations = useSelector(SelectLocations);
  const facilities = useSelector(SelectFacilities);
  console.log(facilities);
  const [cookies, setCookie] = useCookies(["token", "email", "userid"]);
  const email = cookies[EMAIL];
  const userid = cookies[USERID];
  const token = cookies[TOKEN];

  useEffect(() => {
    dispatch(
      getLocations({
        category: null,
        token,
        email,
        userid,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getFacilities({
        token,
        email,
        userid,
      })
    );
  }, []);

  const getLocactionsByCategory = (category) => {
    dispatch(
      getLocations({
        category,
        token,
        email,
        userid,
      })
    );
  };

  const addFacility = (event, facility) => {
    const data = { id: facility.idlocations };
    console.log(facility);
    setLocalFacilities([...localFacilities, facility.idlocations]);
    dispatch(
      addFacilities({
        token,
        email,
        userid,
        data,
      })
    );
  };

  const isFacilityFav = (id) => {
    const findFacilityServerData = facilities.find(
      (item) => item.facility == id
    );
    console.log(findFacilityServerData)
    console.log(findFacilityServerData?.length > 0)
    return localFacilities.includes(id) || findFacilityServerData;
  };
  const pinStyleJugen = {
    cursor: "pointer",
    fill: Colors.orange,
    stroke: "none",
  };

  const pinStyleKinder = {
    cursor: "pointer",
    fill: Colors.purple,
    stroke: "none",
  };

  const pinStyleShulen = {
    cursor: "pointer",
    fill: Colors.red,
    stroke: "none",
  };

  const pinStyleSocial = {
    cursor: "pointer",
    fill: Colors.border_green,
    stroke: "none",
  };

  const getPinStyle = (type) => {
    if (type === t("locations.type1")) {
      return pinStyleJugen;
    }
    if (type === t("locations.type2")) {
      return pinStyleSocial;
    }

    if (type === t("locations.type3")) {
      return pinStyleKinder;
    }

    if (type === t("locations.type4")) {
      return pinStyleShulen;
    }
  };

  const pins = useMemo(
    () =>
      locations.map((location, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={location.lat}
          latitude={location.lang}
          anchor="top"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPinInfo(location);
          }}
        >
          <Pin style={getPinStyle(location.type)} />
        </Marker>
      )),
    [locations]
  );

  return (
    <MapHomeParent>
      <Navbar />
      <AnimatePresence>
        <Map
          initialViewState={{
            latitude: 50.8282,
            longitude: 12.9209,
            zoom: 12.5,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
          mapboxAccessToken={TOKEN_MB}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />

          {pins}

          {pinInfo && (
            <Popup
              anchor="top"
              longitude={Number(pinInfo.lat)}
              latitude={Number(pinInfo.lang)}
              onClose={() => setPinInfo(null)}
            >
              <PopupParent>
                {!isFacilityFav(pinInfo.idlocations) && (
                  <DelFavButton
                    onClick={(event) => {
                      addFacility(event, pinInfo);
                    }}
                  >
                    <FontAwesomeIcon
                      color={Colors.border_green}
                      icon={faHeartCirclePlus}
                    />
                  </DelFavButton>
                )}

                {isFacilityFav(pinInfo.idlocations) && (
                  <FontAwesomeIcon color={Colors.red} icon={faHeart} />
                )}
                {Object.entries(pinInfo).map(([key, value]) => {
                  if (value && !exclude.includes(key)) {
                    return (
                      <SmallText>
                        <SmallTextBold>{key} : </SmallTextBold>
                        {value}
                      </SmallText>
                    );
                  }
                })}
              </PopupParent>
            </Popup>
          )}
        </Map>

        <ControlPanel onClick={getLocactionsByCategory} />
      </AnimatePresence>
    </MapHomeParent>
  );
}

export default withBase(MapHome);
