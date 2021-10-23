import {Post} from '../lib/post'
import Link from 'next/link'
type PostItemProps = {
    post: Post
}
const PostItem = ({post}:PostItemProps) => (
    <article className="ml-auto mr-auto mb-8 last:mb-0 p-4 max-w-4xl bg-white shadow-sm rounded-md">
    <h2 className="text-3xl font-bold">
      <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
    </h2>
   
  </article>
)
export default PostItem