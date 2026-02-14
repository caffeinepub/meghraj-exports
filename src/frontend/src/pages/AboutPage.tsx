import { useNavigate } from '@tanstack/react-router';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-10 font-serif font-bold text-foreground">
            About Us
          </h1>
          <div className="mb-10 gold-divider" />

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              MeghRaj Exports is a premier international trading and export company specializing in
              equestrian and saddlery products. With years of experience in the industry, we have
              established ourselves as a trusted partner for businesses worldwide seeking
              high-quality equestrian equipment.
            </p>

            <p>
              Our company was founded with a vision to bridge the gap between traditional
              craftsmanship and modern manufacturing techniques. We take pride in our ability to
              produce products that not only meet but exceed international quality standards while
              maintaining competitive pricing for our global clientele.
            </p>

            <div className="my-12 rounded-lg bg-card p-10 shadow-soft border-l-4 border-primary">
              <h2 className="mb-6 text-3xl font-serif font-semibold text-foreground">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To provide exceptional equestrian and saddlery products that combine traditional
                craftsmanship with modern innovation, while building lasting partnerships with our
                clients through reliability, quality, and outstanding service.
              </p>
            </div>

            <h2 className="pt-8 text-3xl font-serif font-semibold text-foreground">
              What Sets Us Apart
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-2xl font-serif font-semibold text-foreground">
                  Quality Manufacturing
                </h3>
                <p>
                  Every product that leaves our facility undergoes rigorous quality control checks.
                  We use premium materials and employ skilled craftsmen who understand the nuances
                  of equestrian equipment manufacturing. Our commitment to quality has earned us
                  recognition from clients across multiple continents.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-serif font-semibold text-foreground">
                  Customization Expertise
                </h3>
                <p>
                  We understand that different markets have different requirements. Our team works
                  closely with clients to customize products according to their specifications,
                  whether it's adjusting dimensions, materials, colors, or adding specific features.
                  This flexibility has made us a preferred partner for businesses looking to
                  differentiate their offerings.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-serif font-semibold text-foreground">
                  Global Export Experience
                </h3>
                <p>
                  With extensive experience in international trade, we handle all aspects of the
                  export process efficiently. From documentation to logistics, our team ensures that
                  your orders reach you on time and in perfect condition. We have successfully
                  served clients in numerous countries and understand the complexities of
                  cross-border trade.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-serif font-semibold text-foreground">
                  Comprehensive Product Range
                </h3>
                <p>
                  Our extensive catalog covers 14 major product categories, encompassing everything
                  from saddles and bridles to horse care accessories and rider equipment. This
                  comprehensive range allows our clients to source multiple product types from a
                  single, reliable supplier, simplifying their procurement process.
                </p>
              </div>
            </div>

            <div className="my-12 rounded-lg bg-card p-10 shadow-soft border-l-4 border-primary">
              <h2 className="mb-6 text-3xl font-serif font-semibold text-foreground">
                Our Commitment to You
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg leading-relaxed">
                    Maintaining the highest quality standards in every product we manufacture
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg leading-relaxed">
                    Providing competitive pricing without compromising on quality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg leading-relaxed">
                    Ensuring timely delivery and reliable logistics support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg leading-relaxed">
                    Offering flexible customization options to meet your specific needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg leading-relaxed">
                    Building long-term partnerships based on trust and mutual success
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Whether you're a retailer looking to expand your product line, a distributor seeking
              reliable suppliers, or a business requiring custom-manufactured equestrian products,
              MeghRaj Exports is here to support your success. We invite you to explore our product
              range and experience the difference that quality and dedication can make.
            </p>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-primary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
