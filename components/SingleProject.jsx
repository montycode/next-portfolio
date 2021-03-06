import { BsGithub, BsFillCaretRightFill } from 'react-icons/bs';
import Image from 'next/image';

const SingleProject = ({ id, image, title, description, tags = [], source, visit }) => {
    return (        
        <div className="mx-2 w-72 lg:mb-0 mb-8 shadow shadow-lg" key={id}>
            <div>
                <Image src={image} className="w-full object-cover h-44" width={100} height={64} priority layout='responsive' alt={title} />
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 transition duration-300 ease-in-out hover:shadow hover:shadow-xl cursor-pointer dark:hover:bg-gray-900">
                <div className="p-4">
                    <div className="flex items-center">
                        <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 dark:text-gray-300">{description}</p>
                    <div className="flex mt-4">
                        {tags.map((tag, i)=> (
                            <div key={i}>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1 mr-2">{tag}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <a href={visit} className="flex items-center bg-gradient-to-l from-indigo-600 to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-white p-2 text-sm rounded">
                            Demo
                            <span className="h-4 w-4 ml-2">
                                <BsFillCaretRightFill />
                            </span>
                        </a>
                        <a href={source} className="flex items-center bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 p-2 text-sm">
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
