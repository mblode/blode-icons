import { IconSearch } from "@/components/icons/icon-search";
import { getInitialIconSvgs } from "@/lib/icon-initial-svgs";

export const App = async () => {
  const initialSvgs = await getInitialIconSvgs();

  return <IconSearch initialSvgs={initialSvgs} />;
};
