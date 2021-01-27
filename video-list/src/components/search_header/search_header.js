import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}> Youtube </h1>
      <input className={styles.input} type="search" placeholder="search" />
      <button className={styles.btn} type="submit">
검색
      </button>
    </header>
  )
}


export default SearchHeader;