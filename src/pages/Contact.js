import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactSectionCta1 from '../components/cta/ContactSectionCta1';
import ContactSectionContact3 from '../components/contact/ContactSectionContact3';
import ContactSectionContact2 from '../components/contact/ContactSectionContact2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contact() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContactSectionCta1 />
      <ContactSectionContact3 />
      <ContactSectionContact2 />
    </React.Fragment>
  );
}

