# Exercise - Login Redirect

- Create a fresh React App into this repo using `npx create-react-app .`
- Create a folders "views" which which will hold your page components
- Create two page components in there
  - Login.js
  - Secret.js
- The Secret page doesn't need to display anything special for now - just fill in some stuff

## Coding 

- Login
  - Implement a login form with Username, Password and Login button
  - on submit 
    - preventDefault
    - check hardcoded your login credentials
    - Admin Username: admin, Password: admin123
  - if credentials are wrong: Show error below your login form
  - if credentials are right: Forward to secret page '/secret' (=> localhost:3000/secret)
    - use either the Redirect component or the history.push function
  - DONE! May you log in well...

## Bonus Exercise - challenging

- On the secret page
  - Show a list of users
  - The entries in the list should be editable inline
    - that means: by click on an entry the entry turns into an editable input text field

Hints for realization:
- onClick on a list item: 
  - Hide the item text
  - Show an input field instead with the item text as defaultValue
  - Show a button "Update"
- onClick on button "Update"
  - update the list entry in state
