import Header from "@/app/components/Header";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 marble-bg min-h-[500px] flex items-center justify-center text-center">
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

        {/* Leader Profile Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-surface-dark shadow-2xl p-3 border border-gray-200 dark:border-gray-800">
                <img
                  alt="Jigna Baraiya Portrait"
                  className="w-full h-auto rounded-xl object-cover aspect-[4/5]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZl8bVFHqmIFHjC4VPybKS9ewVnPm_w7T1P6ZCYOgZMSDUNWiwldyegezR3XIWDyKb50qMPbBwS06iVq0GKUK_rIjcfNfOFzyCludj7CkmwJpqz_Yx_XrEx-BkG-AuCZ8RNc2P5DaXO3BBRLP9rNTummFm2xoh6t3PkGjVXvm0NexDSO01pZeBs_X49umOaG9DXG5Te8K2EZX5I_6sLA21fWQo9FzLyMCPIcqqHAWH_WIZBKW5wt-Ohq4zOYVfhCrfNWHddF-ZFvI"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-primary"></div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Meet Our Leader</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark dark:text-white">
                Introducing Jigna Baraiya
              </h2>
              <p className="text-lg text-text-light dark:text-text-dark leading-relaxed">
                Meet Jigna Baraiya, a dynamic entrepreneur based right here in Bhavnagar, bridging local manufacturing with global opportunities.
              </p>
              
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border-l-4 border-primary shadow-sm">
                <p className="text-text-light dark:text-text-dark italic font-medium">
                  &ldquo;Our vision is to elevate the standard of hospitality supplies by insisting on uncompromising quality and fostering long-term relationships built on absolute trust.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">verified</span>
                  <span className="font-medium text-primary-dark dark:text-white">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">local_shipping</span>
                  <span className="font-medium text-primary-dark dark:text-white">Pan India Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">payments</span>
                  <span className="font-medium text-primary-dark dark:text-white">Best Wholesale Prices</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">handshake</span>
                  <span className="font-medium text-primary-dark dark:text-white">Long Term Relationship</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-light dark:bg-[#081221] py-8 text-center border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} JJ Industries. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition"
                href="#"
              >
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition"
                href="https://www.instagram.com/j_j_indus?igsh=aGc5eWdtZHo1MTA="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
