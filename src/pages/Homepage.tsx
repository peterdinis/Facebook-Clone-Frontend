import LeftMenu from "../components/home/menus/LeftMenu"
import RightMenu from "../components/home/menus/RightMenu"
import PostWrapper from "../components/posts/PostWrapper"
import Header from "../components/shared/Header"

function Homepage() {
  return (
    <>
        <Header />
        <div className="mt-10 flex flex-wrap -mx-10 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6">
          <LeftMenu />
          <PostWrapper />
          <RightMenu />
        </div>
    </>
  )
}

export default Homepage