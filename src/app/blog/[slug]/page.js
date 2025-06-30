import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NotFound from './not-found'
import { getAllSlugs, getPost } from '../../lib/posts'

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

export default function BlogPost(props) {
  const { slug } = props.params;
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main>
      <Navbar />
      <section className="titleSection">
        <h1 className="subtitle">BLOG</h1>
      </section>
      <section>
        <h1>{post.title}</h1>
        <p>{dateFormatted} • {post.author}</p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} style={{ width: "100%" }} />
      </section>
      <Footer />
    </main>
  );
}