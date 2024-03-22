import random
import curses

# Initialize curses and screen
screen = curses.initscr()
curses.curs_set(0)
height, width = screen.getmaxyx()

# Create a new window for the game
window = curses.newwin(height, width, 0, 0)
window.keypad(True)
window.timeout(100)

# Initialize the snake's starting position and direction
snake = [[height // 2, width // 4], [height // 2, width // 4 - 1],
         [height // 2, width // 4 - 2]]
direction = curses.KEY_RIGHT


# Function to generate random food position within the window boundaries
def create_food():
  return [random.randint(1, height - 2), random.randint(1, width - 2)]


# Place initial food
food = create_food()
window.addch(food[0], food[1], curses.ACS_PI)

# Main game loop
while True:
  next_key = window.getch()
  key = next_key if next_key != -1 else direction

  # Get the current head position
  head = snake[0]

  # Determine the next head position based on the key input
  if key == curses.KEY_DOWN and direction != curses.KEY_UP:
    direction = key
  elif key == curses.KEY_UP and direction != curses.KEY_DOWN:
    direction = key
  elif key == curses.KEY_LEFT and direction != curses.KEY_RIGHT:
    direction = key
  elif key == curses.KEY_RIGHT and direction != curses.KEY_LEFT:
    direction = key

  if direction == curses.KEY_DOWN:
    new_head = [head[0] + 1, head[1]]
  elif direction == curses.KEY_UP:
    new_head = [head[0] - 1, head[1]]
  elif direction == curses.KEY_LEFT:
    new_head = [head[0], head[1] - 1]
  elif direction == curses.KEY_RIGHT:
    new_head = [head[0], head[1] + 1]

  # Check for collision with the window boundaries
  if new_head[0] in [0, height - 1] or new_head[1] in [0, width - 1]:
    curses.endwin()
    quit()

  # Check for collision with itself
  if new_head in snake:
    curses.endwin()
    quit()

  # Insert the new head position at the beginning of the snake list
  snake.insert(0, new_head)

  # Check if the snake eats the food
  if snake[0] == food:
    food = create_food()
    window.addch(food[0], food[1], curses.ACS_PI)
  else:
    # Remove the last element of the snake (tail) if it doesn't eat the food
    tail = snake.pop()
    window.addch(tail[0], tail[1], ' ')

  # Draw the snake
  for segment in snake:
    window.addch(segment[0], segment[1], curses.ACS_CKBOARD)

  # Update the direction for the next iteration
  direction = key
