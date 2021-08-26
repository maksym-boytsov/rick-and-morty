import { Flex } from '@chakra-ui/react';

import { CharacterListMain } from './character-list-main';
import { CharacterListSidebar } from './character-list-sidebar';

const CharacterList = () => {
  return (
    <Flex h={['calc(100vh - 48px)', 'calc(100vh - 64px)', 'calc(100vh - 80px)']}>
      <CharacterListSidebar />
      <CharacterListMain />
    </Flex>
  );
};

export default CharacterList;
