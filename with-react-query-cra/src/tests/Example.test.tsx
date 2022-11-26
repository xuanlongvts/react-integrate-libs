import { screen } from '@testing-library/react';
import { rest } from 'msw';

import { renderWithClient } from './utils';
import { server } from '../setupTests';
import { Example } from '../Example';

describe('Query component Example', () => {
    test('1. Loading', () => {
        renderWithClient(<Example />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('2. Failure', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );
        renderWithClient(<Example />);

        expect(await screen.findByText(/an error has occurred/i)).toBeInTheDocument();
    });

    test('3. Success', async () => {
        renderWithClient(<Example />);
        expect(await screen.findByText(/mocked-react-query/i)).toBeInTheDocument();
    });
});
