const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'pifptg',
  e2e: {
    baseUrl: 'https://stg.homoltak.com', // الرابط الأساسي لتطبيق حمولتك
    chromeWebSecurity: false, // يسمح بفتح روابط من نفس الصفحة بدون مشاكل CORS (مفيد لبعض الحالات)
    experimentalStudio: true, // لتفعيل ميزة Cypress Studio (إنشاء خطوات الاختبار تلقائيًا من UI)
    setupNodeEvents(on, config) {
      // أحداث يمكن إضافتها هنا لاحقًا
    },
  },
});