import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export default function useData() {
  return useContext(MovieContext)
}