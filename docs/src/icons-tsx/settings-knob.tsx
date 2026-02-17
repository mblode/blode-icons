import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SettingsKnobIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5355 15.5316c1.9527-1.9593 1.9527-5.134 0-7.0933-1.9128-1.9177-5.1611-1.9177-7.071 0-1.9527 1.9593-1.9527 5.134 0 7.0933 1.9513 1.9579 5.1182 1.9579 7.071 0m0 0-.6786-.6745-2.1427-2.1428M20 8.8v6.4c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C17.7202 20 16.8802 20 15.2 20H8.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.7202 4 16.8802 4 15.2V8.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 4 7.1198 4 8.8 4h6.4c1.6802 0 2.5202 0 3.162.327a3 3 0 0 1 1.311 1.311C20 6.2798 20 7.1198 20 8.8" /></svg>;
const ForwardRef = forwardRef(SettingsKnobIcon);
export default ForwardRef;
