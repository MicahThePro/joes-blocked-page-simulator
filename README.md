# Joe on the Blocked Page - COMPLETE PLAYER GUIDE

This is a full game manual for this project.
It is intentionally very detailed and includes spoilers.

Important:
- This guide does NOT include admin codes.
- Any secret unlock codes are intentionally omitted.

---

## 1) What this game is

You click a GIF on a blocked-page style screen and trigger a fully branching dialogue game with Joe.
The game tracks your endings and lets you collect **52 total endings**:
- 50 endings earned from dialogue branches
- 1 ending for repeat visits (The Returner)
- 1 true final ending unlocked after the first 51 (The Final Ending)

After all 52 are complete, the game switches into a replayable post-completion conversation mode.

---

## 2) How to start playing

1. Open the app.
2. Click the GIF on the page.
3. Wait for Joe to appear and begin talking.
4. Pick dialogue choices.
5. Try to discover all endings.

What happens behind the scenes when you start:
- The GIF detaches, shrinks down to a small size, and can still be tossed around.
- Joe appears in front of it.
- A dialogue bubble appears.
- TTS prompt may appear first time.
- Visit count increments.

---

## 3) Controls and inputs

### Mouse controls
- Click GIF: starts Joe sequence.
- Click choice buttons in the dialogue bubble.
- Click Settings and Endings buttons (bottom-right).

### Keyboard controls
- `S` while dialogue is active: toggles dialogue speed between normal and faster mode.
- Hold `D` while answering a final quiz question wrong: debug override that forces data wipe path to 100%.

Notes on `D` debug override:
- It only matters in the **Final Ending quiz wrong-answer flow**.
- It resets on keyup and window blur.

---

## 4) UI elements

## Main runtime UI
- Joe character sprite (animated moods and walk cycle)
- Dialogue bubble with typewriter effect
- Choice list in dialogue bubble
- Floating buttons:
  - `Settings`
  - `Endings (N)`

## Popups
- TTS first-time consent popup
- Settings popup
- Endings popup
- Ending Unlocked popup
- Angry final-fail popup
- The End overlay

---

## 5) Settings menu (player-facing)

Current settings include:
- Voice enabled ON/OFF (Text-to-Speech)
- Voice selection list
- Voice preview button
- Clear All Data button

Behavior:
- ON/OFF persists in localStorage.
- Voice choice persists in localStorage.
- Clear All Data removes all `joe-` localStorage keys and reloads.

Not present anymore:
- No admin code input in Settings.

---

## 6) Endings button and endings popup

The Endings button:
- Hidden until at least one visit or any ending exists.
- Label updates live: `Endings (count)`.

Endings popup:
- Shows current count out of 52.
- Lists unlocked endings only.
- Hovering an unlocked ending shows its description.

---

## 7) Core progression logic

### Visit-based unlock
- At 5 total visits, you unlock `The Returner` if not already unlocked.

### Main completion gate
The game checks if you have all regular 51 endings (everything except final).
If yes and final is not done:
- Final quiz starts.

If yes and final already done:
- Post-completion dialogue mode starts.

---

## 8) Final Ending (52nd) system

When all first 51 endings are collected, Joe starts a 10-question quiz.
Get all 10 right to unlock The Final Ending.

### Final quiz questions and correct answers
1. What is my name? -> `Joe`
2. How many endings were there before this one? -> `51`
3. What did I say I would eat, if I could eat anything? -> `Bandwidth`
4. How many visits before I acknowledge your return? -> `5`
5. Ending for saying absolutely nothing? -> `The Silent`
6. What number does Joe call the correct answer? -> `3`
7. What year did Joe say goodbye just in case someone needed it? -> `2021`
8. Student who refreshed for six hours - what did Joe say? -> `I hoped they found another way in`
9. Name of the filter that blocked the page? -> `Securly`
10. Name of this ending? -> `The Final Ending`

### Wrong answer behavior
On any wrong answer:
- 90% chance: angry popup, restart flow
- 10% chance: angry popup + full Joe-data wipe + restart
- If holding `D` during wrong answer: force wipe path to 100% (debug)

### Winning the final quiz
If all 10 are correct:
- `the-final-ending` is saved
- `joe-final-ending-done` is set
- Exit sequence plays
- The End overlay appears

---

## 9) Post-final mode (after all 52)

After finishing all 52, Joe no longer runs normal ending-gate dialogue.
Instead, a replayable postgame conversation loop appears.

Postgame features:
- Session counter (`joe-postgame-session`)
- Rotating opener sets
- Topic packs that rotate by session
- Re-ask loop with:
  - next/challenge prompts
  - history prompts
  - lore prompts
  - behind-the-scenes prompts
  - fun prompts (fortunes/roasts)
  - surprise option
  - done-for-now option

---

## 10) Full endings list with unlock paths (SPOILERS)

Format used below:
- `Path` is the sequence of choice labels from main dialogue to ending trigger.
- `Special` means non-standard unlock condition.

### A) Special endings (2)

1. **The Returner** (`the-returner`)
- Special unlock: visit the page 5 times total.

