import React from 'react';
import { useRouter } from 'next/router';

function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: '/clients/[clientId]/[clientProjectId]',
      query: { clientId: router.query.clientId, clientProjectId: 'projectA' },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
