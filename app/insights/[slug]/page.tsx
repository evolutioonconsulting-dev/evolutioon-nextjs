import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, site } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return buildMetadata({ title: "Insights", description: site.description, path: "/insights" });

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`
  });
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const url = `${site.url}/insights/${article.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={url}
        datePublished={article.publishedAt}
        category={article.category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: site.url },
          { name: "Insights", url: `${site.url}/insights` },
          { name: article.title, url }
        ]}
      />

      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal variant="left">
            <Link
              href="/insights"
              className="text-xs uppercase tracking-widest2 text-gold hover:text-gold-light"
            >
              ← Back to Insights
            </Link>
            <div className="mt-6 text-xs uppercase tracking-widest2 text-gold">
              {article.category} · {article.readTime}
            </div>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              {article.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Reveal
          variant="scale"
          duration={600}
          className="mb-12 aspect-[16/9] w-full overflow-hidden"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div className="space-y-6">
          {article.body.map((para, i) => (
            <Reveal key={i} as="p" variant="up" delay={Math.min(i, 4) * 80} className="text-base leading-relaxed text-ink/75">
              {para}
            </Reveal>
          ))}
        </div>
      </article>

      <section className="border-t border-gold/25 bg-cream-dark py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <h2 className="mb-10 font-serif text-2xl text-ink">
              Related insights
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {related.map((a, idx) => (
              <Reveal key={a.slug} href={`/insights/${a.slug}`} variant="up" delay={idx * 90} className="group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest2 text-gold-dark">
                  {a.category} · {a.readTime}
                </div>
                <h3 className="mt-2 font-serif text-lg text-ink group-hover:text-gold-dark">
                  {a.title}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
