import React, { useEffect } from 'react';
import { LargeText } from '../../styling/common';
import { useAppDispatch } from '../../localredux/hooks';
import { getSessionData } from '../../localredux/session';
import withBase from 'hocs/base_page';
import { HomeParent } from './styles';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loading from 'images/lotties/loading.json';
import { AnimatePresence } from 'framer-motion';

function Home() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSessionData({ sessionId: 23, navigation }));
  });

  return (
    <HomeParent>
      <AnimatePresence>
        <LargeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Logging you in , Bitte warten
        </LargeText>
      </AnimatePresence>
      <Lottie animationData={loading} loop={true} />
    </HomeParent>
  );
}

export default withBase(Home);
