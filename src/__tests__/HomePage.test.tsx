import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import HomePage from '../pages/HomePage';

describe('HomePage upload area', () => {
  it('uploads a txt file and shows its content', async () => {
    render(<HomePage />);

    const uploadInput = screen.getByLabelText(/upload \.txt file/i);
    const file = new File(['Hello from the test file'], 'example.txt', { type: 'text/plain' });

    await userEvent.upload(uploadInput, file);

    expect(await screen.findByText(/Hello from the test file/i)).toBeInTheDocument();
    expect(screen.queryByText(/upload a text document/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Plain text preview/i)).toBeInTheDocument();
  });

  it('prevents unsupported file types', async () => {
    render(<HomePage />);

    const uploadInput = screen.getByLabelText(/upload \.txt file/i);
    const file = new File(['binary'], 'document.pdf', { type: 'application/pdf' });

    await userEvent.upload(uploadInput, file);

    expect(await screen.findByText(/only txt files are supported/i)).toBeInTheDocument();
    expect(screen.getByText(/upload a text document/i)).toBeInTheDocument();
  });

  it('displays the txt-only guidance', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/only plain text files \(\.txt\) are supported for upload and preview/i),
    ).toBeInTheDocument();
  });
});
