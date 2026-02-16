import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CirclePlaceholderOffIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.1259 3.4687A8.99 8.99 0 0 1 12 3c4.9706 0 9 4.0294 9 9 0 1.005-.1647 1.9716-.4687 2.8741M3.75 3.75l16.5 16.5M12 21c-4.9706 0-9-4.0294-9-9 0-2.4853 1.0074-4.7353 2.636-6.364l12.728 12.728C16.7353 19.9926 14.4853 21 12 21" /></svg>;
const ForwardRef = forwardRef(CirclePlaceholderOffIcon);
export default ForwardRef;
