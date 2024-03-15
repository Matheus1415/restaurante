import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import styleTeman from '../../styles/Tema.module.scss';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={styleTeman.container}>
        <Outlet />
      </div>
    </>
  );
}