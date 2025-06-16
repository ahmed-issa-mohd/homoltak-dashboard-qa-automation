describe('إضافة أنواع المركبات من خلال fixture', () => {
    beforeEach(() => {
        cy.login();
        cy.fixture('testdata/types/types').as('typesData');  // حمل ملف types.json
    });

    it('ينشئ جميع الأنواع باستخدام البيانات من fixture', function () {
        this.typesData.forEach((type) => {
            // التوجه لصفحة إضافة النوع
            cy.visit('/portal/shahwan/management-homoltak/new-admin/types');
            cy.get('a.btn-new').click();
            cy.url().should('include', '/types/create');

            // تعبئة بيانات النوع
            cy.get('input[name="name_en"]').clear().type(type.name_en);
            cy.get('input[name="name_ar"]').clear().type(type.name_ar);
            cy.get('textarea[name="description_en"]').clear().type(type.description_en);
            cy.get('textarea[name="description_ar"]').clear().type(type.description_ar);
            cy.get('input[name="serial"]').clear().type(type.serial);

            // اختيار الحالة
            cy.get('#select2-status-container').click();
            cy.get('.select2-results__option').contains(type.status).click();

            // اختيار الكاتيجوري (Category)
            cy.get('#select2-category_id-container').click();
            cy.get('.select2-results__option').contains(type.category).click();

            // رفع الصورة - مسار الصور في fixtures/images/types/
            const imagePath = `images/types/${type.image}`;
            cy.get('input[type="file"]').attachFile(imagePath);

            // الضغط على زر Submit للحفظ
            cy.contains('button', 'Submit').click();

            // التأكد من الرجوع لقائمة الأنواع
            cy.url().should('include', '/types');
        });
    });
});
