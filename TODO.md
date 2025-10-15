# TODO: Fix Problems in App.tsx and Dependencies

## Tasks
- [x] Edit src/App.tsx: Import KeyboardEvent, clean up unused imports, remove commented code, fix spacing.
- [x] Edit src/components/Sidebar.tsx: Move setUsername into useEffect to prevent infinite re-renders.
- [x] Edit src/components/EpisodeList.tsx: Import Episode interface, fix loading logic, add error state.
- [x] Edit src/components/Card.tsx: Destructure id prop.
- [x] Edit src/Contexts/UserContext.tsx: Fix typo in error message.
- [x] Run pnpm lint to verify no errors.
- [ ] Run pnpm dev and test with browser_action: Launch at http://localhost:5173, check for re-renders, theme/playback, EpisodeList fetch, no console errors.
