"use client"

import { User } from '../components/user/user';

import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { SearchBar } from '../components/searchBar/searchBar';
import { users } from '../components/user/data';
import { Header } from '../components/header/header';
import { useIsMobileScreen } from '@/app/hooks/useIsMobileScreen';
import { usePathname } from 'next/navigation';

const scn = createScn(styles);

export const Sidebar = () => {
  const isMobileScreen = useIsMobileScreen()
 const pathname = usePathname()

  return (
    <div className={`${scn('sidebar')} ${isMobileScreen && pathname ==="/chat" ? 'relative z-20' : ''}`}>
      <div className={`${scn('sidebar__header')}`}>
        <Header />
        <SearchBar />
      </div>
      <div className={`${scn('sidebar__body')}`}>
        {users.map(({ slug, image, name, message, time },index) => (
          <User slug={slug} key={index} image={image} name={name} message={message} time={time} />
        ))}
      </div>
    </div>
  );
};
