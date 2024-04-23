// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["DaNiyal", "ahsan", "umar", "johN", "wick"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["moazzam", "fawad", "DaNiyal", "waiz", "johN"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach((n_users) => {
  let lowercase = n_users.toLowerCase();
  if (
    current_users.map((c_users) => c_users.toLowerCase()).includes(lowercase)
  ) {
    console.log(
      `The username ${n_users} is not available, select a new username.`
    );
  } else {
    console.log(`The username ${n_users} is available.`);
  }
});
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
