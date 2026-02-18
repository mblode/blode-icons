import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BlankPageLandscapeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 7c0-1.6569 1.3432-3 3-3h13c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H8.1429a4.43 4.43 0 0 1-2.6572-.8857A8.714 8.714 0 0 1 2 12.1429zm6.5 11c-.3668 0-.5695-.1176-.7067-.2612-.1598-.1672-.3-.4476-.371-.8501-.148-.8387.0684-1.8219.4097-2.334a1 1 0 0 0-.1249-1.2618l-1.071-1.0711c-.9275-.9274-1.5714-1.6616-1.9962-2.4434C4.2302 9.0243 4 8.178 4 7c0-.5523.4477-1 1-1h13c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BlankPageLandscapeFilledIcon);
export default createLucideIcon('BlankPageLandscapeFilledIcon', ForwardRef);
