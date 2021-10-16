// Load node modules

const dotenv = require('dotenv');
const fs = require('fs');

// Get the correct .env file for specific environment
dotenv.config({ path: `./env/.env.${process.env.NODE_ENV}` })

// Configure Angular `environment.ts` file path
const targetPath =`./src/environments/environment.${process.env.NODE_ENV}.ts`;
const isProd = process.env.NODE_ENV === 'prod';
// `./environments/environment.ts` file structure
const envConfigFile = `// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses \`environment.ts\`, but if you do
// \`ng build --env=prod\` then \`environment.prod.ts\` will be used instead.
// The list of which env maps to which file can be found in \`.angular-cli.json\`.
// This serves as the base for the dev environment
import { Constants, DisplayLinkOption } from './../app/interfaces';

export const environment = {
  production: ${isProd}
};
export const CONSTANTS: Constants = {
  NAME:'${process.env.NAME}',
  TEZOS_DOMAIN: {
    CONTRACT: '${process.env.CONTRACT}',
    TOP_DOMAIN: '${process.env.TOP_DOMAIN}',
  },
  NETWORK: '${process.env.NETWORK}',
  MAINNET:  Boolean('${process.env.MAINNET}'),
  NODE_URL: '${process.env.NODE_URL}',
  BLOCK_EXPLORER_URL: '${process.env.BLOCK_EXPLORER_URL}',
  ALLOWED_EMBED_ORIGINS: ${process.env.ALLOWED_EMBED_ORIGINS},
  HARD_LIMITS: { ${process.env.HARD_LIMITS} },
  ASSETS: ${process.env.ASSETS},
  CONTRACT_ALIASES: { '${process.env.CONTRACT_ALIASES},
  CONTRACT_OVERRIDES: ${process.env.CONTRACT_OVERRIDES},
  NFT_CONTRACT_OVERRIDES: ${process.env.NFT_CONTRACT_OVERRIDES},
};
export const TRUSTED_TOKEN_CONTRACTS = ${process.env.TRUSTED_TOKEN_CONTRACTS};
export const BLACKLISTED_TOKEN_CONTRACTS = ${process.env.BLACKLISTED_TOKEN_CONTRACTS};
`;

fs.writeFile(targetPath, envConfigFile, (err: any) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});