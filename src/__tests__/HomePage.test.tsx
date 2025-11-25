import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import HomePage from '../pages/HomePage';

describe('HomePage upload area', () => {
  it('uploads a txt file and shows its content', async () => {
    render(<HomePage />);

    const uploadInput = screen.getByLabelText(/upload a pdf or txt file/i);
    const file = new File(['Hello from the test file'], 'example.txt', { type: 'text/plain' });

    await userEvent.upload(uploadInput, file, { applyAccept: false });

    expect(await screen.findByText(/Hello from the test file/i)).toBeInTheDocument();
    expect(screen.queryByText(/upload a document/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 1/i)).toBeInTheDocument();

    const scrollArea = screen.getByTestId('uploaded-text-viewer');
    expect(scrollArea).toHaveClass('overflow-y-auto');
    expect(scrollArea).toHaveClass('h-full');
    expect(scrollArea.parentElement).toHaveClass('h-80');
  });

  it('prevents unsupported file types', async () => {
    render(<HomePage />);

    const uploadInput = screen.getByLabelText(/upload a pdf or txt file/i);
    const file = new File(['binary'], 'image.png', { type: 'image/png' });

    await userEvent.upload(uploadInput, file, { applyAccept: false });
    expect(await screen.findByText(/only pdf and txt files are supported/i)).toBeInTheDocument();
    expect(screen.getByText(/upload a document/i)).toBeInTheDocument();
  });

  it('navigates between pdf pages when multiple pages exist', async () => {
    render(<HomePage />);

    const uploadInput = screen.getByLabelText(/upload a pdf or txt file/i);
    const pdfContent = `%PDF-1.4\n1 0 obj\n<< /Type /Page >>\nstream\nBT (First page text) ET\nendstream\nendobj\n2 0 obj\n<< /Type /Page >>\nstream\nBT (Second page text) ET\nendstream\nendobj\n`;
    const file = new File([pdfContent], 'document.pdf', { type: 'application/pdf' });

    await userEvent.upload(uploadInput, file);

    expect(await screen.findByText(/First page text/)).toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /next page/i }));
    expect(await screen.findByText(/Second page text/)).toBeInTheDocument();
    expect(screen.getByText(/Page 2 of 2/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /previous page/i }));
    expect(await screen.findByText(/First page text/)).toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
  });
});
