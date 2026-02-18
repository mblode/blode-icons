import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UnicornIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10.5 11-.2147.8589a3.1796 3.1796 0 0 0 1.6627 3.6151l4.5395 2.2698c.337.1685.7087.2562 1.0854.2562C18.9134 18 20 16.9134 20 15.5729v-.7335a3.16 3.16 0 0 0-.4164-1.5682L16 7V4.5L13 6C6 2.5 2 12 2 18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 21c0-3.5-1-5.5-1-5.5" /><path fill="currentColor" d="m16.2521 7.2593 5.9734-3.4364c.4814-.277 1.0033.294.6682.731l-4.2165 5.4982c-.198.2582-.5905.268-.8018.0201l-1.7568-2.0618c-.202-.237-.1384-.5947.1335-.7511" /></svg>;
const ForwardRef = forwardRef(UnicornIcon);
export default createLucideIcon('UnicornIcon', ForwardRef);
