import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://yourdomain.com"; // Switched to https for production default

  // Static routes
  const staticRoutes = ["", "/editor"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Hardcoded programmatic SEO routes
  const seoRoutes = [
    { category: "resume-templates", slug: "software-engineer" },
    { category: "resume-templates", slug: "frontend-developer" },
    { category: "resume-templates", slug: "full-stack-developer" },
    { category: "resume-templates", slug: "product-manager" },
    { category: "resume-templates", slug: "marketing-manager" },
    { category: "resume-templates", slug: "data-scientist" },
    { category: "resume-templates", slug: "graphic-designer" },
    { category: "resume-templates", slug: "nursing" },
    { category: "resume-templates", slug: "teacher" },
    { category: "resume-templates", slug: "sales-executive" },
    { category: "resume-templates", slug: "customer-service" },
    { category: "resume-templates", slug: "financial-analyst" },
    { category: "resume-templates", slug: "project-manager" },
    { category: "examples", slug: "college-student" },
    { category: "examples", slug: "high-school-student" },
    { category: "examples", slug: "internship" },
    { category: "examples", slug: "entry-level" },
    { category: "examples", slug: "executive" },
    { category: "resume-formats", slug: "chronological" },
    { category: "resume-formats", slug: "functional" },
    { category: "resume-formats", slug: "hybrid" },
  ];

  const dynamicRoutes = seoRoutes.map((route) => ({
    url: `${baseUrl}/${route.category}/${route.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
