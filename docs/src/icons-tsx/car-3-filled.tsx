import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.712 4c-1.8927 0-3.5958.7347-4.817 2.0912C1.679 7.4417 1 9.34 1 11.5819V14.5c0 1.695 1.205 3.1086 2.805 3.431C4.352 19.1505 5.5768 20 7 20c1.3962 0 2.6015-.8175 3.1632-2h3.6736c.5617 1.1825 1.767 2 3.1632 2 1.4045 0 2.6158-.8273 3.1732-2.0212C21.7645 17.7953 23 16.4434 23 14.803v-.2361c0-3.1321-2.2108-5.8289-5.2821-6.4431a.393.393 0 0 1-.2372-.1495L16 6a5 5 0 0 0-4-2zM7 15c-.8284 0-1.5.6716-1.5 1.5S6.1716 18 7 18s1.5-.6716 1.5-1.5S7.8284 15 7 15m8.5 1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S17.8284 18 17 18s-1.5-.6716-1.5-1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Car3FilledIcon);
export default createLucideIcon('Car3FilledIcon', ForwardRef);
