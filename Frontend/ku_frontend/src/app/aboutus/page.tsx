import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg mx-auto mt-4">
        <div className="border-b border-neutral-200 pb-6 mb-6 mt-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            <span className="nepal">Nepal</span>
            <span className="ease">EASE</span>
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to NepalEASE, where we&apos;re on a mission to make the
            wonders of Nepal accessible to all travelers. Our primary focus is
            to create an inclusive environment for accessible tourism, ensuring
            that everyone, including those with unique needs, can explore
            Nepal&apos;s beauty. We offer a range of services, including the
            expertise of our local guides, caregivers, and helpers, to ensure
            your journey is both enriching and comfortable. Whether you&apos;re
            seeking adventure or a more relaxed exploration, NepalEASE is your
            trusted companion. Our team, led by experienced founders with a deep
            passion for travel and accessibility, is committed to making Nepal a
            welcoming and unforgettable destination for all. Join us on this
            journey, and let&apos;s explore Nepal together with confidence and
            inclusivity at the core of our adventure.
          </p>
          {/* FAQ Title */}
          <div className="flex justify-center items-center mt-8">
            <h2 className="font-bold text-5xl tracking-tight">FAQ</h2>
          </div>
          {/* FAQ Section */}
          <div className="grid divide-y divide-neutral-200 max-w-xl mt-5">
            {/* FAQ Items */}
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is NepalEASE?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  NepalEASE is a platform dedicated to making Nepal wonders
                  accessible to all travelers, including those with unique
                  needs. We provide a range of services to create an inclusive
                  environment for accessible tourism in Nepal.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How can NepalEASE help me during my trip to Nepal?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offer the expertise of local guides, caregivers, and
                  helpers to ensure a comfortable and enriching journey. Whether
                  you seek adventure or a relaxed exploration, NepalEASE is your
                  trusted companion.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What payment options do you offer?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  NepalEASE provides various billing options, including monthly
                  and annual subscription plans, as well as pay-as-you-go
                  pricing for specific services. Payments are typically made
                  through secure online methods.
                </p>
              </details>
            </div>
            {/* Add more FAQ items here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
