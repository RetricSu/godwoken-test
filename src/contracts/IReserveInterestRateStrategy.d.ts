/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IReserveInterestRateStrategyInterface extends ethers.utils.Interface {
  functions: {
    "baseVariableBorrowRate()": FunctionFragment;
    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "getMaxVariableBorrowRate()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "baseVariableBorrowRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateInterestRates",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxVariableBorrowRate",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "baseVariableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateInterestRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxVariableBorrowRate",
    data: BytesLike
  ): Result;

  events: {};
}

export class IReserveInterestRateStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IReserveInterestRateStrategyInterface;

  functions: {
    baseVariableBorrowRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidityRate: BigNumber;
        stableBorrowRate: BigNumber;
        variableBorrowRate: BigNumber;
      }
    >;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  baseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

  "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
    reserve: string,
    aToken: string,
    liquidityAdded: BigNumberish,
    liquidityTaken: BigNumberish,
    totalStableDebt: BigNumberish,
    totalVariableDebt: BigNumberish,
    averageStableBorrowRate: BigNumberish,
    reserveFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      liquidityRate: BigNumber;
      stableBorrowRate: BigNumber;
      variableBorrowRate: BigNumber;
    }
  >;

  "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
    reserve: string,
    availableLiquidity: BigNumberish,
    totalStableDebt: BigNumberish,
    totalVariableDebt: BigNumberish,
    averageStableBorrowRate: BigNumberish,
    reserveFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    baseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        liquidityRate: BigNumber;
        stableBorrowRate: BigNumber;
        variableBorrowRate: BigNumber;
      }
    >;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    baseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baseVariableBorrowRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateInterestRates(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      aToken: string,
      liquidityAdded: BigNumberish,
      liquidityTaken: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateInterestRates(address,uint256,uint256,uint256,uint256,uint256)"(
      reserve: string,
      availableLiquidity: BigNumberish,
      totalStableDebt: BigNumberish,
      totalVariableDebt: BigNumberish,
      averageStableBorrowRate: BigNumberish,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxVariableBorrowRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
