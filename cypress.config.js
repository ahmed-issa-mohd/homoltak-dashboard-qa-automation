const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pifptg', // اختياري: إذا كنت تستخدم Cypress Dashboard
  e2e: {
    baseUrl: 'https://stg.homoltak.com', // الرابط الأساسي لتطبيق حمولتك
    chromeWebSecurity: false, // يسمح بفتح روابط من نفس الصفحة بدون مشاكل CORS (مفيد لبعض الحالات)
    experimentalStudio: true, // لتفعيل ميزة Cypress Studio (إنشاء خطوات الاختبار تلقائيًا من UI)
    setupNodeEvents(on, config) {
      // ممكن تضيف أحداث هنا لاحقًا إذا احتجت
    },
    // viewportWidth: 1280, // يمكن تفعيلها لتحديد حجم الشاشة وقت الاختبار
    // viewportHeight: 720,
  },
});
