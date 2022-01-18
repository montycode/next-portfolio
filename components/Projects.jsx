import { Divider, SingleProject } from '.'
import { projects } from '../constants/constants';

const Projects = () => {
    console.log(projects);
    return (
        <section className="p-4 md:py-10 md:px-20">
            <div className="mx-auto container py-12 px-4 lg:px-0 space-y-4">
                <h2 className="lg:text-5xl text-2xl text-left f-m-w text-gray-800 font-bold">Projects</h2>
                <Divider />
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {projects.map((project) => (<SingleProject key={project.id} {...project} />))}
                </div>
            </div>
        </section>
    )
}

export default Projects
