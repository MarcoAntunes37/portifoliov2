import { I18nDictionary } from '../shared/type/Types';
import './projects.scss'
import Image from 'next/image'

interface ProjectsProps {
    dict: I18nDictionary
}

function Projects({ dict }: ProjectsProps) {
    const projects = [{
        name: dict.projectWebvagasTitle,
        description: dict.projectWebvagasDescription,
        image: "/assets/image/webvagas.webp",
        url: null,
        repoUrl: 'https://github.com/MarcoAntunes37/web-vagas'
    },
    {
        name: dict.projectTaxiAppTitle,
        description: dict.projectTaxiAppDescription,
        image: null,
        url: null,
        repoUrl: 'https://github.com/MarcoAntunes37/taxi-app'
    },
    {
        name: dict.projectTaskSchedulerTitle,
        description: dict.projectTaskSchedulerDescription,
        image: null,
        url: null,
        repoUrl: 'https://github.com/MarcoAntunes37/TaskScheduler'
    }]

    return (
        <div className="projects-container">
            <div className="projects-content">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-card-header">
                            {project.name}
                        </div>
                        <div className="project-card-body">
                            <div className="image-container">
                                {project.image && <picture>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        className="project-card-image"
                                        width={100}
                                        height={100} />
                                </picture>
                                    ||
                                    <picture>
                                        <Image
                                            src={"/assets/image/image-not-found.webp"}
                                            alt={project.name}
                                            className="project-card-image"
                                            width={100}
                                            height={100} />
                                    </picture>
                                }
                            </div>
                            <div className="description-container">
                                {project.description}
                            </div>
                        </div>
                        <div className="project-card-actions">
                            {project.url &&
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="">
                                    {dict.projectActionViewProject}
                                </a>}
                            {project.repoUrl &&
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="">
                                    {dict.projectActionViewRepo}
                                </a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects