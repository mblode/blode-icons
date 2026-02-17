import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowBottomRightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.7587 3h6.4826c.805 0 1.4693 0 2.0105.0442.5621.046 1.0788.1445 1.5642.3918a4 4 0 0 1 1.748 1.748c.2473.4854.3459 1.002.3918 1.5642C21 7.2894 21 7.9537 21 8.7587V9c0 .5523-.4477 1-1 1s-1-.4477-1-1v-.2c0-.8566-.0008-1.4389-.0375-1.889-.0359-.4384-.1008-.6626-.1805-.819a2 2 0 0 0-.874-.874c-.1564-.0797-.3806-.1446-.819-.1804C16.6389 5.0008 16.0566 5 15.2 5H8.8c-.8566 0-1.4389.0008-1.889.0376-.4384.0358-.6626.1007-.819.1804a2 2 0 0 0-.874.874c-.0797.1564-.1446.3806-.1804.819C5.0008 7.3611 5 7.9434 5 8.8v6.4c0 .8566.0008 1.4389.0376 1.889.0358.4384.1007.6626.1804.819.1917.3763.4977.6823.874.874.1564.0797.3806.1446.819.1804C7.3611 18.9992 7.9434 19 8.8 19H9c.5523 0 1 .4477 1 1s-.4477 1-1 1h-.2413c-.805 0-1.4693 0-2.0105-.0442-.5621-.0459-1.0788-.1445-1.5642-.3918a4 4 0 0 1-1.748-1.748c-.2473-.4854-.3459-1.0021-.3918-1.5642C3 16.7106 3 16.0463 3 15.2413V8.7587c0-.805 0-1.4693.0442-2.0105.046-.5621.1445-1.0788.3918-1.5642a4 4 0 0 1 1.748-1.748c.4854-.2473 1.002-.3459 1.5642-.3918C7.2894 3 7.9537 3 8.7587 3m1.5342 7.2929c.3905-.3905 1.0237-.3905 1.4142 0L19 17.5858V14c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.5858l-7.2929-7.2929c-.3905-.3905-.3905-1.0237 0-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SquareArrowBottomRightFilledIcon);
export default createLucideIcon('SquareArrowBottomRightFilledIcon', ForwardRef);
