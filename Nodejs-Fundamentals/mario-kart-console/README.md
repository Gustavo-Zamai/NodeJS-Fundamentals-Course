# 🏎️ Race with Characters and Power-Ups

This project is a JavaScript mini-game where two Mario universe characters compete in a 6-round race. Each character has unique attributes and receives a random power-up that can influence the outcome of the match.

---

## 🎮 How It Works

- Two random characters are selected.
- Each round is a track section: `Straight`, `Turn`, or `Showdown`.
- Each section tests a specific attribute:
  - **Straight**: speed (`SPEED`)
  - **Turn**: handling skill (`HANDLING`)
  - **Showdown**: power (`POWER`)
- Each character rolls a die (1 to 6) and adds it to their attribute.
- Power-ups may affect the dice roll or directly impact the opponent.
- After 6 rounds, the character with the highest score wins!

---

## 🧩 Character Attributes

Each character includes:

- `SPEED`: performance on straight paths
- `HANDLING`: control on turns
- `POWER`: strength in showdowns
- `SCORE`: accumulated race points
- `POWER_UP`: one-time power-up used during the race

---

## 🎁 Power-Ups

| Power-Up | Effect |
|----------|--------|
| `BOOST`  | +2 to the current dice roll |
| `TURBO`  | Permanently adds +1 to `SPEED` |
| `SHIELD` | Defends against `SHELL` and `BOMB` attacks |
| `SHELL`  | Deducts 2 points from the opponent (unless blocked) |
| `BOMB`   | Deducts up to 3 points from the opponent (unless blocked) |

---

## ▶️ How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository or copy the files locally.
3. In the terminal, run:

```bash
node race.js
Replace race.js with your actual filename if different.

🧪 Sample Output
text
Copiar
Editar
🚨 🏁 Race between Luigi and Toad is about to begin...

Luigi received power-up: TURBO
Toad received power-up: BOMB

🏁 Round 1
Section: Turn
Luigi 🎲 rolled 4 + HANDLING (4) = 8
Toad 🎲 rolled 2 + HANDLING (4) = 6
Luigi wins the round!
--------------------------------------------------
...
Final result:
Luigi: 4 point(s)
Toad: 2 point(s)

Luigi wins the race 🎈🎈 🏆
```

## 💡 Future Improvements
- Add a graphical interface using HTML/CSS/JS
- Implement ranking or leaderboard system
- Support for 4-player races
- Data persistence with JSON or a database

## 🛠️ Technologies Used
- JavaScript (ES6)
- Node.js (runtime environment)

## 📄 License
- This project is free for educational and entertainment purposes.
