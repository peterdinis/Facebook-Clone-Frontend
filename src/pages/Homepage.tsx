import LeftMenu from "../components/home/menus/LeftMenu";
import RightMenu from "../components/home/menus/RightMenu";
import Header from "../components/shared/Header";

function Homepage() {
  return (
    <div className="bg-gray-100 dark:bg-dark-main">
      <Header />
      <LeftMenu />
      <RightMenu />
    </div>
  );
}

export default Homepage;
