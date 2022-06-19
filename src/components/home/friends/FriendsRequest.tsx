interface IProps {
    linkHref: string;
    imageLink: string;
    friendName: string;
}

function FriendsRequest(props: IProps) {
  return (
    <div className="p-2">
      <a
        href={props.linkHref}
        className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
      >
        <img
          src={props.imageLink}
          alt="Profile picture"
          className="rounded-full"
        />
        <div className="flex-1 h-full">
          <div className="dark:text-dark-txt">
            <span className="font-semibold">{props.friendName}</span>
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
  );
}

export default FriendsRequest;
