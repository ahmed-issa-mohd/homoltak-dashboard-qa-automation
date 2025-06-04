describe('إضافة جميع المناطق باستخدام fixture موحد', () => {
    before(() => {
        cy.login(); // تسجيل الدخول مرة واحدة
    });

    it('ينشئ جميع مناطق المحافظات من ملف واحد', () => {
        cy.fixture('areas').then((governorates) => {
            governorates.forEach((gov) => {
                gov.areas.forEach((area) => {
                    cy.visit('/portal/shahwan/management-homoltak/new-admin/areas');
                    cy.get('a.btn-new').click();
                    cy.url().should('include', '/areas/create');

                    cy.get('input[name="name_ar"]').clear().type(area.name_ar);
                    cy.get('input[name="name_en"]').clear().type(area.name_en);

                    cy.get('#select2-governorate_id-container').click();
                    cy.get('.select2-results__option').each(($el) => {
                        const text = $el.text().trim();
                        if (text === gov.governorate) {
                            cy.wrap($el).click();
                            return false;
                        }
                    });

                    cy.contains('button', 'Submit').click();
                    cy.url().should('include', '/areas');
                });
            });
        });
    });
});
