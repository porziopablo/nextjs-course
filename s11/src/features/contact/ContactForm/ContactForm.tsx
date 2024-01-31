// vendors
import React, { useRef } from 'react';

// components
import { Input, TextArea } from '@/components/Input/Input';

// types
import { ContactRequest } from '@/types/requests/contact';

// styles
import classes from './ContactForm.module.css';

interface ContactFormProps {
  onSubmit: (data: ContactRequest) => void;
}

export default function ContactForm(props: ContactFormProps) {
  const { onSubmit } = props;

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailInputRef.current?.value?.trim();
    const name = nameInputRef.current?.value?.trim();
    const message = messageInputRef.current?.value?.trim();

    if (!email || !name || !message) return;

    onSubmit({ email, name, message });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.controls}>
          <Input
            label="Your email"
            id="email"
            type="email"
            required
            customRef={emailInputRef}
          />
          <Input
            label="Your name"
            id="name"
            type="text"
            required
            customRef={nameInputRef}
          />
        </div>
        <TextArea
          label="Your message"
          id="message"
          rows={5}
          required
          customRef={messageInputRef}
        />
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
