import React, { useMemo, useState } from 'react';

import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem } from '@mui/material';

import { useTranslation } from 'react-i18next';

import useLocale from '@shared/utils/useLocale';

// const LocaleList = ({ currentLocale, locales, setLocale, labels }) => {
//   const language = useMemo(() => currentLocale.split('-')[0], [currentLocale]);

//   return locales.map(locale => (
//     <MenuItem
//       sx={{ textTransform: 'capitalize' }}
//       key={locale}
//       selected={locale === language}
//       onClick={() => setLocale(locale)}
//       dense
//     >
//       <p>{labels[locale]}</p>
//     </MenuItem>
//   ));
// };

const Locale = props => {
  const { t } = useTranslation('common');

  const localeLabels = {
    en: t('ENGLISH'),
    es: t('SPANISH'),
  };

  const { locale, locales, setLanguage } = useLocale();

  const language = useMemo(() => locale.split('-')[0], [locale]);

  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  const handleClick = event => {
    event.preventDefault();
    const lng = locale === locales[1] ? locales[0] : locales[1];

    setLanguage(lng);
    if (props.onLocaleChange) {
      props.onLocaleChange(lng);
    }
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const setLocale = lng => {
  //   setLanguage(lng);
  //   handleClose();

  //   if (props.onLocaleChange) {
  //     props.onLocaleChange(lng);
  //   }
  // };
  return (
    <>
      <Button
        aria-controls={open ? 'locale-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<LanguageIcon />}
        variant="nav-menu"
        sx={{ textTransform: 'capitalize' }}
        id="components-ui-locale-button"
      >
        {localeLabels[language]}
      </Button>

      {/* <Menu
        id="locale-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'locale-button',
        }}
      >
        <LocaleList
          currentLocale={language}
          locales={locales}
          labels={localeLabels}
          setLocale={setLocale}
        />
      </Menu> */}
    </>
  );
};

export default Locale;
