// pages/boards/[id].tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// Thirt party libraries
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
// API
import { fetchBoard, updateBoard } from "@/api/boardApi";
// Models
import { Board } from "@/models/Board";
// Components
import SortableList from "@/components/SortableList";
// Utils
import { saveVisitedPage } from "@/utils/localStorageHelpers";

const BoardPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [board, setBoard] = useState<Board | null>(null);

  //TODO: State for the new card form
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [newCardDescription, setNewCardDescription] = useState<string>("");
  const [newCardColor, setNewCardColor] = useState<string>("#000000");
  const [newCardListId, setNewCardListId] = useState<string>("");
  const [addFormVisible, setAddFormVisible] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      fetchBoard(id as string).then(setBoard);
    }
  }, [id]);

  useEffect(() => {
    if (typeof id === "string") {
      //TODO: Set the page name as desired
      saveVisitedPage({ id, name: `Board ${id}` });
    }
  }, [id]);

  //TODO: Handle the drag and drop of the cards
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const updatedLists = [...board!.lists];

    if (source.droppableId === destination.droppableId) {
      const list = updatedLists.find((list) => list._id === source.droppableId);
      if (list) {
        const [removed] = list.cards.splice(source.index, 1);
        list.cards.splice(destination.index, 0, removed);
      }
    } else {
      const sourceList = updatedLists.find(
        (list) => list._id === source.droppableId
      );
      const destinationList = updatedLists.find(
        (list) => list._id === destination.droppableId
      );
      if (sourceList && destinationList) {
        const [removed] = sourceList.cards.splice(source.index, 1);
        destinationList.cards.splice(destination.index, 0, removed);
      }
    }

    updateBoard(board!._id, { lists: updatedLists }).then((updatedBoard) =>
      setBoard(updatedBoard)
    );
  };

  //TODO: Add a new card to the board
  const addCard = (listId: string) => {
    const updatedLists = board!.lists.map((list) => {
      if (list._id === listId) {
        list.cards.push({
          title: newCardTitle,
          description: newCardDescription,
          color: newCardColor,
          _id: newCardListId,
        });
      }
      return list;
    });

    updateBoard(board!._id, { lists: updatedLists }).then((updatedBoard) =>
      setBoard(updatedBoard)
    );
    setNewCardTitle("");
    setNewCardDescription("");
    setAddFormVisible(false);
    setNewCardListId("");
  };

  if (!board) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold mb-4">{board.title}</h1>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
          onClick={() => setAddFormVisible(true)}
        >
          Create Card
        </button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {board.lists.map((list) => (
            <SortableList key={list._id} list={list} />
          ))}
        </div>
      </DragDropContext>
      {addFormVisible && (
        <form
          className="w-1/2 border p-4 rounded-xl bg-[#262626]"
          onSubmit={(e) => {
            e.preventDefault();
            addCard(newCardListId);
          }}
        >
          <input
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            placeholder="New Card Title"
            className="border p-2 mb-2 w-full text-black"
          />
          <input
            type="text"
            value={newCardDescription}
            onChange={(e) => setNewCardDescription(e.target.value)}
            placeholder="New Card Description"
            className="border p-2 mb-2 w-full text-black"
          />
          <div className="flex items-center gap-2 mb-2">
            <span>Card Color: </span>
            <input
              type="color"
              onChange={(e) => setNewCardColor(e.target.value)}
            />
          </div>
          <select
            value={newCardListId}
            onChange={(e) => setNewCardListId(e.target.value)}
            className="border p-2 mb-2 w-full text-black"
          >
            {board.lists.map((list) => (
              <option key={list._id} value={list._id}>
                {list.name}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Add Card
          </button>
        </form>
      )}
    </div>
  );
};

export default BoardPage;
