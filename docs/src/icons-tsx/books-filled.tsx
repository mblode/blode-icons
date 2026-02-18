import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooksFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 3c-.8284 0-1.5.6716-1.5 1.5v15c0 .8284.6716 1.5 1.5 1.5h4c.8284 0 1.5-.6716 1.5-1.5v-15c0-.8284-.6716-1.5-1.5-1.5zm0 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm.5 7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" clipRule="evenodd" /><path fill="currentColor" d="M3.5 5C2.6716 5 2 5.6716 2 6.5v13c0 .8284.6716 1.5 1.5 1.5H4c.8284 0 1.5-.6716 1.5-1.5v-13C5.5 5.6716 4.8284 5 4 5z" /><path fill="currentColor" fillRule="evenodd" d="M13.6635 8.4419c-.2284-.7963.2321-1.627 1.0284-1.8554l1.9225-.5512c.7964-.2284 1.627.232 1.8554 1.0284l3.3076 11.5351c.2284.7964-.2321 1.627-1.0284 1.8554l-1.9225.5513c-.7964.2283-1.627-.2321-1.8554-1.0285z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BooksFilledIcon);
export default createLucideIcon('BooksFilledIcon', ForwardRef);
