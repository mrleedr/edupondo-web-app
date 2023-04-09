const Guide = () => {
  return (
    <div className="overflow-hidden bg-eplightbg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="order-first flex items-start justify-end lg:order-last">
            <img
              src="/assets/images/guide-image.png"
              alt="guide image"
              className="mx-auto"
              width={595}
              height={380}
            />
          </div>
          <div className="lg:mr-auto lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-left">
                <span className="block text-center text-base font-semibold uppercase leading-7 text-epblue lg:text-left">
                  Guide Tips
                </span>
                For Those Of You Who Pursue{' '}
                <span className="text-epblue">Scholarship</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you are considering applying for this scholarship, please
                take a look at our guides and tips to increase your chances of
                success.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6 sm:flex-row lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-epblue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-epblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-epblue"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="mt-4 text-sm font-semibold leading-6 text-gray-900 underline sm:mt-0"
                >
                  Read more guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
