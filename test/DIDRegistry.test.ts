import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import didRegistryArtifact from "../shared/DIDRegistry.json" with { type: "json" };
import addresses from "../shared/addresses.json" with { type: "json" };

// Public client to read from Sepolia testnet
const client = createPublicClient({
  chain: sepolia,
  transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
});

describe("DIDRegistry (deployed on Sepolia)", () => {
  it("should have contract code deployed at the given address", async () => {
    const code = await client.getBytecode({
      address: addresses.DIDRegistry as `0x${string}`,
    });
    assert.ok(code && code !== "0x", "Expected contract bytecode to exist at address");
  });

  it("should return totalIdentities as a number", async () => {
    const total = await client.readContract({
      address: addresses.DIDRegistry as `0x${string}`,
      abi: didRegistryArtifact.abi,
      functionName: "totalIdentities",
    });
    console.log("Total identities registered:", total);
    assert.ok(typeof total === "bigint", "Expected totalIdentities to return a bigint");
  });
});
