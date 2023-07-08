// vendors
import React from 'react';

// types
import { User } from '@/types/entities/user';

interface UserProfilePageProps {
  user: User;
}

export default function UserProfilePage(props: UserProfilePageProps) {
  const { user } = props;

  return <h1>{user.name}</h1>;
}

export async function getServerSideProps() {
  const user = { name: 'John Doe' };

  return { props: { user } };
}
