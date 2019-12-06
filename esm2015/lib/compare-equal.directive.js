/**
 * @fileoverview added by tsickle
 * Generated from: lib/compare-equal.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { compareEqual } from './compareEqual';
/** @type {?} */
const COMPARE_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => CompareEqualDirective)),
    multi: true
};
export class CompareEqualDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.el.nativeElement.style.color = 'red';
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return compareEqual(this.aaCompareEqual)(control);
    }
}
CompareEqualDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaCompareEqual]',
                providers: [COMPARE_EQUAL_VALIDATOR]
            },] }
];
/** @nocollapse */
CompareEqualDirective.ctorParameters = () => [
    { type: ElementRef }
];
CompareEqualDirective.propDecorators = {
    aaCompareEqual: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CompareEqualDirective.prototype.aaCompareEqual;
    /**
     * @type {?}
     * @private
     */
    CompareEqualDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1lcXVhbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hYS1jb21wYXJlLWVxdWFsLyIsInNvdXJjZXMiOlsibGliL2NvbXBhcmUtZXF1YWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFeEMsdUJBQXVCLEdBQVE7SUFDbkMsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFNRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBTWhDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBTkQsUUFBUSxDQUFDLE9BQXdCO1FBQy9CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7WUFSRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7Ozs7WUFibUIsVUFBVTs7OzZCQWUzQixLQUFLOzs7O0lBQU4sK0NBQXdCOzs7OztJQUtaLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29tcGFyZUVxdWFsIH0gZnJvbSAnLi9jb21wYXJlRXF1YWwnO1xuXG5jb25zdCBDT01QQVJFX0VRVUFMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21wYXJlRXF1YWxEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FhQ29tcGFyZUVxdWFsXScsXG4gIHByb3ZpZGVyczogW0NPTVBBUkVfRVFVQUxfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJlRXF1YWxEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICBASW5wdXQoKSBhYUNvbXBhcmVFcXVhbDtcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgcmV0dXJuIGNvbXBhcmVFcXVhbCh0aGlzLmFhQ29tcGFyZUVxdWFsKShjb250cm9sKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgfVxuXG5cbn1cbiJdfQ==