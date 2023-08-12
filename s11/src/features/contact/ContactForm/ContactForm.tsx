// vendors
import React from 'react';

// components
import { Input, TextArea } from '@/components/Input/Input';

// styles
import classes from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <Input label="Your email" id="email" type="email" required />
          <Input label="Your name" id="name" type="text" required />
        </div>
        <TextArea label="Your message" id="message" rows={5} required />
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
