import React, { useEffect } from 'react';
import { LargeText } from '../styling/common';
import withBase from 'hocs/base_page';
import { HeaderParent } from './styles';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loading from 'images/lotties/loading.json';
import { AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useBaseProps } from 'hocs/base_component';

function Header() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const {t} = useBaseProps()

  return (
    <HeaderParent>
      <AnimatePresence>
        <LargeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {t('home.logo')}
        </LargeText>
      </AnimatePresence>
    </HeaderParent>
  );
}

export default Header;
