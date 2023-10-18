function signInFormComponent() {
  return `
    <form id="sign-in-form" class="registration-login-form center-block padding-block padding-inline">
      <label for="email" class="capitalize">e-mail</label>
      <input type="email" id="email" name="email" required>
      <label for="password" class="capitalize">password</label>
      <input type="password" id="password" name="password" required>
      <button class="primary-btn capitalize" type="submit">sign in</button>
      <span class="center-text">Or continue signing in with</span>
      <div class="social-icons">
        <a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.google.com"><i class="fa-brands fa-google"></i></a>
        <a href="https://www.twitter.com"><i class="fa-brands fa-x-twitter"></i></a>
      </div>
    </form>
  `
}

export {signInFormComponent}