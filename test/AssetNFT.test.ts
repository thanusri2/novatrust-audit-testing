import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import assetNFTArtifact from "../shared/AssetNFT.json" with { type: "json" };
import addresses from "../shared/addresses.json" with { type: "json" };

const client = createPublicClient({
  chain: sepolia,
  transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
});

describe("AssetNFT (deployed on Sepolia)", () => {
  it("should have contract code deployed at the given address", async () => {
    const code = await client.getBytecode({
      address: addresses.AssetNFT as `0x${string}`,
    });
    assert.ok(code && code !== "0x", "Expected contract bytecode to exist at address");
  });

  it("should return the correct token name", async () => {
    const name = await client.readContract({
      address: addresses.AssetNFT as `0x${string}`,
      abi: assetNFTArtifact.abi,
      functionName: "name",
    });
    console.log("NFT name:", name);
    assert.strictEqual(name, "NovaTrust Asset", "Expected name to match deployed contract");
  });

  it("should link to the correct DIDRegistry address", async () => {
    const linkedRegistry = await client.readContract({
      address: addresses.AssetNFT as `0x${string}`,
      abi: assetNFTArtifact.abi,
      functionName: "didRegistry",
    });
    console.log("Linked DIDRegistry:", linkedRegistry);
    assert.strictEqual(
      (linkedRegistry as string).toLowerCase(),
      addresses.DIDRegistry.toLowerCase(),
      "AssetNFT should be linked to the correct DIDRegistry"
    );
  });
});
