import { AcademicCapIcon } from '@heroicons/react/24/outline';
import React from 'react';

const types = [
  {
    name: 'Government',
    description: 'Government Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Private Institution',
    description: 'Private Institution Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'University-based',
    description: 'University-based Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Non-profit Organization',
    description: 'Non-profit Organization Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Corporate Organization',
    description: 'Corporate Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Foundation',
    description: 'Foundation Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Local Government',
    description: 'Local Government Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'International',
    description: 'International Scholarships',
    href: '#',
    icon: AcademicCapIcon,
  },
];

const Types = () => {
  return (
    <div className="bg-eplightblue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-center text-base font-semibold uppercase leading-7 text-epblue">
            Types
          </span>
          Available <span className="text-epblue">Scholarships</span>
        </h2>

        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {types.map((type) => (
              <div
                key={type.name}
                className="mx-auto w-full rounded-xl bg-white p-6 py-8 text-center shadow-md"
              >
                <dt className="mx-auto flex flex-col items-center justify-center text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-eplightblue">
                    <type.icon
                      className="h-12 w-12 text-epblue"
                      aria-hidden="true"
                    />
                  </div>
                  {type.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{type.description}</p>
                  <p className="mt-6">
                    <a
                      href={type.href}
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

export default Types;
