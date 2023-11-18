import { useState } from 'react';
import styles from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <button className={styles.button} onClick={() => setCount(count + 1)}>Прибавить</button>
            <p>count: {count}</p>
        </div>
    );
};

