'use client';

import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const faqs = [
    {
      question: 'What is this?',
      answer:
        "This is the thing every band and orchestra director will want, you just can't tell yet."
    },
    {
      question: 'Why did you make it?',
      answer: "Because shut up that's why."
    }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Home
      </h1>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;
