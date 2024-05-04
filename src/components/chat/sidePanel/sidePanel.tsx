import Image from 'next/image';
import { getGeneralImports, getIcons, getNextImports } from './constants/getImports';
import { useIsMobileScreen } from '@/hooks/useIsMobileScreen';

const { archiveIcon, chatIcon, communityIcon, favIcon, settingsIcon, userIcon } = getIcons();
const { Link } = getNextImports();
const { styles, createScn } = getGeneralImports();
const scn = createScn(styles);

interface SidePanelProps {
  toggleStates: (state: string) => void;
}

export const SidePanel = ({ toggleStates }: SidePanelProps) => {
  const isMobileScreen = useIsMobileScreen();
  return (
    <div className={`${scn('sidePanel')} ${isMobileScreen ? 'fixed top-0 h-full z-50' : ''}`}>
      <ul className={`${scn('sidePanel__list')}`}>
        <div className={`${scn('sidePanel__group')}`}>
          <li className={`${scn('sidePanel__item')}`} onClick={() => toggleStates('chat')}>
            <Link href='/chat' className={`${scn('sidePanel__link')}`}>
              <Image src={chatIcon} alt='Chat' />
            </Link>
          </li>
          <li className={`${scn('sidePanel__item')}`} onClick={() => toggleStates('communities')}>
            <Link href='/chat' className={`${scn('sidePanel__link')}`}>
              {/* <PiUsersThreeBold className={`${scn('sidePanel__icon')}`} /> */}
              <Image src={communityIcon} alt='communities' />
            </Link>
          </li>
          <li className={`${scn('sidePanel__item')}`} onClick={() => toggleStates('archive')}>
            <Link href='/chat' className={`${scn('sidePanel__link')}`}>
              <Image src={archiveIcon} alt='archived' />
            </Link>
          </li>
          <li className={`${scn('sidePanel__item')}`} onClick={() => toggleStates('favourite')}>
            <Link href='/chat' className={`${scn('sidePanel__link')}`}>
              <Image src={favIcon} alt='favourite' />
            </Link>
          </li>
        </div>
        <div className={`${scn('sidePanel__group')} mt-auto self-end`}>
          <li className={`${scn('sidePanel__item')}`}>
            <Link href='/chat' className={`${scn('sidePanel__link')}`} onClick={() => toggleStates('settings')}>
              <Image src={settingsIcon} alt='settings' />
            </Link>
          </li>
          <li className={`${scn('sidePanel__item')}`}>
            <Link href='/chat' className={`${scn('sidePanel__link')}`} onClick={() => toggleStates('profile')}>
              <Image src={userIcon} alt='profile' />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};
