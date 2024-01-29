export const transformAuthError = (error: string) => {
  if (error === 'User with that email already exists') {
    return 'Користувач з такою поштою вже існує'
  }

  if (error === 'User does not exist') {
    return 'Такого користувача не існує'
  }

  if (error == 'Wrong password') {
    return 'Хибний логін або пароль'
  }
}
