function Header() {
  return (
    <>
      <nav className="bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
          <a href="#" className="mr-2 hidden md:inline-block">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
              alt="Facebook logo"
              className="w-24 sm:w-20 lg:w-10 h-auto"
            />
          </a>
          <a href="#" className="inline-block md:hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
              alt=""
              className="w-32 h-auto"
            />
          </a>
          <div className="flex items-center justify-between space-x-1">
            <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
              <i className="bx bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt"></i>
              <input
                type="text"
                placeholder="Search Facebook"
                className="outline-none bg-transparent hidden xl:inline-block"
              />
            </div>
            <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt">
              <i className="bx bxl-messenger"></i>
            </div>
            <div
              className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt"
              id="dark-mode-toggle-mb"
            >
              <i className="bx bxs-moon"></i>
            </div>
          </div>
        </div>
        <ul className="flex w-full lg:w-max items-center justify-center">
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block text-blue-500 border-b-4 border-blue-500"
            >
              <i className="bx bxs-home"></i>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-movie-play"></i>
              <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9+
              </span>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-store"></i>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-group"></i>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center hidden md:inline-block">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-layout"></i>
              <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9+
              </span>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center inline-block md:hidden">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-menu"></i>
            </a>
          </li>
        </ul>
        <ul className="hidden md:flex mx-4 items-center justify-center">
          <li className="h-full hidden xl:flex">
            <a
              href="#"
              className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
                alt="Profile picture"
                className="rounded-full h-7 w-7"
              />
              <span className="mx-2 font-semibold dark:text-dark-txt">
                Peter Dinis
              </span>
            </a>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bx-plus"></i>
            </div>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxl-messenger"></i>
            </div>
          </li>
          <li>
            <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxs-bell"></i>
              <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9
              </span>
            </div>
          </li>
          <li>
            <div
              className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
              id="dark-mode-toggle"
            >
              <i className="bx bxs-moon"></i>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
