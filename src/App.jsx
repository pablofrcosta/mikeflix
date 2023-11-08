import MovieContextProvider from "./contexts/movieContext"
import router from "./router"
import { RouterProvider } from "react-router-dom"
export default function App() {
  return (
    <MovieContextProvider>
      <RouterProvider router={router} />
    </MovieContextProvider>
  )
}
