export const transformAuthError = (error: string) => {
  if (error === 'Unauthorized') {
    return 'Неправильний логін або пароль'
  }
}
