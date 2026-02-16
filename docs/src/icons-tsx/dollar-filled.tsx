import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DollarFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m10-6.5c.5523 0 1 .4477 1 1v.6237c.804.2034 1.5135.6509 1.9759 1.2903.3236.4476.2231 1.0727-.2244 1.3964-.4475.3236-1.0727.2231-1.3963-.2244C13.1379 9.2855 12.6534 9 12 9h-.2778c-.8948 0-1.2222.545-1.2222.7778v.0763c0 .1973.1491.5285.6525.7299l2.4377.9751c1.067.4267 1.9098 1.3795 1.9098 2.5868 0 1.473-1.177 2.4685-2.5 2.7632V17.5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-.6237c-.804-.2034-1.5135-.6509-1.9759-1.2903-.3236-.4476-.2231-1.0727.2244-1.3963s1.0727-.2232 1.3963.2243c.2173.3005.7018.586 1.3552.586h.1824c.9474 0 1.3176-.5791 1.3176-.8541 0-.1973-.1491-.5285-.6525-.7299l-2.4377-.9751C9.3428 12.0142 8.5 11.0614 8.5 9.8541v-.0763c0-1.464 1.1894-2.4388 2.5-2.7045V6.5c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DollarFilledIcon);
export default ForwardRef;
