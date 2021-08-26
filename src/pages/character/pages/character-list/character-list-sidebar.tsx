import {
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { selectSidebarState, toggleSidebar } from 'components/layout/layout-slice';
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { characterGenders, characterStatuses } from './character-list-const';
import { changeGender, changeNameValue, changeStatus, selectCharacterListData } from './character-list-slice';

export const CharacterListSidebar = () => {
  const isSidebarOpened = useAppSelector(selectSidebarState);
  const dispatch = useAppDispatch();
  const [isDesktopOrLarger] = useMediaQuery('(min-width: 48em)');

  const _toggleSidebar = () => dispatch(toggleSidebar());

  const mobileSidebarLeft = isSidebarOpened ? '0' : '-80';

  if (isDesktopOrLarger) {
    return (
      <chakra.aside
        as={VStack}
        spacing="3"
        left={[mobileSidebarLeft, mobileSidebarLeft, 0]}
        transition="left 200ms"
        position={['absolute', 'absolute', 'static']}
        w={['xs', 'xs', 'xs', 'xs', 'sm']}
        top={['12', '16', 'unset']}
        bottom="0"
        p={['2', '4', '6']}
        bg="gray.50"
        boxShadow="xl"
      >
        <CharacterListSidebarContent />
      </chakra.aside>
    );
  }

  return (
    <Drawer isOpen={isSidebarOpened} onClose={_toggleSidebar} placement="left">
      <DrawerOverlay mt={['12', '16']} />
      <DrawerContent mt={['12', '16']}>
        <DrawerCloseButton />
        <DrawerHeader>Find your character</DrawerHeader>

        <DrawerBody as={VStack} spacing="3">
          <CharacterListSidebarContent />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const CharacterListSidebarContent = () => {
  const { nameValue, status, gender } = useAppSelector(selectCharacterListData);
  const dispatch = useAppDispatch();

  const handleNameValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changeNameValue(event.target.value));

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeStatus(event.target.value));

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeGender(event.target.value));

  return (
    <>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <InputLeftElement color="gray.400">
            <FaSearch />
          </InputLeftElement>
          <Input onChange={handleNameValueChange} value={nameValue} placeholder="Filter by name..." />
        </InputGroup>
      </FormControl>

      <FormControl id="status">
        <FormLabel>Status</FormLabel>
        <Select placeholder="None" value={status} onChange={handleStatusChange}>
          {characterStatuses.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl id="gender">
        <FormLabel>Gender</FormLabel>
        <Select placeholder="None" value={gender} onChange={handleGenderChange}>
          {characterGenders.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
