module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["./tests/setup.js"],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}
