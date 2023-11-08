import AuthService from "../services/authService";

async function fetchAuth(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response> {
  const accessToken = AuthService.getAccessToken();

  return fetch(input, {
    ...(init ?? {}),
    headers: {
      ...(init?.headers ?? {}),
      Authorization: `Bearer ${accessToken}`,
      ["ngrok-skip-browser-warning"]: "hello",
      // "Content-Type": "application/json",
    },
  });
}

export default fetchAuth;
