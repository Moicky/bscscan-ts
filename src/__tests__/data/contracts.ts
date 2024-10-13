export const contractResponses: Record<string, Record<string, any>> = {
  get: {
    getabi: {
      status: "1",
      message: "OK",
      result: "[]",
    },
    getsourcecode: {
      status: "1",
      message: "OK",
      result: [
        {
          SourceCode: "pragma solidity 0.6.12;",
          ABI: "[]",
          ContractName: "CakeToken",
          CompilerVersion: "v0.6.12+commit.27d51765",
          OptimizationUsed: "1",
          Runs: "5000",
          ConstructorArguments: "",
          EVMVersion: "Default",
          Library: "",
          LicenseType: "None",
          Proxy: "0",
          Implementation: "",
          SwarmSource: "ipfs://9755240809e31aec9fa5790314682233ca431b7c4f252d7e4bba347e2e742086",
        },
      ],
    },
    getcontractcreation: {
      status: "1",
      message: "OK",
      result: [
        {
          contractAddress: "0x10e66c37b81858cf8377f766b6dfb5af6700a73c",
          contractCreator: "0x187549f02d96d94945f2c4dd206cf58aeed8ebae",
          txHash: "0x372eaf2d68524ebb0b5ec5b815983df2bcc29c9516a30116eb2bf02aae250c5e",
        },
        {
          contractAddress: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
          contractCreator: "0xdb6f5fb9311ae8885620ee893887c3d85c8293d6",
          txHash: "0x1bfbff8411ed44e609d911476b0d35a28284545b690902806ea0a7ff0453e931",
        },
        {
          contractAddress: "0xa8c87a4b2de9bcebeadcc1ca4e6331fe28e3a378",
          contractCreator: "0xd71110b333c547eb9139bef719d7ab4513107588",
          txHash: "0xdd94fbce146d67c70ab6aea7fd0807706d1e1867ed67cc1b236516e6ba23c6f6",
        },
        {
          contractAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          contractCreator: "0xf07c30e4cd6cfff525791b4b601bd345bded7f47",
          txHash: "0x0f01fc521030f178115c880e200b09a40c9510f49de227aa880276f92670a3d6",
        },
      ],
    },
  },
  post: {
    verifysourcecode: {
      status: "1",
      message: "OK",
      result: "a7xygt433w43um5fda3m6d9jk62jwtjhqdr9zcwj9fmfzcj14r",
    },
    verifyproxycontract: {
      status: "1",
      message: "OK",
      result: "a7xygt433w43um5fda3m6d9jk62jwtjhqdr9zcwj9fmfzcj14r",
    },
    checkproxyverification: {
      status: "1",
      message: "OK",
      result: "0xcbdcd3815b5f975e1a2c944a9b2cd1c985a1cb7f",
    },
  },
};
