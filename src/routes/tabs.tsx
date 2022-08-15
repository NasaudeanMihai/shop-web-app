import { useEffect, useState } from 'react';
import { IoShirtSharp } from 'react-icons/io5';

import HeaderMenu from './HeaderMenu';
import MobileMenuModal from '../components/MobileMenuModal/MobileMenuModal';

import './tabs.css';

const Tabs = () => {
  const [navbarColor, setNavbarColor] = useState<string>('transparent');
  const [mobileMenuModal, setModalMenuModal] = useState<boolean>(false);

  const handleMobileMenuModalButton = () => setModalMenuModal(false);
  const handleMobileMenuButton = () => setModalMenuModal(true);

  useEffect(() => {
    document.body.style.overflow = 'auto';
  });

  useEffect(() => {
    window.addEventListener('wheel', () => {
      if (window.scrollY >= 20) {
        setNavbarColor('#D3D3D3');
      }
      if (window.scrollY <= 19) {
        setNavbarColor('transparent');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 20) {
        setNavbarColor('#D3D3D3');
      }
      if (window.scrollY <= 19) {
        setNavbarColor('transparent');
      }
    });
  }, []);

  if (mobileMenuModal) {
    return (
      <MobileMenuModal
        handleMobileMenuModalButton={handleMobileMenuModalButton}
        handleCloseMobileMenuModalButton={handleMobileMenuModalButton}
      />
    );
  }

  return (
    <div
      className="row justify-content-between align-items-center wrapper-navbar"
      style={{ backgroundColor: navbarColor }}>
      <div className="col">
        <IoShirtSharp className="icon" size={30} />
      </div>
      <div className="col">
        <HeaderMenu handleMobileMenuButton={handleMobileMenuButton} />
      </div>
    </div>
  );
};

export default Tabs;
