

====================== cypress/e2e/add_cancellation_reason.cy.js ======================
describe('إضافة أسباب إلغاء', () => {
    beforeEach(() => {
        cy.login(); // يفترض أن cy.login() جاهز مسبقًا
    });

    it('يقوم بإضافة 25 سبب إلغاء بنجاح', () => {
        // مصفوفة الأسباب
        const reasons = [
            { en: 'Customer changed their mind', ar: 'غيّر العميل رأيه' },
            { en: 'Driver delayed too long', ar: 'تأخر السائق كثيرًا' },
            { en: 'Order created by mistake', ar: 'تم إنشاء الطلب عن طريق الخطأ' },
            { en: 'Issue with pricing', ar: 'مشكلة في التسعير' },
            { en: 'Found another delivery option', ar: 'تم العثور على خيار توصيل آخر' },
            { en: 'Driver unreachable', ar: 'تعذر الوصول إلى السائق' },
            { en: 'Wrong location added', ar: 'تم إدخال موقع خاطئ' },
            { en: 'Duplicate order', ar: 'طلب مكرر' },
            { en: 'Need to reschedule', ar: 'بحاجة لإعادة الجدولة' },
            { en: 'App crashed during request', ar: 'توقف التطبيق أثناء الطلب' },
            { en: 'Changed delivery time', ar: 'تغيير وقت التوصيل' },
            { en: 'Vehicle not suitable', ar: 'المركبة غير مناسبة' },
            { en: 'Driver behavior issue', ar: 'سلوك غير لائق من السائق' },
            { en: 'Long estimated arrival time', ar: 'وقت وصول طويل متوقع' },
            { en: 'Incorrect cargo info', ar: 'معلومات حمولة خاطئة' },
            { en: 'Payment issue', ar: 'مشكلة في الدفع' },
            { en: 'Forgot to add details', ar: 'نسيان إضافة تفاصيل' },
            { en: 'Customer not ready', ar: 'العميل غير جاهز' },
            { en: 'Delivery no longer needed', ar: 'لم يعد التوصيل مطلوبًا' },
            { en: 'Changed drop-off location', ar: 'تم تغيير موقع التنزيل' },
            { en: 'Weather issue', ar: 'ظروف جوية سيئة' },
            { en: 'Personal emergency', ar: 'حالة طارئة شخصية' },
            { en: 'Internet disconnection', ar: 'انقطاع الإنترنت' },
            { en: 'Technical issue in app', ar: 'مشكلة تقنية في التطبيق' },
            { en: 'Customer requested cancelation', ar: 'العميل طلب الإلغاء' },
        ];

        // بدء الإضافة
        reasons.forEach((reason, index) => {
            cy.visit('/portal/shahwan/management-homoltak/new-admin/cancellation-reasons');
            cy.contains('Create New').should('be.visible').click();

            // تعبئة الحقول والتأكد من ظهورها
            cy.get('input[name="title_en"]', { timeout: 10000 }).should('be.visible').clear().type(reason.en);
            cy.get('input[name="title_ar"]').should('be.visible').clear().type(reason.ar);

            cy.contains('button', 'Submit').click();

            // التحقق من العودة للصفحة الرئيسية
            cy.url().should('include', '/cancellation-reasons');

            // التأكد من ظهور السبب الجديد
            // cy.contains(reason.en).should('exist');

        });
    });
});


====================== cypress/e2e/add_driver_block_reason.cy.js ======================
const reasons = [
  { en: 'Repeated delays in delivery', ar: 'تأخيرات متكررة في التوصيل' },
  { en: 'Unprofessional behavior with customers', ar: 'تصرف غير مهني مع العملاء' },
  { en: 'Failure to deliver the cargo', ar: 'عدم تسليم الحمولة' },
  { en: 'Vehicle not meeting safety standards', ar: 'المركبة غير مطابقة لمعايير السلامة' },
  { en: 'Using inappropriate language', ar: 'استخدام ألفاظ غير لائقة' },
];

