export default function StakeAffiliateSimpleLanding() {
  const benefits = [
    {
      title: "Community-first",
      text: "Join Hey Margaux across Kick, Discord, Facebook, and Twitch for streams, giveaways, and an active player community.",
    },
    {
      title: "Simple and clear",
      text: "A clean landing page focused on your content, your links, and one easy next step for visitors.",
    },
    {
      title: "Built for conversion",
      text: "Strong calls to action guide visitors from your content into your community and affiliate flow.",
    },
  ];

  const sections = [
    "Watch on Kick",
    "Join the Discord community",
    "How to get started",
    "Featured content and streams",
    "FAQ + affiliate disclosure",
  ];

  const socials = [
    {
      label: "Kick",
      href: "https://kick.com/heymargaux",
      desc: "Main streaming home for Stake content",
    },
    {
      label: "Discord",
      href: "https://discord.gg/9bFFkbjRFa",
      desc: "Join for refills, giveaways, and community",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/heymargaux",
      desc: "Follow content, updates, and highlights",
    },
    {
      label: "Twitch",
      href: "https://www.twitch.tv/heymargaux",
      desc: "Watch live and stay connected",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">Hey Margaux</p>
            <p className="text-xs text-neutral-500">heymargaux.xyz</p>
          </div>
          <a
            href="https://kick.com/heymargaux"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Watch on Kick
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm">
              18+ only • Affiliate disclosure applies • Play responsibly
            </div>

            <h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
              Watch, play, and join the Hey Margaux community
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 md:text-lg">
              Follow my streams, join the Discord, and stay close to the action
              through content, giveaways, community perks, and my official
              links.
            </p>

            <div className="mt-8 flex flex-wrap gap-3" id="cta">
              <a
                href="https://kick.com/heymargaux"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Watch on Kick
              </a>

              <a
                href="https://discord.gg/9bFFkbjRFa"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Join the Discord
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[28px] border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-200/60">
              <div className="rounded-[24px] bg-neutral-900 p-6 text-white">
                <p className="text-sm text-neutral-300">Hey Margaux preview</p>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Live now
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Kick streams, community drops, and giveaways
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">
                    Build a simple home for your audience and direct them to the
                    right place fast.
                  </p>

                  <div className="mt-6 flex gap-3">
                    <div className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-neutral-900">
                      Main CTA
                    </div>
                    <div className="rounded-2xl border border-white/20 px-4 py-3 text-center text-sm font-semibold">
                      Community CTA
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-neutral-200 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Best for
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Kick viewers, Discord members, Facebook traffic, Twitch bio
                    links
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Style
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Minimal, premium, creator-led landing page
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Suggested structure
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  A simple homepage that keeps people moving
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-neutral-600">
                Keep the page focused. Your content should lead naturally into
                your community and primary call to action.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {sections.map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
                >
                  <p className="text-xs font-medium text-neutral-500">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-6">
          <div className="grid gap-4 md:grid-cols-4">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Social
                </p>
                <p className="mt-2 text-lg font-semibold">{item.label}</p>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-medium text-neutral-500">How it works</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Turn viewers into community members
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 md:text-base">
              The page should make it easy for people to discover your stream,
              join your Discord, and keep following your content.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "1",
                "Watch the stream",
                "Lead with your Kick content and make your main CTA the entry point.",
              ],
              [
                "2",
                "Join the Discord",
                "Use Discord to build community, refills, giveaways, and repeat engagement.",
              ],
              [
                "3",
                "Drive conversions",
                "Repeat the CTA and make it obvious where visitors should click next.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={title}
                className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-sm font-semibold text-white">
                  {num}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-4">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Featured section
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  What your visitors should see next
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600 md:text-base">
                  Add your best stream screenshot, a recent clip, or a clean
                  creator photo. Keep it simple and focus on trust, personality,
                  and momentum.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] bg-neutral-100 p-5">
                  <p className="text-sm font-semibold">Live streams</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Highlight your main Stake-related streaming content on Kick.
                  </p>
                </div>

                <div className="rounded-[24px] bg-neutral-100 p-5">
                  <p className="text-sm font-semibold">Giveaways and refills</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Make your Discord benefits clear so people have a reason to
                    join and stay active.
                  </p>
                </div>

                <div className="rounded-[24px] bg-neutral-100 p-5">
                  <p className="text-sm font-semibold">Social proof</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Use creator presence, community activity, or short
                    highlights to build credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Do I need to follow every social account?",
                "No. Kick and Discord are the main ones. The rest help people stay connected to your content.",
              ],
              [
                "What should be the main call to action?",
                "Your primary CTA should be Kick. Your secondary CTA should be Discord.",
              ],
              [
                "Should the page have lots of text?",
                "No. Keep the copy short, clean, and easy to scan on mobile.",
              ],
              [
                "What disclosures should be visible?",
                "Show 18+ messaging, affiliate disclosure, and a clear reminder to play responsibly.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm text-neutral-300">Final section</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to join the Hey Margaux community?
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-300 md:text-base">
                  Watch the streams, stay active in Discord, and keep up with
                  giveaways, content, and community perks through my official
                  channels.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-7 text-neutral-300">
                  This page should include your affiliate disclosure, age
                  restriction notice, and responsible gaming reminder. Only
                  promote in places where you are allowed to do so.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://kick.com/heymargaux"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:opacity-90"
                  >
                    Visit Kick Channel
                  </a>

                  <a
                    href="https://discord.gg/9bFFkbjRFa"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}