// Next Imports
import Link from 'next/link';
// General Imports
import createScn from '@/utils/scn';
import styles from '../styles.module.scss';
// Icons Imports
import archiveIcon from '/public/assets/icons/chat/archived.svg';
import chatIcon from '/public/assets/icons/chat/chats-outline.svg';
import communityIcon from '/public/assets/icons/chat/community-tab.svg';
import favIcon from '/public/assets/icons/chat/star-outline.svg';
import settingsIcon from '/public/assets/icons/chat/settings-outline.svg';
import userIcon from '/public/assets/icons/chat/default-user.svg';

export const getIcons = () => {
  return {
    archiveIcon,
    chatIcon,
    favIcon,
    communityIcon,
    settingsIcon,
    userIcon,
  };
};
// Next Imports
export const getNextImports = () => {
  return {
    Link,
  };
};
// General
export const getGeneralImports = () => {
  return {
    styles,
    createScn,
  };
};
