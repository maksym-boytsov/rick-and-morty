import { Heading, Image, Stack, Text } from '@chakra-ui/react';
import { CharacterBadge } from 'components/common/character-badge/character-badge';
import { IMAGE_FALLBACK_URL } from 'config';
import { CharacterLargeFragment } from 'graphql/generated/graphql';
import { VFC } from 'react';

export type CharacterDetailsInfoProps = {
  character?: CharacterLargeFragment | null;
};

export const CharacterDetailsInfo: VFC<CharacterDetailsInfoProps> = ({ character }) => {
  const { id: _id, name, status, species, gender, type, origin, created, image } = character || {};

  const creationDate = created ? new Date(created) : undefined;
  const creationString =
    creationDate && `${creationDate?.getDay()}/${creationDate.getMonth()}/${creationDate.getFullYear()}`;

  return (
    <Stack
      position="relative"
      spacing="6"
      direction={['column', 'column', 'row']}
      alignItems="center"
      textAlign="center"
    >
      <Image
        w="300px"
        h="300px"
        alt={name ?? 'character image'}
        src={image ?? ''}
        fallbackSrc={IMAGE_FALLBACK_URL}
        borderRadius="md"
      />
      <Stack align="flex-start" alignItems={['center', 'center', 'flex-start']}>
        <Text fontSize="sm" color="gray.600">
          ID: {_id}
        </Text>
        <Heading as="h1">{name ?? 'Unknown'}</Heading>
        <CharacterBadge status={status as 'Dead' | 'Alive' | 'unknown'} />
        {species && (
          <Text>
            Species: <b>{species}</b>
          </Text>
        )}
        {gender && (
          <Text>
            Gender: <b>{gender}</b>
          </Text>
        )}

        {type && (
          <Text>
            Type: <b>{type}</b>
          </Text>
        )}
        {origin?.name && (
          <Text>
            Origin: <b>{origin?.name}</b>
          </Text>
        )}
        {creationString && (
          <Text>
            Created: <b>{creationString}</b>
          </Text>
        )}
      </Stack>
    </Stack>
  );
};
