"use client";

import { useRouter } from "next/navigation";

export default function ArticleCard({ props }) {
  const { post, slug, short } = props;
  const router = useRouter();

  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={`article-card short-${short || false}`} onClick={
      () => { router.push(`/blog/${slug}`) }
    } style={{ width: `calc(100% - 40px)` }}>
      <span className="card-title">{post.title}</span>
      <span className="card-description">{post.description}</span>
      <span className="card-footer">{dateFormatted} • {post.author}</span>
    </div>
  );
}