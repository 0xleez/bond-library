import { CHAIN_ID } from "../../constants";
const links = {
  governanceVote: "",
  twitter: "https://twitter.com/bond_protocol",
  github: "https://github.com/bond-protocol",
  medium: "https://medium.com/@Bond_Protocol",
  homepage: "https://bondprotocol.finance/",
};

export const protocols = [
  {
    name: "AphexProtocol",
    description: "We help aphex own his liquidity",
    links,
    issuerAddresses: {
      [CHAIN_ID.GOERLI_TESTNET]: "0x62A665d3f9fc9a968dC35a789122981d9109349a",
    },
  },
  {
    name: "BigfishjoeProtocol",
    description: "We help bigfishjoe own his liquidity",
    links,
    issuerAddresses: {
      [CHAIN_ID.GOERLI_TESTNET]: "0x72A0363bbd9dE17435A57d6a6F2f89102F1EBE8b",
    },
  },
  {
    name: "BondProtocol",
    description: "We help protocols own their liquidity",
    links,
    issuerAddresses: {
      [CHAIN_ID.GOERLI_TESTNET]: [
        "0x69442345d059895bd408e7bde8ab1428c009cc83",
        "0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA",
      ],
    },
  },
  {
    name: "DevoltaireProtocol",
    description: "We help devoltaire own his liquidity",
    links,
    issuerAddresses: {
      [CHAIN_ID.GOERLI_TESTNET]: [
        "0x24Ef8c193E02c0d952eC56C0097dF33b7947b7F6",
        "0x7700dd38aB343300bd9D45741D7c53ee711e4532",
      ],
    },
  },
  {
    name: "TexProtocol",
    description: "We help tex own his liquidity",
    links,
    issuerAddresses: {
      [CHAIN_ID.GOERLI_TESTNET]: "0xE5e93C4CBA55e98cCAa2618AC0772CD6fEEB43C5",
    },
  },
  {
    name: "YellaProtocol",
    description: "We help Yella own his liquidity",
    links,
    issuerAddresses: {
      [CHAIN_ID.GOERLI_TESTNET]: ["0xcB6E1613029d790C00f89296808f278d6dc25B2f"],
    },
  },
];
