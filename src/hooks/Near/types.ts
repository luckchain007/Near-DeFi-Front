export type RaffleId = number;

export interface MultiWalletConnection {
    isLoggedIn: boolean;
    accountId: string | null;
    signOut: () => Promise<void>;
    sign: (message: string) => Promise<SignOutcome>;
}

export interface SignOutcome {
    accountId: string;
    message: string;
    publicKey: string;
    signature: string;
}

export interface NftToken {
    contractId: string;
    collectionId: string;
    compositeId: string;
    tokenId: string;
    tokenName: string;
    collectionName: string;
    referenceUrl: string;
    imageUri?: string;
    propertyVersion?: number;
    creator?: string;
    description?: string;
    maximum?: string;
    supply?: number;
}

export interface FtToken {
    contractId: string;
    symbol: string;
    decimals: number;
    name: string;
    icon?: string;
}

export const nearFtMetadata: FtToken = {
    contractId: "near",
    name: "near",
    symbol: "near",
    decimals: 24,
};

export interface Investors {
    accountId: string,
    balance: number
}

export interface Project {
    project_id: number,
    owner_id: string,
    title: string,
    sub_title: string,
    token_ticker: string,
    logo: string,
    starting_price: number,
    email: string,
    telegram: string,
    in_token_account_id: string,
    out_token_account_id: string,
    total_tokens: number,
    coingecko: string | null,
    facebook: string | null,
    instagram: string | null,
    twitter: string | null,
    description: string,
    start_time: number,
    end_time: number,
    cliff_period: number,
    total_deposits: number,
    current_block_height: string,
    start_block_height: string,
    end_block_height: string | null,
    is_activated: boolean,
}

export interface RegisterProjectParameters {
    accountId: string,
    ftContractId: string,
    title: string,
    subTitle: string,
    tokenTicker: string,
    logo: string,
    startingPrice: number,
    email: string,
    telegram: string,
    inTokenAccountId: string,
    outTokenAccountId: string,
    totalTokens: number,
    coingecko: string,
    facebook: string,
    instagram: string,
    twitter: string,
    description: string,
    startTime: number,
    endTime: number,
    cliffPeriod: number,
}