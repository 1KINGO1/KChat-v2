import {FC, useEffect, useState, MouseEvent, useRef} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import styles from './FindConversationButton.module.scss';

const FindConversationButton: FC = () => {

  const [isFormOpened, setFormOpened] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const clickHandler = () => {
      setFormOpened(false);
    }

    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    }
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isFormOpened]);


  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFormOpened(true);
  }

  return (
    <button className={styles.wrapper} onClick={clickHandler}>
      {isFormOpened && (
        <form className={styles.findForm}>
          <input type="text" ref={inputRef} placeholder='Enter user nickname' id='nickname-input'/>
        </form>
      )}
      <AiOutlinePlus className={isFormOpened ? styles.svgInvisible : ''}/>
    </button>
  )
};

export default FindConversationButton;
