export const getFormData = (e: any) => {
  const formData = new FormData(e.target)

  return Object.fromEntries(formData.entries())
}
