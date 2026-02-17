import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronGrabberVerticalFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.1768 6.591a.25.25 0 0 0-.3536 0l-3.116 3.1162c-.3906.3905-1.0238.3905-1.4143 0s-.3905-1.0237 0-1.4143l3.1161-3.116c.8787-.8788 2.3033-.8788 3.182 0l3.1161 3.116c.3905.3906.3905 1.0237 0 1.4143s-1.0237.3905-1.4142 0zm-4.884 7.7019c.3906-.3905 1.0238-.3905 1.4143 0l3.1161 3.1162a.25.25 0 0 0 .3536 0l3.1161-3.1162c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4143l-3.1161 3.1161c-.8787.8787-2.3033.8787-3.182 0l-3.1161-3.1161c-.3905-.3906-.3905-1.0237 0-1.4143" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronGrabberVerticalFilledIcon);
export default createLucideIcon('ChevronGrabberVerticalFilledIcon', ForwardRef);
