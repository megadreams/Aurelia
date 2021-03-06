declare module 'aurelia-dependency-injection' {
  import 'core-js';
  import { metadata, decorators }  from 'aurelia-metadata';
  import { AggregateError }  from 'aurelia-pal';
  
  /**
  * An abstract resolver used to allow functions/classes to specify custom dependency resolution logic.
  */
  export class Resolver {
    
    /**
      * Called by the container to allow custom resolution of dependencies for a function/class.
      * @param container The container to resolve from.
      * @return Returns the resolved object.
      */
    get(container: Container): any;
  }
  
  /**
  * Used to allow functions/classes to specify lazy resolution logic.
  */
  export class Lazy extends Resolver {
    
    /**
      * Creates an instance of the Lazy class.
      * @param key The key to lazily resolve.
      */
    constructor(key: any);
    
    /**
      * Called by the container to lazily resolve the dependency into a lazy locator function.
      * @param container The container to resolve from.
      * @return Returns a function which can be invoked at a later time to obtain the actual dependency.
      */
    get(container: Container): any;
    
    /**
      * Creates a Lazy Resolver for the supplied key.
      * @param key The key to lazily resolve.
      * @return Returns an insance of Lazy for the key.
      */
    static of(key: any): Lazy;
  }
  
  /**
  * Used to allow functions/classes to specify resolution of all matches to a key.
  */
  export class All extends Resolver {
    
    /**
      * Creates an instance of the All class.
      * @param key The key to lazily resolve all matches for.
      */
    constructor(key: any);
    
    /**
      * Called by the container to resolve all matching dependencies as an array of instances.
      * @param container The container to resolve from.
      * @return Returns an array of all matching instances.
      */
    get(container: Container): any[];
    
    /**
      * Creates an All Resolver for the supplied key.
      * @param key The key to resolve all instances for.
      * @return Returns an insance of All for the key.
      */
    static of(key: any): All;
  }
  
  /**
  * Used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
  */
  export class Optional extends Resolver {
    
    /**
      * Creates an instance of the Optional class.
      * @param key The key to optionally resolve for.
      * @param [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
      */
    constructor(key: any, checkParent?: boolean);
    
    /**
      * Called by the container to provide optional resolution of the key.
      * @param container The container to resolve from.
      * @return Returns the instance if found; otherwise null.
      */
    get(container: Container): any;
    
    /**
      * Creates an Optional Resolver for the supplied key.
      * @param key The key to optionally resolve for.
      * @param [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
      * @return Returns an insance of Optional for the key.
      */
    static of(key: any, checkParent?: boolean): Optional;
  }
  
  /**
  * Used to inject the dependency from the parent container instead of the current one.
  */
  export class Parent extends Resolver {
    
    /**
      * Creates an instance of the Parent class.
      * @param key The key to resolve from the parent container.
      */
    constructor(key: any);
    
    /**
      * Called by the container to load the dependency from the parent container
      * @param container The container to resolve the parent from.
      * @return Returns the matching instance from the parent container
      */
    get(container: Container): any;
    
    /**
      * Creates a Parent Resolver for the supplied key.
      * @param key The key to resolve.
      * @return Returns an insance of Parent for the key.
      */
    static of(key: any): Parent;
  }
  export class StrategyResolver {
    constructor(strategy: any, state: any);
    get(container: any, key: any): any;
  }
  
  /**
  * Used to invoke a factory method.
  */
  export class FactoryActivator {
    
    /**
      * The singleton instance of the FactoryActivator.
      */
    static instance: any;
    
    /**
      * Invokes the factory function with the provided arguments.
      * @param fn The factory function.
      * @param keys The keys representing the function's service dependencies.
      * @return The newly created instance.
      */
    invoke(container: any, fn: any, keys: any): any;
    
    /**
      * Invokes the factory function with the provided arguments.
      * @param fn The factory function.
      * @param keys The keys representing the function's service dependencies.
      * @param deps Additional function dependencies to use during invocation.
      * @return The newly created instance.
      */
    invokeWithDynamicDependencies(container: any, fn: any, keys: any, deps: any): any;
  }
  
  /**
  * Used to allow functions/classes to indicate that they should be registered as transients with the container.
  */
  export class TransientRegistration {
    
    /**
      * Creates an instance of TransientRegistration.
      * @param key The key to register as.
      */
    constructor(key: any);
    
    /**
      * Called by the container to register the annotated function/class as transient.
      * @param container The container to register with.
      * @param key The key to register as.
      * @param fn The function to register (target of the annotation).
      * @return The resolver that should to be used.
      */
    createResolver(container: Container, key: any, fn: Function): Resolver;
  }
  
  /**
  * Used to allow functions/classes to indicate that they should be registered as singletons with the container.
  */
  export class SingletonRegistration {
    
    /**
      * Creates an instance of SingletonRegistration.
      * @param key The key to register as.
      */
    constructor(keyOrRegisterInChild: any, registerInChild?: boolean);
    
    /**
      * Called by the container to register the annotated function/class as a singleton.
      * @param container The container to register with.
      * @param key The key to register as.
      * @param fn The function to register (target of the annotation).
      * @return The resolver that should to be used.
      */
    createResolver(container: Container, key: any, fn: Function): Resolver;
  }
  class ConstructionInfo {
    constructor(activator: any, keys: any);
  }
  
  /**
  * A lightweight, extensible dependency injection container.
  */
  export class Container {
    static instance: Container;
    constructor(constructionInfo?: Map<Function, Object>);
    
    /**
      * Makes this container instance globally reachable through Container.instance.
      */
    makeGlobal(): Container;
    
    /**
      * Registers an existing object instance with the container.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param instance The instance that will be resolved when the key is matched.
      */
    registerInstance(key: any, instance?: any): void;
    
    /**
      * Registers a type (constructor function) such that the container always returns the same instance for each request.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param [fn] The constructor function to use when the dependency needs to be instantiated.
      */
    registerSingleton(key: any, fn?: Function): void;
    
    /**
      * Registers a type (constructor function) such that the container returns a new instance for each request.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param [fn] The constructor function to use when the dependency needs to be instantiated.
      */
    registerTransient(key: any, fn?: Function): void;
    
    /**
      * Registers a custom resolution function such that the container calls this function for each request to obtain the instance.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param handler The resolution function to use when the dependency is needed.
      */
    registerHandler(key: any, handler: ((container?: Container, key?: any, resolver?: Resolver) => any)): void;
    
    /**
      * Registers an additional key that serves as an alias to the original DI key.
      * @param originalKey The key that originally identified the dependency; usually a constructor function.
      * @param aliasKey An alternate key which can also be used to resolve the same dependency  as the original.
      */
    registerAlias(originalKey: any, aliasKey: any): void;
    
    /**
      * Registers a custom resolution function such that the container calls this function for each request to obtain the instance.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param resolver The resolver to use when the dependency is needed.
      */
    registerResolver(key: any, resolver: Resolver): void;
    
    /**
      * Registers a type (constructor function) by inspecting its registration annotations. If none are found, then the default singleton registration is used.
      * @param fn The constructor function to use when the dependency needs to be instantiated.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      */
    autoRegister(fn: any, key?: any): Resolver;
    
    /**
      * Registers an array of types (constructor functions) by inspecting their registration annotations. If none are found, then the default singleton registration is used.
      * @param fns The constructor function to use when the dependency needs to be instantiated.
      */
    autoRegisterAll(fns: any[]): void;
    
    /**
      * Unregisters based on key.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      */
    unregister(key: any): void;
    
    /**
      * Inspects the container to determine if a particular key has been registred.
      * @param key The key that identifies the dependency at resolution time; usually a constructor function.
      * @param checkParent Indicates whether or not to check the parent container hierarchy.
      * @return Returns true if the key has been registred; false otherwise.
      */
    hasResolver(key: any, checkParent?: boolean): boolean;
    
    /**
      * Deprecated. Use hasResolver instead.
      */
    hasHandler(key: any, checkParent: any): any;
    
    /**
      * Resolves a single instance based on the provided key.
      * @param key The key that identifies the object to resolve.
      * @return Returns the resolved instance.
      */
    get(key: any): any;
    
    /**
      * Resolves all instance registered under the provided key.
      * @param key The key that identifies the objects to resolve.
      * @return Returns an array of the resolved instances.
      */
    getAll(key: any): any[];
    
    /**
      * Creates a new dependency injection container whose parent is the current container.
      * @return Returns a new container instance parented to this.
      */
    createChild(): Container;
    
    /**
      * Invokes a function, recursively resolving its dependencies.
      * @param fn The function to invoke with the auto-resolved dependencies.
      * @return Returns the instance resulting from calling the function.
      */
    invoke(fn: Function): any;
    
    /**
      * Invokes a function, recursively resolving its dependencies.
      * @param fn The function to invoke with the auto-resolved dependencies.
      * @param deps Additional function dependencies to use during invocation.
      * @return Returns the instance resulting from calling the function.
      */
    invokeWithDynamicDependencies(fn: Function, deps: any[]): any;
  }
  export function autoinject(potentialTarget?: any): any;
  export function inject(...rest: any[]): any;
  export function registration(value: any): any;
  export function transient(key?: any): any;
  export function singleton(keyOrRegisterInChild?: any, registerInChild?: boolean): any;
  export function instanceActivator(value: any): any;
  export function factory(): any;
}