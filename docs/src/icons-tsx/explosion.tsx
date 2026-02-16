import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ExplosionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m12 3 .9036 1.754c.6712 1.3027 2.1854 1.9299 3.5811 1.4833l1.8793-.6013-.6013 1.8793c-.4466 1.3957.1806 2.9099 1.4833 3.5811L21 12l-1.3514.6962c-1.47.7574-2.05 2.5616-1.2965 4.0337l1.7005 3.3227-3.3227-1.7005c-1.4721-.7535-3.2763-.1735-4.0337 1.2965L12 21l-.9036-1.754c-.6712-1.3027-2.1854-1.9299-3.5811-1.4833l-1.8793.6013.6013-1.8793c.4466-1.3957-.1806-2.9099-1.4833-3.5811L3 12l1.3514-.6962c1.47-.7574 2.05-2.5616 1.2965-4.0337L3.9474 3.9474 7.27 5.6479c1.4721.7535 3.2763.1735 4.0337-1.2965z" /></svg>;
const ForwardRef = forwardRef(ExplosionIcon);
export default ForwardRef;
