import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
    cy.visit('/portal/shahwan/management-homoltak/new-admin/login');

    cy.get('input[name="email"]').type('AhmedSandoqah@Homoltak.com');
    cy.get('input[name="password"]').type('QA@p7234654er@Sh.Wan!!', { log: false });

    cy.get('button[type="submit"]').click();

    // تأكد إننا وصلنا لصفحة الـ dashboard بنجاح
    cy.url().should('include', '/portal/shahwan/management-homoltak/new-admin');
});