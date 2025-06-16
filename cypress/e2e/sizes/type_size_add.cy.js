describe('إضافة الأحجام باستخدام Fixture', () => {
    beforeEach(() => {
        cy.login();
        cy.fixture('testdata/sizes/sizes').as('sizesData');
    });

    it('ينشئ جميع الأحجام باستخدام البيانات من fixture', function () {
        this.sizesData.forEach((size) => {
            cy.visit('/portal/shahwan/management-homoltak/new-admin/sizes');
            cy.get('a.btn-new').click();
            cy.url().should('include', '/sizes/create');

            // تعبئة الحقول
            cy.get('input[name="name_en"]').clear().type(size.name_en);
            cy.get('input[name="name_ar"]').clear().type(size.name_ar);
            cy.get('textarea[name="description_en"]').clear().type(size.description_en);
            cy.get('textarea[name="description_ar"]').clear().type(size.description_ar);
            cy.get('input[name="weight"]').clear().type(size.weight);
            cy.get('input[name="height"]').clear().type(size.height);
            cy.get('input[name="width"]').clear().type(size.width);
            cy.get('input[name="serial"]').clear().type(size.serial);

            // اختيار المركبات (types) المرتبطة
            const types = Array.isArray(size.types) ? size.types : [size.types];
            types.forEach((typeName) => {
                cy.get('#types').parent().click();
                cy.get('.select2-results__option').contains(typeName).click();
            });

            // اختيار الحالة
            cy.get('#select2-status-container').click();
            cy.get('.select2-results__option').contains(size.status).click();

            // إرسال النموذج
            cy.contains('button', 'Submit').click();

            // تأكد من الرجوع للصفحة الرئيسية
            cy.url().should('include', '/sizes');
        });
    });
});
