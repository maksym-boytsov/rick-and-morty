import { Box, Flex, IconButton, Image, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import logoSrc from '../../assets/images/logo.png';
import { selectSidebarState, toggleSidebar } from './layout-slice';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <LayoutTopBar />
      {children}
    </>
  );
};

export const LayoutTopBar = () => {
  const location = useLocation();

  const isCharacterListPage = location.pathname === '/characters';
  const isPageWithSidebar = isCharacterListPage;

  return (
    <Flex position="relative" justify="center" align="center" h={['12', '16', '20']} p="2" bg="gray.100" boxShadow="md">
      {isPageWithSidebar && <LayoutTopBarBurger />}
      <Box as={Link} aria-label="Characters" to="/characters" h="full">
        <Image alt="Rick and Morty" src={logoSrc} h="full" />
      </Box>
    </Flex>
  );
};

export const LayoutTopBarBurger = () => {
  const isSidebarOpened = useAppSelector(selectSidebarState);
  const dispatch = useAppDispatch();

  const _toggleSidebar = () => dispatch(toggleSidebar());

  return (
    <Tooltip label={isSidebarOpened ? 'Close sidebar' : 'Open sidebar'}>
      <IconButton
        onClick={_toggleSidebar}
        aria-label="Burger"
        icon={<FaHamburger />}
        display={['flex', 'flex', 'none']}
        colorScheme="teal"
        variant="ghost"
        position="absolute"
        left={['2', '4']}
        top="50%"
        transform="translateY(-50%)"
      />
    </Tooltip>
  );
};
