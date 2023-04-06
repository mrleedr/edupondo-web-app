const Platform = () => {
  return (
    <div className="overflow-hidden bg-eplightbg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold uppercase leading-8 tracking-tight text-epblue">
                Platform
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Find your path to{' '}
                <span className="text-epblue">scholarship</span> today
              </p>
              <div className="mt-8 overflow-hidden">
                <dl className="-mx-8 -mt-8 flex flex-wrap">
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-700">
                      Scholarship
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-epblue sm:text-3xl sm:tracking-tight">
                      500+
                    </dd>
                  </div>
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-700">
                      Students
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-epblue sm:text-3xl sm:tracking-tight">
                      1000+
                    </dd>
                  </div>
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-700">
                      Partner Group
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-epblue sm:text-3xl sm:tracking-tight">
                      100+
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our platform is designed to help students find and apply for
                scholarship programs by providing a comprehensive database of
                programs, personalized search and filtering options, detailed
                program information, application guidance, and support.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="/assets/images/platform-image.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none sm:w-[57rem]"
              width={650}
              height={610}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
