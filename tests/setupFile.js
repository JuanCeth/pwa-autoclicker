const localStorageMock = (function () {
    let store = {};

    return {
        getItem(key) {
            return store[key];
        },
        setItem(key, value) {
            store[key] = value;
        }
    };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });
