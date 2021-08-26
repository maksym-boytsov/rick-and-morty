export function fillPaginationArray(arr: number[], currentPage: number, pages: number) {
  return arr.reduce((acc, _, index) => {
    const prevItemIndex = index - 1;
    const prevItem = acc[prevItemIndex];
    const nextItem = prevItem + 1;

    if (typeof prevItem === 'undefined') {
      return [...acc, currentPage === 1 ? 1 : currentPage - 1];
    }

    if (nextItem > pages) {
      return [...acc, 1];
    }

    return [...acc, prevItem + 1];
  }, [] as number[]);
}
