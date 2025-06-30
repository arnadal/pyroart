import { getPost } from '../lib/posts';
import ArticleCard from 'app/components/ArticleCard';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import BookCard from 'app/components/BookCard';

export default function Blog() {
  return (
    <main>
      <Navbar />
      <section className="titleSection">
        <h1 className="subtitle">BLOG</h1>
      </section>
      <section>
        <div className="flex-2">
          <div className="smaller">
            <h2>Reading List</h2>
            <p style={{ textAlign: "center" }}>Some articles from our blog</p>
            <ArticleCard props={{ post: getPost("ai-as-visual-reference"), slug: "ai-as-visual-reference" }} />
            <ArticleCard props={{ post: getPost("ai-tools-for-design"), slug: "ai-tools-for-design" }} />
            <ArticleCard props={{ post: getPost("is-ai-the-boon-or-bane-of-the-22nd-century"), slug: "is-ai-the-boon-or-bane-of-the-22nd-century" }} />
          </div>
          <hr />
          <div className="larger">
            <h2>Featured Reads From Around the World</h2>
            <p style={{ textAlign: "center" }}>Our editorial recommends these books from the <b>Goodreads</b> listing.</p>
            <div className="flex-3" style={{ width: "100%" }}>
              <BookCard props={{
                title: "Understanding Generative AI in a Cultural Context",
                description: "Explore Artificial myths and human realities",
                author: "Erkan Saka",
                source: "https://www.goodreads.com/book/show/222941500-understanding-generative-ai-in-a-cultural-context",
                thumbnail: "Understanding Generative AI in a Cultural Context by Erkan Saka.jpg"
              }} />
              <BookCard props={{
                title: "Artificial Intelligence and the Future of Power: 5 Battlegrounds",
                description: "Explore Artificial myths and human realities",
                author: "Rajiv Malhotra",
                source: "https://www.goodreads.com/book/show/56312171-artificial-intelligence-and-the-future-of-power#CommunityReviews",
                thumbnail: "Artificial Intelligence and the Future of Power by Rajiv Malhotra.jpg"
              }} />
            </div>
            <div className="flex-3" style={{ width: "100%" }}>
              <BookCard props={{
                title: "How To Create Breathtaking AI Images: A Guide to Art Terminology",
                description: "Learn to take your breath away",
                author: "Gina Debogovich",
                source: "https://www.goodreads.com/book/show/121742197-how-to-create-breathtaking-ai-images",
                thumbnail: "How To Create Breathtaking AI Images by Gina Debogovich.jpg"
              }} />
              <BookCard props={{
                title: "Text to Image AI: Unleashing the Power of Midjourney",
                description: "Transform prompts to pretty illustrations",
                author: "Simon G. Bond",
                source: "https://www.goodreads.com/book/show/123840420-text-to-image-ai",
                thumbnail: "Text to Image AI by Simon G Bond.jpg"
              }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>All Posts</h2>
        <ArticleCard props={{ post: getPost("ai-as-visual-reference"), slug: "ai-as-visual-reference", short: true }} />
        <ArticleCard props={{ post: getPost("ai-tools-for-design"), slug: "ai-tools-for-design", short: true }} />
        <ArticleCard props={{ post: getPost("is-ai-the-boon-or-bane-of-the-22nd-century"), slug: "is-ai-the-boon-or-bane-of-the-22nd-century", short: true }} />
        <ArticleCard props={{ post: getPost("omnipresent-danger-of-ai-and-preventing-it"), slug: "omnipresent-danger-of-ai-and-preventing-it", short: true }} />
        <ArticleCard props={{ post: getPost("say-it-right-how-to-talk-to-ai-for-better-art"), slug: "say-it-right-how-to-talk-to-ai-for-better-art", short: true }} />
      </section>
      <Footer />
    </main>
  );
}
