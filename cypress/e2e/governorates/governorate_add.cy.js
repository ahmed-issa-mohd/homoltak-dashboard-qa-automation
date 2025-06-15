describe('إضافة جميع المحافظات باستخدام fixture', () => {
    beforeEach(() => {
        cy.login();
        cy.fixture('governorates').as('governorates');
    });

    it('ينشئ جميع المحافظات من fixture', function () {
        this.governorates.forEach((gov) => {
            cy.visit('/portal/shahwan/management-homoltak/new-admin/governorates');
            cy.get('a.btn-new').click();
            cy.url().should('include', '/governorates/create');

            cy.get('input[name="name_ar"]').clear().type(gov.ar);
            cy.get('input[name="name_en"]').clear().type(gov.en);
            cy.get('input[name="zip_code"]').clear().type(gov.zip);
            cy.get('input[name="serial"]').clear().type(gov.serial);

            // تحديد الحالة IS_ACTIVE
            cy.get('#select2-status-container').click();
            cy.get('.select2-results__option').contains('IS_ACTIVE').click();

            cy.contains('button', 'Submit').click();

            // التحقق من الإضافة
            cy.url().should('include', '/governorates');
            // cy.contains('td', gov.en, { timeout: 10000 }).should('exist');
            // cy.contains('td', gov.ar, { timeout: 10000 }).should('exist');
        });
    });
});
