import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IcebowlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15.0893 8.6636a.5.5 0 0 1 .3638.6062l-.242.9693a.5.5 0 0 1-.6064.3639l-1.0299-.2575a.5.5 0 0 1-.3638-.6062l.2421-.9692a.5.5 0 0 1 .6063-.364zM8.3868 8.034a.5.5 0 0 1-.1387.6933l-.832.5547a.5.5 0 0 1-.6934-.1387l-.4453-.668a.5.5 0 0 1 .1387-.6933l.832-.5547a.5.5 0 0 1 .6933.1387zm10.0839-.6387a.5.5 0 0 1 .1387.6934l-.5547.832a.5.5 0 0 1-.6933.1387l-.668-.4453a.5.5 0 0 1-.1387-.6934l.5547-.832a.5.5 0 0 1 .6934-.1387zm-5.915.0567a.5.5 0 0 1-.2236.6708l-1.1056.5528a.5.5 0 0 1-.6708-.2236l-.4473-.8946a.5.5 0 0 1 .2236-.6709l1.1056-.5527a.5.5 0 0 1 .6708.2236z" /><ellipse cx={12} cy={8.5} stroke="currentColor" strokeWidth={2} rx={10} ry={4} /><path stroke="currentColor" strokeWidth={2} d="M22 8.5v1c0 5.5228-4.4772 10-10 10S2 15.0228 2 9.5v-1" /></svg>;
const ForwardRef = forwardRef(IcebowlIcon);
export default createLucideIcon('IcebowlIcon', ForwardRef);
