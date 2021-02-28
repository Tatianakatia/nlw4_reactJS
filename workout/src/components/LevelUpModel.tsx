import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModel.module.css';

export function LevelUpModel() {
  const { level, closeLevelUpModel } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Congratulation!!</strong>
        <p>You You have reached a new level</p>

        <button type="button" onClick={closeLevelUpModel}>
          <img src="icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}