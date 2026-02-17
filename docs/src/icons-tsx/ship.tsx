import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12V8c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1v4M3 20l3.4186-.7597m0 0 .4306-.0957a3 3 0 0 1 1.3016 0l3.1984.7108c.4286.0952.873.0952 1.3016 0l3.1984-.7108a3 3 0 0 1 1.3016 0l.4306.0957m-11.1628 0c-.9347-1.2826-1.5124-2.4185-1.8891-3.6386-.4476-1.4498.5776-2.8785 2.0495-3.2465l4.6934-1.1733a3 3 0 0 1 1.4552 0l4.6934 1.1733c1.4719.368 2.4971 1.7967 2.0495 3.2465-.3767 1.2201-.9543 2.356-1.8891 3.6386m0 0L21 20M10 7V3h4v4" /></svg>;
const ForwardRef = forwardRef(ShipIcon);
export default ForwardRef;
