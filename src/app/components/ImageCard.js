"use client";

import { useRouter } from "next/navigation";

export default function ImageCard({ props }) {

  const { title, illustrator, slug, ext } = props;
  const router = useRouter();

  return (
    <div className="image-card" onClick={
      () => { router.push(`/gallery/${slug}`) }
    }
    style={{
      width: "100%"
    }}>
      <div
        className="card-img-holder"
        style={{
          backgroundImage: `url(/gallery_images/${slug}.${ext})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#808080"
        }}
      >
      </div>
      <div className="card-core">
        <span className="card-name">{title}</span>
        <span className="card-footer">by {illustrator}</span>
      </div>
    </div>
  );

}