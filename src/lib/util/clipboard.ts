import { Clipboard } from '@capacitor/clipboard';

const checkClipboard = async () => {
  const { type, value } = await Clipboard.read();
};

export const clipboardCopy = async (value: string) => {
  // navigator && navigator.clipboard.writeText(value);
  await Clipboard.write({
    string: value,
  });

  checkClipboard();
};
