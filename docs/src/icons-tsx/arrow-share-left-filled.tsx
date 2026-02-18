import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowShareLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.0001 5.1192c0-1.769-2.1278-2.667-3.3952-1.433L1.5384 10.567c-.8064.7851-.8064 2.0807 0 2.8659l7.0665 6.8805c1.2674 1.2341 3.3952.3361 3.3952-1.4329v-2.373c3.418.0541 5.3255.3928 6.5123.9329 1.1965.5445 1.7335 1.3242 2.4064 2.6368.558 1.0884 2.0905.5833 2.0791-.5152-.0426-4.1311-.6994-7.2466-2.6793-9.2872-1.8301-1.8863-4.5886-2.65-8.3185-2.7605z" /></svg>;
const ForwardRef = forwardRef(ArrowShareLeftFilledIcon);
export default createLucideIcon('ArrowShareLeftFilledIcon', ForwardRef);
