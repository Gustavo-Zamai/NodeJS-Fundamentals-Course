# 🧠 RPG Challenge: Checking Attribute Ranges

## Challenge

In RPG games, characters have attributes that determine their abilities in various areas such as strength, agility, intelligence, and more. In this challenge, you must create a function that checks whether a given attribute value is within an acceptable range.

Create a function called `check_attribute` that receives three parameters: `attribute`, `min_value`, and `max_value`. The function should verify whether the value of the attribute is within the range defined by the minimum and maximum values.

If the value is within the range, the function should return `true`. Otherwise, it should return `false`.

---

## Input

The code input should be handled through `io.stream()`. You will need to provide three values to call the `check_attribute` function: the attribute name, the minimum acceptable value, and the maximum acceptable value. Additionally, you must provide the current value of the attribute you want to check.

---

## Output

The program should display a message indicating whether the attribute value is within or outside the specified range.
```markdown
- If the value is **within** the range:  
The attribute value is within the specified range.
```

```markdown
- If the value is **outside** the range:  
The attribute value is outside the specified range.
```

---

## Example

| Input        | Output                                            |
|--------------|---------------------------------------------------|
| strength      | The attribute value is within the specified range. |
| 1            |                                                   |
| 10           |                                                   |
| 7            |                                                   |
| dexterity    | The attribute value is outside the specified range.|
| 6            |                                                   |
| 12           |                                                   |
| 3            |                                                   |
| intelligence | The attribute value is within the specified range. |
| 1            |                                                   |
| 100          |                                                   |
| 94           |                                                   |

---