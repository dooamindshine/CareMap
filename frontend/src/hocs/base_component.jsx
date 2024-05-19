import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

export function useBaseProps() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  

  return { dispatch , t  };
}
