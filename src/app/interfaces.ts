export interface KeyPair {
    sk: string|null;
    pk: string|null;
    pkh: string;
}
export interface Wallet {
  seed: null|string;
  salt: null|string;
  pk?: string;
  encryptionVersion: number|null;
  type: WalletType;
  balance: Balance;
  XTZrate: number | null;
  accounts: Account[];
  derivationPath?: string;
}
export interface Account {
  pkh: string|null;
  delegate: string;
  balance: Balance;
  numberOfActivites: number;
  activities: Activity[];
}
export interface Activity {
  hash: string;
  block: string;
  source: string;
  destination: string;
  amount: number;
  fee: number;
  timestamp: null|Date;
  type: string;
}
export interface Balance {
  balanceXTZ: number | null;
  pendingXTZ: number | null;
  balanceFiat: number | null;
  pendingFiat: number | null;
}
export enum WalletType {
  FullWallet,
  ViewOnlyWallet,
  ObserverWallet,
  LedgerWallet,
  HdWallet
}
export interface Baker {
  baker_name: string;
  image: string;
  rolls: number;
  identity: string;
  vote: string;
  vote2: string;
  // vote: []
}
export interface Vote {
  voting_period: string;
  period_kind: PeriodKind;
  proposal_hash: string[];
  proposal_alias: string[];
  votes: number[];
  operation: string[];
}
export interface Period {
  amendment: string;
  period: number;
  period_kind: string;
  proposal_hash: string[];
  proposal_alias: string[];
  start_level: number;
  end_level: number;
  level: number;
  progress: number;
  remaining: number;
}
export interface ParticipationPerPeriod {
  proposal?: [{
    hash: string;
    alias: string;
    count: number;
    votes: number;
  }];
  unused_count: number;
  total_count: number;
  unused_votes: number;
  total_votes: number;
}
export interface Ballot {
  proposal: string;
  nb_yay: number;
  nb_nay: number;
  nb_pass: number;
  vote_yay: number;
  vote_nay: number;
  vote_pass: number;
}
export enum PeriodKind {
  Proposal,
  Exploration,
  Testing,
  Promotion
}
export interface DefaultTransactionParams {
  gas: string;
  storage: string;
  fee: string;
  burn: string;
  reveal?: boolean;
  customLimits?: {
    gasLimit: string;
    storageLimit: string;
  }[];
}
