import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { ElectronicsStoreAspect } from './electronics-store.aspect';

export class ElectronicsStoreMain {
  static slots = [];
  static dependencies = [ReactAspect];
  static runtime = MainRuntime;
  static async provider([react]: [ReactMain]) {
    react.registerReactApp({
      name: 'electronics-store',
      entry: [require.resolve('./electronics-store.app-root')]
    });
    return new ElectronicsStoreMain();
  }
}
ElectronicsStoreAspect.addRuntime(ElectronicsStoreMain);
