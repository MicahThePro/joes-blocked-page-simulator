# Joe Feature Ideas

## Small / Quick
- **Joe blinks** — random slow blinks on the SVG (swap eye circles briefly), makes him feel alive
- **Bubble typewriter effect** — text appears character by character instead of all at once
- **Screen shake on angry popup** — quick CSS shake animation when the red wrong-answer screen appears
- **Joe's shadow** — faint ellipse under him that moves with him, adds depth
- **Footstep sounds** — subtle tap audio synced with footprint spawning during the exit walk
- **Cursor reaction** — Joe slowly turns to face whichever side the cursor is on
- **Endings sparkle** — small particle burst when a new ending is unlocked and added to the list

## Medium
- **Idle dialogue** — if the user stops clicking for ~45 seconds, Joe says something like "...still there?" or "you can just leave, you know"
- **Incognito ending** — Joe detects `navigator.storage` unavailability or `localStorage` failure and reacts ("it's colder in here") — dialogue path + ending "The Ghost Mode"
- **Midnight ending** — special dialogue branch that only unlocks if the visit is between midnight and 4am; Joe admits he wasn't expecting anyone
- **Gnome dialogue** — clicking directly on the gnome graphic opens a short weird conversation. The gnome says nothing. Joe translates anyway.
- **Skip button** — small unobtrusive "skip" link that jumps to the option buttons, for replay
- **Dialogue history** — a scrollable transcript of everything Joe has said this session, accessible from a tiny "📜" button

## Big
- **Session memory** — Joe remembers 2–3 choices from your last visit (stored in localStorage) and references them: "you said you get lonely too. that's still true isn't it."
- **The Song** — Joe hums or plays a short melody (Web Audio API tones) at some point in the "What would you wish for" branch — the bridge he can't finish
- **Visitor lore** — Joe occasionally drops anonymized stats about past visitors woven into dialogue: "someone stayed for four hours once. didn't say anything. just... sat here."
- **Animated entrance** — instead of Joe just being there, he walks in from the left on first load, stops behind the gnome
- **The Gnome Ending** — a full alternate route where the player keeps asking about the gnome until it takes over the conversation. Joe is noticeably uncomfortable.
- **New ending: The Early One** — triggered if the visit is before 7am on a school day (Mon–Fri), Joe says something about how this is a bad sign and he's worried about you
