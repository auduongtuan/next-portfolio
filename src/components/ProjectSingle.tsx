import {Project} from '../lib/project'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
type ProjectSingleProps = {
    project: Project
}
const components = (slug: string) => ({
    img: function CustomImage({ src, alt }:{src: string, alt: string}) {
      return (
        <div className="relative">
          <Image
            alt={alt}
            src={`/menutri/${src}`} layout="fill" objectFit="contain"
          />
        </div>
    
      )
    }
})
const ProjectSingle = ({project}:ProjectSingleProps) => (
    <div className="bg-gray-100 h-full min-h-screen	">
    <div className="pt-20 pb-20">
        <article className="ml-auto mr-auto mb-8 last:mb-0 p-4 max-w-4xl bg-white shadow-sm rounded-md">
        <h2 className="text-3xl font-bold">
        <Link href={`/blog/${project.slug}`}>{project.meta.title}</Link>
        </h2>
        <div className="mt-4">
        <MDXRemote {...project.prasedContent} components={components(project.slug)} />
        </div>
        </article>
    </div>
    </div>
)
export default ProjectSingle