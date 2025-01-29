'use client';

import { FaqItemType } from './faq';

interface FaqItemProps extends FaqItemType {
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isExpanded, onToggle, index }: FaqItemProps) => {
  return (
    <div>
      <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
      <div className="w-full md:px-6">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
              <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                {index + 1}.
              </span>
              {question}
            </p>
          </div>
          <button
            aria-label="toggle"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            onClick={onToggle}
          >
            <svg
              className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 7L10 12L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={`mt-6 w-full transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}>
          <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;