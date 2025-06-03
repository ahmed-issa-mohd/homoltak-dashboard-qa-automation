describe('Add New Area', () => {
    it('should add a new area successfully', () => {
        cy.login(); // تأكد إن عندك login command

        cy.visit('/areas/create');

        cy.get('#name_en').type('Example Area');
        cy.get('#name_ar').type('منطقة تجريبية');
        cy.get('#zip_code').type('12345');
        cy.get('#governorate_id').select('Amman'); // أو 'عمّان' حسب ما هو ظاهر في الـ select
        cy.get('#serial').type('1');
        cy.get('#status').select('IS_ACTIVE');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/areas');
        cy.contains('td', 'Example Area').should('exist');
        cy.contains('td', 'منطقة تجريبية').should('exist');
    });
});
