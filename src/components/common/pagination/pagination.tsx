import { Button, ButtonGroup, IconButton, useMediaQuery } from '@chakra-ui/react';
import { InfoFragment } from 'graphql/generated/graphql';
import { useMemo, VFC } from 'react';
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

import { fillPaginationArray } from './pagination.utils';

type PaginationProps = {
  info: InfoFragment;
  isLoading?: boolean;
  onChange?: (pageNumber: number) => void;
};

export const Pagination: VFC<PaginationProps> = ({ info, isLoading, onChange = Boolean }) => {
  const { next, prev, pages: _pages } = info;

  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    '(max-width: 30em)',
    '(min-width: 30em) and (max-width: 48em)',
    '(min-width: 48em)',
  ]);

  const pages = _pages ?? 0;
  const currentPageNumber = Math.round(((next ?? pages + 1) + (prev ?? 0)) / 2);
  const isPrevButtonDisabled = currentPageNumber === 1;
  const isNextButtonDisabled = currentPageNumber === pages;

  const pageNumbers = useMemo(() => {
    const numberOfElementsPerDevice = isMobile ? 3 : isTablet ? 5 : 9;

    const pagesLeft = pages - currentPageNumber + (currentPageNumber === 1 ? 1 : 2);
    const numberOfElements = pagesLeft < numberOfElementsPerDevice ? pagesLeft : numberOfElementsPerDevice;

    const emptyArray = new Array(numberOfElements).fill(undefined);
    const result = fillPaginationArray(emptyArray, currentPageNumber, pages ?? 0);

    return result;
  }, [isMobile, isTablet, isDesktop, next, currentPageNumber, prev]);

  const handleShowFirstPageButtonClick = () => onChange(1);
  const handleShowPrevPageButtonClick = () => onChange(currentPageNumber - 1);
  const handleShowNextPageButtonClick = () => onChange(currentPageNumber + 1);
  const handleShowLastPageButtonClick = () => onChange(pages);

  return (
    <ButtonGroup isDisabled={isLoading} isAttached>
      <IconButton
        isDisabled={isPrevButtonDisabled}
        aria-label="Show first page"
        icon={<HiOutlineChevronDoubleLeft />}
        onClick={handleShowFirstPageButtonClick}
      />
      <IconButton
        isDisabled={isPrevButtonDisabled}
        aria-label="Show previous page"
        icon={<HiOutlineChevronLeft />}
        onClick={handleShowPrevPageButtonClick}
      />
      {pageNumbers.map((pageNumber, index) => (
        <Button
          key={index}
          onClick={() => onChange(pageNumber)}
          colorScheme={currentPageNumber === pageNumber ? 'teal' : 'gray'}
        >
          {pageNumber}
        </Button>
      ))}
      <IconButton
        isDisabled={isNextButtonDisabled}
        aria-label="Show next page"
        icon={<HiOutlineChevronRight />}
        onClick={handleShowNextPageButtonClick}
      />
      <IconButton
        isDisabled={isNextButtonDisabled}
        aria-label="Show last page"
        icon={<HiOutlineChevronDoubleRight />}
        onClick={handleShowLastPageButtonClick}
      />
    </ButtonGroup>
  );
};
