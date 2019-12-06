/**
 * @fileoverview added by tsickle
 * Generated from: lib/valid-mail.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { verifyMailFormat } from './compareEqual';
/** @type {?} */
var COMPARE_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
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
        { type: Directive, args: [{
                    selector: '[aaValidMail]',
                    providers: [COMPARE_EQUAL_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    ValidMailDirective.ctorParameters = function () { return []; };
    return ValidMailDirective;
}());
export { ValidMailDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQtbWFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hYS1jb21wYXJlLWVxdWFsLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkLW1haWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDN0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTVDLHVCQUF1QixHQUFRO0lBQ25DLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLEVBQUM7SUFDakQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBU0U7SUFBZ0IsQ0FBQzs7Ozs7SUFKakIscUNBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQy9CLE9BQU8sZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNyQzs7OztJQVFELHlCQUFDO0NBQUEsQUFYRCxJQVdDO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdmVyaWZ5TWFpbEZvcm1hdCB9IGZyb20gJy4vY29tcGFyZUVxdWFsJztcblxuY29uc3QgQ09NUEFSRV9FUVVBTF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVmFsaWRNYWlsRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thYVZhbGlkTWFpbF0nLFxuICBwcm92aWRlcnM6IFtDT01QQVJFX0VRVUFMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgVmFsaWRNYWlsRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgcmV0dXJuIHZlcmlmeU1haWxGb3JtYXQoKShjb250cm9sKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==