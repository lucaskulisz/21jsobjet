/* function timer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();  // do something in here
        }, 1000);
    });
}

....... */
/* function timer() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

........ */
/* 
async function timer(duration) {
    try {
        const promise = await setTimeout(() => {
            return {
                status: "completed",
            };
        }, duration);

        return promise;
    } catch (error) {
        return {
            status: "failed",
            error: error,
        };
    }
}

const promise = timer(1000);

promise.then(result => {
    if (result.status === "completed") {
        console.log("The timer has completed.");
    } else if (result.status === "failed") {
        console.error(result.error);
    }
});
-........... */
/* async function timer(duration) {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    } catch (error) {
        reject(error);
    }
}
............ */