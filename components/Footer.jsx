import React from "react";
const SECTION_WIDTH_LG = "lg:w-1/3";
const SECTION_WIDTH_MD = "md:w-1/2";
const SECTION_WIDTH_FULL = "w-full";
const TEXT_GRAY_100 = "text-gray-100";
const HOVER_TEXT_GREEN_600 = "hover:text-green-600";
const CURSOR_POINTER = "cursor-pointer";
const NAV_ITEMS = [
  { title: "Primary Care" },
  { title: "Specialized Treatments" },
  { title: "Wellness Programs" },
  { title: "Emergency Care" },
];
const TEAM_NAV_ITEMS = [
  { title: "Medical Professionals" },
  { title: "Support Staff" },
  { title: "Administrative Team" },
  { title: "Career Opportunities" },
];

const FooterSection = ({ title, items }) => (
  <div class={`${SECTION_WIDTH_LG} ${SECTION_WIDTH_MD} ${SECTION_WIDTH_FULL} px-4`}>
    <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
      {title}
    </h2>
    <nav class="list-none mb-10">
      {items.map((item) => (
        <li key={item.title}>
          <a class={`${TEXT_GRAY_100} ${CURSOR_POINTER} ${HOVER_TEXT_GREEN_600}`}>
            {item.title}
          </a>
        </li>
      ))}
    </nav>
  </div>
);

const Footer = () => {
  return (
    <>
      <footer class={`${TEXT_GRAY_100} body-font bg-slate-700`}>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <FooterSection title="HEALTHCARE SERVICES" items={NAV_ITEMS} />
            <FooterSection title="OUR TEAM" items={TEAM_NAV_ITEMS} />
            <FooterSection title="OUR TEAM" items={TEAM_NAV_ITEMS} />
          </div>
        </div>
        <div class="border-t border-gray-200">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  class="leading-7 text-sm ${TEXT_GRAY_100}"
                >
                  Subscribe for Health Tips
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover: text-white"
                />
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
              <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                Stay informed about your health with our newsletter.
                <br class="lg:block hidden" />
                Your well-being is our priority.
              </p>
            </div>

            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2023 HealthHub —
              <a
                href="https://twitter.com/HealthHub"
                class="${TEXT_GRAY_100} ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @HealthHub
              </a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Transforming lives through innovation in healthcare. Your
              wellness, our priority.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
