import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InsertHtmlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 8 3.2929 3.2929c.3905.3905.3905 1.0237 0 1.4142L17 16M7 16l-3.2929-3.2929c-.3905-.3905-.3905-1.0237 0-1.4142L7 8" /></svg>;
const ForwardRef = forwardRef(InsertHtmlIcon);
export default ForwardRef;
