# Mind Garden

A privacy-focused, zero-dependency progressive web application (PWA) designed for personal habit tracking, mindfulness, focus, and physical activity logging. The entire application runs client-side from a single HTML file using vanilla JavaScript and `localStorage`.

---

## Features

### 1. Habit Garden & Health Counters
* **Dynamic Emoji Garden:** Completed habits sprout plants and flowers. Visual characteristics (plant species, scale, tilt, sway delay) derive deterministically from habit names and streak counts.
* **Intake Trackers:** Quick tally counters with rolling 5-day sparkline charts:
  * **Water:** 250 ml increments.
  * **Caffeine:** 150 mg increments.
  * **Alcohol:** Standard UK units.
* **Interactive Calendar:** Monthly view highlighting habit consistency and overall daily completion rates.

### 2. Exercise Logging
* Track activity by date, type (`Run`, `Swim`, `Cycle`), distance, duration, and perceived exertion (`Easy`, `Moderate`, `Hard`, `Max`).
* Chronological session history with deletion controls.
* Curated daily rotating athletic and discipline quotes.

### 3. Mindfulness & Reflection
* **Daily Stoic Quotes:** Day-of-the-year rotation featuring passages from Epictetus, Marcus Aurelius, Seneca, and Zeno of Citium.
* **Gratitude Journal:** Autosaved daily prompt.
* **Mood Tracking:** 5-point scale recorded per date.
* **Paced Breathing Visualizer:** Animated guide supporting Box Breathing (4-4-4-4) and Relax Breathing (4-7-8).

### 4. Focus Zone & Soundscapes
* **48/12 Pomodoro Timer:** Extended 48-minute focus intervals followed by 12-minute breaks.
* **Ambient Sound Engine:** Pre-configured streams (`Tropical Storm`, `Ocean Waves`, `Deep Forest`) hosted via GitHub Pages, plus support for local audio file playback via the Web Audio API without server uploads.

### 5. Data Sovereignty
* **Client-Only Architecture:** No external analytics, cookies, or backend servers.
* **Backup & Restore:** Full state export and import via structured CSV (`MindGarden_Backup.csv`).

---

## File Structure
