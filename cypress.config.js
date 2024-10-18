const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://tarefas.matheus-santos.com/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
