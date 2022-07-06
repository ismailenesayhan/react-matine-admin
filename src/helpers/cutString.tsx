import { Tooltip, ActionIcon } from "@mantine/core";

export function cutString(str: string, size: number) {
  if (str.length > size) {
    return (
      <>
        {str.substring(0, size)}
        <Tooltip wrapLines width={220} label={str} withArrow>
          <ActionIcon>...</ActionIcon>
        </Tooltip>
      </>
    );
  } else {
    return str;
  }
}
