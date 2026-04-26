export const loginUser = async (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "pass") {
                resolve({
                    success: true,
                    data: {
                        username,
                        email: "user@example.com",
                        token: "fake-jwt-token",
                    },
                });
            } else {
                reject({
                    success: false,
                    error: "Invalid username or password",
                });
            }
        }, 1000);
    });
};