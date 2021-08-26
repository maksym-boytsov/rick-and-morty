import { chakra, VStack } from '@chakra-ui/react';
import { Pagination } from 'components/common';
import { useCharactersQuery } from 'graphql/generated/graphql';
import { useDebouncedValue } from 'hooks';
import { useAppSelector } from 'store/hooks';
import { deNullish } from 'utils/array';

import { CharacterListItems } from './character-list-items';
import { selectCharacterListData } from './character-list-slice';

export const CharacterListMain = () => {
  const { currentPage, nameValue, status, gender } = useAppSelector(selectCharacterListData);

  const debouncedNameValue = useDebouncedValue(nameValue, 250);

  const { loading, data, refetch } = useCharactersQuery({
    variables: {
      page: currentPage,
      name: debouncedNameValue,
      status,
      gender,
    },
  });

  const handlePaginationChange = (pageNumber: number) => refetch({ page: pageNumber });

  const characters = data?.characters?.results && deNullish(data?.characters?.results);
  const info = data?.characters?.info;

  return (
    <chakra.main as={VStack} spacing="7" p={['2', '4', '6']} w="full">
      <CharacterListItems isLoading={loading} characters={characters} />
      {info && <Pagination info={info} isLoading={loading} onChange={handlePaginationChange} />}
    </chakra.main>
  );
};
