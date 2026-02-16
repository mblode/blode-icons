import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CodeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm7.7071 1.7929c.3905.3905.3905 1.0237 0 1.4142L8.9142 12l1.7929 1.7929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L7.5 13.4142c-.781-.781-.781-2.0474 0-2.8284l1.7929-1.793c.3905-.3904 1.0237-.3904 1.4142 0m4 0c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L15.0858 12l-1.7929 1.7929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L16.5 13.4142c.781-.781.781-2.0474 0-2.8284z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CodeFilledIcon);
export default ForwardRef;
