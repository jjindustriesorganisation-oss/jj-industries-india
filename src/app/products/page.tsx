import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ProductsPage() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark dark:text-white">Curated Collections</h1>
          <p className="text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
            Discover our comprehensive range of premium hospitality supplies, engineered for exceptional durability and crafted for unparalleled guest comfort.
          </p>
        </header>

        {/* Bedding & Linen Section */}
        <section className="mb-20">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-8 flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold text-primary-dark dark:text-white">Bedding &amp; Linen</h2>
            <span className="text-primary font-semibold tracking-wider">01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mattress Protector */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-primary group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Mattress Protector"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFDMcCnOeUbUWLn_K32DaQVumn4mV18W6UEvAfVCPzuLWTvfVWy5KOx8tTJtX7290i11VMfJ2Bj--xIIBXZIRzr8tcigtZt4AFTzYg8HSxrONVfvYTx98wEPgB50EslijNG6sm_9XmvRwn4bD_QEZXH352ohyRIgFFiLVhT6OydSbpRNH4h9kNa9n__pfXqqgpVCZ6DitJnMZ9T9AD-KObKKbgNvp49xiP5DAFfEjrGKAAvc2bxrm8spPDugP-Ypg2MTzfbWhojI"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Mattress Protector</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Waterproof, breathable protection engineered for commercial use.</p>
              </div>
            </div>

            {/* Bedsheet */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-primary group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Bedsheet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf6qZUoLIXekFJLQOqZCmXBPlc6BFO266eDCOUcM_VsDNU6aViQJ9vj-wCEXV4Zkm6dvp02V1yQsUXLE5Vln6ljqBIM_n3V2A7oSFYoa9mwTsOJ-VqRGQskugkHBt4ppNfgsU8yGPL8LyBe0amDLFqDDxazuZ3QUq8l8e-3kwk7sUBhNgKBpnKPc9j1h7CB631AgqsTAgHKUHPCBob8Y5QWlRaRTArFGDxBRy2cQJq-QXrjKmrTQMWBS42LeKZYqcSLJkYHehH5o8"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Bedsheet</h3>
                <p className="text-text-light dark:text-text-dark text-sm">High thread-count luxury linens tailored for absolute comfort.</p>
              </div>
            </div>

            {/* Pillow Cover */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Pillow Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbF41VS16Ndv6BcnXllbvWkRtoB3CUiiJVwt-GwMrBNLWiDL9Vu8RrlTFqkOnMlsjLBHwQ0yH7b0IvfDSXp5o96H47eMek6PgNRUJZUDZ8U6Upx31Rp353N0RYNTbh4xH7-TF5lulYAp74lRIgKiAVg8HPev9bgSNS91CThDXTXF0EWc4DD3CG3sgHicDkN0_otx5p8rIn0usrIu2Dw-C7EciX0msJ2y0cDXj5ht-fWCnHjhx_VlQ2dqxoc_CZLU3iKSr1h7MZcBU"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Pillow Cover</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Silky-smooth envelope closures for a flawless presentation.</p>
              </div>
            </div>

            {/* Pillow */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Pillow"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/pillow.jpg"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Pillow</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Plush, shape-retaining inserts available in multiple loft options.</p>
              </div>
            </div>

            {/* Kushan with Cover */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Kushan with Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA84uwOlSZpoStfCBkmqQ7ijo3nPNr2LijHkZIWoCyoCb_EGfX1hycE-L7kIaiLsJCDR3fruLtI6lENOykdKHDDryhosd3Mj9_t37diHplo3TQ8TtkAUIlhtHRDND6soFSDwzKGCOx7RtHAb2ASXQYQRQG30hMw3aG8Aq_wwuCwfwmdEhVM4lnSzx0L3gNf-kJQctFRj3M5m5UY9pQUn-GZ02YhBF6-55ZGa1MLG4hF5CzQkHK_kZSILe4lriNxZQjC2whbYMQD7X0"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Kushan with Cover</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Decorative accents providing a touch of tailored elegance.</p>
              </div>
            </div>

            {/* Comforter */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-primary group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Comforter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6dqzwx03S0JYiIrjb0zG7CE70qpnnGhbwFnFFBRevBmQ9qv5WX4OrFpzRMwqRUyZPGOKh7n7T4h9iT93aaO7ReNm9SQi6tChQXbsFp1tKr9vpoZPFEjYxkg7bcv_iQ5JP91-aaVSUX4E1BXLc24NNXSs_MRaS0757c7lys1SRa66J9g9ULuBR6HAyvL4FTsGX6XcT9JmXsqmS1o0mB6LyQh4r_YNGLTl0A9hDEXJ2DkchPghg_UbbAUnlTzKxb-zjhevqzSio6es"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Comforter</h3>
                <p className="text-text-light dark:text-text-dark text-sm">All-season weight distribution for optimal thermal regulation.</p>
              </div>
            </div>

            {/* Comforter Cover */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Comforter Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjSAGZVsOdwE2QI-ju5PpZl439Mdw0Hu7JkUkZ0ImvtlB9loHXNdYqCXs9-tYv3IG0BI_see4lDzV4NuAE3PU_XkxFAidYmFbLlZUYkzfd886SJ8hqpREdS47Sxvt74qnm7hmUMsBfKKdHtyslqBpOi6dunmUHWMZmIEtRW5TWNaiEF_x8P1aw5fNpuECjImWvAgBT3PuX8VFqW4W8mDKY3RMGaodWAVdLMLnAYKK5Nlo8MHRli_zVeSD-wWsIhHEYz2SkEq9LMTM"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Comforter Cover</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Durable, easy-care encasements protecting your premium inserts.</p>
              </div>
            </div>

            {/* Runner */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Runner"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/runner.jpg"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Runner</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Aesthetic foot-of-bed accents to elevate room design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bath Section */}
        <section className="mb-20">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-8 flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold text-primary-dark dark:text-white">Bath</h2>
            <span className="text-primary font-semibold tracking-wider">02</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Towel & Napkin Set - Featured Card */}
            <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-primary group flex flex-col justify-between">
              <div className="h-80 overflow-hidden relative">
                <img
                  alt="Towel & Napkin Set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlX4WSWTbSVWGP5AQQebAampArO46e5oFJv2GolUJL_BUFQzNdVFbQMuV_53vPdU8BBcqlqXK_ZORldxdwW0vjPMUOnDV8Ey26CSUHA0CN06t9GsGXij_VzXQIA0HEUcbUkeHdqctgk4M4x3b07yqUULoOCfrA9a4yeBEsnUYSDDQlvGvevgjRjrsb1PiC-j13DPOzGy61m6-noN22TusVaIPZDeI4wZB3k68f-bYNC3IFmWaVy_drubQQ9tY0bfvkZcGccblMWkw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="font-display text-2xl font-bold text-white">Towel &amp; Napkin Set</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-light dark:text-text-dark">
                  Exceptionally absorbent, quick-drying sets designed for the rigors of commercial laundering while maintaining a luxurious hand-feel.
                </p>
              </div>
            </div>

            {/* Bathmat */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-80 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Bathmat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/bathmat.png"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Bathmat</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Heavyweight, anti-slip mats ensuring safety and comfort post-bath.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tableware & Dining Section */}
        <section className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-8 flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold text-primary-dark dark:text-white">Tableware &amp; Dining</h2>
            <span className="text-primary font-semibold tracking-wider">03</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dinner Sets */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Dinner Sets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpppMkpC6ip66KOLI89oU9VMNQmF3xm72QhGD_bWzBqaRxHWXBrJsPlnqYLMWSGZAmhG9RznypS6kKT85iIYHQZBXV7s5KDTe5MfGAJP_hgIetMU2Oey_2ya3RqhE0bv2q6n_4apoBB4tqkaMTCwk5ibMwwDW-TI_ouffS3VvZXTPu4LJNiu-5cKcc48F4_HXVEdE-91TjIWq2tlCCgWSd_FmxFpSPwJpyJMDOV1CxXd6k7ThKEfCwHOA6fk0HbFTD3OJPZ5Pp8Kk"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Dinner Sets</h3>
                <p className="text-text-light dark:text-text-dark text-sm">
                  Complete, chip-resistant porcelain collections for fine dining establishments.
                </p>
              </div>
            </div>

            {/* Tea & Coffee Sets */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Tea &amp; Coffee Sets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy9WEfjKKSF9Gvdw0Dxfv3aXx_P6u--m0Q8CIIkqKZDk1ikIIBPm5CRQNhfOl09h0tGYo29P0Qon8kI4uiQhDPwMLuKg6M7erbyFLOeNbm89rZ9ZH8HmfkOuD3D3wXv7xOBGLJBEzJ0FLj82KB19oZ8IJsnN9VNxoyAXJok0hRxcUS5QXoTcJenLaBDY5LhZ2qpxrUscZkVMwdC1gch3QGnkrteqiDWwiUwOL-MDUiY-CQlHLnCImRvypC_JiGMKCwjGOYcmu6EJU"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Tea &amp; Coffee Sets</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Elegant service ware for in-room dining and breakfast buffets.</p>
              </div>
            </div>

            {/* Bowls */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Bowls"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/bowls.png"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Bowls</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Versatile sizing for soups, salads, and culinary presentations.</p>
              </div>
            </div>

            {/* Wooden Crockery Set */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Wooden Crockery Set"
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                  src="/images/wooden_crockery.png"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Wooden Crockery Set</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Premium handcrafted, sustainable wooden tableware for a rustic aesthetic.</p>
              </div>
            </div>

            {/* Plates */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Plates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OVQ1cWFRLai34cz2kRXOTI-fXSRM6LSe65hvdpO1IQaxa6-pE8UwSP8GM3IXqkuTLksRujtWxm-IAlYiZdVsuokmY-5cbAkjcOAAk-ei--rjs2V0H9725WpZSd6muchnE1bAbK6v4sQj7SFRu_NNprPTEBXklrgUbIWn9hnR2dmr7DKfrhVbieoguiLWi4fUyaeNsguESzRUBG1RGrmEQrbSSeuni0VfbiLqPcuUDHvMXVbOKZStNNvCN-QlSwq4IpI7GaZxra4"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Plates</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Broad-rimmed and coupe designs to frame your culinary creations.</p>
              </div>
            </div>

            {/* Serveware */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                <img
                  alt="Serveware"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmeGAKlh3EwOVlODB-w3OsAN0AK5oBsp4HFo0O_ZaTO8ZEfN6i6azEIqRm17TkREiS_1ArqykG6f5qpfZ11LJIzSlQhz0SWI-qxOV1jy39UQys0LtLIburSD3UW-VNFq-PN9eER1qIz9sMpUJ5Oh5q1a6r7WLED-WhvF95xqfCUZkWfRlj4nTp6ZEJlTbetE5qjre2VA3tpltLyUZGkCRJXGL4pXfIAyv7cnlbdr01Pn1w5Bw_PlV6BP8QBGh91ISfb5BJdSaB1zs"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-primary-dark dark:text-white mb-2">Serveware</h3>
                <p className="text-text-light dark:text-text-dark text-sm">Generously proportioned platters and stands for banquet service.</p>
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
