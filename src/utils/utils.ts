export class Utils {
  static formatWalletAddress = (address: string, length = 5) => {
    if (!address) return "";
    if (!address.startsWith("0x")) return address;
    const prefix = address.slice(0, length);
    const suffix = address.slice(-length);
    return prefix + "..." + suffix;
  };
}
