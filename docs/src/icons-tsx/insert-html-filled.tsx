import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InsertHtmlFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.707 7.2929c.3905.3905.3905 1.0237 0 1.4142L4.414 12l3.293 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4143 0L3 13.4142c-.7811-.781-.7811-2.0474 0-2.8284l3.2928-3.293c.3906-.3904 1.0237-.3904 1.4143 0m8.5857 0c.3906-.3905 1.0237-.3905 1.4143 0l3.2928 3.2929c.7811.781.7811 2.0474 0 2.8284l-3.2928 3.2929c-.3906.3905-1.0237.3905-1.4143 0s-.3905-1.0237 0-1.4142L19.5856 12l-3.2929-3.2929c-.3905-.3905-.3905-1.0237 0-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(InsertHtmlFilledIcon);
export default createLucideIcon('InsertHtmlFilledIcon', ForwardRef);
