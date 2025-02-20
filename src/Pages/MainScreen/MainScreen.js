import React, { useContext } from 'react';
import DropdownMenu from './DropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/MainScreen.css';
import MyContext from '../../Context/Context';
import { useTranslation } from 'react-i18next';
import { LoginContext } from '../../Context/LoginContext';

const MainScreen = () => {
  const { isStoreOnline } = useContext(MyContext);
  const { version, cashierName } = useContext(LoginContext,);
  const { t } = useTranslation();

  const storeInfo = {
    storeNumber: '12345',
    registerNumber: '001',
    version: version,
    cashierName: cashierName
  };

  return (
    <div className="container">
      <h1 className="title"><FontAwesomeIcon icon={faStore} className="icon" /> {t('main_screen_title')}</h1>
      <div className="content">
        <DropdownMenu />
        <div className="info">
          <FontAwesomeIcon icon={faShoppingCart} className="info-icon"   />
          <span className="store-number">{t('store_number')} {storeInfo.storeNumber}</span>
          <span className="register-number">{t('register_number')} {storeInfo.registerNumber}</span>
          <span className="version">{t('version')} {storeInfo.version}</span>
          <span className="cashier-name">{t('cashier')} {storeInfo.cashierName}</span>
        </div>
        <div className={`status ${isStoreOnline ? 'online' : 'offline'}`}>
          {isStoreOnline ? t('store_online') : t('store_offline')}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
