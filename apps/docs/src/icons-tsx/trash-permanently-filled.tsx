import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrashPermanentlyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1.5c2.2394 0 4.1331 1.4715 4.7705 3.5H20.5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-.5322l-.7774 11.2754c-.1447 2.0971-1.8881 3.7244-3.9902 3.7246H8.7998c-2.102-.0002-3.8455-1.6275-3.9902-3.7246L4.0322 7H3.5c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.7295C7.8669 2.9715 9.7605 1.5 12 1.5m-1.3691 8.7246c-.3928-.3203-.9718-.2978-1.338.0684-.366.3661-.3886.9451-.0683 1.3379l.0684.0761L10.5859 13l-1.293 1.293c-.3905.3905-.3905 1.0235 0 1.414.3906.3906 1.0236.3906 1.4141 0L12 14.4141l1.293 1.2929.0761.0684c.3928.3203.9718.2977 1.3379-.0684s.3887-.9451.0684-1.3379l-.0684-.0761L13.4141 13l1.2929-1.293.0684-.0761c.3203-.3928.2977-.9718-.0684-1.3379s-.9451-.3887-1.3379-.0684l-.0761.0684L12 11.5859l-1.293-1.2929zM12 3.5c-1.1098 0-2.0798.6034-2.5986 1.5h5.1972C14.0798 4.1034 13.1098 3.5 12 3.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TrashPermanentlyFilledIcon);
export default createLucideIcon('TrashPermanentlyFilledIcon', ForwardRef);
