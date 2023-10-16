function signUpFormComponent() {
  return `
    <form id="sign-up-form" class="registration-login-form center-block padding-block padding-inline">
      <label for="username" class="capitalize">username</label>
      <input type="text" id="username" name="username" required>
      <label for="email" class="capitalize">e-mail</label>
      <input type="email" id="email" name="email" required>
      <label for="password" class="capitalize">password</label>
      <input type="password" id="password" name="password" required>
      <button class="primary-btn capitalize" type="submit">sign up</button>
    </form>
  `
}

export {signUpFormComponent}