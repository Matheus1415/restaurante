import styleTema from '../../styles/Tema.module.scss';
import styles from './Sobre.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export const Sobre = () => {
  return (
    <section>
      <h3 className={styleTema.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
      <img src={nossaCasa} alt="Casa do alurni" />
        <div className={styles.sobreNos__texto}>
          <p>
          Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
    </section>
  );
};