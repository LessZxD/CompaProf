'use client';

import React, { useState } from 'react';
import FaqItem from './faqitem';
import { faqItems } from './faq';

const Faq = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ</h1>

      {/* <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
        <div className="flex justify-between md:flex-row flex-col">
          <div className="md:mb-0 mb-8 md:text-left text-center">
            <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
            <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
              If you don\'t find your answer, Please contact us or Leave a Message, we\'ll be more than happy to assist you.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div> */}

      <div className="lg:w-8/12 w-full mx-auto">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isExpanded={!!expandedItems[index]}
            onToggle={() => toggleItem(index)}
          />
        ))}
        <hr className="w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
};

export default Faq;