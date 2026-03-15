import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '@/components/seo/schema-markup';

// In a real application, replace this with a database or CMS call
async function getPageData(category: string, slug: string) {
  // Mock check for a valid combo
  const validSlugs: Record<string, any> = {
    'resume-templates/software-engineer': {
      title: 'Software Engineer Resume Template (2026)',
      description: 'The best software engineer resume template to land your dream tech job.',
      h1: 'Software Engineer Resume Template',
      content: 'A detailed breakdown of how to build a software engineering resume...',
      createdAt: '2026-01-01',
      updatedAt: '2026-03-01'
    }
  };

  return validSlugs[`${category}/${slug}`] || null;
}

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const data = await getPageData(params.category, params.slug);
  
  if (!data) {
    return { title: 'Page Not Found' };
  }

  const url = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${params.category}/${params.slug}`;

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      type: 'article',
      publishedTime: data.createdAt,
      modifiedTime: data.updatedAt,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/og-image.jpg`],
    },
  };
}

export default async function ProgrammaticSEOPage({ params }: { params: { category: string; slug: string } }) {
  const data = await getPageData(params.category, params.slug);

  if (!data) {
    notFound();
  }

  // Schema for article and breadcrumbs
  const url = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${params.category}/${params.slug}`;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "datePublished": data.createdAt,
    "dateModified": data.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "Resume Editor"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": params.category,
        "item": `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${params.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": url
      }
    ]
  };

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <SchemaMarkup schema={articleSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="list-reset flex">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href={`/${params.category}`} className="hover:underline capitalize">{params.category.replace('-', ' ')}</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-900 font-semibold">{data.title}</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-extrabold tracking-tight mb-4">{data.h1}</h1>
      <p className="text-xl text-gray-600 mb-8">{data.description}</p>
      
      <div className="prose prose-lg max-w-none">
        {data.content}
        {/* We would render full HTML or markdown content here */}
      </div>

      {/* Hub and spoke model: Related Posts */}
      <section className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Related Templates</h2>
        {/* A component that fetches and maps internal links would go here */}
        <ul>
           <li><a href="/resume-templates/front-end-developer" className="text-blue-600 hover:underline">Front-End Developer Resume Template</a></li>
           <li><a href="/resume-templates/full-stack-engineer" className="text-blue-600 hover:underline">Full Stack Engineer Resume Template</a></li>
        </ul>
      </section>
    </article>
  );
}
