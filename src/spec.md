# Specification

## Summary
**Goal:** Deliver a shareable, single-page Valentine-themed chat UI that matches the provided HTML/CSS design and reproduces the specified button-driven chat behavior.

**Planned changes:**
- Build a full-viewport Valentine gradient background and centered ~360px rounded card with pink header, scrollable chat panel, and bottom action button area (wrapping with gaps).
- Implement chat message rendering with initial bot message on first load, plus three action buttons that append user messages immediately and bot replies after ~700ms.
- Style chat bubbles to match alignment and colors (bot left/light pink, user right/solid pink with white text), with ~75% max bubble width.
- Auto-scroll the chat panel to the latest message after each appended message.
- Ensure the app loads directly at the root with no sign-in or setup; keep text and theming consistent with the Valentine palette, and set the third button label to exactly “Driti Will you be my Valentine? 💌”.

**User-visible outcome:** Visiting the app link shows a cute Valentine chat card immediately; users can tap any of the three buttons to add messages and see timed bot replies in a scrollable chat that always scrolls to the newest message.
