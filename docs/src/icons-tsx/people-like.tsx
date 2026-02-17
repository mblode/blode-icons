import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleLikeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.9997 13.0602a8.2 8.2 0 0 0-1-.0602c-2.9785 0-5.3257 1.5539-6.5667 3.8621C4.596 18.4191 6.0272 20 7.795 20h3.7047m6.5 1.0833c.25 0 3-1.4166 3-3.3333 0-1.3333-.8333-2-1.6667-2s-1.3333.5-1.3333.5-.5-.5-1.3333-.5c-.8334 0-1.6667.6667-1.6667 2 0 1.9167 2.75 3.3333 3 3.3333M15.4997 6.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5" /></svg>;
const ForwardRef = forwardRef(PeopleLikeIcon);
export default createLucideIcon('PeopleLikeIcon', ForwardRef);
