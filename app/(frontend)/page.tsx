import Home from "@/sections/home";
import About from "@/sections/about";
import GalleryAlt from "@/sections/gallery-alt";
import Portfolio from "@/sections/portfolio";
import Testimonials from "@/sections/testimonials";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export const revalidate = 0;

export default async function Page() {
  const payload = await getPayload({ config: configPromise });

  // Fetch selected works for the homepage editorial section
  const selectedWorksRes = await payload.find({
    collection: "selected-works",
    sort: "order,-createdAt",
  });

  const selectedWorkItems = selectedWorksRes.docs
    .map((doc) => {
      let src = "";
      if (typeof doc.image === "object" && doc.image !== null) {
        src = doc.image.url || "";
      }
      return {
        title: doc.title,
        subtitle: doc.subtitle || "",
        description: doc.description || "",
        date: doc.date,
        link: doc.link,
        src,
      };
    })
    .filter((item) => item.src !== "");

  // Fetch testimonials
  const testimonialsRes = await payload.find({
    collection: "testimonials",
    sort: "order,-createdAt",
  });

  const testimonialItems = testimonialsRes.docs.map((doc) => ({
    clientName: doc.clientName,
    quote: doc.quote,
  }));

  return (
    <div className="">
      <Home />
      <About />
      <Portfolio />
      <GalleryAlt items={selectedWorkItems} />
      <Testimonials items={testimonialItems} />
    </div>
  );
}
