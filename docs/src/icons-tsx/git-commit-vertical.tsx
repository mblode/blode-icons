import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GitCommitVerticalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M12 3v6" /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M12 15v6" /></svg>;
const ForwardRef = forwardRef(GitCommitVerticalIcon);
export default ForwardRef;
