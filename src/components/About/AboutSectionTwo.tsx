import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h1 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-4xl">
                Our after-sales Support
              </h1>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  On Going Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Regular updates, bug fixes, and performance enhancements to
                  keep your website, app, or system running smoothly.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Customer Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our support team is available to assist with any issues,
                  troubleshooting, or inquiries regarding your project.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Performance Monitoring
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Continuous monitoring and optimize speed, security, and
                  scalability to enhance your system’s performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
