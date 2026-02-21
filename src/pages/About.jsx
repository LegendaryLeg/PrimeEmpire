import React from 'react';
import { useTranslation } from 'react-i18next';

const teaPlantationImage = new URL('../../images/Tea Plantation.jpg', import.meta.url).href;

const About = () => {
  const { t } = useTranslation();
  const storyParagraphs = t('about.storyParagraphs', { returnObjects: true });
  const approachSteps = t('about.approach.steps', { returnObjects: true });
  const flowSteps = t('about.flow.steps', { returnObjects: true });
  return (
    <main className="min-h-screen">
      {/* Section Header */}
      <section className="bg-white py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
              {t('about.storyTitle')}
            </h1>
            <p className="text-base md:text-lg text-text-secondary">
              {t('about.storySubtitle')}
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
                  {storyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base md:text-lg text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
                {t('about.approach.title')}
              </h2>
              <p className="text-base md:text-lg text-text-secondary">
                {t('about.approach.subtitle')}
              </p>
            </div>

            <div className="space-y-10">
              {approachSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`grid grid-cols-1 md:grid-cols-5 gap-6 items-start ${
                    index < approachSteps.length - 1 ? 'border-b border-border-divider pb-10' : ''
                  }`}
                >
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-text-secondary leading-relaxed max-w-xl">{step.text}</p>
                  </div>
                </div>
              ))}
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
                {t('about.flow.title')}
              </h2>
            </div>

            <div className="space-y-8">
              {flowSteps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-accent-saffron" aria-hidden="true" />
                    {index < flowSteps.length - 1 && (
                      <span className="w-px h-12 bg-border-divider" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed max-w-xl">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;