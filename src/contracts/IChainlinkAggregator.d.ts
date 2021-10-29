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

interface IChainlinkAggregatorInterface extends ethers.utils.Interface {
  functions: {
    "getAnswer(uint256)": FunctionFragment;
    "getTimestamp(uint256)": FunctionFragment;
    "latestAnswer()": FunctionFragment;
    "latestRound()": FunctionFragment;
    "latestTimestamp()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAnswer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;

  events: {
    "AnswerUpdated(int256,uint256,uint256)": EventFragment;
    "NewRound(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnswerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRound"): EventFragment;
}

export type AnswerUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    current: BigNumber;
    roundId: BigNumber;
    timestamp: BigNumber;
  }
>;

export type NewRoundEvent = TypedEvent<
  [BigNumber, string] & { roundId: BigNumber; startedBy: string }
>;

export class IChainlinkAggregator extends BaseContract {
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

  interface: IChainlinkAggregatorInterface;

  functions: {
    getAnswer(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTimestamp(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getAnswer(
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTimestamp(
    roundId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  latestRound(overrides?: CallOverrides): Promise<BigNumber>;

  latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getAnswer(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    latestRound(overrides?: CallOverrides): Promise<BigNumber>;

    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AnswerUpdated(int256,uint256,uint256)"(
      current?: BigNumberish | null,
      roundId?: BigNumberish | null,
      timestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { current: BigNumber; roundId: BigNumber; timestamp: BigNumber }
    >;

    AnswerUpdated(
      current?: BigNumberish | null,
      roundId?: BigNumberish | null,
      timestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { current: BigNumber; roundId: BigNumber; timestamp: BigNumber }
    >;

    "NewRound(uint256,address)"(
      roundId?: BigNumberish | null,
      startedBy?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { roundId: BigNumber; startedBy: string }
    >;

    NewRound(
      roundId?: BigNumberish | null,
      startedBy?: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { roundId: BigNumber; startedBy: string }
    >;
  };

  estimateGas: {
    getAnswer(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    latestRound(overrides?: CallOverrides): Promise<BigNumber>;

    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAnswer(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(
      roundId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
