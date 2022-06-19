interface IProps {
  imageLink: string;
  spanName: string;
}

function RightMenuLink(props: IProps) {
  return (
    <li>
    <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
        <div className="relative">
       <img src={props.imageLink} alt="Profile picture" className="rounded-full" />
            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
        </div>
        <div>
            <span className="font-semibold">{props.spanName}</span>
        </div>
    </div>
</li>
  )
}

export default RightMenuLink