(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('aa-compare-equal', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['aa-compare-equal'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/compareEqual.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var mailFormat = new RegExp('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    /**
     * @param {?} controlName
     * @return {?}
     */
    function compareEqual(controlName) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (!control.parent || control.parent.get(controlName).value === control.value) {
                return null;
            }
            else {
                return { compareEqual: true };
            }
        });
    }
    /**
     * @return {?}
     */
    function verifyMailFormat() {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (mailFormat.test(control.value)) {
                return null;
            }
            else {
                return { emailFormat: true };
            }
        });
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/compare-equal.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPARE_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return CompareEqualDirective; })),
        multi: true
    };
    var CompareEqualDirective = /** @class */ (function () {
        function CompareEqualDirective(el) {
            this.el = el;
            this.el.nativeElement.style.color = 'red';
        }
        /**
         * @param {?} control
         * @return {?}
         */
        CompareEqualDirective.prototype.validate = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            return compareEqual(this.aaCompareEqual)(control);
        };
        CompareEqualDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[aaCompareEqual]',
                        providers: [COMPARE_EQUAL_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        CompareEqualDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        CompareEqualDirective.propDecorators = {
            aaCompareEqual: [{ type: core.Input }]
        };
        return CompareEqualDirective;
    }());
    if (false) {
        /** @type {?} */
        CompareEqualDirective.prototype.aaCompareEqual;
        /**
         * @type {?}
         * @private
         */
        CompareEqualDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/valid-mail.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPARE_EQUAL_VALIDATOR$1 = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return ValidMailDirective; })),
        multi: true
    };
    var ValidMailDirective = /** @class */ (function () {
        function ValidMailDirective() {
        }
        /**
         * @param {?} control
         * @return {?}
         */
        ValidMailDirective.prototype.validate = /**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            return verifyMailFormat()(control);
        };
        ValidMailDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[aaValidMail]',
                        providers: [COMPARE_EQUAL_VALIDATOR$1]
                    },] }
        ];
        /** @nocollapse */
        ValidMailDirective.ctorParameters = function () { return []; };
        return ValidMailDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/aa-compare-equal.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AaCompareEqualModule = /** @class */ (function () {
        function AaCompareEqualModule() {
        }
        AaCompareEqualModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CompareEqualDirective, ValidMailDirective],
                        imports: [
                            forms.FormsModule
                        ],
                        exports: [CompareEqualDirective, ValidMailDirective]
                    },] }
        ];
        return AaCompareEqualModule;
    }());

    exports.AaCompareEqualModule = AaCompareEqualModule;
    exports.ɵa = CompareEqualDirective;
    exports.ɵb = ValidMailDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=aa-compare-equal.umd.js.map
