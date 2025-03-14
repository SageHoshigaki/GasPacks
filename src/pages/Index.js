import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionCta1 from '../components/cta/IndexSectionCta1';
import IndexSectionCta12 from '../components/cta/IndexSectionCta12';
import IndexSectionCta10 from '../components/cta/IndexSectionCta10';
import IndexSectionFeatures13 from '../components/features/IndexSectionFeatures13';
import IndexSectionAboutUs11 from '../components/about-us/IndexSectionAboutUs11';
import IndexSectionCta9 from '../components/cta/IndexSectionCta9';
import IndexSectionNewsletter5 from '../components/newsletter/IndexSectionNewsletter5';
import IndexSectionCta4 from '../components/cta/IndexSectionCta4';
import IndexSectionFooters6 from '../components/footers/IndexSectionFooters6';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionCta1 />
      <IndexSectionCta12 />
      <IndexSectionCta10 />
      <IndexSectionFeatures13 />
      <IndexSectionAboutUs11 />
      <IndexSectionCta9 />
      <IndexSectionNewsletter5 />
      <IndexSectionCta4 />
      <IndexSectionFooters6 />
    </React.Fragment>
  );
}

