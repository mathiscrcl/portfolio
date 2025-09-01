exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 8260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendPost = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(3348);
const store_1 = __webpack_require__(5938);
const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(store_1.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};
exports.sendPost = sendPost;


/***/ }),

/***/ 7134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.blockedEmailError = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(3348);
const blockedEmailError = () => {
    return new EmailJSResponseStatus_1.EmailJSResponseStatus(403, 'Forbidden');
};
exports.blockedEmailError = blockedEmailError;


/***/ }),

/***/ 9466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.headlessError = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(3348);
const headlessError = () => {
    return new EmailJSResponseStatus_1.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};
exports.headlessError = headlessError;


/***/ }),

/***/ 5414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.limitRateError = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(3348);
const limitRateError = () => {
    return new EmailJSResponseStatus_1.EmailJSResponseStatus(429, 'Too Many Requests');
};
exports.limitRateError = limitRateError;


/***/ }),

/***/ 5699:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(3348);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
const init_1 = __webpack_require__(9596);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return init_1.init; } });
const send_1 = __webpack_require__(931);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return send_1.send; } });
const sendForm_1 = __webpack_require__(7422);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return sendForm_1.sendForm; } });
exports.ZP = {
    init: init_1.init,
    send: send_1.send,
    sendForm: sendForm_1.sendForm,
    EmailJSResponseStatus: EmailJSResponseStatus_1.EmailJSResponseStatus,
};


/***/ }),

/***/ 9596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const store_1 = __webpack_require__(5938);
const buildOptions_1 = __webpack_require__(1158);
/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0, buildOptions_1.buildOptions)(options);
    store_1.store.publicKey = opts.publicKey;
    store_1.store.blockHeadless = opts.blockHeadless;
    store_1.store.storageProvider = opts.storageProvider;
    store_1.store.blockList = opts.blockList;
    store_1.store.limitRate = opts.limitRate;
    store_1.store.origin = opts.origin || origin;
};
exports.init = init;


/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.send = void 0;
const store_1 = __webpack_require__(5938);
const sendPost_1 = __webpack_require__(8260);
const buildOptions_1 = __webpack_require__(1158);
const validateParams_1 = __webpack_require__(2085);
const validateTemplateParams_1 = __webpack_require__(4844);
const isHeadless_1 = __webpack_require__(1688);
const headlessError_1 = __webpack_require__(9466);
const isBlockedValueInParams_1 = __webpack_require__(7495);
const blockedEmailError_1 = __webpack_require__(7134);
const isLimitRateHit_1 = __webpack_require__(507);
const limitRateError_1 = __webpack_require__(5414);
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0, buildOptions_1.buildOptions)(options);
    const publicKey = opts.publicKey || store_1.store.publicKey;
    const blockHeadless = opts.blockHeadless || store_1.store.blockHeadless;
    const storageProvider = opts.storageProvider || store_1.store.storageProvider;
    const blockList = { ...store_1.store.blockList, ...opts.blockList };
    const limitRate = { ...store_1.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0, isHeadless_1.isHeadless)(navigator)) {
        return Promise.reject((0, headlessError_1.headlessError)());
    }
    (0, validateParams_1.validateParams)(publicKey, serviceID, templateID);
    (0, validateTemplateParams_1.validateTemplateParams)(templateParams);
    if (templateParams && (0, isBlockedValueInParams_1.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0, blockedEmailError_1.blockedEmailError)());
    }
    if (await (0, isLimitRateHit_1.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, limitRateError_1.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};
exports.send = send;


/***/ }),

/***/ 7422:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendForm = void 0;
const store_1 = __webpack_require__(5938);
const sendPost_1 = __webpack_require__(8260);
const buildOptions_1 = __webpack_require__(1158);
const validateForm_1 = __webpack_require__(7265);
const validateParams_1 = __webpack_require__(2085);
const isHeadless_1 = __webpack_require__(1688);
const headlessError_1 = __webpack_require__(9466);
const isBlockedValueInParams_1 = __webpack_require__(7495);
const blockedEmailError_1 = __webpack_require__(7134);
const isLimitRateHit_1 = __webpack_require__(507);
const limitRateError_1 = __webpack_require__(5414);
const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0, buildOptions_1.buildOptions)(options);
    const publicKey = opts.publicKey || store_1.store.publicKey;
    const blockHeadless = opts.blockHeadless || store_1.store.blockHeadless;
    const storageProvider = store_1.store.storageProvider || opts.storageProvider;
    const blockList = { ...store_1.store.blockList, ...opts.blockList };
    const limitRate = { ...store_1.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0, isHeadless_1.isHeadless)(navigator)) {
        return Promise.reject((0, headlessError_1.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0, validateParams_1.validateParams)(publicKey, serviceID, templateID);
    (0, validateForm_1.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0, isBlockedValueInParams_1.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0, blockedEmailError_1.blockedEmailError)());
    }
    if (await (0, isLimitRateHit_1.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, limitRateError_1.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send-form', formData);
};
exports.sendForm = sendForm;


/***/ }),

/***/ 3348:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 5938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
const createWebStorage_1 = __webpack_require__(3765);
exports.store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0, createWebStorage_1.createWebStorage)(),
};


/***/ }),

/***/ 1158:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildOptions = void 0;
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};
exports.buildOptions = buildOptions;


/***/ }),

/***/ 3765:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createWebStorage = void 0;
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};
exports.createWebStorage = createWebStorage;


/***/ }),

/***/ 7495:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBlockedValueInParams = void 0;
const validateBlockListParams_1 = __webpack_require__(9801);
const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0, validateBlockListParams_1.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};
exports.isBlockedValueInParams = isBlockedValueInParams;


/***/ }),

/***/ 1688:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isHeadless = void 0;
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};
exports.isHeadless = isHeadless;


/***/ }),

/***/ 507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isLimitRateHit = void 0;
const validateLimitRateParams_1 = __webpack_require__(9366);
const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    (0, validateLimitRateParams_1.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};
exports.isLimitRateHit = isLimitRateHit;


/***/ }),

/***/ 9801:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateBlockListParams = void 0;
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};
exports.validateBlockListParams = validateBlockListParams;


/***/ }),

/***/ 7265:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateForm = void 0;
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};
exports.validateForm = validateForm;


/***/ }),

/***/ 9366:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateLimitRateParams = void 0;
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};
exports.validateLimitRateParams = validateLimitRateParams;


/***/ }),

/***/ 2085:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateParams = void 0;
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};
exports.validateParams = validateParams;


/***/ }),

/***/ 4844:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateTemplateParams = void 0;
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};
exports.validateTemplateParams = validateTemplateParams;


/***/ }),

/***/ 5840:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__CalSans_399708', '__CalSans_Fallback_399708'"},
	"className": "__className_399708"
};


/***/ })

};
;