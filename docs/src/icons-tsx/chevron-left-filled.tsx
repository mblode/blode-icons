import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.7071 3.2929c.3906.3905.3906 1.0237 0 1.4142l-5.8786 5.8787c-.781.781-.781 2.0474 0 2.8284l5.8786 5.8787c.3906.3905.3906 1.0237 0 1.4142s-1.0236.3905-1.4142 0l-5.8787-5.8787c-1.562-1.5621-1.562-4.0947 0-5.6568l5.8787-5.8787c.3906-.3905 1.0237-.3905 1.4142 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronLeftFilledIcon);
export default ForwardRef;
