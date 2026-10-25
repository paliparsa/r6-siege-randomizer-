# Poster download hotfix — v1.24.0

## Problem
Some mobile Safari, Android WebView, and installed-PWA browsers ignore or mishandle `<a download>` links backed by Blob URLs, even when canvas rendering succeeds.

## Fix
- Open a preview tab synchronously in the user's click gesture on mobile/touch browsers, before asynchronous canvas export.
- Verify the generated PNG Blob is non-empty.
- Display the resulting PNG in the preview tab and provide clear long-press instructions when mobile browsers do not reliably download it.
- Retain Blob URLs longer for delayed downloads and use a data-URL fallback when Blob export fails.
- Keep the regular Blob download path on desktop browsers.

## Validation
Source-contract tests and inline-JavaScript syntax checks are included. Physical device/browser validation is still required.
