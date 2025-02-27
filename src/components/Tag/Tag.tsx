import React from 'react';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';

const Tag: React.FC<TagProps> = ({ tag }) => {
  const tagClass = styles[`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`] || '';

  return <span className={`${styles.tag} ${tagClass}`}>{tag}</span>;
};

export default Tag;
