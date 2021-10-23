import {Post} from '../lib/post'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
type PostSingleProps = {
    post: Post
}
const components = (slug: string) => ({
    img: function CustomImage({ src, alt }:{src: string, alt: string}) {
      return (
        <p>
          <Image
            alt={alt}
            src={require('../../content/blog/uploads/' + src).default}
          />
        </p>
      )
    }
})
const PostSingle = ({post}:PostSingleProps) => (
    <div className="bg-gray-100 h-full min-h-screen	">
    <div className="pt-20 pb-20">
        <article className="ml-auto mr-auto mb-8 last:mb-0 p-4 max-w-4xl bg-white shadow-sm rounded-md">
        <h2 className="text-3xl font-bold">
        <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
        </h2>
        <div className="mt-4">
        <MDXRemote {...post.prasedContent} components={components(post.slug)} />
        </div>
        </article>
    </div>
    </div>
)
export default PostSingle