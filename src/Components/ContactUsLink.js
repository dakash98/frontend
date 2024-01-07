import React from 'react';

const ContactUsLink = () => {
  const emailAddress = 'planetpadhai@gmail.com';
  const subject = 'Your subject here';
  const body = 'Your message here';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink} className='text-white text-xl md:text-2xl lg:text-3xl mt-2 md:mt-0 text-center hover:text-cyan-400'>
      Write to us
    </a>
  );
};

export default ContactUsLink;
