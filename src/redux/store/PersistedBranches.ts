import { StoreState } from '../branches/StoreState';

type BranchList = Array<keyof StoreState>;

export const persistedBranches: BranchList = ['exampleBranch'];
