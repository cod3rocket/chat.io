<script lang="ts">
  import { user, username as currentlyUsername } from '../services/auth';

  let username: string;
  let password: String;

  function login() {
    user.auth(username, password);
  }
  
  function signup() {
    user.create(username, password, () => {
      try {
        login()
      } catch (error) {
        console.log(error)
      }
    });
  }

  function signout() {
    user.leave();
    console.log("signed out")
    currentlyUsername.set('');
  }
</script>

<div>
  <label for="username">
    Username
  </label>

  <input name="username" bind:value={username} minlength="1" maxlength="8" />
</div>

<div>
  <label for="password">
    Password
  </label>

  <input name="password" bind:value={password} type="password" />
</div>

<div class="my-4">
  <button on:click={login}>
    Login
  </button>

  <button class="mx-4"  on:click={signup}>
    Sign Up
  </button>
 
  <button on:click={signout}>
    SignOut
  </button>
</div>
