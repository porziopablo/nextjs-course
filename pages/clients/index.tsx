import React from 'react';
import Link from 'next/link';

const MOCKED_CLIENTS = [
  { id: 'max', name: 'Maximilian' },
  { id: 'manu', name: 'Manuel' },
  { id: 'julie', name: 'Julie' },
];

function ClientsPage() {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {MOCKED_CLIENTS.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
