import AnimatedButton from "@/components/AnimatedButton"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projetos = [
    {
        titulo: "Fintech Dashboard",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        titulo: "Fintech Dashboard",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        titulo: "Fintech Dashboard",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        titulo: "Fintech Dashboard",
        descricao: "faucibus augue. Fusce fringilla neque metus, quis viverra dolor egestas ut.",
        image: "/projects/projeto1.png",
        tags: ["React", "Typerscript", "NodeJS"],
        link: "#",
        github: "#",
    },
]

function Projects() {
    return <section id="projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secundaria-topo text-sm font-medium -tracking-wider uppercase fade-in">Featured work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 fade-in delay-100 text-secundaria-topo">Projects that <span className="font-serif italic font-normal text-white">make an impact.</span></h2>
                <p className="text-off-texto fade-in delay-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit massa turpis. Donec pulvinar molestie sem, a consequat risus vulputate sed. Etiam tortor risus, laoreet at arcu et, fringilla dictum dui
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {projetos.map((projeto, i) => (
                    <div key={i} className="group vidro rounded-2xl overflow-hidden fade-in md:row-span-1" style={{
                        animationDelay: `${(i + 1) * 100}ms`
                    }}>
                        <div className="relative overflow-hidden aspect-video">
                            <img src={projeto.image} alt={projeto.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={projeto.link} className="p-3 rounded-full vidro hover:bg-primaria hover:text-primaria-topo transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a href={projeto.github} className="p-3 rounded-full vidro hover:bg-primaria hover:text-primaria-topo transition-all">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="p-6 space-y-4 relative z-10">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primaria transition-colors">{projeto.titulo}</h3>
                                <ArrowUpRight className="w-5 h-5 text-off-texto group-hover:text-primaria group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-off-texto txet-sm">{projeto.descricao}</p>
                            <div className="flex flex-wrap gap-2">{projeto.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-1 rounded-full bg-superficie text-xs font-medium border border-border/50 text-off-texto hover:border-primaria/50 hover:text-primaria transition-all duration-300">{tag}</span>
                            ))}</div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="text-center mt-12 fade-in delay-500">
                <AnimatedButton>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5"/>
                </AnimatedButton>
            </div>
        </div>
    </section>
}

export default Projects