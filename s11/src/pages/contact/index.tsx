// vendors
import React from 'react';

// components
import ContactForm from '@/features/contact/ContactForm/ContactForm';

// repositories
import { sendContact } from '@/repositories/contact.repository';

export default function ContactPage() {
  return <ContactForm onSubmit={sendContact} />;
}
