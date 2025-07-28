// src/nhost.js
import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  subdomain: 'SEU_SUBDOMINIO', // ex: 'abcd1234'
  region: 'us-east-1' // ou outra, conforme indicado no painel
});

export default nhost;
