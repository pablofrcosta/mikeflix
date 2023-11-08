import { Outlet } from "react-router-dom";
import HomeMovie from "../components/Home";

export default function Home() {
  return (
    <>
      <HomeMovie />
      <Outlet />
    </>
  )
}