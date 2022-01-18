import { Divider } from '.';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiAdobexd } from 'react-icons/si';

const Technologies = () => {
    return (
        <section id="technologies" className="p-4 md:py-10 md:px-20 dark:bg-slate-800">
            <div className="mx-auto container py-12 px-4 lg:px-0 space-y-4">
                <h2 className="lg:text-5xl text-2xl text-left f-m-w text-gray-800 dark:text-white font-bold">Technologies</h2>
                <Divider />
                <div className="flex flex-wrap md:mt-16 mt-8 gap-6 flex items-center justify-between">
                    <div className='p-4 rounded transition duration-300 ease-in-out hover:shadow hover:shadow-xl cursor-pointer'>
                        <div className="flex items-center">
                            <div className="w-10 h-10 text-base font-semibold leading-4 text-indigo-500 flex items-center justify-center"><FaReact className='w-8 h-8' /></div>
                            <h2 className="ml-4 text-2xl lg:text-3xl font-bold leading-4 text-gray-800 dark:text-white">Front-End</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600 dark:text-gray-300">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div className='p-4 rounded transition duration-300 ease-in-out hover:shadow hover:shadow-xl cursor-pointer'>
                        <div className="flex items-center">
                            <div className="w-10 h-10 text-base font-semibold leading-4 text-indigo-500 flex items-center justify-center"><GrNode className='w-8 h-8' /></div>
                            <h2 className="ml-4 text-2xl lg:text-3xl font-bold leading-4 text-gray-800 dark:text-white">Back-End</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600 dark:text-gray-300">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div className='p-4 rounded transition duration-300 ease-in-out hover:shadow hover:shadow-xl cursor-pointer'>
                        <div className="flex items-center">
                            <div className="w-10 h-10 text-base font-semibold leading-4 text-indigo-500 flex items-center justify-center"><SiAdobexd className='w-8 h-8' /></div>
                            <h2 className="ml-4 text-2xl lg:text-3xl font-bold leading-4 text-gray-800 dark:text-white">UI/UX</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600 dark:text-gray-300">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies
