import { Droppable } from "@hello-pangea/dnd";
import { List } from "@/models/Board";
import SortableItem from "./SortableItem";

interface SortableListProps {
  list: List;
}

const SortableList: React.FC<SortableListProps> = ({ list }) => {
  return (
    <Droppable droppableId={list._id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="p-4 rounded-xl bg-[#262626]"
        >
          <h2 className="text-3xl font-bold mb-4">{list.name}</h2>
          {list.cards.map((card, index) => (
            <SortableItem key={card._id} card={card} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default SortableList;
