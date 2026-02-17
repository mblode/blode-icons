import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DiscordFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.6361 5.0228a18.12 18.12 0 0 0-4.5388-1.4038c-.2145.3855-.4085.782-.5814 1.1881a16.81 16.81 0 0 0-5.037 0 12.6 12.6 0 0 0-.5815-1.188 18.25 18.25 0 0 0-4.5422 1.4072C1.4828 9.2985.704 13.4646 1.0934 17.5716A18.26 18.26 0 0 0 6.66 20.3809a13.5 13.5 0 0 0 1.1923-1.9326 11.8 11.8 0 0 1-1.8775-.901c.1575-.1148.3115-.2331.4603-.3479A13.02 13.02 0 0 0 12 18.4491c1.9238 0 3.8239-.4267 5.5648-1.2497.1506.1235.3046.2418.4603.3479a11.86 11.86 0 0 1-1.8809.9028 13.4 13.4 0 0 0 1.1922 1.9308 18.18 18.18 0 0 0 5.5701-2.8075c.4568-4.7628-.7804-8.8907-3.2704-12.5506M8.3454 15.0459c-1.085 0-1.9813-.9898-1.9813-2.2075s.8652-2.2161 1.9779-2.2161 2.002.9985 1.983 2.2161c-.0191 1.2177-.8739 2.2075-1.9796 2.2075m7.3091 0c-1.0867 0-1.9795-.9898-1.9795-2.2075s.8651-2.2161 1.9795-2.2161 1.9969.9985 1.9778 2.2161-.8721 2.2075-1.9778 2.2075" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(DiscordFilledIcon);
export default createLucideIcon('DiscordFilledIcon', ForwardRef);
