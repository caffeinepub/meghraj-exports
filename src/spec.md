# Specification

## Summary
**Goal:** Add a premium quick-view modal for product cards on subcategory pages and update the header/footer logo to the provided new asset.

**Planned changes:**
- On subcategory routes (`/products/:categorySlug/:subcategorySlug`), change product card click behavior to open a centered quick-view modal (no URL change, no navigation), while keeping the existing routing structure intact.
- Implement modal overlay and interaction behavior: semi-transparent dark backdrop with `backdrop-filter: blur(6px)`, disable background scroll while open, and allow closing via close button, outside click, and ESC key.
- Build the modal layout and responsive behavior: desktop/tablet two-column (image left, content right); mobile stacks (image top, content below). Include title (large serif), 3–5 line description, bullet feature list, and a “Send Inquiry” button.
- Apply the specified premium styling and animation: modal background `#141F33`, subtle 1px gold border, soft glow shadow, and fade+scale animation (0.3s ease, 0.95→1 and opacity 0→1; reverse on close). Style the “Send Inquiry” button with gold `#C8A24D`, dark navy text, and hover (slight lift + slight darkening).
- Wire “Send Inquiry” in the modal to navigate to `/contact` and prefill the category using the same mechanism as the current subcategory page CTA.
- Replace the site logo in both header and footer with `Screenshot_2026-02-15_at_3.36.48_AM-removebg-preview.png`, rendering the header logo at ~2× the current size while keeping header height unchanged, preserving aspect ratio, vertical centering, and spacing.

**User-visible outcome:** On subcategory product listings, clicking a product opens a premium quick-view modal with details and a “Send Inquiry” CTA (without leaving the page), and the site header/footer display the updated logo.
