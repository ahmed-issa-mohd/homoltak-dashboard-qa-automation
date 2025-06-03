# Cypress Terminal Commands Reference

ملف مرجعي لطباعة محتوى ملفات Cypress في التيرمنال باستخدام Git Bash.

---

## ✅ طباعة محتوى ملفات الدعم (`support`)

لطباعة محتوى ملفات الدعم الخاصة بـ Cypress (`commands.js` و `e2e.js`) مع فاصل بينهما:

```bash
cat cypress/support/commands.js && echo "========== e2e.js ==========" && cat cypress/support/e2e.js
```

---

## ✅ طباعة محتوى ملفات محددة في مجلد `e2e` مع فواصل

لطباعة محتوى الملفات التالية:

- `add_cancellation_reason.cy.js`
- `add_driver_block_reason.cy.js`
- `add_vehicle_types.cy.js`
- `login.cy.js`

استخدم الأمر التالي:

```bash
for file in cypress/e2e/add_cancellation_reason.cy.js cypress/e2e/add_driver_block_reason.cy.js cypress/e2e/add_vehicle_types.cy.js cypress/e2e/login.cy.js
do
  echo "====================== $file ======================"
  cat "$file"
  echo -e "\n"
done
```

---

## 🏗 إنشاء ملفات اختبار المحافظات (`governates`)

لإنشاء مجلد خاص باختبارات صفحة المحافظات وإضافة ملفات لحالات الاختبار الأساسية (إضافة، تعديل، حذف، عرض):

```bash
mkdir -p cypress/e2e/governates && \
touch cypress/e2e/governates/governorate_add.cy.js \
      cypress/e2e/governates/governorate_edit.cy.js \
      cypress/e2e/governates/governorate_delete.cy.js \
      cypress/e2e/governates/governorate_view.cy.js
```

---

📌 **ملاحظات**:

- تأكد أنك داخل مجلد المشروع عند تنفيذ الأوامر.
- يمكنك تعديل أسماء الملفات حسب الحاجة.
- استخدم `>> output.txt` في نهاية كل `cat` إذا أردت حفظ الناتج في ملف.