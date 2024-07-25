import dotenv from "dotenv";

dotenv.config();

export const API_TOKEN = process.env.CLOUDFLARE_API_KEY;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  // .filter(x => x) removes empty items from the URL arrays
  ? process.env.ALLOWLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const RECOMMENDED_ALLOWLIST_URLS = [
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
 ];

export const RECOMMENDED_BLOCKLIST_URLS = [
 "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews-gambling/hosts",
  "https://github.com/uBlockOrigin/uAssets/blob/master/filters/annoyances-cookies.txt",
  "https://github.com/uBlockOrigin/uAssets/blob/master/filters/annoyances-others.txt",
  "https://github.com/uBlockOrigin/uAssets/blob/master/filters/badware.txt",
  "https://github.com/uBlockOrigin/uAssets/blob/master/filters/filters-2024.txt",
  "https://github.com/uBlockOrigin/uAssets/blob/master/filters/privacy.txt",
 "https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/domain.txt",
 "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
 "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/multi.txt",
 "https://big.oisd.nl/domainswild2",
 "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_gambling.txt",
 "https://easylist-downloads.adblockplus.org/easylistchina.txt",
 "https://raw.githubusercontent.com/yous/YousList/master/youslist.txt",
 "https://blokada.org/api/v4/content/en/filters.txt",
 "https://raw.githubusercontent.com/notracking/hosts-blocklists/master/adblock/adblock.txt",
 "https://github.com/tigthor/NSA-CIA-Blocklist/blob/main/HOSTS/Trackers/trackers.txt".
 "https://github.com/tigthor/NSA-CIA-Blocklist/blob/main/HOSTS/Trackers/webrtc%20tracking.txt",
 "https://gitlab.com/quidsup/notrack-blocklists/-/blob/master/notrack-blocklist.txt",
 "https://v.firebog.net/hosts/lists.php?type=tick",
 "https://filters.adavoid.org/ultimate-privacy-filter.txt",
 "https://filters.adavoid.org/ultimate-security-filter.txt",
 "https://easylist.to/easylist/fanboy-annoyance.txt",
 "https://filters.adavoid.org/ultimate-ad-filter.txt",
 "https://www.i-dont-care-about-cookies.eu/abp/",
 "https://easylist-downloads.adblockplus.org/easyprivacy.txt",
];
