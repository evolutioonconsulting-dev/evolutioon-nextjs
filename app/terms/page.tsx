import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of Use governing access to and use of the ${site.name} website.`,
  path: "/terms"
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="font-serif text-4xl text-ink">Terms of Use</h1>
      <p className="mt-4 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/70">
        <p>
          These Terms of Use govern your access to and use of the{" "}
          {site.name} website (&quot;the Site&quot;). By using the Site, you
          agree to these terms.
        </p>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">Use of Content</h2>
          <p>
            All content on this Site — including text, graphics, logos, and
            service descriptions — is the property of {site.legalName}{" "}
            unless otherwise noted, and may not be reproduced without
            written permission.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">
            No Professional Advice
          </h2>
          <p>
            Content published on this Site, including insights articles, is
            provided for general informational purposes and does not
            constitute formal consulting advice for your specific
            circumstances.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">
            Limitation of Liability
          </h2>
          <p>
            {site.legalName} is not liable for any indirect, incidental, or
            consequential damages arising from your use of this Site.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of
            the Site after changes constitutes acceptance of the revised
            terms.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">Contact</h2>
          <p>
            Questions about these terms can be directed to {site.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
