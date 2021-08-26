import { Container } from '@chakra-ui/react';
import { BackButton } from 'components/common';
import { useCharacterQuery } from 'graphql/generated/graphql';
import { useParams } from 'react-router-dom';
import { deNullish } from 'utils/array';

import { CharacterDetailsEpisode } from './character-details-episode';
import { CharacterDetailsInfo } from './character-details-info';

type CharacterDetailsParams = {
  id: string;
};

const CharacterDetails = () => {
  const { id } = useParams<CharacterDetailsParams>();

  const { data } = useCharacterQuery({
    variables: {
      id,
    },
  });

  const episodes = data?.character?.episode ? deNullish(data.character.episode) : undefined;

  return (
    <Container maxW="container.lg" py="4">
      <BackButton position="absolute" top={['4', '6', '8']} left={['4', '6', '8']} />
      <CharacterDetailsInfo character={data?.character} />
      <CharacterDetailsEpisode episodes={episodes} />
    </Container>
  );
};

export default CharacterDetails;
