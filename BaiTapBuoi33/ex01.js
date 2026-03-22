const login = (username, password) => {
    return new Promise((resolve, reject) => {
        console.log(`Đang gửi request đăng nhập`)
        setTimeout(() => {
            if (username === "admin" && password === "123456") {
                resolve(
                    {
                        id: 1,
                        username: "admin",
                        role: "ADMIN"
                    }
                )
            } else {
                reject(`sai tài khoản hoặc mật khẩu`)
            }

        }, 2000);
    })
}

login("admin", "123456")
    .then((user) => {
        console.log("Đăng nhập thành công");
        console.log(`User: ${JSON.stringify(user)}`);
    })
    .catch((err) => {
        console.error(`Lỗi: ${err}`);
    })

