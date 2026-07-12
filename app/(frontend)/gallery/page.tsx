import { getPayload } from "payload";
import configPromise from "@/payload.config";
import ParallaxGallery from "@/sections/parallax-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | The Olaoluwa",
  description: "Browse the full collection of photography work by Enoch Olaoluwa.",
};

export default async function GalleryPage() {
  const payload = await getPayload({ config: configPromise });
  const galleryRes = await payload.find({
    collection: "gallery",
    sort: "order,-createdAt",
    limit: 100,
  });

  const images = galleryRes.docs
    .map((doc) => {
      let src = "";
      let title = doc.title || "";
      let link = doc.link || "#";

      if (doc.sourceType === "reference" && doc.reference && typeof doc.reference === "object") {
        title = doc.reference.title || "";
        link = doc.reference.link || "#";
        if (typeof doc.reference.image === "object" && doc.reference.image !== null) {
          src = doc.reference.image.url || "";
        }
      } else {
        if (typeof doc.image === "object" && doc.image !== null) {
          src = doc.image.url || "";
        }
      }

      return {
        title,
        link,
        src,
      };
    })
    .filter((item) => item.src !== "");

  return (
    <div>
      <ParallaxGallery images={images} />
    </div>
  );
}
