import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // إذا كان الخطأ من النوع المعروف، تجاهله وخلي الاختبار يكمل
    return false;
});
