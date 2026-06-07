import Image from "next/image";
import Header from "@/app/components/Header";
import GmailLink from "@/app/components/GmailLink";
import Footer from "@/app/components/Footer";

import towelsCategoryImg from "@/../public/images/towels_category.png";
import beddingCategoryImg from "@/../public/images/bedding_category.png";
import pillowCategoryImg from "@/../public/images/pillow_category.png";
import crockeryCategoryImg from "@/../public/images/crockery_category.png";
import sheetsCategoryImg from "@/../public/images/sheets_category.png";
import protectorCategoryImg from "@/../public/images/protector_category.png";
import amenitiesCategoryImg from "@/../public/images/amenities_category.png";
import woodenCrockeryImg from "@/../public/images/wooden_crockery.png";
import logoImg from "@/../public/images/logo.jpg";

export default function Home() {
  return (
    <>
      <Header />

      <section className="marble-bg min-h-[819px] flex items-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8wP2rNkhG5q9SQ5nHgCtkA3wypN_cCOb8bn3ec3rzFUzZruBgGmMQJi0blR_G-3AABj3Xdp6z3n9vmobMmEyaFZSa7-UEx_1ldG08t51N8-cNJw-y5WqwwxM93YZWa8ktDmvQRb7k2skmyPhtQjCyH3oHZ9a-rj2WYw1PKlpeDm-VxJR7ktHmoXLRI9E14SVRg0GL-x34i0aQBUMvuG8cjPknabFrx4pmKfzPwGaJ9B2FAbs1ZIanrTJR4K96f7CuL00kR8EJB1A"
          alt="Marble Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
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
              <Image alt="White folded hotel towels" className="w-full h-48 object-cover" src={towelsCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
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
              <Image alt="White hotel quilt" className="w-full h-48 object-cover" src={beddingCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
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
              <Image alt="White hotel pillows" className="w-full h-48 object-cover" src={pillowCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
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
              <Image alt="Elegant hotel crockery set" className="w-full h-48 object-cover" src={crockeryCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
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
              <Image alt="Bed sheets" className="w-full h-48 object-cover" src={sheetsCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0288D1] rounded-full mr-2"></span>Sateen Striped Bedsheet</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0288D1] rounded-full mr-2"></span>Percale Flat Bedsheet</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#AB47BC] transition-transform hover:-translate-y-2">
              <div className="bg-[#AB47BC] text-white text-center py-2 font-bold tracking-wider">MATTRESS PROTECTORS</div>
              <Image alt="Mattress protector" className="w-full h-48 object-cover" src={protectorCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#AB47BC] rounded-full mr-2"></span>Waterproof Quilted Protector</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#26A69A] transition-transform hover:-translate-y-2">
              <div className="bg-[#26A69A] text-white text-center py-2 font-bold tracking-wider">HOTEL AMENITIES</div>
              <Image alt="Hotel amenities" className="w-full h-48 object-cover" src={amenitiesCategoryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#26A69A] rounded-full mr-2"></span>Eco-Luxe Amenities Kit</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#26A69A] rounded-full mr-2"></span>Premium Velvet Slippers</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-lg border-t-4 border-[#8B5A2B] transition-transform hover:-translate-y-2">
              <div className="bg-[#8B5A2B] text-white text-center py-2 font-bold tracking-wider">WOODEN CROCKERY</div>
              <Image alt="Wooden crockery set" className="w-full h-48 object-cover object-center" src={woodenCrockeryImg} placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <div className="p-6">
                <ul className="space-y-2 text-text-light dark:text-text-dark">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mr-2"></span>Wooden Dinnerware</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mr-2"></span>Serving Platters</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mr-2"></span>Salad Bowls</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mr-2"></span>Handcrafted Utensils</li>
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
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-white text-primary-dark rounded-full flex items-center justify-center shadow-lg mt-1">
                    <span className="material-icons text-3xl">phone</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 text-sm uppercase tracking-wider">Jignesh Pandya</p>
                      <a className="text-3xl font-bold font-display hover:text-primary transition block" href="tel:9724184527">9724184527</a>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm uppercase tracking-wider">Jigna Baraiya</p>
                      <a className="text-3xl font-bold font-display hover:text-primary transition block" href="tel:9173422597">9173422597</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GmailLink />
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-icons text-primary mt-1">location_on</span>
                    <span className="text-lg">Plot No.9, Shivam Amrut 2 Re-Survey No. 64/1/3, Near Top 3 Cinema Adhewada, Tarsimiya, Bhavnagar, Gujarat, 364001</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20 text-center relative z-10">
                <Image
                  src={logoImg}
                  alt="JJ Industries Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto mb-4 object-contain rounded-full bg-white p-1"
                  placeholder="blur"
                />
                <h2 className="font-display text-3xl font-bold mb-2">JJ INDUSTRIES</h2>
                <p className="text-primary text-sm uppercase tracking-widest mb-4">Your Trust. Our Commitment.</p>
                <p className="text-gray-300">PREMIUM PRODUCTS. SATISFIED CUSTOMERS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
