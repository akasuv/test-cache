export const isValidBase64 = (text?: string): boolean => {
  if (typeof text !== 'string') return false;

  return text.startsWith('data:image');
};

export const fixNFTIPFSURL = (imgurl: string | null | undefined) => {
  if (!imgurl) return '';

  if (imgurl.startsWith('http') || imgurl.startsWith('https') || isValidBase64(imgurl)) return fixIPFSUrl(imgurl);

  return `${process.env.NEXT_PUBLIC_IPFS_GATEWAY}${imgurl}`;
};

export const fixIPFSUrl = (url?: string) => {
  return url
    ?.replace('https://cyberconnect.mypinata.cloud/ipfs/', process.env.NEXT_PUBLIC_IPFS_GATEWAY!)
    .replace('ipfs://', process.env.NEXT_PUBLIC_IPFS_GATEWAY!);
};