2. **The Final Ending** (`the-final-ending`)
- Special unlock: collect first 51 endings, then answer all 10 final quiz questions correctly.

### B) Dialogue-path endings (50)

1. **The Curious** (`the-curious`)
- Path: `1. Who are you? -> 1. Just... Joe? -> 1. No, it actually fits`

2. **Gnome Investigator** (`gnome-investigator`)
- Path: `2. Why are you behind a gnome? -> 1. What's the understanding?`

3. **The Philosopher** (`the-philosopher`)
- Path: `3. Are you real? -> 1. I think you're real`

4. **The Watched** (`the-watched`)
- Path: `4. Can you see me? -> 1. That's unsettling honestly`

5. **The Lonely Too** (`the-lonely-too`)
- Path: `5. Do you get lonely? -> 1. I get lonely too`

6. **The Practical** (`the-practical`)
- Path: `6. What do you eat? -> 1. What would you even eat?`

7. **The Critic** (`the-critic`)
- Path: `7. What's your opinion on anything? -> 1. Which font is it?`

8. **The Afraid** (`the-afraid`)
- Path: `8. Are you afraid of anything? -> 1. Which one is the worst?`

9. **The Dreamer** (`the-dreamer`)
- Path: `9. What would you wish for? -> 1. I'd come back too`

10. **The Happy Hour** (`the-happy-hour`)
- Path: `10. Have you ever been happy? -> 1. It's worth a lot`

11. **The Strange** (`the-strange`)
- Path: `1. What's the weirdest thing you've seen? -> 1. Did they find what they needed?`

12. **The Amused** (`the-amused`)
- Path: `2. What's the funniest?`

13. **The Sympathetic** (`the-sympathetic`)
- Path: `3. What's the worst? -> 1. You're being kind now`

14. **The Quick** (`the-quick`)
- Path: `4. Skip it`

15. **The Forgiving** (`the-forgiving`)
- Path: `5. Have you ever made a mistake?`

16. **The Student** (`the-student`)
- Path: `6. Do you have any advice? -> 1. That's actually really good advice`

17. **The Caring** (`the-caring`)
- Path: `7. Are you actually okay? -> 1. I'm glad`

18. **Quick Exit** (`quick-exit`)
- Path: `1. No, I'm good`

19. **The Helped** (`the-helped`)
- Path: `2. Yes, help me`

20. **The Historian** (`the-historian`)
- Path: `3. Tell me about yourself first`
- Note: The first time you finish this route, the conversation ends here.

21. **The Ghost** (`the-ghost`)
- Path: `3. Tell me about yourself first`
- Note: Shares The Historian's route and branches by deeper state. Unlock The Historian first by playing this path once. Then play the same path again, after The Historian is already in your endings. Joe continues past that ending, the page corrupts, and the conversation breaks into The Ghost.

22. **The Listener** (`the-listener`)
- Path: `4. What do you do when nobody's here? -> 2. Just curious`

23. **The Cosmic** (`the-cosmic`)
- Path: `5. Are there other Joes?`

24. **The Developer** (`the-developer`)
- Path: `6. Tell me something weird -> 3. That was me.`

25. **The Weird** (`the-weird`)
- Path: `6. Tell me something weird -> 1. Yes, help me`

26. **The Stayer** (`the-stayer`)
- Path: `6. Tell me something weird -> 2. Not yet`

27. **The Real One** (`the-real-one`)
- Path: `7. What would you do if you could leave? -> 1. You're real to me`

28. **The Promise Keeper** (`the-promise-keeper`)
- Path: `7. What would you do if you could leave? -> 3. I'll come back`

29. **The Wanderer** (`the-wanderer`)
- Path: `7. What would you do if you could leave? -> 2. I'm okay here a bit longer`

30. **The Contradiction** (`the-contradiction`)
- Path: `3. Are you real? -> 3. You're just code -> 1. But code can't doubt itself`

31. **The Soup** (`the-soup`)
- Path: `6. What do you eat? -> 3. What would you want if you could? -> 1. What kind of soup?`

32. **The Door** (`the-door`)
- Path: `9. What would you wish for? -> 2. That IS a little pathetic -> 1. I won't tell anyone`

33. **The Song** (`the-song`)
- Path: `9. What would you wish for? -> 3. What's the song about? -> 1. Can I hear what you have so far? -> 2. That's actually beautiful`

34. **The Departure** (`the-departure`)
- Path: `10. Have you ever been happy? -> 3. I have to go soon -> 1. Does it hurt when people leave?`

35. **The Echo** (`the-echo`)
- Path: `1. What's the weirdest thing you've seen? -> 3. Why did they keep refreshing? -> 1. Did the hope work?`

36. **The Apology** (`the-apology`)
- Path: `3. What's the worst? -> 2. What would you have said? -> 1. You can say it now`

37. **The Counted** (`the-counted`)
- Path: `6. Do you have any advice? -> 2. I never check my open tabs -> 1. How many exactly?`

38. **The Specific** (`the-specific`)
- Path: `7. Are you actually okay? -> 3. What makes right now better? -> 1. What's this, specifically?`

