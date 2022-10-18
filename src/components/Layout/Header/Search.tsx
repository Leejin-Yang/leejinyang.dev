import { useRef } from 'react';

import styles from './search.module.scss';

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return <input type='text' className={styles.search} ref={searchInputRef} />;
};

export default Search;
