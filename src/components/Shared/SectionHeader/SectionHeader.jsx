import React from 'react';

const SectionHeader = ({ 
  subtitle, 
  title, 
  description, 
  highlight, 
  center = true 
}) => {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} mb-12`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-3 mb-4 ${center ? 'justify-center' : 'justify-start'}`}>
          <div className="w-10 h-1 bg-[#F69074] dark:bg-[#F69074]/80 rounded-full" />
          <span className="text-[#02A2A2] dark:text-[#A0EBEB] font-semibold uppercase tracking-wider text-sm">
            {subtitle}
          </span>
          <div className="w-10 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
        {title.includes(highlight) ? title : (
          <>
            {title} <span className="text-[#F69074] dark:text-[#F69074]">{highlight}</span>
          </>
        )}
      </h2>
      
      {description && (
        <p className={`text-gray-600 dark:text-gray-400 ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;