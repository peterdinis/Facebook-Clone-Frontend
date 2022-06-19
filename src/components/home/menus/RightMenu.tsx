import FriendsRequest from '../friends/FriendsRequest'
import RightMenuLink from './helper/RightMenuLink'

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
                <FriendsRequest linkHref="" imageLink="https://picsum.photos/200/300" friendName="John Doe" />
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
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                    <RightMenuLink imageLink="https://picsum.photos/100/100" spanName="John Doe" />
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default RightMenu