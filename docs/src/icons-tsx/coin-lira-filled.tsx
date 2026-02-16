import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinLiraFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2m-2 5.0996c-.497 0-.9004.4033-.9004.9004v3.5488l-2.0459 1.17a.8996.8996 0 0 0-.335 1.2275.8996.8996 0 0 0 1.2276.3349l1.1533-.6591V16c0 .4971.4033.9004.9004.9004h2.1973a4.27 4.27 0 0 0 3.5517-1.9014c.2755-.4135.1635-.9724-.25-1.248s-.9724-.1635-1.248.25a2.468 2.468 0 0 1-2.0537 1.0986h-1.2969v-2.5068l4.0459-2.3116a.8995.8995 0 0 0 .3349-1.2275.8996.8996 0 0 0-1.2275-.335l-3.1533 1.8018V8c0-.497-.4033-.9004-.9004-.9004" /></svg>;
const ForwardRef = forwardRef(CoinLiraFilledIcon);
export default ForwardRef;
