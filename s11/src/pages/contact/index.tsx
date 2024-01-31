// vendors
import React, { useState } from 'react';

// components
import ContactForm from '@/features/contact/ContactForm/ContactForm';

// repositories
import { sendContact } from '@/repositories/contact.repository';

// types
import { ContactRequest } from '@/types/requests/contact';

// hooks
import useNotificationContext, {
  NotificationStatus,
} from '@/context/NotificationContext';

export default function ContactPage() {
  const { showNotification } = useNotificationContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: ContactRequest) {
    try {
      setIsSubmitting(true);
      showNotification({
        title: 'Sending comment...',
        message: 'Please await',
        status: NotificationStatus.Pending,
      });
      await sendContact(data);
      showNotification({
        title: 'Success!',
        message: 'Comment was sent successfully',
        status: NotificationStatus.Success,
      });
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Error!',
        message: 'Something went wrong',
        status: NotificationStatus.Error,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} />;
}
