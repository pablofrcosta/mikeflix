import router from "./router"
import MovieContextProvider from "./contexts/MovieContext"
import { RouterProvider } from "react-router-dom"

export default function App() {
  return (
    <MovieContextProvider>
      <RouterProvider router={router} />
    </MovieContextProvider>
  )
}
