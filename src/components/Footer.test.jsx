import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import Footer from './Footer';
/**
 * @vitest-environment jsdom
 */

describe('Footer component', () => {
  test('check link', () => {
    const { getByText } = render(<Footer />);
    const link = getByText('Home');
    expect(link).toBeTruthy();
  });
});
