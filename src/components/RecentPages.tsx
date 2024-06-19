// components/RecentPages.tsx
import { useEffect, useState } from "react";
// Utils
import { getVisitedPages, Page } from "../utils/localStorageHelpers";

const RecentPages: React.FC = () => {
  const [visitedPages, setVisitedPages] = useState<Page[]>([]);

  useEffect(() => {
    setVisitedPages(getVisitedPages());
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded">
      <h2 className="text-lg font-bold mb-2 text-black">Son Gezilenler</h2>
      <ul>
        {visitedPages.map((page) => (
          <li key={page.id}>
            <a href={`/boards/${page.id}`}>
              <a className="text-blue-500">{page.name}</a>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPages;
