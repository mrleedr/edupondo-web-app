import {
  AcademicCapIcon,
  IdentificationIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Scholarship Search',
    description:
      'Search scholarships by interest and background, filter/sort by criteria, display matching results.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Application Process',
    description:
      'Guide users to apply for scholarships with deadlines & required docs. Track application status & send notifications.',
    href: '#',
    icon: IdentificationIcon,
  },
  {
    name: 'Feedback and Support',
    description:
      'Option to contact support and provide feedback on app and scholarship programs.',
    href: '#',
    icon: UserGroupIcon,
  },
];

const Search = () => {
  return (
    <div className="bg-eplightbg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-center text-base font-semibold uppercase leading-7 text-epblue lg:text-left">
                Search
              </span>
              Database of <span className="text-epblue">Scholarship</span>{' '}
              Programs
            </h2>
          </div>
          <div className="flex-1">
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:mt-0">
              Imagine the incredible opportunity of being able to attend school
              or college without having to worry about the financial burden of
              tuition fees
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="mx-auto flex flex-col rounded-xl bg-white p-6 py-8 shadow-md"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-eplightblue">
                    <feature.icon
                      className="h-12 w-12 text-epblue"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-epblue"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Search;
