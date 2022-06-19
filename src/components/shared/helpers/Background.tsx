interface IProps {
    children?: any;
}

const Background = (props: IProps) => {
    return (
         <body className="bg-white dark:bg-black transition-all">
        {props.children}
    </body>
    )
}

export default Background;