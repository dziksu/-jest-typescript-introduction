interface PagesInterface {
  currentPage: number;
  items: Array<{}>;
}

export function isLastPage<T extends PagesInterface | undefined>(items: T): number | undefined {
  if (items) {
    if (items.currentPage > 0) {
      if (items.items.length === 1) {
        return items.currentPage - 1;
      } else {
        return items?.currentPage;
      }
    }
  }
}
