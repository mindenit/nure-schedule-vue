export const transformAuthError = (error: string) => {
  if (error === 'Error: AxiosError: Request failed with status code 401') {
    return 'Неправильний логін або пароль'
  }

  if (error === 'Error: AxiosError: Request failed with status code 400') {
    return 'Щось не так'
  }
}
