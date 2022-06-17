import React from 'react'

function RightMenu() {
  return (
    <>
        <div className="my-10 px-10 w-1/4 overflow-hidden sm:my-6 sm:px-6 sm:w-1/3 md:my-6 md:px-6 md:w-1/3 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3">
        <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0">
            <div className="h-full">
                <div className="flex justify-between items-center px-4 pt-4">
                    <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Firend requests</span>
                    <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">See All</span>
                </div>
                <div className="p-2">
                    <a href="#" className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all">
                    <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                        <div className="flex-1 h-full">
                            <div className="dark:text-dark-txt">
                                <span className="font-semibold">Sakura Hinata</span>
                                <span className="float-right">6d</span>
                            </div>
                            <div className="flex space-x-2 mt-2">
                                <div className="w-1/2 bg-blue-500 cursor-pointer py-1 text-center font-semibold text-white rounded-lg">
                                    Confirm
                                </div>
                                <div className="w-1/2 bg-gray-300 cursor-pointer py-1 text-center font-semibold text-black rounded-lg">
                                    Delete
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="border-b border-gray-200 dark:border-dark-third mt-6"></div>
                <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
                    <span className="font-semibold text-lg">Contacts</span>
                    <div className="flex space-x-1">
                        <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                            <i className='bx bx-search-alt-2'></i>
                        </div>
                        <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                            <i className='bx bx-dots-horizontal-rounded'></i>
                        </div>
                    </div>
                </div>
                <ul className="p-2">
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Chin Chin</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Tuat TA</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">John Doe</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Ivan Lorem</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Shiba san</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">John Doe</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Ivan Lorem</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Shiba san</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">John Doe</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Ivan Lorem</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Shiba san</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">John Doe</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                            <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Profile picture" className="rounded-full" />
                                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                            </div>
                            <div>
                                <span className="font-semibold">Ivan Lorem</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default RightMenu