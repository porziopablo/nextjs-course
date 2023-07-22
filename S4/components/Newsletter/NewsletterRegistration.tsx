// vendors
import React, { useRef } from 'react';

// repositories
import { subscribeToNewsletter } from '@/repositories/newsletter';

// styles
import classes from './NewsletterRegistration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  async function registrationHandler(event: React.FormEvent) {
    event.preventDefault();

    const email = (emailInputRef.current?.value || '').trim();

    await subscribeToNewsletter({ email });

    emailInputRef.current!.value = '';
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
