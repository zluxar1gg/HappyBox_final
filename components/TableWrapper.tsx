import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Language } from '../utils/translations';

interface TableWrapperProps {
  children: React.ReactNode;
  language: Language;
}

export const TableWrapper: React.FC<TableWrapperProps> = ({ children, language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1); // avoid division by 0

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
        setCanScroll(scrollWidth > clientWidth);
        setCurrentScroll(scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    // Slight delay to handle fonts/images loading
    const timeout = setTimeout(checkScroll, 500);

    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timeout);
    };
  }, [children]);

  const handleScroll = () => {
    if (containerRef.current) {
      setCurrentScroll(containerRef.current.scrollLeft);
    }
  };

  const isScrolledToRight = currentScroll >= maxScroll - 5; // 5px tolerance

  return (
    <div className="w-full relative mb-6">
      {/* Scroll Hint (Mobile Only) */}
      {canScroll && (
        <div className="md:hidden flex items-center justify-end gap-2 text-xs text-brand-blue font-medium mb-2 animate-pulse">
          <ArrowLeftRight size={14} />
          {language === 'en' ? 'Swipe to view table' : 'Свайпните для просмотра'}
        </div>
      )}
      
      <div className="relative rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-x-auto w-full"
        >
          {children}
        </div>
        
        {/* Shadow indicator on the right edge */}
        {canScroll && !isScrolledToRight && (
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
        )}
      </div>
    </div>
  );
};
