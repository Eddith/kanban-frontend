// utils/localStorageHelpers.ts

export interface Page {
  id: string;
  name: string;
}

//TODO: Visited pages are stored in local storage
export const saveVisitedPage = (page: Page): void => {
  const visitedPages: Page[] = JSON.parse(
    localStorage.getItem("visitedPages") || "[]"
  );

  //TODO: If the page is already in the list, remove it
  const existingIndex = visitedPages.findIndex((p) => p.id === page.id);
  if (existingIndex > -1) {
    visitedPages.splice(existingIndex, 1);
  }

  //TODO: The page is added to the list and up to 10 pages are stored
  visitedPages.unshift(page);
  if (visitedPages.length > 10) {
    visitedPages.pop();
  }

  localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
};

//TODO: Get the visited pages from local storage
export const getVisitedPages = (): Page[] => {
  return JSON.parse(localStorage.getItem("visitedPages") || "[]");
};
