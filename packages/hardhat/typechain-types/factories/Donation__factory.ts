/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Donation, DonationInterface } from "../Donation";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Donate",
    type: "event",
  },
  {
    inputs: [],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "donors",
    outputs: [
      {
        internalType: "uint256",
        name: "numPayments",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentsSum",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "donorsAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDonors",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
    ],
    name: "getPaymentsSum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b6711167adc9750f0dc60c01b61008a60201b60201c565b610045674bd6158af17d1f5f60c01b61008a60201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061008d565b50565b610e8d8061009c6000396000f3fe6080604052600436106100705760003560e01c8063ca0cdea81161004e578063ca0cdea814610108578063d3cbd51a14610146578063ed88c68e14610183578063f3fef3a31461018d57610070565b80636e508a8e14610075578063893d20e8146100b257806396f300d4146100dd575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190610a09565b6101b6565b6040516100a99190610a4f565b60405180910390f35b3480156100be57600080fd5b506100c761023e565b6040516100d49190610a79565b60405180910390f35b3480156100e957600080fd5b506100f26102a2565b6040516100ff9190610b52565b60405180910390f35b34801561011457600080fd5b5061012f600480360381019061012a9190610a09565b61036c565b60405161013d929190610b74565b60405180910390f35b34801561015257600080fd5b5061016d60048036038101906101689190610bc9565b610390565b60405161017a9190610a79565b60405180910390f35b61018b6103cf565b005b34801561019957600080fd5b506101b460048036038101906101af9190610c34565b610709565b005b60006101cc67dd71d705afc5624460c01b6109a3565b6101e0677bd25f4986dba19260c01b6109a3565b6101f4678ddcb0c651ab51e360c01b6109a3565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549050919050565b600061025467b21a2173cd82095b60c01b6109a3565b6102686794be94e2fa44949860c01b6109a3565b61027c670374506bacf0bf5e60c01b6109a3565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606102b8676eba3c7ee3edc07160c01b6109a3565b6102cc67457e61147f2ce53d60c01b6109a3565b6102e067ed3b24e66834c88c60c01b6109a3565b600280548060200260200160405190810160405280929190818152602001828054801561036257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610318575b5050505050905090565b60016020528060005260406000206000915090508060000154908060010154905082565b600281815481106103a057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103e36719adc25e74b1a7da60c01b6109a3565b6103f7674256a3a2328d66b460c01b6109a3565b61040b6720945b69a3e8a74d60c01b6109a3565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154905061046667440121610b31fb9a60c01b6109a3565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008154809291906104b990610ca3565b91905055506104d267c90fb10427608b4260c01b6109a3565b6104e6671829eef12ec6245060c01b6109a3565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201349080600181540180825580915050600190039060005260206000200160009091909190915055610563675513725680c1127a60c01b6109a3565b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546105b59190610ceb565b925050819055506105d06737cfe2ed68cf16b760c01b6109a3565b6105e46729e7706528db8a2960c01b6109a3565b60008103610690576106006773c885a07d3d8da160c01b6109a3565b61061467bc683f076274830760c01b6109a3565b61062867a36d9762597215fc60c01b6109a3565b6002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106a5565b6106a467d010f5a09c83c94260c01b6109a3565b5b6106b967eb304aab096d6df660c01b6109a3565b6106cd67826887cd67b98e8460c01b6109a3565b7f0553260a2e46b0577270d8992db02d30856ca880144c72d6e9503760946aef1333346040516106fe929190610d1f565b60405180910390a150565b61071d676167d08e62c3e57660c01b6109a3565b6107316732678d4dd3fe966d60c01b6109a3565b610745678a7d2d0550f9306560c01b6109a3565b61075967a00493197fab27a860c01b6109a3565b61076d67f0e8d4cda7132b6d60c01b6109a3565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f290610da5565b60405180910390fd5b61080f67bc2381af2b12509560c01b6109a3565b61082367aaf901d5401a80d560c01b6109a3565b610837676f923a6d45d9a32b60c01b6109a3565b61084b67dfa67b2f958ef62160c01b6109a3565b8061086067f15d0d5398ebd05060c01b6109a3565b610874677fc49b95c3e5956a60c01b6109a3565b6108886759eba0ca20d557d360c01b6109a3565b61089c67c59f75bbbc7b682660c01b6109a3565b478111156108df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d690610e37565b60405180910390fd5b6108f367a8f62f56c5a2df8160c01b6109a3565b61090767e1e3a189789bfe6d60c01b6109a3565b61091b67878b538b08d3302a60c01b6109a3565b61092f67fbdcb6b1628d7fa660c01b6109a3565b61094367a0ae10c828e5fb2760c01b6109a3565b6109576780c2729aa0b38a1560c01b6109a3565b8273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561099d573d6000803e3d6000fd5b50505050565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109d6826109ab565b9050919050565b6109e6816109cb565b81146109f157600080fd5b50565b600081359050610a03816109dd565b92915050565b600060208284031215610a1f57610a1e6109a6565b5b6000610a2d848285016109f4565b91505092915050565b6000819050919050565b610a4981610a36565b82525050565b6000602082019050610a646000830184610a40565b92915050565b610a73816109cb565b82525050565b6000602082019050610a8e6000830184610a6a565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ac9816109cb565b82525050565b6000610adb8383610ac0565b60208301905092915050565b6000602082019050919050565b6000610aff82610a94565b610b098185610a9f565b9350610b1483610ab0565b8060005b83811015610b45578151610b2c8882610acf565b9750610b3783610ae7565b925050600181019050610b18565b5085935050505092915050565b60006020820190508181036000830152610b6c8184610af4565b905092915050565b6000604082019050610b896000830185610a40565b610b966020830184610a40565b9392505050565b610ba681610a36565b8114610bb157600080fd5b50565b600081359050610bc381610b9d565b92915050565b600060208284031215610bdf57610bde6109a6565b5b6000610bed84828501610bb4565b91505092915050565b6000610c01826109ab565b9050919050565b610c1181610bf6565b8114610c1c57600080fd5b50565b600081359050610c2e81610c08565b92915050565b60008060408385031215610c4b57610c4a6109a6565b5b6000610c5985828601610c1f565b9250506020610c6a85828601610bb4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cae82610a36565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ce057610cdf610c74565b5b600182019050919050565b6000610cf682610a36565b9150610d0183610a36565b9250828201905080821115610d1957610d18610c74565b5b92915050565b6000604082019050610d346000830185610a6a565b610d416020830184610a40565b9392505050565b600082825260208201905092915050565b7f596f7520617265206e6f7420616e206f776e65722e0000000000000000000000600082015250565b6000610d8f601583610d48565b9150610d9a82610d59565b602082019050919050565b60006020820190508181036000830152610dbe81610d82565b9050919050565b7f5769746864726177616c20616d6f756e7420657863656564732062616c616e6360008201527f652e000000000000000000000000000000000000000000000000000000000000602082015250565b6000610e21602283610d48565b9150610e2c82610dc5565b604082019050919050565b60006020820190508181036000830152610e5081610e14565b905091905056fea2646970667358221220c28ea8407caaaecd2cfa547d4dc3ca7c92a3dc80b25337d1aeed8c8a82dff73664736f6c63430008140033";

type DonationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Donation__factory extends ContractFactory {
  constructor(...args: DonationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Donation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Donation__factory {
    return super.connect(runner) as Donation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationInterface {
    return new Interface(_abi) as DonationInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Donation {
    return new Contract(address, _abi, runner) as unknown as Donation;
  }
}
