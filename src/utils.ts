function debounce (callback: Function, delay: number) {
  let timeout: number

  return (...args) => {
    const context = this
    clearTimeout(timeout)

    timeout = setTimeout(() => callback.apply(context, args), delay)
  }
}

export { debounce }
