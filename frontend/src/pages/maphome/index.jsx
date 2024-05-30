import React, { useEffect } from 'react';
import { LargeText } from '../../styling/common';
import { getUserData } from '../../localredux/user';
import withBase from 'hocs/base_page';
import { MapHomeParent } from './styles';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loading from 'images/lotties/loading.json';
import { AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';

function MapHome() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData({ navigation }));
  });

  return (
    <MapHomeParent>
      <AnimatePresence>
        <LargeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
         Setting Up
        </LargeText>
      </AnimatePresence>
      {/* <Lottie animationData={loading} loop={true} /> */}
    </MapHomeParent>
  );
}

export default withBase(MapHome);
