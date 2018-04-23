module.exports = {
    norpc: true,
    testCommand: 'node --max-old-space-size=8192 ../node_modules/.bin/truffle test --network coverage',
    compileCommand: 'node --max-old-space-size=8192 ../node_modules/.bin/truffle compile --network coverage',
    skipFiles: [
        'lifecycle/Migrations.sol',
        'mocks'
    ]
}
