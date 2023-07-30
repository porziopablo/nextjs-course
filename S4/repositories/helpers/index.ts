/**
 * Throws an error if the response status is not ok, otherwise returns the response body as JSON.
 * @param response - The response object to check.
 * @returns The response body as JSON if the response status is ok.
 * @throws An error with the response error message or a default message if the response status is not ok.
 */
export async function throwErrorIfNotOk(response: Response) {
  if (response.ok) return response.json();

  return response.json().then((error) => {
    throw new Error(error?.message || 'Something went wrong.');
  });
}
