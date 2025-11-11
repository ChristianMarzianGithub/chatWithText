import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders navigation links, auth buttons, and cookie banner', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(await screen.findAllByRole('link', { name: /contact/i })).toHaveLength(2);
    expect(await screen.findByRole('link', { name: /log in/i })).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: /register/i })).toBeInTheDocument();
    expect(screen.getAllByRole('switch', { name: /toggle dark mode/i })).toHaveLength(2);

    const acceptButton = screen.getByRole('button', { name: /accept cookies/i });
    expect(acceptButton).toBeInTheDocument();

    await userEvent.click(acceptButton);

    expect(screen.queryByRole('button', { name: /accept cookies/i })).not.toBeInTheDocument();
  });

  it('navigates to login and register pages from the header', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await userEvent.click(await screen.findByRole('link', { name: /log in/i }));
    expect(
      screen.getByRole('heading', { name: /log in to your account/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /stay logged in on this device/i })).toBeInTheDocument();

    await userEvent.click(await screen.findByRole('link', { name: /register/i }));
    expect(screen.getByRole('heading', { name: /create your account/i })).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /keep me logged in after registration/i })
    ).toBeInTheDocument();
  });
});
