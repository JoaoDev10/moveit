import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext'

const Countdown = () => {
  
  const { 
    hasFinished, 
    isActive, 
    minutes, 
    resetCountdown, 
    seconds, 
    startCountdown 
  } = useContext(CountdownContext)

  // Não importar no Context porque essa parte é da vizualização do app e nao da regra de negócio. exclusivo do compoenent
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>  
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.CountdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button" 
              className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button" 
              className={styles.CountdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>  
  );
};

export default Countdown;