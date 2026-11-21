import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}, outlining how we collect, use, and protect your information.`,
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="font-serif text-4xl text-ink">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink/50">Last updated: August 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/70">
        <p>
          {site.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          respects your privacy. This policy explains what information we
          collect through this website, how we use it, and the choices you
          have.
        </p>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">
            Information We Collect
          </h2>
          <p>
            When you submit our contact form, we collect your name, email
            address, organisation, phone number, and message content. We do
            not collect payment information through this site.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">
            How We Use Information
          </h2>
          <p>
            We use the information you provide solely to respond to your
            enquiry, schedule consultations, and, where you&apos;ve opted
            in, share relevant updates about our services and events.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">Data Retention</h2>
          <p>
            We retain enquiry data only as long as necessary to respond to
            your request and maintain our business records, after which it
            is deleted or anonymised.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal data at any time by contacting us at{" "}
            <a href={`mailto:${site.email}`} className="text-gold-dark underline">
              {site.email}
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-xl text-ink">Contact</h2>
          <p>
            Questions about this policy can be directed to {site.email} or{" "}
            {site.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
