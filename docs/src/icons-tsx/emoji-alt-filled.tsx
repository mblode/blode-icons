import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmojiAltFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m5.88-8.8011c.1099-.5412-.2398-1.069-.7811-1.1789s-1.0691.2398-1.1789.7811c-.3178 1.5655-1.5534 2.8011-3.1189 3.1189-.5413.1098-.891.6377-.7811 1.1789s.6377.891 1.1789.7811c2.3527-.4776 4.2035-2.3284 4.6811-4.6811M10 9.5c0 .8284-.6716 1.5-1.5 1.5S7 10.3284 7 9.5 7.6716 8 8.5 8s1.5.6716 1.5 1.5m3.5 1.5c.8284 0 1.5-.6716 1.5-1.5S14.3284 8 13.5 8 12 8.6716 12 9.5s.6716 1.5 1.5 1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(EmojiAltFilledIcon);
export default createLucideIcon('EmojiAltFilledIcon', ForwardRef);
