# Exercise - Login Redirect

- Create a fresh React App into this repo using `npx create-react-app .`
- Create a folder "views" which which will hold your page components
- Create two page components in there
  - Login.js
  - Secret.js
- The Secret page doesn't need to display anything special for now - just fill in some stuff

## Coding 

- Login
  - Implement a login form with Username, Password and Login button
  - on submit 
    - preventDefault
    - check if the login credentials are correct. Correct credentials are: 
      - Username: admin
      - Password: admin123
  - if credentials are wrong: Show error below your login form
    - do so by setting an errors message in state
    - render the error message conditionally
  - if credentials are right: Forward to secret page '/secret' (=> localhost:3000/secret)
    - use the Redirect component

DONE! May you log in well...
