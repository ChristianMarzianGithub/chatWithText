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

  it('renders navigation links and cookie banner', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(2);
    expect(screen.getAllByRole('switch', { name: /toggle dark mode/i })).toHaveLength(2);

    const acceptButton = screen.getByRole('button', { name: /accept cookies/i });
    expect(acceptButton).toBeInTheDocument();

    await userEvent.click(acceptButton);

    expect(screen.queryByRole('button', { name: /accept cookies/i })).not.toBeInTheDocument();
  });
});
