import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplaneFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.1569 2a5 5 0 0 0-3.5356 1.4645l-2.3828 2.3828-6.1228-2.161a4 4 0 0 0-4.1597.9435l-.663.663a1 1 0 0 0 .0973 1.4998l5.5973 4.3056L7.0858 12h-.3431a4 4 0 0 0-2.8285 1.1716L2.293 14.7929a1 1 0 0 0 .356 1.6434l2.7232 1.0212a2 2 0 0 1 1.1704 1.1704l1.0212 2.7232a1 1 0 0 0 1.6434.356l1.6213-1.6213A4 4 0 0 0 12 17.2574v-.3432l.9018-.9018 4.3056 5.5973a1 1 0 0 0 1.4997.0974l.6631-.6631a4 4 0 0 0 .9436-4.1597l-2.161-6.1228 2.3828-2.3828A5 5 0 0 0 22 4.843V3c0-.5523-.4477-1-1-1z" /></svg>;
const ForwardRef = forwardRef(AirplaneFilledIcon);
export default createLucideIcon('AirplaneFilledIcon', ForwardRef);
