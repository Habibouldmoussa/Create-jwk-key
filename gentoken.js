import jose from "jose";
const secret_key = process.env.SECRET_KEY;
const nonce = process.env.NONCE;
const s_hash = process.env.S_HASH;
export const payload = {
  sub: "23121d3c-84df-44ac-b458-3d63a9a05497",
  email: "administrator@example.com",
  email_verified: true,
  given_name: "Geoffroy",
  surname: "Belmont",
  patient_id: null,
  title: "Pr.",
  phone: "0512345678",
  studies: {
    "P11-05": {
      sites: ["001", "002"],
      role: "administrator",
    },
    "COPD-BPCO": {
      sites: ["001", "002"],
      role: "administrator",
    },
    "Demo-ePRO": {
      sites: ["001", "002"],
      role: "administrator",
    },
    "Demo-eCRF": {
      sites: ["001", "002"],
      role: "administrator",
    },
  },
  nonce: nonce,
  s_hash: s_hash,
  aud: "spiral",
  exp: 1623849346,
  iat: 1623845746,
  iss: "http://undefined:8080/oidc",
};

export function generateToken() {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: "RS256",
      typ: "JWT",
      kid: secret_key,
    })
    .setExpirationTime("60s")
    .sign(key);
}
