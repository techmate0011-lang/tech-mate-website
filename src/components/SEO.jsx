import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

// Sets a unique title + description per page (helps Google show the right snippet)
const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title
      ? `${title} | ${siteConfig.companyName}`
      : `${siteConfig.companyName} | Independent Digital Innovation Studio`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
  return null;
};

export default SEO;
