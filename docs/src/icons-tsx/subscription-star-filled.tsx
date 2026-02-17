import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SubscriptionStarFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.664 2.87c1.3034-1.2609 3.3718-1.2609 4.6752 0a1.362 1.362 0 0 0 1.1377.3696c1.7956-.254 3.469.9619 3.7823 2.748.0726.4138.332.771.7032.9679 1.6019.8499 2.2411 2.8171 1.4447 4.4463a1.362 1.362 0 0 0 0 1.1963c.7964 1.6292.1572 3.5964-1.4447 4.4463a1.362 1.362 0 0 0-.7032.9678c-.3133 1.7862-1.9867 3.002-3.7823 2.748a1.362 1.362 0 0 0-1.1377.3697c-1.3034 1.2609-3.3718 1.2609-4.6752 0a1.362 1.362 0 0 0-1.1377-.3697c-1.7956.254-3.469-.9618-3.7823-2.748a1.362 1.362 0 0 0-.7032-.9678c-1.6019-.8499-2.241-2.8171-1.4447-4.4463a1.362 1.362 0 0 0 0-1.1963c-.7964-1.6292-.1572-3.5964 1.4447-4.4463a1.362 1.362 0 0 0 .7032-.9679c.3133-1.7861 1.9867-3.002 3.7823-2.748A1.362 1.362 0 0 0 9.664 2.87m3.0101 5.2427c-.2751-.5575-1.07-.5575-1.3451 0l-.6958 1.41a.75.75 0 0 1-.5648.4103l-1.556.2261c-.6151.0894-.8608.8453-.4156 1.2792l1.126 1.0976a.75.75 0 0 1 .2156.6638l-.2658 1.5498c-.105.6127.538 1.0799 1.0882.7906l1.3918-.7317a.75.75 0 0 1 .698 0l1.3918.7317c.5502.2893 1.1932-.1779 1.0882-.7906l-.2658-1.5498a.75.75 0 0 1 .2157-.6638l1.1259-1.0976c.4452-.4339.1995-1.1898-.4156-1.2792l-1.5561-.2261a.75.75 0 0 1-.5647-.4103z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SubscriptionStarFilledIcon);
export default createLucideIcon('SubscriptionStarFilledIcon', ForwardRef);
