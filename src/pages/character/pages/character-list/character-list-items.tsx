import { Heading, SimpleGrid, SimpleGridProps, Spinner, useDisclosure } from '@chakra-ui/react';
import { ScrollTopButton } from 'components/common';
import { CharacterSmallFragment } from 'graphql/generated/graphql';
import { useRef, VFC } from 'react';

import { CharacterListItem } from './character-list-item';

type CharacterListItemsProps = SimpleGridProps & {
  isLoading?: boolean;
  characters?: CharacterSmallFragment[] | null;
};

const FLOATING_BUTTON_TRIGGER_HEIGHT = 100;

export const CharacterListItems: VFC<CharacterListItemsProps> = ({ isLoading, characters, ...boxProps }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const floatingButtonDisclosure = useDisclosure();
  const isCharacters = characters?.length && characters.length > 0;

  const handleListScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > FLOATING_BUTTON_TRIGGER_HEIGHT) {
      floatingButtonDisclosure.onOpen();
    } else {
      floatingButtonDisclosure.onClose();
    }
  };

  return (
    <SimpleGrid
      ref={listRef}
      {...boxProps}
      spacing="4"
      position="relative"
      columns={[1, 2, 2, 3, 4, 5]}
      maxH={['calc(100vh - 180px)', 'calc(100vh - 200px)']}
      h="full"
      w="full"
      onScroll={handleListScroll}
      overflow="scroll"
    >
      {isLoading ? (
        <Spinner position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" />
      ) : isCharacters ? (
        <>
          {floatingButtonDisclosure.isOpen && (
            <ScrollTopButton
              target={listRef}
              position="fixed"
              bottom={['32', '32', '28']}
              right={['50%', '50%', '10']}
              transform={['translateX(50%)', 'translateX(50%)', 'unset']}
              zIndex="sticky"
            />
          )}
          {characters?.map((character) => (
            <CharacterListItem key={character.id} character={character} />
          ))}
        </>
      ) : (
        <Heading as="h3" size="md">
          No characters found
        </Heading>
      )}
    </SimpleGrid>
  );
};
