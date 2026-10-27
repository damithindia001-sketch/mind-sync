const features = [
  {
    number: "01",
    title: "Smart Billing & POS",
    description:
      "Fast and accurate billing with a simple interface designed for everyday business operations.",
  },
  {
    number: "02",
    title: "Inventory Management",
    description:
      "Manage products, stock levels, and low-stock alerts from one convenient system.",
  },
  {
    number: "03",
    title: "Barcode & Label Designer",
    description:
      "Create professional product labels and print barcodes with ease.",
  },
  {
    number: "04",
    title: "Sales Reports",
    description:
      "Understand your business performance with clear sales reports and insights.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-bold text-[#080b12]">
            M
          </div>

          <span className="text-xl font-semibold tracking-wide">
            Mind <span className="text-cyan-400">Sync</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#features" className="transition hover:text-cyan-400">
            Features
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#080b12] transition hover:bg-cyan-300"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-24"
      >
        <div className="absolute left-1/2 top-10 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Smart Business Management
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Run Your Business
            <span className="mt-2 block text-cyan-400">Smarter.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            A smarter way to manage sales, inventory, and business operations.
            Mind Sync brings everything together in one powerful POS solution.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            ඔබේ ව්‍යාපාරය පහසුවෙන් කළමනාකරණය කරන්න.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-[#080b12] transition hover:bg-cyan-300"
            >
              Explore Mind Sync →
            </a>

            <a
              href="#features"
              className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
            >
              Discover Features
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-cyan-400" />
            Built for modern businesses in Sri Lanka
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative z-10">
          <div className="rounded-2xl border border-white/10 bg-[#111722] p-4 shadow-2xl shadow-cyan-950/30 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-gray-400">Mind Sync Dashboard</p>

                <h2 className="mt-1 text-lg font-semibold">
                  Business Overview
                </h2>
              </div>

              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">
                Live Preview
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/5 bg-[#171f2c] p-4">
                <p className="text-sm text-gray-400">Total Sales</p>

                <p className="mt-2 text-2xl font-bold">Rs. 85,420</p>

                <p className="mt-2 text-xs text-cyan-400">Today</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#171f2c] p-4">
                <p className="text-sm text-gray-400">Total Products</p>

                <p className="mt-2 text-2xl font-bold">1,248</p>

                <p className="mt-2 text-xs text-gray-500">In inventory</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/5 bg-[#171f2c] p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Sales Overview</p>

                <span className="text-xs text-gray-500">This week</span>
              </div>

              <div className="mt-6 flex h-32 items-end gap-3">
                {[35, 55, 42, 75, 58, 90, 68].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-cyan-400/70 transition hover:bg-cyan-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-3 flex justify-between text-xs text-gray-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#111722] px-5 py-4 shadow-xl sm:block">
            <p className="text-xs text-gray-400">System Status</p>

            <p className="mt-1 font-semibold text-cyan-400">
              ● Ready for Business
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-white/5 bg-[#0c1019] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Powerful Features
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Everything Your Business Needs
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Simple tools. Better control. Smarter decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-[#111722] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  {feature.number}
                </p>

                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-6 text-cyan-400 transition group-hover:translate-x-1">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-[#111722] px-6 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Mind Sync
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to Sync Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Discover a better way to manage your business with Mind Sync POS.
            Contact us to learn more about our software.
          </p>

          {/* Email and WhatsApp Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:damithmthennakoon@gmail.com"
              className="inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-[#080b12] transition hover:bg-cyan-300"
            >
              Email Us →
            </a>

            <a
              href="https://wa.me/94789787495?text=Hi%20Mind%20Sync%2C%20I%20am%20interested%20in%20your%20POS%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-cyan-400/40 px-7 py-3.5 font-semibold text-cyan-400 transition hover:bg-cyan-400/10"
            >
              WhatsApp Us →
            </a>
          </div>

          <div className="mt-8 space-y-2 text-sm text-gray-400">
            <p>
              Email:{" "}
              <a
                href="mailto:damithmthennakoon@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                damithmthennakoon@gmail.com
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/94789787495"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                0789787495
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Mind Sync. All rights reserved.</p>

          <p>Smarter Business. Better Future.</p>
        </div>
      </footer>
    </main>
  );
}
