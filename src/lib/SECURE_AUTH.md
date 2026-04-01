Production Auth Integration Guide
================================

Overview
--------
This guide explains how the frontend expects the authentication backend to behave and recommends production-ready practices.

Backend contract (recommended)
- POST /authentication/login
  - Accepts JSON { email, password }
  - Response: 200 OK with JSON { user } if the server sets an httpOnly cookie containing a refresh token or server session.
  - Optional: return { token, user } for SPA-managed JWT access tokens (not recommended unless token stored in httpOnly cookie or kept in memory).
  - Set cookie flags: HttpOnly; Secure; SameSite=Strict or Lax depending on needs; Domain/path configured.

- GET /authentication/me
  - Returns 200 OK with JSON { user } when the request is authenticated either via a Bearer access token OR via httpOnly cookie session.
  - Must accept credentials: include from browser.

- POST /authentication/logout
  - Server clears the cookie/session and returns 200.

- POST /authentication/refresh (optional)
  - If using short-lived access tokens with refresh tokens, implement a refresh endpoint that rotates tokens and sets a new httpOnly cookie.

Frontend expectations
- The frontend prefers httpOnly cookie sessions: the server sets cookies during login and the browser sends them automatically with `credentials: 'include'`.
- If a JWT access token is used, prefer returning it but do NOT store it in localStorage. Instead keep it in-memory (the provided auth helpers store token in memory and only persist if explicitly enabled).
- All API calls that need auth should use `authFetch` from `src/lib/auth.js` which attaches Authorization header when a token exists and always sends credentials so cookie-based sessions work.

Security best-practices
- Use httpOnly Secure cookies for refresh tokens and short-lived JWTs for access tokens.
- Rotate refresh tokens and invalidate on logout.
- Protect sensitive endpoints with CSRF protections when using cookies (double submit cookie or SameSite Lax/Strict and anti-CSRF tokens).
- Avoid storing tokens in localStorage in production. Only enable persistent storage with full understanding of XSS risks.
- Set cookie flags: `HttpOnly; Secure; SameSite=Strict` (or `Lax` if you need cross-site GET navigation). Require HTTPS in production.

Frontend deployment notes
- Serve the frontend from the same top-level domain as the API when possible to simplify cookie handling.
- If using a different domain, configure CORS on the backend (`Access-Control-Allow-Credentials: true`) and use `credentials: 'include'` on fetch.

How to integrate
1. Implement the endpoints above on your backend.
2. Frontend login should POST to `/authentication/login` with `credentials: 'include'` and rely on the server to set httpOnly cookies.
3. After login, call `/authentication/me` to get the user profile. The `AuthProvider` already calls `/authentication/me` on startup.
4. For token-based backends that return `{ token }`, ensure the frontend `AuthProvider` uses `authService.setToken(token)` and keep token in-memory.

Troubleshooting
- If `AuthProvider` shows not authenticated after login, check whether the server set cookies and whether `Set-Cookie` is allowed in CORS responses. Backend must set `Access-Control-Allow-Credentials: true` and the front-end must call fetch with `credentials: 'include'`.

Next steps
- Implement `/authentication/refresh` and silent refresh flow to avoid user disruption.
- Add an auth error interceptor to redirect to `/login` and show friendly UI when session expires.
