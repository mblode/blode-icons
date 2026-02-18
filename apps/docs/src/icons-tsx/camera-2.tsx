import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Camera2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m15.4649 6-.8656.5007A1 1 0 0 0 15.4649 7zM8.5351 6v1a1 1 0 0 0 .8656-.4993zM2 9v8h2V9zm4 12h12v-2H6zm16-4V9h-2v8zM12 5c1.1092 0 2.079.6014 2.5993 1.5007l1.7312-1.0014C15.4675 4.0073 13.852 3 12 3zM9.4007 6.5007C9.921 5.6014 10.8908 5 12 5V3c-1.852 0-3.4675 1.0074-4.3305 2.4993zM18 5h-2.5351v2H18zM8.5351 5H6v2h2.5351zM22 9c0-2.2091-1.7909-4-4-4v2c1.1046 0 2 .8954 2 2zm-4 12c2.2091 0 4-1.7909 4-4h-2c0 1.1046-.8954 2-2 2zM2 17c0 2.2091 1.7909 4 4 4v-2c-1.1046 0-2-.8954-2-2zm2-8c0-1.1046.8954-2 2-2V5C3.7909 5 2 6.7909 2 9zm10 3.5c0 1.1046-.8954 2-2 2v2c2.2091 0 4-1.7909 4-4zm-2 2c-1.1046 0-2-.8954-2-2H8c0 2.2091 1.7909 4 4 4zm-2-2c0-1.1046.8954-2 2-2v-2c-2.2091 0-4 1.7909-4 4zm2-2c1.1046 0 2 .8954 2 2h2c0-2.2091-1.7909-4-4-4z" /></svg>;
const ForwardRef = forwardRef(Camera2Icon);
export default createLucideIcon('Camera2Icon', ForwardRef);
