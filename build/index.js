"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
const clsx_1 = __importDefault(require("clsx"));
const tailwind_merge_1 = require("tailwind-merge");
/**
 * Combines multiple class names or conditional class names and merges Tailwind CSS classes efficiently
 * @param classes - Array of class names, objects, or falsy values
 * @returns Merged and deduplicated className string
 * @example
 * cn('px-2', 'py-1', { 'bg-red-500': isError })
 * // Returns: "px-2 py-1 bg-red-500" (if isError is true)
 */
function cn(...classes) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.default)(...classes));
}
