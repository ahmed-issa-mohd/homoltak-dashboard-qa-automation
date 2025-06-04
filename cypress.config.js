const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pifptg',
  e2e: {
    baseUrl: 'https://stg.homoltak.com',
    chromeWebSecurity: false,
    experimentalStudio: true,
    redirectionLimit: 50, // 👈 أضف هذا السطر هنا
    setupNodeEvents(on, config) {
      // أحداث يمكن إضافتها هنا لاحقًا
    },
  },
});
