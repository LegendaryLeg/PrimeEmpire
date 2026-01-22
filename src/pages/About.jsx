import React from 'react';

const teaPlantationImage = new URL('../../images/Tea Plantation.jpg', import.meta.url).href;

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Section Header */}
      <section className="bg-white py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
              Our Story
            </h1>
            <p className="text-base md:text-lg text-text-secondary">
              Authentic Indian tea, built on tradition and trust
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="bg-background-beige py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
              {/* Left Side - Image */}
              <div className="order-2 md:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={teaPlantationImage}
                    alt="Tea plantation in Assam, India"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="order-1 md:order-2">
                <div className="space-y-6 max-w-xl">
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    Prime Empire LLP was established in 2015 in Almaty, Kazakhstan, with the goal of bringing authentic Indian tea to local customers while preserving its original quality and character.
                  </p>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    Founded by Rashid Mohammad, a native of India who moved to Almaty in 1991, the company is built on strong cultural ties and firsthand knowledge of Indian tea traditions.
                  </p>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    Our tea is sourced from Assam, India — a region known worldwide for its rich, full-bodied teas. Today, our range includes black tea (medium leaf, large leaf, and CTC), green tea, masala tea, and other carefully selected products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">Our Approach</h2>
              <p className="text-base md:text-lg text-text-secondary">
                A careful process that protects quality from sourcing to your cup.
              </p>
            </div>

            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start border-b border-border-divider pb-10">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-text-primary">Careful Sourcing</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    Our tea is sourced from trusted suppliers in Assam, India — a region known for its rich tea-growing tradition.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start border-b border-border-divider pb-10">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-text-primary">Quality Selection</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    Each variety is selected with attention to leaf quality, aroma, and consistency, ensuring a reliable experience with every purchase.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-text-primary">From Origin to Customer</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    From sourcing to delivery, we focus on freshness, proper handling, and maintaining the original character of the tea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Assam to Your Cup */}
      <section className="bg-background-beige py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
                From Assam to Your Cup
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-accent-saffron" aria-hidden="true" />
                  <span className="w-px h-12 bg-border-divider" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Tea gardens in Assam</h3>
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    We begin at the source, selecting tea from trusted gardens known for depth and character.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-accent-saffron" aria-hidden="true" />
                  <span className="w-px h-12 bg-border-divider" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Selection and packaging</h3>
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    Each batch is assessed for aroma and consistency before careful packaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-accent-saffron" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Ready for customers</h3>
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    The tea arrives fresh and true to its origin, prepared for a premium experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;