import fs from 'fs'
import path, {join} from 'path'
import matter from 'gray-matter'

const PROJECTS_PATH = path.join(process.cwd(), 'content/projects') 
console.log(PROJECTS_PATH);
export type Project = {
    slug: string,
    meta: any,
    content: string,
    prasedContent: any
}
export function getProjectSlugs(): string[] {
    return fs.readdirSync(PROJECTS_PATH).filter(fn => fn.endsWith('.mdx')).map(fileName => fileName.replace(/\.mdx$/, ''));
    // return fs.readdirSync(PROJECTS_PATH, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
}
export async function getProjectBySlug(slug: string) {
    // Remove ".mdx" from file name to get id
    const fullPath = join(PROJECTS_PATH, `${slug}.mdx`);
    
    // Read markdown file as string
    try {
        if (fs.existsSync(fullPath)) {
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const {content, data} = matter(fileContents)

            // Combine the data with the id
            return {
                slug: slug,
                meta: data,
                content: content
            }
        }
    } catch(err) {
        return null;
    }
    
}
export async function getAllProjects() {
    return await Promise.all(getProjectSlugs().map(async slug => {
        return await getProjectBySlug(slug);
    }));
}