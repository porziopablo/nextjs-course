// vendors
import React, { useState } from 'react';

// repositories
import { subscribeToNewsletter } from '@/repositories/newsletter';

// styles
import classes from './NewsletterRegistration.module.css';

function NewsletterRegistration() {
  const [email, setEmail] = useState('');

  function registrationHandler(event: React.FormEvent) {
    event.preventDefault();
    subscribeToNewsletter({ email });
  }

  const isValid = email.includes('@');

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <button disabled={!isValid}>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
