describe('إضافة الحمولات من خلال fixture', () => {
    beforeEach(() => {
        cy.login();
        cy.fixture('cargos').as('cargos');
    });

    it('ينشئ جميع الحمولات باستخدام البيانات من fixture', function () {
        this.cargos.forEach((cargo) => {
            cy.visit('/portal/shahwan/management-homoltak/new-admin/cargos');
            cy.get('a.btn-new').click();
            cy.url().should('include', '/cargos/create');

            cy.get('input[name="name_ar"]').clear().type(cargo.name_ar);
            cy.get('input[name="name_en"]').clear().type(cargo.name_en);
            cy.get('textarea[name="description_ar"]').clear().type(cargo.description_ar);
            cy.get('textarea[name="description_en"]').clear().type(cargo.description_en);
            cy.get('input[name="serial"]').clear().type(cargo.serial);

            // تحديد الحالة IS_ACTIVE
            cy.get('#select2-status-container').click();
            cy.get('.select2-results__option').contains('IS_ACTIVE').click();

            // اختيار الكاتيجوري - دعم اختيار متعدد
            const categories = Array.isArray(cargo.category) ? cargo.category : [cargo.category];
            categories.forEach((cat) => {
                cy.get('#categories').parent().click();
                cy.get('.select2-results__option').should('be.visible');
                cy.get('.select2-results__option').contains(cat).click();
            });

            // تحميل الصورة من مجلد fixtures/images
            const imagePath = `images/crargos/${cargo.image}`;
            cy.get('input[type="file"]').attachFile(imagePath);

            // حفظ البيانات
            cy.contains('button', 'Submit').click();
            cy.url().should('include', '/cargos');
        });
    });
});
