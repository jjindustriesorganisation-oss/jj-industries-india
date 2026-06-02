import Image from "next/image";
import Header from "@/app/components/Header";
import Link from "next/link";
import Footer from "@/app/components/Footer";

import founderJigneshImg from "@/../public/images/founder_jignesh.png";
import founderJignaImg from "@/../public/images/founder_jigna.png";

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 marble-bg min-h-[500px] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8wP2rNkhG5q9SQ5nHgCtkA3wypN_cCOb8bn3ec3rzFUzZruBgGmMQJi0blR_G-3AABj3Xdp6z3n9vmobMmEyaFZSa7-UEx_1ldG08t51N8-cNJw-y5WqwwxM93YZWa8ktDmvQRb7k2skmyPhtQjCyH3oHZ9a-rj2WYw1PKlpeDm-VxJR7ktHmoXLRI9E14SVRg0GL-x34i0aQBUMvuG8cjPknabFrx4pmKfzPwGaJ9B2FAbs1ZIanrTJR4K96f7CuL00kR8EJB1A"
            alt="Marble Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="marble-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase block text-sm md:text-base">
              Your Trust. Our Commitment.
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-dark dark:text-white leading-tight animate-fade-in">
              Complete Hotel Supply Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Establishing a bridge between local manufacturing excellence and global hospitality standards since our inception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/products" className="bg-primary text-white px-8 py-3 rounded font-medium hover:bg-opacity-90 transition shadow-lg text-lg flex items-center justify-center gap-2">
                <span className="material-icons">explore</span>
                View Catalog
              </Link>
              <Link href="/#contact" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-white px-8 py-3 rounded font-medium transition shadow-lg text-lg flex items-center justify-center gap-2">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-primary w-16"></div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark dark:text-white uppercase tracking-wider">Our Leadership</h2>
                <div className="h-px bg-primary w-16"></div>
              </div>
              <p className="text-text-light dark:text-text-dark max-w-2xl mx-auto">
                Meet our founding leaders driving innovation and bridging local manufacturing with global opportunities in Bhavnagar, Gujarat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Jignesh Pandya Card */}
              <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-900">
                  <Image
                    alt="Jignesh Pandya Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={founderJigneshImg}
                    placeholder="blur"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-primary font-semibold uppercase tracking-wider text-xs block mb-1">Founder &amp; Director</span>
                    <h3 className="font-display text-2xl font-bold text-primary-dark dark:text-white">Jignesh Pandya</h3>
                    <p className="text-text-light dark:text-text-dark text-sm mt-3 leading-relaxed">
                      Co-founder and leader overseeing operations and local manufacturing quality standards, bringing years of expertise to commercial supplies.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-3">
                    <span className="material-icons text-primary">phone</span>
                    <a className="font-medium hover:text-primary transition" href="tel:9724184527">9724184527</a>
                  </div>
                </div>
              </div>

              {/* Jigna Baraiya Card */}
              <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-900">
                  <Image
                    alt="Jigna Baraiya Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={founderJignaImg}
                    placeholder="blur"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-primary font-semibold uppercase tracking-wider text-xs block mb-1">Founder &amp; Director</span>
                    <h3 className="font-display text-2xl font-bold text-primary-dark dark:text-white">Jigna Baraiya</h3>
                    <p className="text-text-light dark:text-text-dark text-sm mt-3 leading-relaxed">
                      Co-founder driving business strategy, client partnerships, and direct customer relationships, building long-term trust in hotel supplies.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-3">
                    <span className="material-icons text-primary">phone</span>
                    <a className="font-medium hover:text-primary transition" href="tel:9173422597">9173422597</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-16 max-w-3xl mx-auto bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border-l-4 border-primary shadow-lg text-center">
              <span className="material-icons text-primary text-4xl mb-2">format_quote</span>
              <p className="text-lg text-text-light dark:text-text-dark italic font-medium leading-relaxed">
                &ldquo;Our vision is to elevate the standard of hospitality supplies by insisting on uncompromising quality and fostering long-term relationships built on absolute trust.&rdquo;
              </p>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block mt-4">— JJ Industries Leadership</span>
            </div>

            {/* Benefits Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 justify-center">
                <span className="material-icons text-primary">verified</span>
                <span className="font-medium text-primary-dark dark:text-white">Premium Quality</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-icons text-primary">local_shipping</span>
                <span className="font-medium text-primary-dark dark:text-white">Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-icons text-primary">payments</span>
                <span className="font-medium text-primary-dark dark:text-white">Best Wholesale Prices</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-icons text-primary">handshake</span>
                <span className="font-medium text-primary-dark dark:text-white">Long Term Relationship</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
