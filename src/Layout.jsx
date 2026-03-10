import HomePage from "./pages/HomePage"
import VideoPlay from "./components/VideoPlay";
import Advertisment from "./components/Advertisment";

export default function Layout(){

  return (
    <>
      <div>
        <VideoPlay></VideoPlay>
        <Advertisment></Advertisment>
    <HomePage></HomePage>

      </div>
    </>
  )
}