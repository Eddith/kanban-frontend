import axios from "axios";
import { Board } from "@/models/Board";

const API_URL = "http://localhost:8080/api/boards";

export const fetchBoards = async (): Promise<Board[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchBoard = async (id: string): Promise<Board> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createBoard = async (title: string): Promise<Board> => {
  const response = await axios.post(`${API_URL}/save`, {
    title,
    lists: [
      { name: "Backlog", cards: [] },
      { name: "To Do", cards: [] },
      { name: "In Progress", cards: [] },
      { name: "Done", cards: [] },
    ],
  });
  return response.data;
};

export const updateBoard = async (
  id: string,
  board: Partial<Board>
): Promise<Board> => {
  const response = await axios.put(`${API_URL}/${id}`, board);
  return response.data;
};
