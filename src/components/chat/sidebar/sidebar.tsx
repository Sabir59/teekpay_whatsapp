import { User } from '../components/user/user';

import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { SearchBar } from '../components/searchBar/searchBar';
import { users } from '../components/user/data';

const scn = createScn(styles);

export const Sidebar = () => {
  return (
    <div className={`${scn('sidebar')}`}>
      <div className={`${scn('sidebar__header')}`}>
        <p className='font-bold '>Chats</p>
        <SearchBar />
      </div>
      <div className='sidebar__body mt-8 flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          {users.map(({ image, name, message, messagesCount, time }) => (
            <User key={name} image={image} name={name} message={message} messagesCount={messagesCount} time={time} />
          ))}
        </div>
      </div>
    </div>
  );
};
