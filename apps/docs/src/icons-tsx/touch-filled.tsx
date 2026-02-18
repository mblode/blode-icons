import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TouchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.25 8.25V11h3.2885C18.4502 11 20 12.5498 20 14.4615v1.7693C20 19.417 17.417 22 14.2308 22h-1.0643a4.616 4.616 0 0 1-3.8656-2.0937l-3.0196-4.6288a1 1 0 0 1-.0936-.9109l.0864-.2208c.4842-1.237 1.91-1.8108 3.116-1.2542l.3599.1661V8.25c0-.9665.7835-1.75 1.75-1.75s1.75.7835 1.75 1.75" /><path fill="currentColor" fillRule="evenodd" d="M11.5 4c-2.7614 0-5 2.2386-5 5 0 .285.0237.5638.0692.8345.0913.5447-.2761 1.0603-.8208 1.1517s-1.0603-.2761-1.1517-.8207A7.04 7.04 0 0 1 4.5 9c0-3.866 3.134-7 7-7 3.4695 0 6.3477 2.5231 6.9033 5.8345.0913.5447-.2761 1.0603-.8208 1.1517s-1.0603-.276-1.1517-.8207C16.0342 5.8015 13.9765 4 11.5 4" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TouchFilledIcon);
export default createLucideIcon('TouchFilledIcon', ForwardRef);
