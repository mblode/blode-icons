import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Airdrop2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m3.3822 11.7863 5.592 4.3937C7.8224 16.599 7 17.7035 7 19c0 1.6569 1.3431 3 3 3h4c1.6569 0 3-1.3431 3-3 0-1.2965-.8225-2.401-1.9741-2.82l5.5919-4.3937A1 1 0 0 0 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9a1 1 0 0 0 .3822.7863m13.7142-.0393q.1545.012.3038.024L13 15.2282v-3.7134c1.3262.0361 2.8256.1334 4.0964.2322m-10.1928 0c1.2708-.0988 2.7702-.1961 4.0964-.2322v3.7134L6.5998 11.771q.1494-.012.3038-.024" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Airdrop2FilledIcon);
export default createLucideIcon('Airdrop2FilledIcon', ForwardRef);
