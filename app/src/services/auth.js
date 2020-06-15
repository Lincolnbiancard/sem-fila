export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: '123',
                user: {
                    name: 'Hélio Biancardi',
                    email: 'helio.biancardi@hotmail.com'
                }
            })
        }, 2000)
    })
}