import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@/models/Board";

interface SortableItemProps {
  card: Card;
  index: number;
}

const SortableItem: React.FC<SortableItemProps> = ({ card, index }) => {
  return (
    <Draggable key={card._id} draggableId={card._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-4 mb-3 rounded-md text-white`}
          style={{
            backgroundColor: card.color ? card.color : "#000000",
            ...provided.draggableProps.style,
          }}
        >
          <h3 className="font-bold">{card.title}</h3>
          <p className="text-sm card-text-color">{card.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default SortableItem;
