import { Badge, BadgeProps, forwardRef } from '@chakra-ui/react';
import { useMemo } from 'react';

export type CharacterBadgeProps = BadgeProps & {
  status: 'Dead' | 'Alive' | 'unknown';
};

export const CharacterBadge = forwardRef<CharacterBadgeProps, 'div'>(function CharacterBadge(
  { status, ...props },
  ref
) {
  const { colorScheme, label } = useMemo(() => {
    if (status === 'Alive') {
      return {
        label: 'alive',
        colorScheme: 'green',
      };
    } else if (status === 'Dead') {
      return {
        label: 'dead',
        colorScheme: 'red',
      };
    } else {
      return {
        label: 'unknown',
        colorScheme: 'gray',
      };
    }
  }, [status]);

  return (
    <Badge {...props} colorScheme={colorScheme} ref={ref}>
      {label}
    </Badge>
  );
});
