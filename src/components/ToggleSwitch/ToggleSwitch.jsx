import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitch({isToggled, setIsToggled}) {

  return (
    <div className={styles.wrapper}>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={() => setIsToggled(!isToggled)}
        />
        <span className={styles.slider}>
          <span className={styles.thumb}>
            <img src="/Ruler.svg" alt="icon" className={styles.icon} />
          </span>
        </span>
      </label>
    </div>
  );
}
