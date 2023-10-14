const Card = ({ content, title }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-600 bg-opacity-40 rounded-lg w-full m-1 p-5">
            <h2 className="text-lg font-bold text-center">
                {title}
            </h2>
            <div>
                {content}
            </div>
        </div>
    );
}

export default Card;