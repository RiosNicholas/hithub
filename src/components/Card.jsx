const Card = ({ content, title }) => {

    return (
        <div className="flex flex-col justify-top bg-gray-600 bg-opacity-40 rounded-lg w-full m-1 p-5">
            <h2 className="text-3xl font-bold text-left">
                {title}
            </h2>
            <div className="flex flex-col justify-center m-4">
                {content}
            </div>
        </div>
    );
}

export default Card;