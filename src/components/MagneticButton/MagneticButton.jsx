import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';
import styles from './MagneticButton.module.css';

export default function MagneticButton({
  children,
  variant = 'primary',
  size = '',
  href,
  onClick,
  target,
  download,
  className = '',
  ...props
}) {
  const { ref, position } = useMagnetic(0.3);
  const Tag = href ? 'a' : 'button';

  const classes = [
    styles.btn,
    styles[variant],
    size && styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      ref={ref}
      style={{ display: 'inline-block' }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
    >
      <Tag
        className={classes}
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
