import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car3EvIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19.803 17C21.0164 17 22 16.0164 22 14.803v-.2361c0-2.6554-1.8743-4.9418-4.4782-5.4625a1.393 1.393 0 0 1-.8411-.53L15.2 6.6A4 4 0 0 0 12 5H7.712C4.4644 5 2 7.5 2 11.5819V14.5C2 15.8807 3.1193 17 4.5 17M8.5 17H15" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M13.9949 10.0003h-2.0766l.2863-2.0617c.0354-.2544-.2898-.3903-.446-.1865l-2.9487 3.8461c-.1261.1645-.0089.4021.1984.4021h2.0766l-.2863 2.0618c-.0353.2543.2898.3903.446.1865l2.9487-3.8462c.1261-.1644.0089-.4021-.1984-.4021" /><path stroke="currentColor" strokeWidth={2} d="M14.5 17h-5" /></svg>;
const ForwardRef = forwardRef(Car3EvIcon);
export default createLucideIcon('Car3EvIcon', ForwardRef);
