import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Read local JSON file
  const filePath = path.join(process.cwd(), "public/assets/blogs/blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  // Generate blog URLs
  const blogUrls = blogs.map((blog: { id: number }) => ({
    url: `https://kaifoundry.com/blogs/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    {
      url: "https://kaifoundry.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://kaifoundry.com/career",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kaifoundry.com/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogUrls,
  ];
}
