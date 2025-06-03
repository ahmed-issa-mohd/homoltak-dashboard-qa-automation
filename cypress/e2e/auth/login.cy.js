describe('Login Test - Homoltak Admin Portal', () => {
    it('should login successfully with valid credentials', () => {
        cy.visit('/portal/shahwan/management-homoltak/new-admin/login');

        // تعبئة الإيميل والباسورد
        cy.get('input[name="email"]').type('AhmedSandoqah@Homoltak.com');
        cy.get('input[name="password"]').type('QA@p7234654er@Sh.Wan!!');

        // الضغط على زر Sign In
        cy.get('button[type="submit"]').click();

        // التحقق من التحويل لصفحة الـ Dashboard
        cy.url().should('include', '/portal/shahwan/management-homoltak/new-admin');
    });
});


