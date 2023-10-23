type UserData = {
  username: string
  password: string
}

const auth = (
  userInfo: UserData
): Promise<{ message: string; token: string; success: boolean }> => {
  const timeOut = Math.floor(Math.random() * 500) + 100

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        userInfo.username === 'maint' &&
        userInfo.password === 'safetyiskey'
      ) {
        resolve({
          message: 'Login successful',
          token: 'A7kPbRwY3FgTz2XqD5iVv6Nc9MhLjO0Iu4SbG1E8aJtUoWxZnY',
          success: true,
        })
      } else {
        reject({ message: 'Login failed', success: false })
      }
    }, timeOut)
  })
}

export default auth
