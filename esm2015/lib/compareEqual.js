/**
 * @fileoverview added by tsickle
 * Generated from: lib/compareEqual.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const mailFormat = new RegExp('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
/**
 * @param {?} controlName
 * @return {?}
 */
export function compareEqual(controlName) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
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
export function verifyMailFormat() {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        if (mailFormat.test(control.value)) {
            return null;
        }
        else {
            return { emailFormat: true };
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZUVxdWFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWEtY29tcGFyZS1lcXVhbC8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJlRXF1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O01BRU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLG9EQUFvRCxDQUFDOzs7OztBQUVuRixNQUFNLFVBQVUsWUFBWSxDQUFDLFdBQW1CO0lBQzlDOzs7O0lBQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzlFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDLEVBQUM7QUFDSixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQjtJQUM5Qjs7OztJQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycywgVmFsaWRhdGlvbkVycm9ycywgUmFuZ2VWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBtYWlsRm9ybWF0ID0gbmV3IFJlZ0V4cCgnXlthLXpBLVowLTkuLV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlRXF1YWwoY29udHJvbE5hbWU6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgaWYgKCFjb250cm9sLnBhcmVudCB8fCBjb250cm9sLnBhcmVudC5nZXQoY29udHJvbE5hbWUpLnZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgY29tcGFyZUVxdWFsOiB0cnVlIH07XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5TWFpbEZvcm1hdCgpOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGlmIChtYWlsRm9ybWF0LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBlbWFpbEZvcm1hdDogdHJ1ZSB9O1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==