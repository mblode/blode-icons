import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BlueskyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.0012 11.4535c-.9224-1.9145-3.4355-5.4822-5.7716-7.242-1.6856-1.2694-4.4171-2.252-4.4171.874 0 .6241.3566 5.2447.5661 5.9948.7272 2.6077 3.3779 3.2728 5.7356 2.8704-4.1213.7036-5.1695 3.0343-2.9054 5.365 4.3 4.4266 6.1804-1.1106 6.6619-2.5294.0891-.262.1305-.3836.1305-.276 0-.1076.0414.014.1305.276.4815 1.4188 2.3619 6.956 6.6619 2.5294 2.2641-2.3307 1.2159-4.6614-2.9054-5.365 2.3577.4024 5.0084-.2627 5.7356-2.8704.2095-.7501.5661-5.3707.5661-5.9947 0-3.126-2.7312-2.1435-4.4171-.874-2.3361 1.7597-4.8492 5.3274-5.7716 7.2419" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BlueskyFilledIcon);
export default createLucideIcon('BlueskyFilledIcon', ForwardRef);
