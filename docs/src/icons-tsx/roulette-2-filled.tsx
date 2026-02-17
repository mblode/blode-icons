import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Roulette2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.0072 2.8293C8.0938 1.8046 8.953 1 10 1h4c1.0471 0 1.9062.8046 1.9928 1.8293C19.5274 4.3703 22 7.8953 22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12c0-4.1048 2.4726-7.6297 6.0072-9.1707m1.1125 1.7046a7.99 7.99 0 0 0-2.0255 1.146l1.3703 1.3703c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L5.68 7.0943C4.8199 8.201 4.244 9.5396 4.0619 11H6c.5523 0 1 .4477 1 1s-.4477 1-1 1H4.0619c.1821 1.4607.758 2.7991 1.6182 3.9056l1.3701-1.3701c.3906-.3905 1.0237-.3905 1.4143 0s.3905 1.0237 0 1.4142l-1.3701 1.3702C8.2009 19.18 9.5393 19.756 11 19.9381V18c0-.5523.4477-1 1-1s1 .4477 1 1v1.9381c1.4607-.1821 2.7991-.7581 3.9057-1.6182l-1.3702-1.3702c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4143 0l1.3701 1.3701C19.18 15.7991 19.756 14.4607 19.9381 13H18c-.5523 0-1-.4477-1-1s.4477-1 1-1h1.9381c-.1821-1.4604-.758-2.799-1.6182-3.9057l-1.3702 1.3701c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L16.9058 5.68a7.99 7.99 0 0 0-2.0255-1.1461l-2.1732 2.1732c-.3905.3905-1.0237.3905-1.4142 0zM9 12c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Roulette2FilledIcon);
export default createLucideIcon('Roulette2FilledIcon', ForwardRef);
