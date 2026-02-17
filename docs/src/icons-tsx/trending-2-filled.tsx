import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Trending2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.8642 18.9959 9.879 9.3911c-.578-1.8596-3.1943-1.885-3.8073-.036l-1.1804 3.5606-.9687-2.3131c-.2133-.5095-.7992-.7495-1.3086-.5362s-.7495.7993-.5361 1.3087l.9694 2.315c.7157 1.709 3.1597 1.6125 3.742-.1438l1.1803-3.5602 2.9852 9.605c.6065 1.9516 3.3917 1.8479 3.8565-.1385l3.3812-14.4487 1.8642 5.3107c.1829.5211.7537.7952 1.2748.6123s.7952-.7536.6123-1.2748L20.079 4.3396c-.6644-1.8928-3.3777-1.7408-3.8336.2077z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Trending2FilledIcon);
export default createLucideIcon('Trending2FilledIcon', ForwardRef);
