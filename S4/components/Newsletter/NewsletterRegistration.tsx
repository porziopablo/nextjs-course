// vendors
import React, { useRef } from 'react';

// repositories
import { subscribeToNewsletter } from '@/repositories/newsletter';

// context
import useNotificationContext, {
  NotificationStatus,
} from '@/context/NotificationContext';

// styles
import classes from './NewsletterRegistration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const { showNotification } = useNotificationContext();

  async function registrationHandler(event: React.FormEvent) {
    try {
      event.preventDefault();

      showNotification({
        title: 'Signing up...',
        message: 'Registering for newsletter.',
        status: NotificationStatus.Pending,
      });

      const email = (emailInputRef.current?.value || '').trim();

      await subscribeToNewsletter({ email });

      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter.',
        status: NotificationStatus.Success,
      });

      emailInputRef.current!.value = '';
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Error!',
        message: 'Something went wrong. Please try again',
        status: NotificationStatus.Error,
      });
    }
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
