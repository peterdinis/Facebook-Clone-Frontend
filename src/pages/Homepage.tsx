import LeftMenu from "../components/home/menus/LeftMenu";
import RightMenu from "../components/home/menus/RightMenu";
function Homepage() {
  return (
    <div className="bg-gray-100 dark:bg-dark-main">
      <LeftMenu />
      <RightMenu />
    </div>
  );
}

export default Homepage;
