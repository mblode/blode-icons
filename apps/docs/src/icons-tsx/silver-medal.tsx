import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SilverMedalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={10} r={7.5} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16.5V22l4-1 4 1v-5.5" /><path fill="currentColor" d="M10.128 13.4996a.9132.9132 0 0 1-.6015-1.6003L12 9.7336q.3133-.2835.5332-.5183.22-.2386.3356-.4773.1156-.2424.1156-.5257 0-.317-.1379-.5407-.138-.2275-.3804-.3505t-.5555-.123q-.317 0-.5556.1305-.2386.1267-.3729.3691c-.1596.2965-.4034.5891-.7401.5891h-.2648c-.4829 0-.8961-.402-.7472-.8614a2.22 2.22 0 0 1 .2233-.4846q.3505-.5668.9844-.8725.6376-.3095 1.4803-.3095.8688 0 1.5101.2908.6414.291.9919.8129.3542.5183.3542 1.2044 0 .4362-.1753.865-.1752.4289-.6301.947-.4511.5184-1.2827 1.2418l-.9135.8426v.0485h2.3509a.7439.7439 0 1 1 0 1.4878z" /></svg>;
const ForwardRef = forwardRef(SilverMedalIcon);
export default createLucideIcon('SilverMedalIcon', ForwardRef);
