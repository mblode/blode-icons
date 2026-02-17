import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BellFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C8.064 2 4.736 4.9137 4.2158 8.8152l-.7541 5.6561c-.3165 2.3737 1.5082 4.4856 3.8916 4.528C8.2573 20.7476 9.9611 22 12 22s3.7427-1.2524 4.6467-3.0007c2.3834-.0424 4.2082-2.1543 3.8917-4.528l-.7542-5.6561C19.264 4.9137 15.936 2 12 2m2.2218 17H9.7783c.6089.6373 1.3985 1 2.2217 1 .8233 0 1.6128-.3627 2.2218-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BellFilledIcon);
export default ForwardRef;
