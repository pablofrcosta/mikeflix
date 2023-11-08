import { useContext } from "react";
import { MovieContext } from "../contexts/movieContext";

export default function useData() {
  return useContext(MovieContext)
}