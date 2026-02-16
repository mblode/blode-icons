import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AppleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.0035 7.1581a4.757 4.757 0 0 0-2.273 4.0016 4.63 4.63 0 0 0 2.8174 4.2464 11.06 11.06 0 0 1-1.4428 2.9807c-.8982 1.293-1.8374 2.5859-3.2664 2.5859s-1.7966-.8302-3.4435-.8302c-1.606 0-2.1777.8575-3.4843.8575s-2.2184-1.1978-3.2665-2.6677a12.894 12.894 0 0 1-2.1913-6.9549c0-4.0831 2.6541-6.2471 5.2672-6.2471 1.3883 0 2.5453.9118 3.4163.9118.8303 0 2.1233-.9664 3.7021-.9664a4.952 4.952 0 0 1 4.1648 2.0824m-4.9134-3.8108A4.693 4.693 0 0 0 16.2062.4217 2.02 2.02 0 0 0 16.1654 0a4.703 4.703 0 0 0-3.0897 1.5925 4.564 4.564 0 0 0-1.1569 2.8445c.0005.128.0142.2558.0409.381.0942.0179.1899.027.2858.0274a4.077 4.077 0 0 0 2.8446-1.4981" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AppleFilledIcon);
export default ForwardRef;
