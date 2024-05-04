'use client';

import { User } from '../components/user/user';
import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { SearchBar } from '../components/searchBar/searchBar';
import { users } from '../components/user/data';
import { Header } from '../components/header/header';
import { useState } from 'react';
import { SidePanel } from '../sidePanel/sidePanel';
import { Archive } from '../archive/archive';
import { Favourites } from '../favourites/favourites';
import { Communities } from '../communities/communities';
import { Settings } from '../settings/settings';
import { Profile } from '../profile/profile';

import { usePathname } from 'next/navigation';
import { useIsMobileScreen } from '@/hooks/useIsMobileScreen';

const scn = createScn(styles);

export const Sidebar = () => {
  const [chat, setChat] = useState(true);
  const [communities, setCommunities] = useState(false);
  const [archive, setArchive] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [settings, setSettings] = useState(false);
  const [profile, setProfile] = useState(false);

  const isMobileScreen = useIsMobileScreen();
  const pathname = usePathname();

  const toggleStates = (stateToToggle: string) => {
    setChat(false);
    setCommunities(false);
    setArchive(false);
    setFavourite(false);
    setSettings(false);
    setProfile(false);

    switch (stateToToggle) {
      case 'chat':
        setChat(true);
        break;
      case 'communities':
        setCommunities(true);
        break;
      case 'archive':
        setArchive(true);
        break;
      case 'favourite':
        setFavourite(true);
        break;
      case 'settings':
        setSettings(true);
        break;
      case 'profile':
        setProfile(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <SidePanel toggleStates={toggleStates} />
      <div
        className={`${scn('sidebar')} ${isMobileScreen ? 'ml-[60px]' : ''} ${
          isMobileScreen && pathname === '/chat' ? 'relative z-20' : ''
        }`}
      >
        {archive ? (
          <Archive />
        ) : favourite ? (
          <Favourites />
        ) : communities ? (
          <Communities />
        ) : settings ? (
          <Settings />
        ) : profile ? (
          <Profile />
        ) : (
          <>
            <div className={`${scn('sidebar__header')}`}>
              <Header icons={true} />
              <SearchBar />
            </div>
            <div className={`${scn('sidebar__body')}`}>
              {users.map(({ slug, image, name, message, time }, index) => (
                <User slug={slug} key={index} image={image} name={name} message={message} time={time} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
