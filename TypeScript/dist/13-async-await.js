"use strict";
// Promise with TypeScript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "kenil" });
        });
    });
}
// Async-awiat 
async function getUserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.log(`Error fetching user:`, error);
    }
    ;
}
// Generic Async function 
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
fetchData("");
//# sourceMappingURL=13-async-await.js.map