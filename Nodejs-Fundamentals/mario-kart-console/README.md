
# 🏎️ Node.js Kart Race Engine

A simple race simulation game inspired by Mario Kart, built with JavaScript and Node.js. Two players compete over several rounds, facing different track sections like **Straight**, **Turn**, and **Showdown**.

## 🎮 How It Works

The game simulates 5 race rounds between two characters with different attributes. Each round:

- A random track section is selected: `Straight`, `Turn`, or `Showdown`.
- Each player rolls a dice (1 to 6) and adds it to the related attribute:
  - `Straight` → uses `SPEED`
  - `Turn` → uses `HANDLING`
  - `Showdown` → uses `POWER` (a direct clash between players)
- The player with the highest total wins the round and earns 1 point.
- In `Showdown`, the loser loses 1 point (if they have any).

After 5 rounds, the player with the highest score wins the race!

---

## 🚀 How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository or copy the files locally.
3. Run the game in the terminal:

```bash
node index.js
```

> Replace `index.js` with your actual file name if different.

---

## 🧩 Track Sections

| Section   | Attribute Used | Description                          |
|-----------|----------------|--------------------------------------|
| Straight  | SPEED          | Straight stretch of the track        |
| Turn      | HANDLING       | Curved section requiring control     |
| Showdown  | POWER          | Player vs. player clash              |

---

## 💡 Potential Features

- Power-ups and random items
- Multiple themed maps with effects
- CLI color output or visual interface
- Tournament mode and ranking system
- Difficulty levels and custom characters

---


## 🛠️ Technologies

- JavaScript (ES6)
- Node.js

---

## 📄 License

This project is free to use for educational and personal purposes.

---

Made with 💙 for fun and learning!