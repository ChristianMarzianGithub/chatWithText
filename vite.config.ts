import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const defaultAllowedHosts = [
  'frontend-template-456699820088.europe-west4.run.app',
  'localhost',
  '127.0.0.1'
];

const envAllowedHosts = process.env.VITE_PREVIEW_ALLOWED_HOSTS
  ?.split(',')
  .map((host) => host.trim())
  .filter((host) => host.length > 0);

const allowedHosts = envAllowedHosts?.length
  ? Array.from(new Set([...defaultAllowedHosts, ...envAllowedHosts]))
  : defaultAllowedHosts;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    allowedHosts
  }
});
