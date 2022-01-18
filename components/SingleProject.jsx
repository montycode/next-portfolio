import { BsGithub, BsFillCaretRightFill } from 'react-icons/bs';

const SingleProject = ({ id, image, title, description, tags = [], source, visit }) => {
    return (        
        <div className="mx-2 w-72 lg:mb-0 mb-8" key={id}>
            <div>
                <img src={image} className="w-full object-cover h-44" />
            </div>
            <div className="bg-gray-100">
                <div className="p-4">
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold">{title}</h2>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{description}</p>
                    <div className="flex mt-4">
                        {tags.map((tag, i)=> (
                            <div key={i}>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1 mr-2">{tag}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <a href={visit} className="mx-2 my-2 flex items-center bg-gradient-to-l from-indigo-600 to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-white p-2 text-sm rounded">
                            Demo
                            <span className="h-4 w-4 ml-2">
                                <BsFillCaretRightFill />
                            </span>
                        </a>
                        <a href={source} className="mx-2 my-2 flex items-center bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 p-2 text-sm">
                            Source Code
                            <span className="h-4 w-4 ml-2">
                                <BsGithub />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;
