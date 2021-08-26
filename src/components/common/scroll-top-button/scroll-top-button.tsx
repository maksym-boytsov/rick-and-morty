import { Button, forwardRef } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

export type ScrollTopButtonProps = {
  target: React.RefObject<HTMLElement>;
};

export const ScrollTopButton = forwardRef<ScrollTopButtonProps, 'button'>((props, ref) => {
  const { children = 'Go top' } = props;

  const handleFloatingButtonClick = () => {
    props.target.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={handleFloatingButtonClick} leftIcon={<FaArrowUp />} ref={ref} {...props}>
      {children}
    </Button>
  );
});
