import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BranchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.5 3c-1.6569 0-3 1.3431-3 3 0 1.3062.8348 2.4175 2 2.8293v6.3414c-1.1652.4118-2 1.5231-2 2.8293 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293V15c0-1.1046.8954-2 2-2h5c2.2091 0 4-1.7909 4-4v-.1707c1.1652-.4118 2-1.523 2-2.8293 0-1.6569-1.3431-3-3-3s-3 1.3431-3 3c0 1.3062.8348 2.4175 2 2.8293V9c0 1.1046-.8954 2-2 2h-5a3.98 3.98 0 0 0-2 .5351V8.8293c1.1652-.4118 2-1.523 2-2.8293 0-1.6569-1.3431-3-3-3" /></svg>;
const ForwardRef = forwardRef(BranchFilledIcon);
export default ForwardRef;
