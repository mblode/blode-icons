import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SparklesSoftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13c-4.9013.4243-7.5757 3.0987-8 8-.4422-4.9775-3.1026-7.4453-8-8 4.9748-.5738 7.4262-3.0252 8-8 .5547 4.8974 3.0225 7.5578 8 8" /><path fill="currentColor" d="M18.8864 2.3451a.3888.3888 0 0 0-.7727-.0008c-.1055.9143-.377 1.5415-.8024 1.967s-1.0527.697-1.967.8024a.3889.3889 0 0 0 .0008.7727c.8988.1018 1.5404.3733 1.9766.8016.4339.426.7105 1.0524.7909 1.9575a.389.389 0 0 0 .7748-.0008c.0771-.8899.3535-1.5303.7902-1.967s1.0772-.7132 1.967-.7903a.3889.3889 0 0 0 .0009-.7748c-.9051-.0804-1.5314-.357-1.9575-.7909-.4283-.4362-.6998-1.0778-.8016-1.9766" /></svg>;
const ForwardRef = forwardRef(SparklesSoftIcon);
export default ForwardRef;
