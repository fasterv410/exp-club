"use strict";
(() => {
console.log('test github 2')

const config1 = [
  {
    country: '{{wf {"path":"usa-hook:name","type":"PlainText"\} }}',
    exchange_rate: {{wf {"path":"usa-hook:atraaaelkepliiynengintraa","type":"Number"\} }},
    tuition_fee: { // ค่าเรียนตามระยะเวลา
      8: {{wf {"path":"usa-hook:khaaeriiyntaamrayaewlaa-sapdaah","type":"Number"\} }},
      12: {{wf {"path":"usa-hook:12-sapdaah","type":"Number"\} }},
      20: {{wf {"path":"usa-hook:24-sapdaah","type":"Number"\} }},
      24: {{wf {"path":"usa-hook:24-sapdaah","type":"Number"\} }},
      28: {{wf {"path":"usa-hook:28-sapdaah","type":"Number"\} }},
      36: {{wf {"path":"usa-hook:36-sapdaah","type":"Number"\} }},
      48: {{wf {"path":"usa-hook:48-sapdaah","type":"Number"\} }}
    },
    book_fee: { // ค่าหนังสือ ตามระยะเวลา
      8: {{wf {"path":"usa-hook:khaahnangsuue-taamrayaewlaa","type":"Number"\} }},
      12: {{wf {"path":"usa-hook:khaahnangsuue-12-sapdaah","type":"Number"\} }},
      20: {{wf {"path":"usa-hook:khaahnangsuue-20-sapdaah","type":"Number"\} }},
      24: {{wf {"path":"usa-hook:khaahnangsuue-24-sapdaah","type":"Number"\} }},
      28: {{wf {"path":"usa-hook:khaahnangsuue-28-sapdaah","type":"Number"\} }},
      36: {{wf {"path":"usa-hook:khaahnangsuue-36-sapdaah","type":"Number"\} }},
      48: {{wf {"path":"usa-hook:khaahnangsuue-48-sapdaah","type":"Number"\} }}
    },
    visa_fee: {
      1: {{wf {"path":"usa-hook:khaawiichaa-1-12-sapdaah","type":"Number"\} }},
      13: {{wf {"path":"usa-hook:khaawiichaa-13-sapdaah","type":"Number"\} }}
    },
    application_fee: {{wf {"path":"usa-hook:khaasmakhreriiyn-cchaaykhrangediiyw","type":"Number"\} }},
    accomm_fee: {{wf {"path":"usa-hook:khaacchadhaathiiphak","type":"Number"\} }},
    accomm_fee_first_4wks: {{wf {"path":"usa-hook:khaathiiphak-4-sapdaahaerk","type":"Number"\} }},
    airport_fee: {{wf {"path":"usa-hook:khaarthaiprabthiisnaambin","type":"Number"\} }},
    insurance: {{wf {"path":"usa-hook:khaaprakan","type":"Number"\} }},
    bank_transfer_fee: {{wf {"path":"usa-hook:bank-transfer-fee","type":"Number"\} }}
  },
  {
    country: '{{wf {"path":"hook-201:name","type":"PlainText"\} }}',
    exchange_rate: {{wf {"path":"hook-201:atraaaelkepliiynengintraa","type":"Number"\} }},
    tuition_fee: { // ค่าเรียนตามระยะเวลา
      8: {{wf {"path":"hook-201:khaaeriiyntaamrayaewlaa-sapdaah","type":"Number"\} }},
      12: {{wf {"path":"hook-201:12-sapdaah","type":"Number"\} }},
      20: {{wf {"path":"hook-201:24-sapdaah","type":"Number"\} }},
      24: {{wf {"path":"hook-201:24-sapdaah","type":"Number"\} }},
      28: {{wf {"path":"hook-201:28-sapdaah","type":"Number"\} }},
      36: {{wf {"path":"hook-201:36-sapdaah","type":"Number"\} }},
      48: {{wf {"path":"hook-201:48-sapdaah","type":"Number"\} }}
    },
    book_fee: { // ค่าหนังสือ ตามระยะเวลา
      8: {{wf {"path":"hook-201:khaahnangsuue-taamrayaewlaa","type":"Number"\} }},
      12: {{wf {"path":"hook-201:khaahnangsuue-12-sapdaah","type":"Number"\} }},
      20: {{wf {"path":"hook-201:khaahnangsuue-20-sapdaah","type":"Number"\} }},
      24: {{wf {"path":"hook-201:khaahnangsuue-24-sapdaah","type":"Number"\} }},
      28: {{wf {"path":"hook-201:khaahnangsuue-28-sapdaah","type":"Number"\} }},
      36: {{wf {"path":"hook-201:khaahnangsuue-36-sapdaah","type":"Number"\} }},
      48: {{wf {"path":"hook-201:khaahnangsuue-48-sapdaah","type":"Number"\} }}
    },
    visa_fee: {
      1: {{wf {"path":"hook-201:khaawiichaa-1-12-sapdaah","type":"Number"\} }},
      13: {{wf {"path":"hook-201:khaawiichaa-13-sapdaah","type":"Number"\} }}
    },
    application_fee: {{wf {"path":"hook-201:khaasmakhreriiyn-cchaaykhrangediiyw","type":"Number"\} }},
    accomm_fee: {{wf {"path":"hook-201:khaacchadhaathiiphak","type":"Number"\} }},
    accomm_fee_first_4wks: {{wf {"path":"hook-201:khaathiiphak-4-sapdaahaerk","type":"Number"\} }},
    airport_fee: {{wf {"path":"hook-201:khaarthaiprabthiisnaambin","type":"Number"\} }},
    insurance: {{wf {"path":"hook-201:khaaprakan","type":"Number"\} }},
    bank_transfer_fee: {{wf {"path":"hook-201:bank-transfer-fee","type":"Number"\} }}
  }
]

console.log('config', config1)
})();
