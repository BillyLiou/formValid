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
export function compareEqual(controlName) {
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
export function verifyMailFormat() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZUVxdWFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWEtY29tcGFyZS1lcXVhbC8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJlRXF1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLG9EQUFvRCxDQUFDOzs7OztBQUVuRixNQUFNLFVBQVUsWUFBWSxDQUFDLFdBQW1CO0lBQzlDOzs7O0lBQU8sVUFBQyxPQUF3QjtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRTtZQUM5RSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0I7SUFDOUI7Ozs7SUFBTyxVQUFDLE9BQXdCO1FBQzlCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzLCBWYWxpZGF0aW9uRXJyb3JzLCBSYW5nZVZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IG1haWxGb3JtYXQgPSBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOS4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVFcXVhbChjb250cm9sTmFtZTogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBpZiAoIWNvbnRyb2wucGFyZW50IHx8IGNvbnRyb2wucGFyZW50LmdldChjb250cm9sTmFtZSkudmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBjb21wYXJlRXF1YWw6IHRydWUgfTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlNYWlsRm9ybWF0KCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgaWYgKG1haWxGb3JtYXQudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IGVtYWlsRm9ybWF0OiB0cnVlIH07XG4gICAgfVxuICB9O1xufVxuIl19