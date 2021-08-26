import { Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { EpisodeFragment } from 'graphql/generated/graphql';
import { useMemo, VFC } from 'react';

export type CharacterDetailsEpisodeProps = {
  maxTabs?: number;
  episodes?: EpisodeFragment[] | null;
};

export const CharacterDetailsEpisode: VFC<CharacterDetailsEpisodeProps> = ({ episodes, maxTabs = 5 }) => {
  const episodesSliced = useMemo(() => {
    return episodes?.slice(0, maxTabs) ?? [];
  }, [episodes]);

  return (
    <Stack my="8">
      <Heading as="h2" size="lg">
        Episodes info
      </Heading>

      <Tabs colorScheme="teal">
        <TabList p="1" overflowX="auto">
          {episodesSliced.map(({ id, episode }) => (
            <Tab key={id} w="fit-content" textOverflow="ellipsis" whiteSpace="nowrap">
              Episode: {episode}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {episodesSliced.map(({ id, name, air_date, episode }) => (
            <TabPanel key={id} as={Stack}>
              <Text fontSize="sm" color="gray.600">
                ID: {id}
              </Text>
              <Heading as="h4" size="md">
                {name}
              </Heading>
              <Text>
                Air date: <b>{air_date}</b>
              </Text>
              <Text>
                Episode: <b>{episode}</b>
              </Text>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
