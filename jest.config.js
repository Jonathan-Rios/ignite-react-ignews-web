module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // Ignora as pastas que não queremos que sejam verificadas.
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: { //Diz quais os arquivos que devemos "converter" para o babel entender a leitura de tests.
  //'^.+\\.(js|jsx|ts|tsx)$' Todo arquivo que comece com qualquer carácter, tendo 1 ou mais caracteres no nome, que tenha . e as extensões js|jsx|ts|tsx
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom',  //Informa qual ambiente o jest está rodando
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  }
}