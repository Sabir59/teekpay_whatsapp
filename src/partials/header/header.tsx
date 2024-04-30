import styles from './styles.module.scss';
import createScn from '@/utils/scn';

const scn = createScn(styles);

export const Header = () => {
  return <header className={`${scn('header')}`} />;
};
