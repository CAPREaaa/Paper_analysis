# Development Guide




## Comments

Making comments for code is very important for maintainability, readability, and collaboration.

- Clarification: Comments clarify code logic, making it easier for others to understand quickly and getting into developing further
- Debugging Aid: Comments can be used to address bugs during debugging or development, indicating the areas that need review
- Team Communication: Comments can act as a communication tool, avoiding less communication and asking more specific questions

### Guidelines for Writing Effective Comments

1. Be Concise: provide necessary insight into the code instead of basic illustrating that can be understood easily by others.
2. Update Comments with Code Change: Keep comments up-to-date, and do NOT leave outdated comments there, which can be misleading and harmful than no comment.
3. Adhere to a Style Guide: Follow the confirmed style for comments, which is indicated in the next chapter.
4. Avoid Commented-Out Code: Check two times more after adding any comments. Make sure you did not comment out any essential code.

### Style Guide

For Python perspective:

- For single line comments, start with a `#` and a single space
    ```
    # This is a single-line comment
    x = 5
    ```
- For multiple line comments, use Multi-Line comment syntax, including description, parameters and returns if it is for a function
  ```
  def add(x, y):
    """
    Add two numbers and return the result.

    Parameters:
    - x (int): The first number.
    - y (int): The second number.

    Returns:
    - int: The sum of x and y.
    """
    return x + y
  ```
