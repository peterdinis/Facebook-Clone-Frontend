interface IProps {
  linkName?: string;
  imageName: string;
  spanText: string;
  linkHref: string;
}

function LeftMenuLink(props: IProps) {
  return (
    <>
      <li>
        <a
          href={props.linkHref}
          className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
        >
          <img
            src={props.imageName}
            alt="Profile picture"
            className="w-10 h-10 rounded-lg"
          />
          <span className="font-semibold">{props.spanText}</span>
        </a>
      </li>
    </>
  );
}

export default LeftMenuLink;
