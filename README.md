# Reproduction for [Issue Comment](https://github.com/remix-run/remix/issues/7248#issuecomment-1693699510)

The issue is already reproduced in the repository, if you simply run the server
and then edit any code in 'app/routes/\_index.tsx', you should see that HMR doesn't
work properly.

Simply going into 'app/root.tsx' and commenting out or removing the OverlayProvider
component will fix the issue.

## Development

- Initial setup:

  ```sh
  yarn install
  ```

- Start dev server:

  ```sh
    yarn dev
  ```

This starts your app in development mode, rebuilding assets on file changes.
