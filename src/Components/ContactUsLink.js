import React from 'react';

const ContactUsLink = () => {
  const emailAddress = 'planetpadhai@gmail.com';
  const subject = 'Your subject here';
  const body = 'Your message here';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink} className='text-white text-xl lg:text-3xl mt-1 md:mt-0 text-center '>
      Write to us
    </a>
  );
};

export default ContactUsLink;
