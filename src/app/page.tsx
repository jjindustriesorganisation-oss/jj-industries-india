import Header from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <section className="marble-bg min-h-[819px] flex items-center">
        <div className="marble-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className="font-medium text-primary tracking-widest uppercase text-sm md:text-base">Your Trust. Our Commitment.</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-dark dark:text-white leading-tight">
              Complete <span className="gold-gradient-text">Hotel Supply</span> Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-600">
              Premium quality products bridging local manufacturing with global opportunities. We provide everything you need to deliver exceptional guest experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded font-medium hover:bg-opacity-90 transition shadow-lg text-lg" href="/products">Explore Products</a>
              <a className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-white px-8 py-3 rounded font-medium transition shadow-lg text-lg" href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-background-light dark:bg-background-dark" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-primary w-16"></div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-dark dark:text-white">OUR PRODUCT RANGE</h3>
              <div className="h-px bg-primary w-16"></div>
            </div>
            <p className="text-text-light dark:text-text-dark max-w-2xl mx-auto">Discover our comprehensive collection of premium hotel supplies designed for comfort, durability, and style.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#4FB3B8] transition-transform hover:-translate-y-2">
              <div className="bg-[#4FB3B8] text-white text-center py-2 font-bold tracking-wider">TOWELS</div>
              <img alt="White folded hotel towels" className="w-full h-48 object-cover" src="/images/towels_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#4FB3B8] rounded-full mr-2"></span>Bath Towel</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#4FB3B8] rounded-full mr-2"></span>Hand Towel</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#4FB3B8] rounded-full mr-2"></span>Face Towel</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#4FB3B8] rounded-full mr-2"></span>Bath Sheet</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#7E57C2] transition-transform hover:-translate-y-2">
              <div className="bg-[#7E57C2] text-white text-center py-2 font-bold tracking-wider">QUILTS</div>
              <img alt="White hotel quilt" className="w-full h-48 object-cover" src="/images/bedding_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#7E57C2] rounded-full mr-2"></span>Microfiber Quilt</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#7E57C2] rounded-full mr-2"></span>Cotton Quilt</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#7E57C2] rounded-full mr-2"></span>Hotel Quilt</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#EC407A] transition-transform hover:-translate-y-2">
              <div className="bg-[#EC407A] text-white text-center py-2 font-bold tracking-wider">PILLOWS</div>
              <img alt="White hotel pillows" className="w-full h-48 object-cover" src="/images/pillow_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#EC407A] rounded-full mr-2"></span>Fiber Pillow</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#EC407A] rounded-full mr-2"></span>Microfiber Pillow</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#EC407A] rounded-full mr-2"></span>Hotel Pillow</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#F57C00] transition-transform hover:-translate-y-2">
              <div className="bg-[#F57C00] text-white text-center py-2 font-bold tracking-wider">CROCKERY</div>
              <img alt="Elegant hotel crockery set" className="w-full h-48 object-cover" src="/images/crockery_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#F57C00] rounded-full mr-2"></span>Dinner Sets</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#F57C00] rounded-full mr-2"></span>Cups & Saucers</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#F57C00] rounded-full mr-2"></span>Bowls & Plates</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#F57C00] rounded-full mr-2"></span>Serving Dishes</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#0288D1] transition-transform hover:-translate-y-2">
              <div className="bg-[#0288D1] text-white text-center py-2 font-bold tracking-wider">BED SHEETS</div>
              <img alt="Bed sheets" className="w-full h-48 object-cover" src="/images/sheets_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0288D1] rounded-full mr-2"></span>Sateen Striped Bedsheet</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0288D1] rounded-full mr-2"></span>Percale Flat Bedsheet</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#AB47BC] transition-transform hover:-translate-y-2">
              <div className="bg-[#AB47BC] text-white text-center py-2 font-bold tracking-wider">MATTRESS PROTECTORS</div>
              <img alt="Mattress protector" className="w-full h-48 object-cover" src="/images/protector_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#AB47BC] rounded-full mr-2"></span>Waterproof Quilted Protector</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#26A69A] transition-transform hover:-translate-y-2">
              <div className="bg-[#26A69A] text-white text-center py-2 font-bold tracking-wider">HOTEL AMENITIES</div>
              <img alt="Hotel amenities" className="w-full h-48 object-cover" src="/images/amenities_category.png" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#26A69A] rounded-full mr-2"></span>Eco-Luxe Amenities Kit</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#26A69A] rounded-full mr-2"></span>Premium Velvet Slippers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-primary w-12"></div>
              <h3 className="font-display text-2xl font-bold text-primary-dark dark:text-white uppercase tracking-wider">Perfect For</h3>
              <div className="h-px bg-primary w-12"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="material-icons text-4xl text-[#4FB3B8] mb-2">apartment</span>
              <span className="font-medium text-sm md:text-base text-text-light dark:text-text-dark">Hotels</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="material-icons text-4xl text-[#F57C00] mb-2">beach_access</span>
              <span className="font-medium text-sm md:text-base text-text-light dark:text-text-dark">Resorts</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="material-icons text-4xl text-[#7E57C2] mb-2">house</span>
              <span className="font-medium text-sm md:text-base text-text-light dark:text-text-dark">Guest Houses</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="material-icons text-4xl text-[#EC407A] mb-2">domain</span>
              <span className="font-medium text-sm md:text-base text-text-light dark:text-text-dark">Hostels</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="material-icons text-4xl text-blue-600 mb-2">local_hospital</span>
              <span className="font-medium text-sm md:text-base text-text-light dark:text-text-dark">Hospitals</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <span className="material-icons text-4xl text-[#7CB342] mb-2">spa</span>
              <span className="font-medium text-sm md:text-base text-text-light dark:text-text-dark">Spa & Wellness</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light dark:bg-background-dark" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="font-display text-3xl font-bold text-primary-dark dark:text-white">Why Choose <span className="text-primary">JJ Industries?</span></h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">verified</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">Premium Quality Every Time</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">We never compromise on the quality of our materials, ensuring durability and luxury.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">bed</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">Soft, Comfortable & Durable</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Products designed to provide maximum comfort while withstanding rigorous commercial laundering.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">local_shipping</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">Timely Delivery Pan India</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Reliable logistics network ensuring your supplies arrive when you need them, wherever you are.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">payments</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">Best Wholesale Prices</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Direct from manufacturing pricing offering excellent value for your investment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">handshake</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">Long Term Relationship</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">We build partnerships based on trust, consistency, and exceptional service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-dark rounded-xl p-8 shadow-2xl text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 border border-white/10 rounded-full"></div>
              <div className="absolute -right-10 -top-10 w-48 h-48 border border-white/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="inline-block bg-primary text-white font-bold py-1 px-4 rounded-full text-sm mb-6 uppercase tracking-wider">
                  Call Us Today
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white text-primary-dark rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-icons text-3xl">phone</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm uppercase tracking-wider">Direct Line</p>
                    <a className="text-4xl font-bold font-display hover:text-primary transition" href="tel:9173422597">9173422597</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-primary">email</span>
                    <a className="text-lg hover:text-primary transition" href="mailto:jjbaraiya@gmail.com">jjbaraiya@gmail.com</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-icons text-primary mt-1">location_on</span>
                    <span className="text-lg">Plot No.9, Shivam Amrut 2 Re-Survey No. 64/1/3, Near Top 3 Cinema Adhewada, Tarsimiya, Bhavnagar, Gujarat, 364001</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20 text-center relative z-10">
                <h2 className="font-display text-3xl font-bold mb-2">JJ INDUSTRIES</h2>
                <p className="text-primary text-sm uppercase tracking-widest mb-4">Your Trust. Our Commitment.</p>
                <p className="text-gray-300">PREMIUM PRODUCTS. SATISFIED CUSTOMERS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-surface-light dark:bg-[#081221] py-8 text-center border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2023 JJ Industries. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition" href="#">
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition" href="https://www.instagram.com/j_j_indus?igsh=aGc5eWdtZHo1MTA=" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
