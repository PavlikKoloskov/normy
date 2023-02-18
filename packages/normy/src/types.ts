export type DataPrimitive = string | number | boolean | null | undefined;

export type DataPrimitiveArray =
  | string[]
  | number[]
  | boolean[]
  | null[]
  | undefined[];

export type DataObject = {
  [index: string]: Data;
};

export type Data =
  | DataPrimitive
  | DataObject
  | DataPrimitiveArray
  | DataObject[];

export type NormalizerConfig = {
  getNormalisationObjectKey?: (obj: DataObject) => string;
  shouldObjectBeNormalized?: (obj: DataObject) => boolean;
};

export type UsedKeys = { [path: string]: ReadonlyArray<string> };
