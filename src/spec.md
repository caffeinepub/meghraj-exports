# Specification

## Summary
**Goal:** Add backend support for inquiry submissions that persists across canister upgrades and matches the existing frontend integration.

**Planned changes:**
- Update the Motoko backend actor (`backend/main.mo`) to store submitted inquiries in stable state so they survive canister upgrades.
- Add backend-side validation for required inquiry fields (name, country, email, category, message) with clear English error messages when missing.
- Ensure the backend method used by the frontend (`submitInquiry`) remains signature-compatible with `frontend/src/hooks/useQueries.ts`, and add a query method (e.g., `getAllInquiries`) to retrieve stored inquiries.

**User-visible outcome:** Users can submit inquiries from the UI as before, and those inquiries remain stored after backend upgrades and can be retrieved via a backend query API.
