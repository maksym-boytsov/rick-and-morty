import { Button, ButtonProps, forwardRef } from '@chakra-ui/react';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export const BackButton = forwardRef<ButtonProps, 'button'>(function BackButton(props, ref) {
  const history = useHistory();

  return (
    <Button
      ref={ref}
      {...props}
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      onClick={history.goBack}
      leftIcon={<FaChevronLeft />}
      variant="link"
      colorScheme="teal"
    >
      Back
    </Button>
  );
});
