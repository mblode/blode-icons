import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnimationOvershootFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m5.0161 19.9727-.0002-.0113-.001-.0371-.003-.1477a61 61 0 0 1-.0081-.5652 85 85 0 0 1 .0048-2.0081c.0232-1.656.1005-3.826.3148-5.9105.2173-2.1136.566-4.0312 1.087-5.2445.266-.6196.5143-.9031.6731-1.0033l.0031-.002c.061-.0386.1534-.097.445.063 2.273 1.2458 3.9861 2.0341 5.8605 2.4965 1.8691.461 3.8406.5836 6.6079.5836.5523 0 1-.4478 1-1s-.4477-1-1-1c-2.727 0-4.5017-.124-6.1289-.5254-1.6221-.4001-3.1556-1.0903-5.378-2.3086-.8273-.4534-1.7046-.4857-2.4767.0013-.6742.4254-1.1245 1.1622-1.4437 1.9057-.6497 1.5127-1.019 3.692-1.2388 5.8291-.2227 2.1662-.3015 4.401-.3251 6.0871a87 87 0 0 0-.005 2.0559 63 63 0 0 0 .0117.7401l.001.041.0003.0138c0 .0003 0 .0013.9997-.0261l-.9996.0274c.0151.5521.475.9874 1.027.9723s.9874-.475.9722-1.027" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(AnimationOvershootFilledIcon);
export default createLucideIcon('AnimationOvershootFilledIcon', ForwardRef);
