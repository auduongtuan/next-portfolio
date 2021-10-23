import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import DefaultErrorPage from 'next/error'
import {Project, getProjectBySlug, getProjectSlugs} from '../../lib/project'
import { serialize } from 'next-mdx-remote/serialize'
import ProjectSingle from '../../components/ProjectSingle'

type ProjectViewProps = {
  project: Project
}

export default function ProjectView({project}: ProjectViewProps) {
  const router = useRouter()

  if(router.isFallback) {
     return <h1>Loading...</h1>
  }

  if(!project) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }
  return (

    <ProjectSingle project={project} />
 
  )
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug as string;
  let project = slug ? await getProjectBySlug(slug) : undefined;
  if (project) project.prasedContent = await serialize(project.content);

  return {
    props: {
      project: project
    }
  }
  
 
}
export const getStaticPaths: GetStaticPaths = async () => {

  const paths = getProjectSlugs().map(slug => ({
    params: { slug: slug },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false }
}
