import {
  Css,
  Javascript,
  TypescriptIcon,
  _React,
  TailwindIcon,
  NextjsIcon,
  Sanity,
  Claude,
  OpenaiIcon,
  Websocket,
  NeonIcon,
} from "@dev.icons/react";

import { Html5, Express } from "@dev.icons/react/mono";

export const technologyIcons = {
  HTML: Html5,
  CSS: Css,
  JavaScript: Javascript,
  TypeScript: TypescriptIcon,
  React: _React,
  Tailwind: TailwindIcon,
  Express: Express,
  Nextjs: NextjsIcon,
  Sanity: Sanity,
  Claude: Claude,
  OpenAi: OpenaiIcon,
  Websocket: Websocket,
  Neon: NeonIcon,
} as const;

export type Technology = keyof typeof technologyIcons;
