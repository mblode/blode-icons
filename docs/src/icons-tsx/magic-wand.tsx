import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MagicWandIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.7726 12.2271.85 3.5179c.1045.4324.679.5234.912.1445l1.7355-2.8229a.5.5 0 0 1 .4645-.2367l3.3039.2552c.4434.0343.7075-.4841.4192-.8227l-2.1485-2.523a.5.5 0 0 1-.0815-.5147l1.2636-3.0634c.1696-.4111-.2417-.8225-.6529-.6529l-3.0633 1.2637a.5.5 0 0 1-.5148-.0816l-2.523-2.1484c-.3386-.2884-.8569-.0243-.8227.4192l.2552 3.3039a.5.5 0 0 1-.2366.4644l-2.823 1.7356c-.3788.2329-.2878.8075.1445.9119zm0 0L4 19.9997" /></svg>;
const ForwardRef = forwardRef(MagicWandIcon);
export default ForwardRef;
