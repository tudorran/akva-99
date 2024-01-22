import groq from "groq";

import { HERO_HOME } from "../heroes/home";
import { MODULES } from "../modules";
import { SEO } from "../seo";

export const HOME_PAGE = groq`
  _id,
  _type,
  hero {
    ${HERO_HOME}
  },
  modules[] {
    ${MODULES}
  },
  ${SEO}
`;