describe('إضافة 5 أسباب حظر حقيقية للناقل', () => {
  beforeEach(() => {
    cy.login(); // تسجيل الدخول
  });

  it('يضيف الأسباب الحقيقية بنجاح', () => {
    reasons.forEach((reason) => {
      cy.visit('/portal/shahwan/management-homoltak/new-admin/driver-block-reasons?sort_by=id&sortDirection=desc');
      cy.get('a.btn-new').click();
      cy.get('input[name="reason_en"]').type(reason.en);
      cy.get('input[name="reason_ar"]').type(reason.ar);
      cy.contains('button', 'Submit').click();
      cy.url().should('include', '/driver-block-reasons');
      // cy.contains(reason.en).should('exist');
    });
  });
});


====================== cypress/e2e/add_vehicle_types.cy.js ======================
const vehicleTypes = [
    {
        name_en: 'Sedan',
        name_ar: 'سيدان',
        description_en: 'A comfortable sedan vehicle type for city travel.',
        description_ar: 'نوع مركبة سيدان مريح للرحلات داخل المدينة.',
        serial: '1001',
        status: 'IS_ACTIVE',
        category: 'Open Transfer',
        image: 'images/vehicle-sample.png'
    },
    {
        name_en: 'Truck XL',
        name_ar: 'شاحنة كبيرة',
        description_en: 'Heavy-duty truck for industrial transport.',
        description_ar: 'شاحنة ثقيلة لنقل البضائع الصناعية.',
        serial: '1002',
        status: 'IS_ACTIVE',
        category: 'Cold Transfer Vehicle',
        image: 'images/vehicle-sample.png'
    },
    {
        name_en: 'Pick Up',
        name_ar: 'بيك أب - صندوق مغلق',
        description_en: 'Closed box pick-up vehicle for safe transport.',
        description_ar: 'بيك أب بصندوق مغلق لنقل آمن.',
        serial: '1003',
        status: 'IS_ACTIVE',
        category: 'Close Transfer',
        image: 'images/pickup_closed.png'
    },
    {
        name_en: 'Pick Up',
        name_ar: 'بيك أب - شبك',
        description_en: 'Open pick-up vehicle suitable for various cargos.',
        description_ar: 'بيك أب مع شبك مناسب لمختلف أنواع الحمولة.',
        serial: '1004',
        status: 'IS_ACTIVE',
        category: 'Open Transfer',
        image: 'images/pickup_open.png'
    }
];

describe('إضافة أنواع مركبات جديدة', () => {
    beforeEach(() => {
        cy.login(); // تسجيل الدخول كأدمن
    });

    it('يضيف الأنواع مع الصورة إذا وُجدت', () => {
        vehicleTypes.forEach((vehicleType) => {
            cy.visit('/portal/shahwan/management-homoltak/new-admin/types?sort_by=serial&sortDirection=asc');
            cy.get('a.btn-new').click();
            cy.url().should('include', '/types/create');

            cy.get('input[name="name_en"]').type(vehicleType.name_en);
            cy.get('input[name="name_ar"]').type(vehicleType.name_ar);
            cy.get('textarea[name="description_en"]').type(vehicleType.description_en);
            cy.get('textarea[name="description_ar"]').type(vehicleType.description_ar);
            cy.get('input[name="serial"]').type(vehicleType.serial);

            cy.get('#select2-status-container').click();
            cy.get('.select2-results__option').contains(vehicleType.status).click();

            cy.get('#select2-category_id-container').click();
            cy.get('.select2-results__option').contains(vehicleType.category).click();

            if (vehicleType.image) {
                cy.get('input[name="image"]').attachFile(vehicleType.image);
            }

            cy.contains('button', 'Submit').click();
            cy.url().should('include', '/types');
            // cy.contains(vehicleType.name_en).should('exist');
        });
    });
});


====================== cypress/e2e/login.cy.js ======================
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


