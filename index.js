import jose from "jose";
import * as fs from "node:fs";
const keystore = new jose.JWKS.KeyStore();

Promise.all([
  keystore.generate("RSA", 2048, { use: "sig" }),
  keystore.generate("RSA", 2048, { use: "enc" }),
  keystore.generate("EC", "P-256", { use: "sig" }),
  keystore.generate("EC", "P-256", { use: "enc" }),
  keystore.generate("OKP", "Ed25519", { use: "sig" }),
]).then(() => {
  const keys = JSON.stringify(keystore.toJWKS(true), null, 2);
  console.log(JSON.stringify(keystore.toJWKS(true), null, 2));
  fs.writeFile("keys.json", keys, (err) => {
    if (err) {
      console.error(`Erreur lors de l'écriture dans le fichier : ${err}`);
    } else {
      console.log(`Le contenu a été écrit dans le fichier`);
    }
  });
});
