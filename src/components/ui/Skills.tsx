import React, { useEffect } from 'react'

type Skill = {
    name: string
    percent: number
    barClass: string
}

type SkillCategory = {
    icon: string
    title: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        icon: '🎨',
        title: 'Frontend',
        skills: [
            { name: 'React', percent: 90, barClass: 'from-cyan-400 to-blue-500 shadow-cyan-400/50' },
            { name: 'JavaScript', percent: 85, barClass: 'from-purple-500 to-indigo-500 shadow-purple-500/50' },
            { name: 'CSS/Tailwind', percent: 95, barClass: 'from-emerald-400 to-teal-500 shadow-emerald-400/50' },
        ],
    },
    {
        icon: '🛠️',
        title: 'Tools & Frameworks',
        skills: [
            { name: 'GitHub', percent: 80, barClass: 'from-green-400 to-emerald-500 shadow-green-400/50' },
            { name: 'Node.js', percent: 75, barClass: 'from-lime-400 to-green-500 shadow-lime-400/50' },
            { name: 'Git', percent: 88, barClass: 'from-pink-400 to-rose-500 shadow-pink-400/50' },
        ],
    },
    {
        icon: '🎯',
        title: 'Design & UX',
        skills: [
            { name: 'Figma', percent: 85, barClass: 'from-violet-400 to-purple-500 shadow-violet-400/50' },
            { name: 'UI/UX Design', percent: 80, barClass: 'from-fuchsia-400 to-pink-500 shadow-fuchsia-400/50' },
            { name: 'Responsive Design', percent: 92, barClass: 'from-sky-400 to-cyan-500 shadow-sky-400/50' },
        ],
    },
]

const SkillBar: React.FC<{ percent: number; barClass: string }> = ({ percent, barClass }) => {
    const ref = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            setTimeout(() => {
                ref.current!.style.width = percent + '%'
            }, 200)
        }
    }, [percent])

    return (
        <div className="bg-slate-900 w-full  rounded-full h-2 overflow-hidden">
            <div
                ref={ref}
                className={`skill-bar bg-gradient-to-r h-2 rounded-full shadow-sm transition-all duration-700 ease-in-out ${barClass}`}
                style={{ width: '0%' }}
            ></div>
        </div>
    )
}

const SkillCard: React.FC<SkillCategory> = ({ icon, title, skills }) => (
    <div className=" p-8 rounded-xl bg-white ring-4 mx-auto lg:mx-0 ring-rose-300 shadow-sm card-hover fade-in  w-60 lg:w-80 hover:scale-105 transition-transform duration-300">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        <div className=" space-y-4">
            {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">{skill.name}</span>
                        <span className="text-gray-600">{skill.percent}%</span>
                    </div>
                    <SkillBar percent={skill.percent} barClass={skill.barClass} />
                </div>
            ))}
        </div>
    </div>
)

const Skills = () => {
    return (
        <div id='skills' className="w-full box-border px-1 bg-blue-100 relative">
            <h1 className="text-[10vw] sm:text-5xl xl:text-7xl leading-tight text-center font-bold text-[#1A2537]">Skills & Technologies</h1>
            <p className="text-[5vw] md:text-[3vw] xl:text-[1.9vw] leading-tight text-center font-bold text-gray-600 py-7">
                Here are the technologies and tools I work with to bring ideas to life
            </p>
            <div className="flex flex-col md:flex-row md:justify-evenly gap-10  py-20  ">
                {skillCategories.map((cat) => (
                    <SkillCard key={cat.title} {...cat} />
                ))}
            </div>
        </div>
    )
}

export default Skills
