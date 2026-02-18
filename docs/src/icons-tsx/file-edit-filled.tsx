import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileEditFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2h4v5c0 1.6569 1.3431 3 3 3h5v8c0 2.2091-1.7909 4-4 4H8.7426l.3787-.3787A3 3 0 0 0 10 19.5v-5.9412c0-2.4852-2.0147-4.5-4.5-4.5-.526 0-1.0308.0903-1.5.2561V6c0-2.2091 1.7909-4 4-4" /><path fill="currentColor" d="M14 2.5858 19.4142 8H15c-.5523 0-1-.4477-1-1z" /><path fill="currentColor" fillRule="evenodd" d="M5.5 13.0588a.5.5 0 0 0-.5.5v5.527l.5.5.5-.5v-5.527a.5.5 0 0 0-.5-.5m-2.5.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5V19.5a1 1 0 0 1-.2929.7071l-1.5 1.5a1 1 0 0 1-1.4142 0l-1.5-1.5A1 1 0 0 1 3 19.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(FileEditFilledIcon);
export default createLucideIcon('FileEditFilledIcon', ForwardRef);
