module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["./tests/setupFile.js"],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },


}
