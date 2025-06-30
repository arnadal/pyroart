"use client";

import { useRouter } from "next/navigation";

export default function BookCard({ props }) {
  const { title, description, author, source, thumbnail } = props;
  const router = useRouter();

  return (
    <div className="book-card" onClick={
      () => { open(source, "_blank") }
    } style={{ width: `calc(100% - 40px)` }}>
      <div className="card-img-holder">
        <img src={`./book_covers/${thumbnail}`} />
      </div>
      <div className="card-core">
        <span className="card-title">{title}</span>
        <span className="card-description">{description}</span>
        <span className="card-footer">by {author}</span>
      </div>
    </div>
  );
}