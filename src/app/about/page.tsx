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
