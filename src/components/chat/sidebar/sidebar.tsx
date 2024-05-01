import { User } from '../components/user/user';

import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { SearchBar } from '../components/searchBar/searchBar';
import { users } from '../components/user/data';
import { Header } from '../components/header/header';

const scn = createScn(styles);

export const Sidebar = () => {
  return (
    <div className={`${scn('sidebar')}`}>
      <div className={`${scn('sidebar__header')}`}>
        <Header />
        <SearchBar />
      </div>
      <div className={`${scn('sidebar__body')}`}>
        {users.map(({ slug, image, name, message, time }) => (
          <User slug={slug} key={name} image={image} name={name} message={message} time={time} />
        ))}
      </div>
    </div>
  );
};
