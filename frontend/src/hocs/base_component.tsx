import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'localredux/hooks';

export function useBaseProps() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  

  return { dispatch , t  };
}
