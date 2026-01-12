
import React from 'react';
import { Language } from '../utils/translations';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  // Amazon Logistics moved to dedicated page. 
  // This component is currently empty but preserved for future services sections.
  return null;
};
