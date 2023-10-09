import { clamp } from "@utils/math";
import { Emoji as _Emoji } from "emoji-picker-react";

function getEmojiUrl(unified: string) {
  return `https://cdn.staticfile.org/emoji-datasource-apple/15.0.0/img/apple/64/${unified}.png`;
}

export default function Emoji(props: { emoji: string; size?: number }) {
  const unified = [...props.emoji]
    .map(e => e.codePointAt(0)!.toString(16))
    .join(`-`);
  const size = clamp(props.size ?? 18, 1, 64);

  return (
    <_Emoji lazyLoad unified={unified} getEmojiUrl={getEmojiUrl} size={size} />
  );
}
