import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { CharacterBadge } from 'components/common/character-badge/character-badge';
import { IMAGE_FALLBACK_URL } from 'config';
import { CharacterSmallFragment } from 'graphql/generated/graphql';
import { VFC } from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export type CharacterListItemProps = {
  character: CharacterSmallFragment;
};

export const CharacterListItem: VFC<CharacterListItemProps> = ({ character }) => {
  return (
    <VStack p="2" bg="teal.200" borderRadius="md" textAlign="center" h="fit-content">
      <Image
        alt={character.name ?? 'Character'}
        src={character.image ?? ''}
        w="full"
        h="300px"
        borderRadius="md"
        objectFit="cover"
        fallbackSrc={IMAGE_FALLBACK_URL}
      />
      <Heading as="h2" size="md" isTruncated w="full">
        {character.name}
      </Heading>
      <HStack>
        <Text>{character.species}</Text>
        <CharacterBadge status={character.status as 'Dead' | 'Alive' | 'unknown'}>{character.status}</CharacterBadge>
      </HStack>
      <Button
        as={Link}
        to={`/characters/${character.id ?? ''}`}
        leftIcon={<FaRegListAlt />}
        colorScheme="teal"
        isFullWidth
      >
        Details
      </Button>
    </VStack>
  );
};
