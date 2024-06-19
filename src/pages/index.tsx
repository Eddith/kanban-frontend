// pages/index.tsx
// React Next
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
// API
import { fetchBoards, createBoard } from "@/api/boardApi";
// Models
import { Board } from "@/models/Board";
// Utils
import { saveVisitedPage } from "@/utils/localStorageHelpers";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [boards, setBoards] = useState<Board[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    fetchBoards().then(setBoards);
  }, []);

  useEffect(() => {
    if (typeof id === "string") {
      saveVisitedPage({ id, name: `Board ${id}` }); // Sayfa adını isteğe göre ayarlayın
    }
  }, []);

  //TODO: Handle the creation of a new board
  const handleCreateBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBoard = await createBoard(title);
    setBoards([...boards, newBoard]);
    setTitle("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Boards</h1>
      <form onSubmit={handleCreateBoard} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Board Title"
          className="border p-2 mr-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create Board
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <Link key={board._id} href={`/boards/${board._id}`} passHref>
            <div className="block p-4 border rounded hover:shadow-lg cursor-pointer">
              {board.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
