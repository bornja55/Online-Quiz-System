// src/app/config/auth.config.ts
const AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '';
const AUTH0_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '';

export { AUTH0_DOMAIN, AUTH0_CLIENT_ID };