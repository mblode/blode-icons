import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const XFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.793 5.7929c.3905-.3905 1.0235-.3905 1.414 0s.3905 1.0235 0 1.414L13.414 12l4.793 4.793c.3905.3905.3905 1.0235 0 1.4141s-1.0235.3905-1.414 0L12 13.414l-4.793 4.793c-.3905.3905-1.0235.3905-1.414 0-.3906-.3906-.3906-1.0236 0-1.4141l4.7929-4.793-4.793-4.793c-.3905-.3905-.3905-1.0235 0-1.414s1.0236-.3905 1.4141 0L12 10.5859z" /></svg>;
const ForwardRef = forwardRef(XFilledIcon);
export default createLucideIcon('XFilledIcon', ForwardRef);
