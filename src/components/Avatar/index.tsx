import * as React from 'react';
import styles from './styles.module.scss';

export interface IAvatarProps {
  src?: string,
  alt: string,
  size?: number,
  placeholder: React.ReactNode
}

export default function Avatar ({ src, alt, size = 64, placeholder }: IAvatarProps) {
  
  return (
    <div className={styles.avatar} style={{ width: `${size}px`, height: `${size}px` }}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>
          {placeholder}
        </div>
      )}
    </div>
  );
};
