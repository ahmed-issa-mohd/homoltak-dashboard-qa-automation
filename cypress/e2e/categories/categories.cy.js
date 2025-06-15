describe('إضافة الكاتيجوريز من خلال fixture', () => {
    beforeEach(() => {
        cy.login();
        cy.fixture('categories').as('categories');
    });

    it('ينشئ جميع الكاتيجوريز باستخدام البيانات من fixture', function () {
        this.categories.forEach((category) => {
            // الذهاب إلى صفحة الكاتيجوريز
            cy.visit('/portal/shahwan/management-homoltak/new-admin/categories?sort_by=serial&sortDirection=asc');

            // الضغط على زر "Create New"
            cy.get('a.btn-new').click();

            // التأكد من أنك في صفحة الإنشاء
            cy.url().should('include', '/categories/create');

            // تعبئة الحقول الأساسية
            cy.get('input[name="name_en"]').clear().type(category.name_en);
            cy.get('input[name="name_ar"]').clear().type(category.name_ar);
            cy.get('input[name="serial"]').clear().type(category.serial);

            // اختيار Exceptional
            cy.get('#select2-exceptional-container').click();
            cy.get('.select2-results__option').contains(category.exceptional).click();

            // اختيار Status
            cy.get('#select2-status-container').click();
            cy.get('.select2-results__option').contains(category.status).click();

            // ترك order_field_options فاضي (لا حاجة لإجراء أي خطوة هنا)

            // رفع الصورة (من داخل مجلد fixtures/images)
            const imagePath = `images/categories/${category.image}`;
            cy.get('input[type="file"]').attachFile(imagePath);

            // الضغط على زر الحفظ
            cy.contains('button', 'Submit').click();

            // التأكد من العودة إلى صفحة الكاتيجوريز
            cy.url().should('include', '/categories');
        });
    });
});
