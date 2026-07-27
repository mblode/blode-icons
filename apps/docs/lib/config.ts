import packageJson from "../../../packages/blode-icons-react/package.json" with { type: "json" };

export const basePath = "/icons";

export const asset = (path: string) => `${basePath}${path}`;

export const siteUrl = `https://blode.co${basePath}`;

export const siteConfig = {
  links: {
    author: "https://blode.co",
    github: "https://github.com/mblode/blode-icons",
  },
  version: packageJson.version,
};
