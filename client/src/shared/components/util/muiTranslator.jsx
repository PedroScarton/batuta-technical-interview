import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { enUS, esES } from '@mui/x-date-pickers/locales';

import 'dayjs/locale/en';
import 'dayjs/locale/es-mx';
import { useTranslation } from 'react-i18next';

import './muiTranslator.module.css';

const LANGUAJES = {
  en: {
    localeText: enUS.components.MuiLocalizationProvider.defaultProps.localeText,
    adapterLocale: 'en',
  },
  es: {
    localeText: esES.components.MuiLocalizationProvider.defaultProps.localeText,
    adapterLocale: 'es-mx',
  },
};

const MuiTranslator = ({ children }) => {
  const { i18n } = useTranslation();

  const currentLanguage = LANGUAJES[i18n.language] ? i18n.language : 'en';

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={LANGUAJES[currentLanguage].localeText}
      adapterLocale={LANGUAJES[currentLanguage].adapterLocale}
    >
      {children}
    </LocalizationProvider>
  );
};

export default MuiTranslator;
