import LeftMenuLink from "./helper/LeftMenuLink";

function LeftMenu() {
  return (
    <>
       <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0">
            <ul className="p-4">
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                            <i className='bx bx-chevron-down'></i>
                        </span>
                        <span className="font-semibold">See more</span>
                    </a>
                </li>
                <li className="border-b border-gray-200 dark:border-dark-third mt-6"></li>
            </ul>
            <div className="flex justify-between items-center px-4 h-4 group">
                <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Your shortcuts</span>
                <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block">Edit</span>
            </div>
            <ul className="p-4">
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <LeftMenuLink spanText="Skuska" linkHref="" imageName="https://picsum.photos/200/300" />
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                        <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                            <i className='bx bx-chevron-down'></i>
                        </span>
                        <span className="font-semibold">See more</span>
                    </a>
                </li>
            </ul>
            <div className="mt-auto p-6 text-sm text-gray-500 dark:text-dark-txt">
                <a href="#">Privacy</a>
                <span>.</span>
                <a href="#">Terms</a>
                <span>.</span>
                <a href="#">Advertising</a>
                <span>.</span>
                <a href="#">Cookies</a>
                <span>.</span>
                <a href="#">Ad choices</a>
                <span>.</span>
                <a href="#">More</a>
                <span>.</span>
                <span>Facebook © 2021</span>
            </div>
        </div>
    </>
  );
}

export default LeftMenu;
