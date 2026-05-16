# Time-Based Dialogue System

## Overview
The game now automatically detects the user's current time and displays contextual dialogue from Joe at the beginning of the game.

## How It Works

### Time Detection
The system uses the device's current local time to determine:
- **School Periods** (8:55 AM - 3:40 PM):
  - Advisory: 8:55 - 9:15 AM
  - 1st Period: 9:19 - 9:59 AM
  - 2nd Period: 10:03 - 10:43 AM
  - 3rd Period: 10:47 - 11:27 AM
  - 4th Period: 11:31 AM - 12:11 PM
  - 5th Period: 12:15 - 12:55 PM
  - 6th Period (Lunch): 12:59 - 1:29 PM
  - 7th Period: 1:33 - 2:13 PM
  - 8th Period: 2:17 - 2:57 PM
  - 9th Period: 3 - 3:40 PM

- **Passing Periods**: 4-minute gaps between classes
- **At Home**: Outside school hours (before 8:55 AM or after 3:40 PM)

### Dialogue Variations
Each time period has **3 different greeting variations** that Joe can say:
- Different variations play randomly each visit
- Greetings are contextual to the time of day
- Lines acknowledge what period they're in and react to them visiting

### Integration
1. Time detection logic is in `index.html` (inline JavaScript)
2. Greeting data is in `dialogue.json` under `"timeBasedGreeting"`
3. `runMainDialogue()` prepends the time-based greeting to the beginning of the main dialogue
4. The greeting displays BEFORE Joe's initial lines

## Examples

**During 1st Period:**
> "I know what period you're in. First period. That's bold of you to be here. Your teacher would not appreciate this."

**During Lunch (6th Period):**
> "Oh, you're on lunch right now. That's different. Most people don't visit me during their actual lunch time. Dedicated."

**At Home:**
> "Oh, you're home. School's finally over for you. Nice to see you when you've got actual free time."

**During Passing Period:**
> "You're between classes right now. The hallways must be chaos out there. Smart to escape into here for a moment."

## Files Modified
- **dialogue.json**: Added `timeBasedGreeting` object with all variations
- **index.html**: Added time detection logic and greeting system
- **timeDetection.js**: Standalone utility (for reference)

## Testing
Simply visit the game at different times of day to see different greetings from Joe!