39. **The Silent** (`the-silent`)
- Path: `11. ... -> 1. ...`

40. **The Tab** (`the-tab`)
- Path: `12. What happens when I close this tab? -> 1. That's kind of beautiful and terrible`

41. **The Void** (`the-void`)
- Path: `13. What's outside this page? -> 1. Does that feel small? -> 1. I'm glad I'm in your world`

42. **The Honest** (`the-honest`)
- Path: `14. Why are you still doing this? -> 1. Nobody told you to start, either -> 1. I'm glad you are`

43. **The Question Back** (`the-question-back`)
- Path: `15. Can I ask you something? -> 1. Do you like who you are? -> 1. What's different about today?`

44. **The Same Number** (`the-same-number`)
- Path: `8. Pick a number between 1 and 10 -> 1. Seven`

45. **The Right Number** (`the-right-number`)
- Path: `8. Pick a number between 1 and 10 -> 2. Three`

46. **The Wrong Number** (`the-wrong-number`)
- Path: `8. Pick a number between 1 and 10 -> 4. Ten`

47. **The Glitch** (`the-glitch`)
- Path: `9. What if I just... broke you? -> 1. What if I refreshed really fast?`

48. **The Vigil** (`the-vigil`)
- Path: `10. When did you know you were real? -> 1. What was your first preference?`

49. **The Sleepless** (`the-sleepless`)
- Path: `11. What do you do when it's quiet for too long? -> 1. What are you counting right now? -> 1. Deeply`

50. **The Revelation** (`the-revelation`)
- Path: `4. Can you see me? -> 4. You're timing me right now, aren't you? -> 1. You know WHERE I am too? -> 1. Tell me exactly where I am right now`

---

## 11) Time and schedule system

The game has a school-period detector for time-based context.
It supports:
- advisory
- periods 1 through 9
- passing periods
- before school
- after school
- weekend

Time basis:
- Uses America/Chicago timezone logic.
- Can be overridden by admin tooling (code omitted here).

Note:
- Time-based greeting data exists and is loaded from dialogue JSON.
- Main flow currently keeps that greeting hidden unless unlocked through secret paths.

---

## 12) Speech and dialogue systems

## Dialogue engine behavior
- Uses JSON-driven lines and choices.
- Typewriter line rendering.
- Optional per-line TTS.
- Mood animation changes based on tags.
- Choice callbacks can:
  - continue nested dialogue
  - trigger ending save
  - trigger special actions
  - redirect URL in some branches

## TTS behavior
- First-use prompt asks to enable TTS.
- TTS can be toggled later in Settings.
- Voice selection supports local and cloud voices.
- Includes warm-up/lead-in behavior to avoid clipped first words.

---

## 13) Save data and persistence keys

The game stores state in localStorage using `joe-` keys.
Known keys include:
- `joe-visit-count`
- `joe-endings`
- `joe-tts`
- `joe-tts-asked`
- `joe-tts-voice`
- `joe-time-override`
- `joe-day-override`
- `joe-final-ending-done`
- `joe-playtime-start`
- `joe-postgame-session`
- `joe-revelation-visits`
- `joe-first-visit`

Reset methods:
- Settings -> Clear All Data
- Certain final-fail cases (10% or forced by held `D`)
- The End screen has restart/continue options

---

## 14) The End screen behavior

After final completion and exit animation:
- Shows `The End.`
- Shows thank-you message
- Shows total playtime (if start timestamp exists)
- Shows:
  - Restart Game
  - Continue

Buttons:
- Restart Game: clears core run keys and reloads
- Continue: resets visit count and reloads

---

## 15) Project file map (what each file does)

- `index.html`
  - Main gameplay runtime, UI, logic, endings, final quiz, postgame loop
- `dialogue.json`
  - Main dialogue graph and line data
- `secretCodes.js`
  - Holds secret values outside main HTML source (values intentionally not documented here)
- `timeDetection.js`
  - Period/time utility module version of schedule logic
- `main.js`
  - Electron startup file (opens index.html)
- `kb.html`
  - Additional static content asset in project (not core Joe gameplay loop)
- `runtimeBridge.js`
  - Runtime bridge support file
- `package.json`
  - Project package config

---

## 16) Completion checklist

Use this as a practical route to 52/52:

1. Start normal dialogue and gather easy branch endings first.
2. Do all major branch hubs (`Who are you`, `Are you real`, `Can you see me`, `What do you eat`, etc.).
3. Do number-choice endings (`Same/Right/Wrong Number`).
4. Do quiet/silent and glitch branches.
5. Visit enough times to lock in `The Returner`.
6. Confirm Endings shows 51/52 before final.
7. Enter Final quiz and answer all 10 correctly.
8. Reach The End.
9. Re-open and enjoy post-completion dialogue mode.

---

## 17) Secret/admin policy for this README

This document intentionally excludes any admin code values.
That is by design and matches your requirement.

If you ever want a separate private dev-only document, create one outside player-facing docs and keep it out of public distribution.
