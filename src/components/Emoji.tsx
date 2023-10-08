import { Emoji as _Emoji } from "emoji-picker-react";

function getEmojiUrl(unified: string) {
  return `https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/${unified}.png`;
}

export default function Emoji(props: { emoji: string; size?: number }) {
  const unified = [...props.emoji]
    .map(e => e.codePointAt(0)!.toString(16))
    .join(`-`);

  return (
    <_Emoji
      lazyLoad
      unified={unified}
      getEmojiUrl={getEmojiUrl}
      size={props.size ?? 18}
    />
  );
}
