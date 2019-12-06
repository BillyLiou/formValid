/**
 * @fileoverview added by tsickle
 * Generated from: lib/compare-equal.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { compareEqual } from './compareEqual';
/** @type {?} */
var COMPARE_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
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
        { type: Directive, args: [{
                    selector: '[aaCompareEqual]',
                    providers: [COMPARE_EQUAL_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    CompareEqualDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CompareEqualDirective.propDecorators = {
        aaCompareEqual: [{ type: Input }]
    };
    return CompareEqualDirective;
}());
export { CompareEqualDirective };
if (false) {
    /** @type {?} */
    CompareEqualDirective.prototype.aaCompareEqual;
    /**
     * @type {?}
     * @private
     */
    CompareEqualDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1lcXVhbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hYS1jb21wYXJlLWVxdWFsLyIsInNvdXJjZXMiOlsibGliL2NvbXBhcmUtZXF1YWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFeEMsdUJBQXVCLEdBQVE7SUFDbkMsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFVRSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFORCx3Q0FBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDL0IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2dCQVJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckM7Ozs7Z0JBYm1CLFVBQVU7OztpQ0FlM0IsS0FBSzs7SUFVUiw0QkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLHFCQUFxQjs7O0lBQ2hDLCtDQUF3Qjs7Ozs7SUFLWixtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvbXBhcmVFcXVhbCB9IGZyb20gJy4vY29tcGFyZUVxdWFsJztcblxuY29uc3QgQ09NUEFSRV9FUVVBTF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tcGFyZUVxdWFsRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thYUNvbXBhcmVFcXVhbF0nLFxuICBwcm92aWRlcnM6IFtDT01QQVJFX0VRVUFMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyZUVxdWFsRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgQElucHV0KCkgYWFDb21wYXJlRXF1YWw7XG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIHJldHVybiBjb21wYXJlRXF1YWwodGhpcy5hYUNvbXBhcmVFcXVhbCkoY29udHJvbCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gIH1cblxuXG59XG4iXX0=