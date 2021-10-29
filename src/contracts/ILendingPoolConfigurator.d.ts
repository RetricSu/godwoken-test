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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ILendingPoolConfiguratorInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "ATokenUpgraded(address,address,address)": EventFragment;
    "BorrowingDisabledOnReserve(address)": EventFragment;
    "BorrowingEnabledOnReserve(address,bool)": EventFragment;
    "CollateralConfigurationChanged(address,uint256,uint256,uint256)": EventFragment;
    "ReserveActivated(address)": EventFragment;
    "ReserveDeactivated(address)": EventFragment;
    "ReserveDecimalsChanged(address,uint256)": EventFragment;
    "ReserveFactorChanged(address,uint256)": EventFragment;
    "ReserveFrozen(address)": EventFragment;
    "ReserveInitialized(address,address,address,address,address)": EventFragment;
    "ReserveInterestRateStrategyChanged(address,address)": EventFragment;
    "ReserveUnfrozen(address)": EventFragment;
    "StableDebtTokenUpgraded(address,address,address)": EventFragment;
    "StableRateDisabledOnReserve(address)": EventFragment;
    "StableRateEnabledOnReserve(address)": EventFragment;
    "VariableDebtTokenUpgraded(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ATokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowingDisabledOnReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowingEnabledOnReserve"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CollateralConfigurationChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDecimalsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFactorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveInterestRateStrategyChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveUnfrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableDebtTokenUpgraded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "StableRateDisabledOnReserve"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableRateEnabledOnReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VariableDebtTokenUpgraded"): EventFragment;
}

export type ATokenUpgradedEvent = TypedEvent<
  [string, string, string] & {
    asset: string;
    proxy: string;
    implementation: string;
  }
>;

export type BorrowingDisabledOnReserveEvent = TypedEvent<
  [string] & { asset: string }
>;

export type BorrowingEnabledOnReserveEvent = TypedEvent<
  [string, boolean] & { asset: string; stableRateEnabled: boolean }
>;

export type CollateralConfigurationChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    asset: string;
    ltv: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
  }
>;

export type ReserveActivatedEvent = TypedEvent<[string] & { asset: string }>;

export type ReserveDeactivatedEvent = TypedEvent<[string] & { asset: string }>;

export type ReserveDecimalsChangedEvent = TypedEvent<
  [string, BigNumber] & { asset: string; decimals: BigNumber }
>;

export type ReserveFactorChangedEvent = TypedEvent<
  [string, BigNumber] & { asset: string; factor: BigNumber }
>;

export type ReserveFrozenEvent = TypedEvent<[string] & { asset: string }>;

export type ReserveInitializedEvent = TypedEvent<
  [string, string, string, string, string] & {
    asset: string;
    aToken: string;
    stableDebtToken: string;
    variableDebtToken: string;
    interestRateStrategyAddress: string;
  }
>;

export type ReserveInterestRateStrategyChangedEvent = TypedEvent<
  [string, string] & { asset: string; strategy: string }
>;

export type ReserveUnfrozenEvent = TypedEvent<[string] & { asset: string }>;

export type StableDebtTokenUpgradedEvent = TypedEvent<
  [string, string, string] & {
    asset: string;
    proxy: string;
    implementation: string;
  }
>;

export type StableRateDisabledOnReserveEvent = TypedEvent<
  [string] & { asset: string }
>;

export type StableRateEnabledOnReserveEvent = TypedEvent<
  [string] & { asset: string }
>;

export type VariableDebtTokenUpgradedEvent = TypedEvent<
  [string, string, string] & {
    asset: string;
    proxy: string;
    implementation: string;
  }
>;

export class ILendingPoolConfigurator extends BaseContract {
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

  interface: ILendingPoolConfiguratorInterface;

  functions: {};

  callStatic: {};

  filters: {
    "ATokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    ATokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    "BorrowingDisabledOnReserve(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    BorrowingDisabledOnReserve(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "BorrowingEnabledOnReserve(address,bool)"(
      asset?: string | null,
      stableRateEnabled?: null
    ): TypedEventFilter<
      [string, boolean],
      { asset: string; stableRateEnabled: boolean }
    >;

    BorrowingEnabledOnReserve(
      asset?: string | null,
      stableRateEnabled?: null
    ): TypedEventFilter<
      [string, boolean],
      { asset: string; stableRateEnabled: boolean }
    >;

    "CollateralConfigurationChanged(address,uint256,uint256,uint256)"(
      asset?: string | null,
      ltv?: null,
      liquidationThreshold?: null,
      liquidationBonus?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        asset: string;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
      }
    >;

    CollateralConfigurationChanged(
      asset?: string | null,
      ltv?: null,
      liquidationThreshold?: null,
      liquidationBonus?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        asset: string;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
      }
    >;

    "ReserveActivated(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    ReserveActivated(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "ReserveDeactivated(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    ReserveDeactivated(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "ReserveDecimalsChanged(address,uint256)"(
      asset?: string | null,
      decimals?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; decimals: BigNumber }
    >;

    ReserveDecimalsChanged(
      asset?: string | null,
      decimals?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; decimals: BigNumber }
    >;

    "ReserveFactorChanged(address,uint256)"(
      asset?: string | null,
      factor?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; factor: BigNumber }
    >;

    ReserveFactorChanged(
      asset?: string | null,
      factor?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; factor: BigNumber }
    >;

    "ReserveFrozen(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    ReserveFrozen(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "ReserveInitialized(address,address,address,address,address)"(
      asset?: string | null,
      aToken?: string | null,
      stableDebtToken?: null,
      variableDebtToken?: null,
      interestRateStrategyAddress?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        asset: string;
        aToken: string;
        stableDebtToken: string;
        variableDebtToken: string;
        interestRateStrategyAddress: string;
      }
    >;

    ReserveInitialized(
      asset?: string | null,
      aToken?: string | null,
      stableDebtToken?: null,
      variableDebtToken?: null,
      interestRateStrategyAddress?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        asset: string;
        aToken: string;
        stableDebtToken: string;
        variableDebtToken: string;
        interestRateStrategyAddress: string;
      }
    >;

    "ReserveInterestRateStrategyChanged(address,address)"(
      asset?: string | null,
      strategy?: null
    ): TypedEventFilter<[string, string], { asset: string; strategy: string }>;

    ReserveInterestRateStrategyChanged(
      asset?: string | null,
      strategy?: null
    ): TypedEventFilter<[string, string], { asset: string; strategy: string }>;

    "ReserveUnfrozen(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    ReserveUnfrozen(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "StableDebtTokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    StableDebtTokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    "StableRateDisabledOnReserve(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    StableRateDisabledOnReserve(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "StableRateEnabledOnReserve(address)"(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    StableRateEnabledOnReserve(
      asset?: string | null
    ): TypedEventFilter<[string], { asset: string }>;

    "VariableDebtTokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    VariableDebtTokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
