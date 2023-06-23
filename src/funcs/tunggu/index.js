export const tunggu = milidetik => {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve();
        }, milidetik);
    });
}