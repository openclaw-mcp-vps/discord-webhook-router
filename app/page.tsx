export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Developer Tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Smart Discord Webhook Routing
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Route webhooks to specific Discord channels based on content, priority, or source.
          Built-in filtering, rate limiting, and a clean dashboard to manage it all.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["Rule-based routing", "Send alerts to the right channel automatically"],
            ["Rate limiting", "Redis-backed throttling to protect your channels"],
            ["Live dashboard", "Manage endpoints and rules in one place"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited webhook endpoints",
              "Up to 50 routing rules",
              "Redis rate limiting included",
              "PostgreSQL rule storage",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does webhook routing work?",
              "You create routing rules that match on payload fields like source, severity, or keywords. Matching webhooks are forwarded to the Discord channel you specify."
            ],
            [
              "What happens if I exceed rate limits?",
              "Messages that exceed your configured rate limit are queued or dropped based on your rule settings. You'll see stats in the dashboard."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your billing portal at any time. Your access continues until the end of the billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
