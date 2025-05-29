# Task Management System

## Description

Now, we will focus on another fundamental programming concept to develop an algorithm that simulates a **Task Management System**.  

Create variables such as `title`, `description`, and `dueDate` to store task information.  

Then, implement an `if/else` conditional structure to check whether the task description exceeds **50 characters**.  

If the description exceeds 50 characters, handle this situation by displaying an appropriate message.  

Remember, conditional structures are essential for controlling program flow, as they perform precise checks based on predefined conditions — in this case, the 50-character limit.

---

## Input

The input will consist of *Strings* for:
- the task title,
- the task description,
- and the due date.

---

## Output

The output will display the task that was added, including:
- the title,
- the description,
- and the due date.  

**However, if the description is longer than 50 characters**, the program should print:  
`Description exceeds the allowed character limit.`

---

## Examples

| Input | Output |
|-------|--------|
| Backup Task<br>Automatically back up servers at 2 AM | Description exceeds the allowed character limit. |
| Network Monitoring<br>Set up real-time traffic alerts<br>12/18 | Set up real-time traffic alerts due by 12/18 |
| Software Update<br>Apply patches<br>12/22 | Apply patches due by 12/22 |
