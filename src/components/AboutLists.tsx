import { StackIcon } from '@/components/StackIcon'

const stack = [['Framer', 'Website Builder', 'framer'], ['Figma', 'Graphics Design', 'figma'], ['Photoshop', 'Image Editing', 'photoshop'], ['Contra', 'Freelance Jobs', 'contra']] as const
const experience = ['Senior Web Designer · Google · 2025 – Now', 'Creative Designer · Base · 2024 – 2025', 'Senior Brand Designer · Sero · 2020 – 2024']

export function AboutLists({ side }: { side: 'stack' | 'experience' }) {
  if (side === 'stack') return <div className="about-list"><h3>My Stack</h3>{stack.map(([name, subtitle, brand]) => <p className="stack-item" key={name}><StackIcon brand={brand} /><span><b>{name}</b><small>{subtitle}</small></span></p>)}</div>
  return <div className="about-list"><h3>My Experience</h3>{experience.map((item) => <p className="experience" key={item}>{item}</p>)}</div>
}
