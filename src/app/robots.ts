import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
    },
    sitemap: `${process.env.HOST_URL || "http://localhost:3000"}/sitemap`,
  };
}
