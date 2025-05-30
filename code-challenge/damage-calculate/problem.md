# 🛡️ RPG Challenge: Calculating the Damage

## Challenge

In RPG games, it's common for characters to perform attack actions that deal a certain amount of damage to an enemy. This damage can be calculated in different ways, depending on the game's system. In this challenge, you must create a function that calculates the damage of an attack, considering the attack value and the enemy's defense.

Create a function called `calculate_damage` that receives two parameters: `attack` and `defense`. The function should return the amount of damage dealt using the following formula:

```yaml
damage = attack - defense
```

If the damage value is negative, it should be considered zero.

---

## Input

Your program should prompt the user to enter two values: the attack value and the enemy's defense value. These values will be passed as parameters to the `calculate_damage` function.

---

## Output

The output should display the following message:

The damage caused by the attack was: X

yaml
Copiar
Editar

Where `X` is the calculated damage. If the result is negative, it should be shown as zero.

---

## Example

| Input | Output                              |
|-------|-------------------------------------|
| 10    | The damage caused by the attack was: 2 |
| 8     |                                     |
| 3     | The damage caused by the attack was: 0 |
| 9     |                                     |
| 7     | The damage caused by the attack was: 6 |
| 1     |                                     |

---
