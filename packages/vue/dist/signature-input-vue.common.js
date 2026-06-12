module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "01a6":
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("4625");
var aCallable = __webpack_require__("59ed");
var NATIVE_BIND = __webpack_require__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("1212");
var fails = __webpack_require__("d039");
var globalThis = __webpack_require__("cfe9");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "0d26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable, sonarjs/slow-regex -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "1212":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var userAgent = __webpack_require__("b5db");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "13c5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1787":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "19aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__("3a9b");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1eb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var isArrayIteratorMethod = __webpack_require__("e95a");
var lengthOfArrayLike = __webpack_require__("07fa");
var isPrototypeOf = __webpack_require__("3a9b");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var getMethod = __webpack_require__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2baa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "2d67":
/***/ (function(module, exports) {

module.exports = require("@zeedhi/vuetify");

/***/ }),

/***/ "3511":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");
var getMethod = __webpack_require__("dc4a");
var isNullOrUndefined = __webpack_require__("7234");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3b80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_3_node_modules_eslint_loader_index_js_ref_14_0_ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9a2");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_3_node_modules_eslint_loader_index_js_ref_14_0_ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_3_node_modules_eslint_loader_index_js_ref_14_0_ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_3_node_modules_eslint_loader_index_js_ref_14_0_ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_3_node_modules_eslint_loader_index_js_ref_14_0_ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_3_node_modules_eslint_loader_index_js_ref_14_0_ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__("1787");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "4625":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__("c6b6");
var uncurryThis = __webpack_require__("e330");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "46c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "4754":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store = __webpack_require__("c6cd");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "6964":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__("cb2d");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var globalThis = __webpack_require__("cfe9");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6f19":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__("9112");
var clearErrorStack = __webpack_require__("0d26");
var ERROR_STACK_INSTALLABLE = __webpack_require__("b980");

// non-standard V8
// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ "70d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureInput_vue_vue_type_style_index_0_id_a2b446c0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("13c5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureInput_vue_vue_type_style_index_0_id_a2b446c0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureInput_vue_vue_type_style_index_0_id_a2b446c0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7234":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7282":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7993":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36bbd52e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue/src/SignatureInput.vue?vue&type=template&id=a2b446c0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.instance.isVisible,
      expression: "instance.isVisible"
    }],
    class: ['zd-signature-input', _vm.instance.cssClass, {
      'zd-signature-input--inactive': _vm.inactive
    }],
    style: _vm.instance.cssStyle,
    attrs: {
      "id": _vm.instance.name,
      "name": _vm.instance.name
    }
  }, [_c('v-input', {
    ref: "instance",
    staticClass: "zd-signature-input__validation",
    attrs: {
      "disabled": _vm.instance.disabled,
      "hide-details": _vm.hideDetails,
      "hint": _vm.instance.hint,
      "persistent-hint": _vm.instance.persistentHint,
      "rules": _vm.rules,
      "value": _vm.instance.value
    }
  }, [_c('div', {
    staticClass: "zd-signature-input__field"
  }, [_vm.instance.showLabel && _vm.instance.label ? _c('label', {
    staticClass: "zd-signature-input__label",
    attrs: {
      "for": `${_vm.instance.name}_canvas`
    }
  }, [_vm._v(" " + _vm._s(_vm.instance.label) + " ")]) : _vm._e(), _c('div', {
    staticClass: "zd-signature-input__body"
  }, [_c('div', {
    staticClass: "zd-signature-input__surface",
    style: _vm.surfaceStyle
  }, [_c('canvas', {
    ref: "canvas",
    staticClass: "zd-signature-input__canvas",
    style: _vm.canvasStyle,
    attrs: {
      "id": `${_vm.instance.name}_canvas`,
      "aria-label": _vm.instance.label,
      "tabindex": _vm.inactive ? -1 : 0
    },
    on: {
      "blur": _vm.blur,
      "keydown": _vm.keydown,
      "keyup": _vm.keyup
    }
  })]), _c('div', {
    staticClass: "zd-signature-input__actions"
  }, [_vm.instance.showUpload ? _c('v-tooltip', {
    attrs: {
      "bottom": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on
      }) {
        return [_c('v-btn', _vm._g({
          attrs: {
            "icon": "",
            "small": "",
            "type": "button",
            "disabled": _vm.inactive
          },
          on: {
            "click": _vm.openFileInput
          }
        }, on), [_c('v-icon', {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-upload")])], 1)];
      }
    }], null, false, 1597896042)
  }, [_c('span', [_vm._v("Enviar assinatura")])]) : _vm._e(), _c('v-tooltip', {
    attrs: {
      "bottom": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on
      }) {
        return [_c('v-btn', _vm._g({
          attrs: {
            "icon": "",
            "small": "",
            "type": "button",
            "disabled": _vm.inactive || !_vm.hasSignatureValue
          },
          on: {
            "click": _vm.clearSignature
          }
        }, on), [_c('v-icon', {
          attrs: {
            "small": ""
          }
        }, [_vm._v("mdi-delete")])], 1)];
      }
    }])
  }, [_c('span', [_vm._v("Limpar assinatura")])]), _c('input', {
    ref: "fileInput",
    staticClass: "zd-signature-input__file",
    attrs: {
      "type": "file",
      "accept": _vm.instance.accept
    },
    on: {
      "change": _vm.handleFileChange
    }
  })], 1)])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/vue/src/SignatureInput.vue?vue&type=template&id=a2b446c0


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var definePropertiesModule = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "7d54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var iterate = __webpack_require__("2266");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ SignaturePad; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("b7ef");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js


function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__("e9f5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__("910d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__("7d54");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js


function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js





function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js



function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js



function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js


function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

// CONCATENATED MODULE: ./node_modules/signature_pad/dist/signature_pad.js














/*!
 * Signature Pad v5.1.3 | https://github.com/szimek/signature_pad
 * (c) 2025 Szymon Nowak | Released under the MIT license
 */

// src/point.ts
var signature_pad_Point = /*#__PURE__*/function () {
  function Point(x, y, pressure, time) {
    _classCallCheck(this, Point);
    _defineProperty(this, "x", void 0);
    _defineProperty(this, "y", void 0);
    _defineProperty(this, "pressure", void 0);
    _defineProperty(this, "time", void 0);
    if (isNaN(x) || isNaN(y)) {
      throw new Error("Point is invalid: (".concat(x, ", ").concat(y, ")"));
    }
    this.x = +x;
    this.y = +y;
    this.pressure = pressure || 0;
    this.time = time || Date.now();
  }
  return _createClass(Point, [{
    key: "distanceTo",
    value: function distanceTo(start) {
      return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.x === other.x && this.y === other.y && this.pressure === other.pressure && this.time === other.time;
    }
  }, {
    key: "velocityFrom",
    value: function velocityFrom(start) {
      return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 0;
    }
  }]);
}();

// src/bezier.ts
var Bezier = /*#__PURE__*/function () {
  function _Bezier(startPoint, control2, control1, endPoint, startWidth, endWidth) {
    _classCallCheck(this, _Bezier);
    this.startPoint = startPoint;
    this.control2 = control2;
    this.control1 = control1;
    this.endPoint = endPoint;
    this.startWidth = startWidth;
    this.endWidth = endWidth;
  }
  return _createClass(_Bezier, [{
    key: "length",
    value:
    // Returns approximated length. Code taken from https://www.lemoda.net/maths/bezier-length/index.html.
    function length() {
      var steps = 10;
      var length = 0;
      var px;
      var py;
      for (var i = 0; i <= steps; i += 1) {
        var t = i / steps;
        var cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
        var cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
        if (i > 0) {
          var xdiff = cx - px;
          var ydiff = cy - py;
          length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        }
        px = cx;
        py = cy;
      }
      return length;
    }
    // Calculate parametric value of x or y given t and the four point coordinates of a cubic bezier curve.
  }, {
    key: "point",
    value: function point(t, start, c1, c2, end) {
      return start * (1 - t) * (1 - t) * (1 - t) + 3 * c1 * (1 - t) * (1 - t) * t + 3 * c2 * (1 - t) * t * t + end * t * t * t;
    }
  }], [{
    key: "fromPoints",
    value: function fromPoints(points, widths) {
      var c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
      var c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
      return new _Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
    }
  }, {
    key: "calculateControlPoints",
    value: function calculateControlPoints(s1, s2, s3) {
      var dx1 = s1.x - s2.x;
      var dy1 = s1.y - s2.y;
      var dx2 = s2.x - s3.x;
      var dy2 = s2.y - s3.y;
      var m1 = {
        x: (s1.x + s2.x) / 2,
        y: (s1.y + s2.y) / 2
      };
      var m2 = {
        x: (s2.x + s3.x) / 2,
        y: (s2.y + s3.y) / 2
      };
      var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      var dxm = m1.x - m2.x;
      var dym = m1.y - m2.y;
      var k = l1 + l2 == 0 ? 0 : l2 / (l1 + l2);
      var cm = {
        x: m2.x + dxm * k,
        y: m2.y + dym * k
      };
      var tx = s2.x - cm.x;
      var ty = s2.y - cm.y;
      return {
        c1: new signature_pad_Point(m1.x + tx, m1.y + ty),
        c2: new signature_pad_Point(m2.x + tx, m2.y + ty)
      };
    }
  }]);
}();

// src/signature_event_target.ts
var signature_pad_SignatureEventTarget = /*#__PURE__*/function () {
  /* tslint:enable: variable-name */
  function SignatureEventTarget() {
    _classCallCheck(this, SignatureEventTarget);
    /* tslint:disable: variable-name */
    _defineProperty(this, "_et", void 0);
    try {
      this._et = new EventTarget();
    } catch (_unused) {
      this._et = document;
    }
  }
  return _createClass(SignatureEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      this._et.addEventListener(type, listener, options);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      return this._et.dispatchEvent(event);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, callback, options) {
      this._et.removeEventListener(type, callback, options);
    }
  }]);
}();

// src/throttle.ts
function throttle(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var previous = 0;
  var timeout = null;
  var result;
  var storedContext;
  var storedArgs;
  var later = function later() {
    previous = Date.now();
    timeout = null;
    result = fn.apply(storedContext, storedArgs);
    if (!timeout) {
      storedContext = null;
      storedArgs = [];
    }
  };
  return function wrapper() {
    var now = Date.now();
    var remaining = wait - (now - previous);
    storedContext = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    storedArgs = args;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = fn.apply(storedContext, storedArgs);
      if (!timeout) {
        storedContext = null;
        storedArgs = [];
      }
    } else if (!timeout) {
      timeout = window.setTimeout(later, remaining);
    }
    return result;
  };
}

// src/signature_pad.ts
var SignaturePad = /*#__PURE__*/function (_SignatureEventTarget) {
  /* tslint:enable: variable-name */
  function _SignaturePad(canvas) {
    var _options$throttle, _options$minDistance, _options$canvasContex;
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, _SignaturePad);
    _this = _callSuper(this, _SignaturePad);
    // Public stuff
    _defineProperty(_this, "dotSize", void 0);
    _defineProperty(_this, "minWidth", void 0);
    _defineProperty(_this, "maxWidth", void 0);
    _defineProperty(_this, "penColor", void 0);
    _defineProperty(_this, "minDistance", void 0);
    _defineProperty(_this, "velocityFilterWeight", void 0);
    _defineProperty(_this, "compositeOperation", void 0);
    _defineProperty(_this, "backgroundColor", void 0);
    _defineProperty(_this, "throttle", void 0);
    _defineProperty(_this, "canvasContextOptions", void 0);
    // Private stuff
    /* tslint:disable: variable-name */
    _defineProperty(_this, "_ctx", void 0);
    _defineProperty(_this, "_drawingStroke", false);
    _defineProperty(_this, "_isEmpty", true);
    _defineProperty(_this, "_dataUrl", void 0);
    _defineProperty(_this, "_dataUrlOptions", void 0);
    _defineProperty(_this, "_lastPoints", []);
    // Stores up to 4 most recent points; used to generate a new curve
    _defineProperty(_this, "_data", []);
    // Stores all points in groups (one group per line or dot)
    _defineProperty(_this, "_lastVelocity", 0);
    _defineProperty(_this, "_lastWidth", 0);
    _defineProperty(_this, "_strokeMoveUpdate", void 0);
    _defineProperty(_this, "_strokePointerId", void 0);
    _this.canvas = canvas;
    _this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
    _this.minWidth = options.minWidth || 0.5;
    _this.maxWidth = options.maxWidth || 2.5;
    _this.throttle = (_options$throttle = options.throttle) !== null && _options$throttle !== void 0 ? _options$throttle : 16;
    _this.minDistance = (_options$minDistance = options.minDistance) !== null && _options$minDistance !== void 0 ? _options$minDistance : 5;
    _this.dotSize = options.dotSize || 0;
    _this.penColor = options.penColor || "black";
    _this.backgroundColor = options.backgroundColor || "rgba(0,0,0,0)";
    _this.compositeOperation = options.compositeOperation || "source-over";
    _this.canvasContextOptions = (_options$canvasContex = options.canvasContextOptions) !== null && _options$canvasContex !== void 0 ? _options$canvasContex : {};
    _this._strokeMoveUpdate = _this.throttle ? throttle(_SignaturePad.prototype._strokeUpdate, _this.throttle) : _SignaturePad.prototype._strokeUpdate;
    _this._handleMouseDown = _this._handleMouseDown.bind(_this);
    _this._handleMouseMove = _this._handleMouseMove.bind(_this);
    _this._handleMouseUp = _this._handleMouseUp.bind(_this);
    _this._handleTouchStart = _this._handleTouchStart.bind(_this);
    _this._handleTouchMove = _this._handleTouchMove.bind(_this);
    _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
    _this._handlePointerDown = _this._handlePointerDown.bind(_this);
    _this._handlePointerMove = _this._handlePointerMove.bind(_this);
    _this._handlePointerUp = _this._handlePointerUp.bind(_this);
    _this._handlePointerCancel = _this._handlePointerCancel.bind(_this);
    _this._handleTouchCancel = _this._handleTouchCancel.bind(_this);
    _this._ctx = canvas.getContext("2d", _this.canvasContextOptions);
    _this.clear();
    _this.on();
    return _this;
  }
  _inherits(_SignaturePad, _SignatureEventTarget);
  return _createClass(_SignaturePad, [{
    key: "clear",
    value: function clear() {
      var ctx = this._ctx,
        canvas = this.canvas;
      ctx.fillStyle = this.backgroundColor;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this._data = [];
      this._reset(this._getPointGroupOptions());
      this._isEmpty = true;
      this._dataUrl = void 0;
      this._dataUrlOptions = void 0;
      this._strokePointerId = void 0;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      var data = this._data;
      var dataUrl = this._dataUrl;
      var dataUrlOptions = this._dataUrlOptions;
      this.clear();
      if (dataUrl) {
        this.fromDataURL(dataUrl, dataUrlOptions);
      }
      this.fromData(data, {
        clear: false
      });
    }
  }, {
    key: "fromDataURL",
    value: function fromDataURL(dataUrl) {
      var _this2 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        var image = new Image();
        var ratio = options.ratio || window.devicePixelRatio || 1;
        var width = options.width || _this2.canvas.width / ratio;
        var height = options.height || _this2.canvas.height / ratio;
        var xOffset = options.xOffset || 0;
        var yOffset = options.yOffset || 0;
        _this2._reset(_this2._getPointGroupOptions());
        image.onload = function () {
          _this2._ctx.drawImage(image, xOffset, yOffset, width, height);
          resolve();
        };
        image.onerror = function (error) {
          reject(error);
        };
        image.crossOrigin = "anonymous";
        image.src = dataUrl;
        _this2._isEmpty = false;
        _this2._dataUrl = dataUrl;
        _this2._dataUrlOptions = _objectSpread2({}, options);
      });
    }
  }, {
    key: "toDataURL",
    value: function toDataURL() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image/png";
      var encoderOptions = arguments.length > 1 ? arguments[1] : undefined;
      switch (type) {
        case "image/svg+xml":
          if (_typeof(encoderOptions) !== "object") {
            encoderOptions = void 0;
          }
          return "data:image/svg+xml;base64,".concat(btoa(this.toSVG(encoderOptions)));
        default:
          if (typeof encoderOptions !== "number") {
            encoderOptions = void 0;
          }
          return this.canvas.toDataURL(type, encoderOptions);
      }
    }
  }, {
    key: "on",
    value: function on() {
      this.canvas.style.touchAction = "none";
      this.canvas.style.msTouchAction = "none";
      this.canvas.style.userSelect = "none";
      this.canvas.style.webkitUserSelect = "none";
      var isIOS = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
      if (window.PointerEvent && !isIOS) {
        this._handlePointerEvents();
      } else {
        this._handleMouseEvents();
        if ("ontouchstart" in window) {
          this._handleTouchEvents();
        }
      }
    }
  }, {
    key: "off",
    value: function off() {
      this.canvas.style.touchAction = "auto";
      this.canvas.style.msTouchAction = "auto";
      this.canvas.style.userSelect = "auto";
      this.canvas.style.webkitUserSelect = "auto";
      this.canvas.removeEventListener("pointerdown", this._handlePointerDown);
      this.canvas.removeEventListener("mousedown", this._handleMouseDown);
      this.canvas.removeEventListener("touchstart", this._handleTouchStart);
      this._removeMoveUpEventListeners();
    }
  }, {
    key: "_getListenerFunctions",
    value: function _getListenerFunctions() {
      var _this$canvas$ownerDoc;
      var canvasWindow = window.document === this.canvas.ownerDocument ? window : (_this$canvas$ownerDoc = this.canvas.ownerDocument.defaultView) !== null && _this$canvas$ownerDoc !== void 0 ? _this$canvas$ownerDoc : this.canvas.ownerDocument;
      return {
        addEventListener: canvasWindow.addEventListener.bind(canvasWindow),
        removeEventListener: canvasWindow.removeEventListener.bind(canvasWindow)
      };
    }
  }, {
    key: "_removeMoveUpEventListeners",
    value: function _removeMoveUpEventListeners() {
      var _this$_getListenerFun = this._getListenerFunctions(),
        removeEventListener = _this$_getListenerFun.removeEventListener;
      removeEventListener("pointermove", this._handlePointerMove);
      removeEventListener("pointerup", this._handlePointerUp);
      removeEventListener("pointercancel", this._handlePointerCancel);
      removeEventListener("mousemove", this._handleMouseMove);
      removeEventListener("mouseup", this._handleMouseUp);
      removeEventListener("touchmove", this._handleTouchMove);
      removeEventListener("touchend", this._handleTouchEnd);
      removeEventListener("touchcancel", this._handleTouchCancel);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._isEmpty;
    }
  }, {
    key: "fromData",
    value: function fromData(pointGroups) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$clear = _ref.clear,
        clear = _ref$clear === void 0 ? true : _ref$clear;
      if (clear) {
        this.clear();
      }
      this._fromData(pointGroups, this._drawCurve.bind(this), this._drawDot.bind(this));
      this._data = this._data.concat(pointGroups);
    }
  }, {
    key: "toData",
    value: function toData() {
      return this._data;
    }
  }, {
    key: "_isLeftButtonPressed",
    value: function _isLeftButtonPressed(event, only) {
      if (only) {
        return event.buttons === 1;
      }
      return (event.buttons & 1) === 1;
    }
  }, {
    key: "_pointerEventToSignatureEvent",
    value: function _pointerEventToSignatureEvent(event) {
      return {
        event: event,
        type: event.type,
        x: event.clientX,
        y: event.clientY,
        pressure: "pressure" in event ? event.pressure : 0
      };
    }
  }, {
    key: "_touchEventToSignatureEvent",
    value: function _touchEventToSignatureEvent(event) {
      var touch = event.changedTouches[0];
      return {
        event: event,
        type: event.type,
        x: touch.clientX,
        y: touch.clientY,
        pressure: touch.force
      };
    }
    // Event handlers
  }, {
    key: "_handleMouseDown",
    value: function _handleMouseDown(event) {
      if (!this._isLeftButtonPressed(event, true) || this._drawingStroke) {
        return;
      }
      this._strokeBegin(this._pointerEventToSignatureEvent(event));
    }
  }, {
    key: "_handleMouseMove",
    value: function _handleMouseMove(event) {
      if (!this._isLeftButtonPressed(event, true) || !this._drawingStroke) {
        this._strokeEnd(this._pointerEventToSignatureEvent(event), false);
        return;
      }
      this._strokeMoveUpdate(this._pointerEventToSignatureEvent(event));
    }
  }, {
    key: "_handleMouseUp",
    value: function _handleMouseUp(event) {
      if (this._isLeftButtonPressed(event)) {
        return;
      }
      this._strokeEnd(this._pointerEventToSignatureEvent(event));
    }
  }, {
    key: "_handleTouchStart",
    value: function _handleTouchStart(event) {
      if (event.targetTouches.length !== 1 || this._drawingStroke) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      this._strokeBegin(this._touchEventToSignatureEvent(event));
    }
  }, {
    key: "_handleTouchMove",
    value: function _handleTouchMove(event) {
      if (event.targetTouches.length !== 1) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      if (!this._drawingStroke) {
        this._strokeEnd(this._touchEventToSignatureEvent(event), false);
        return;
      }
      this._strokeMoveUpdate(this._touchEventToSignatureEvent(event));
    }
  }, {
    key: "_handleTouchEnd",
    value: function _handleTouchEnd(event) {
      if (event.targetTouches.length !== 0) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      this._strokeEnd(this._touchEventToSignatureEvent(event));
    }
  }, {
    key: "_handlePointerCancel",
    value: function _handlePointerCancel(event) {
      if (!this._allowPointerId(event)) {
        return;
      }
      event.preventDefault();
      this._strokeEnd(this._pointerEventToSignatureEvent(event), false);
    }
  }, {
    key: "_handleTouchCancel",
    value: function _handleTouchCancel(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      this._strokeEnd(this._touchEventToSignatureEvent(event), false);
    }
  }, {
    key: "_getPointerId",
    value: function _getPointerId(event) {
      return event.persistentDeviceId || event.pointerId;
    }
  }, {
    key: "_allowPointerId",
    value: function _allowPointerId(event) {
      var allowUndefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (typeof this._strokePointerId === "undefined") {
        return allowUndefined;
      }
      return this._getPointerId(event) === this._strokePointerId;
    }
  }, {
    key: "_handlePointerDown",
    value: function _handlePointerDown(event) {
      if (this._drawingStroke || !this._isLeftButtonPressed(event) || !this._allowPointerId(event, true)) {
        return;
      }
      this._strokePointerId = this._getPointerId(event);
      event.preventDefault();
      this._strokeBegin(this._pointerEventToSignatureEvent(event));
    }
  }, {
    key: "_handlePointerMove",
    value: function _handlePointerMove(event) {
      if (!this._allowPointerId(event)) {
        return;
      }
      if (!this._isLeftButtonPressed(event, true) || !this._drawingStroke) {
        this._strokeEnd(this._pointerEventToSignatureEvent(event), false);
        return;
      }
      event.preventDefault();
      this._strokeMoveUpdate(this._pointerEventToSignatureEvent(event));
    }
  }, {
    key: "_handlePointerUp",
    value: function _handlePointerUp(event) {
      if (this._isLeftButtonPressed(event) || !this._allowPointerId(event)) {
        return;
      }
      event.preventDefault();
      this._strokeEnd(this._pointerEventToSignatureEvent(event));
    }
  }, {
    key: "_getPointGroupOptions",
    value: function _getPointGroupOptions(group) {
      return {
        penColor: group && "penColor" in group ? group.penColor : this.penColor,
        dotSize: group && "dotSize" in group ? group.dotSize : this.dotSize,
        minWidth: group && "minWidth" in group ? group.minWidth : this.minWidth,
        maxWidth: group && "maxWidth" in group ? group.maxWidth : this.maxWidth,
        velocityFilterWeight: group && "velocityFilterWeight" in group ? group.velocityFilterWeight : this.velocityFilterWeight,
        compositeOperation: group && "compositeOperation" in group ? group.compositeOperation : this.compositeOperation
      };
    }
    // Private methods
  }, {
    key: "_strokeBegin",
    value: function _strokeBegin(event) {
      var cancelled = !this.dispatchEvent(new CustomEvent("beginStroke", {
        detail: event,
        cancelable: true
      }));
      if (cancelled) {
        return;
      }
      var _this$_getListenerFun2 = this._getListenerFunctions(),
        addEventListener = _this$_getListenerFun2.addEventListener;
      switch (event.event.type) {
        case "mousedown":
          addEventListener("mousemove", this._handleMouseMove, {
            passive: false
          });
          addEventListener("mouseup", this._handleMouseUp, {
            passive: false
          });
          break;
        case "touchstart":
          addEventListener("touchmove", this._handleTouchMove, {
            passive: false
          });
          addEventListener("touchend", this._handleTouchEnd, {
            passive: false
          });
          addEventListener("touchcancel", this._handleTouchCancel, {
            passive: false
          });
          break;
        case "pointerdown":
          addEventListener("pointermove", this._handlePointerMove, {
            passive: false
          });
          addEventListener("pointerup", this._handlePointerUp, {
            passive: false
          });
          addEventListener("pointercancel", this._handlePointerCancel, {
            passive: false
          });
          break;
        default:
      }
      this._drawingStroke = true;
      var pointGroupOptions = this._getPointGroupOptions();
      var newPointGroup = _objectSpread2(_objectSpread2({}, pointGroupOptions), {}, {
        points: []
      });
      this._data.push(newPointGroup);
      this._reset(pointGroupOptions);
      this._strokeUpdate(event);
    }
  }, {
    key: "_strokeUpdate",
    value: function _strokeUpdate(event) {
      if (!this._drawingStroke) {
        return;
      }
      if (this._data.length === 0) {
        this._strokeBegin(event);
        return;
      }
      this.dispatchEvent(new CustomEvent("beforeUpdateStroke", {
        detail: event
      }));
      var point = this._createPoint(event.x, event.y, event.pressure);
      var lastPointGroup = this._data[this._data.length - 1];
      var lastPoints = lastPointGroup.points;
      var lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
      var isLastPointTooClose = lastPoint ? point.distanceTo(lastPoint) <= this.minDistance : false;
      var pointGroupOptions = this._getPointGroupOptions(lastPointGroup);
      if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
        var curve = this._addPoint(point, pointGroupOptions);
        if (!lastPoint) {
          this._drawDot(point, pointGroupOptions);
        } else if (curve) {
          this._drawCurve(curve, pointGroupOptions);
        }
        lastPoints.push({
          time: point.time,
          x: point.x,
          y: point.y,
          pressure: point.pressure
        });
      }
      this.dispatchEvent(new CustomEvent("afterUpdateStroke", {
        detail: event
      }));
    }
  }, {
    key: "_strokeEnd",
    value: function _strokeEnd(event) {
      var shouldUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this._removeMoveUpEventListeners();
      if (!this._drawingStroke) {
        return;
      }
      if (shouldUpdate) {
        this._strokeUpdate(event);
      }
      this._drawingStroke = false;
      this._strokePointerId = void 0;
      this.dispatchEvent(new CustomEvent("endStroke", {
        detail: event
      }));
    }
  }, {
    key: "_handlePointerEvents",
    value: function _handlePointerEvents() {
      this._drawingStroke = false;
      this.canvas.addEventListener("pointerdown", this._handlePointerDown, {
        passive: false
      });
    }
  }, {
    key: "_handleMouseEvents",
    value: function _handleMouseEvents() {
      this._drawingStroke = false;
      this.canvas.addEventListener("mousedown", this._handleMouseDown, {
        passive: false
      });
    }
  }, {
    key: "_handleTouchEvents",
    value: function _handleTouchEvents() {
      this.canvas.addEventListener("touchstart", this._handleTouchStart, {
        passive: false
      });
    }
    // Called when a new line is started
  }, {
    key: "_reset",
    value: function _reset(options) {
      this._lastPoints = [];
      this._lastVelocity = 0;
      this._lastWidth = (options.minWidth + options.maxWidth) / 2;
      this._ctx.fillStyle = options.penColor;
      this._ctx.globalCompositeOperation = options.compositeOperation;
    }
  }, {
    key: "_createPoint",
    value: function _createPoint(x, y, pressure) {
      var rect = this.canvas.getBoundingClientRect();
      return new signature_pad_Point(x - rect.left, y - rect.top, pressure, (/* @__PURE__ */new Date()).getTime());
    }
    // Add point to _lastPoints array and generate a new curve if there are enough points (i.e. 3)
  }, {
    key: "_addPoint",
    value: function _addPoint(point, options) {
      var _lastPoints = this._lastPoints;
      _lastPoints.push(point);
      if (_lastPoints.length > 2) {
        if (_lastPoints.length === 3) {
          _lastPoints.unshift(_lastPoints[0]);
        }
        var widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2], options);
        var curve = Bezier.fromPoints(_lastPoints, widths);
        _lastPoints.shift();
        return curve;
      }
      return null;
    }
  }, {
    key: "_calculateCurveWidths",
    value: function _calculateCurveWidths(startPoint, endPoint, options) {
      var velocity = options.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - options.velocityFilterWeight) * this._lastVelocity;
      var newWidth = this._strokeWidth(velocity, options);
      var widths = {
        end: newWidth,
        start: this._lastWidth
      };
      this._lastVelocity = velocity;
      this._lastWidth = newWidth;
      return widths;
    }
  }, {
    key: "_strokeWidth",
    value: function _strokeWidth(velocity, options) {
      return Math.max(options.maxWidth / (velocity + 1), options.minWidth);
    }
  }, {
    key: "_drawCurveSegment",
    value: function _drawCurveSegment(x, y, width) {
      var ctx = this._ctx;
      ctx.moveTo(x, y);
      ctx.arc(x, y, width, 0, 2 * Math.PI, false);
      this._isEmpty = false;
    }
  }, {
    key: "_drawCurve",
    value: function _drawCurve(curve, options) {
      var ctx = this._ctx;
      var widthDelta = curve.endWidth - curve.startWidth;
      var drawSteps = Math.ceil(curve.length()) * 2;
      ctx.beginPath();
      ctx.fillStyle = options.penColor;
      for (var i = 0; i < drawSteps; i += 1) {
        var t = i / drawSteps;
        var tt = t * t;
        var ttt = tt * t;
        var u = 1 - t;
        var uu = u * u;
        var uuu = uu * u;
        var x = uuu * curve.startPoint.x;
        x += 3 * uu * t * curve.control1.x;
        x += 3 * u * tt * curve.control2.x;
        x += ttt * curve.endPoint.x;
        var y = uuu * curve.startPoint.y;
        y += 3 * uu * t * curve.control1.y;
        y += 3 * u * tt * curve.control2.y;
        y += ttt * curve.endPoint.y;
        var width = Math.min(curve.startWidth + ttt * widthDelta, options.maxWidth);
        this._drawCurveSegment(x, y, width);
      }
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "_drawDot",
    value: function _drawDot(point, options) {
      var ctx = this._ctx;
      var width = options.dotSize > 0 ? options.dotSize : (options.minWidth + options.maxWidth) / 2;
      ctx.beginPath();
      this._drawCurveSegment(point.x, point.y, width);
      ctx.closePath();
      ctx.fillStyle = options.penColor;
      ctx.fill();
    }
  }, {
    key: "_fromData",
    value: function _fromData(pointGroups, drawCurve, drawDot) {
      var _iterator = _createForOfIteratorHelper(pointGroups),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          var points = group.points;
          var pointGroupOptions = this._getPointGroupOptions(group);
          if (points.length > 1) {
            for (var j = 0; j < points.length; j += 1) {
              var basicPoint = points[j];
              var point = new signature_pad_Point(basicPoint.x, basicPoint.y, basicPoint.pressure, basicPoint.time);
              if (j === 0) {
                this._reset(pointGroupOptions);
              }
              var curve = this._addPoint(point, pointGroupOptions);
              if (curve) {
                drawCurve(curve, pointGroupOptions);
              }
            }
          } else {
            this._reset(pointGroupOptions);
            drawDot(points[0], pointGroupOptions);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "toSVG",
    value: function toSVG() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$includeBackgrou = _ref2.includeBackgroundColor,
        includeBackgroundColor = _ref2$includeBackgrou === void 0 ? false : _ref2$includeBackgrou,
        _ref2$includeDataUrl = _ref2.includeDataUrl,
        includeDataUrl = _ref2$includeDataUrl === void 0 ? false : _ref2$includeDataUrl;
      var pointGroups = this._data;
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      var minX = 0;
      var minY = 0;
      var maxX = this.canvas.width / ratio;
      var maxY = this.canvas.height / ratio;
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      svg.setAttribute("viewBox", "".concat(minX, " ").concat(minY, " ").concat(maxX, " ").concat(maxY));
      svg.setAttribute("width", maxX.toString());
      svg.setAttribute("height", maxY.toString());
      if (includeBackgroundColor && this.backgroundColor) {
        var rect = document.createElement("rect");
        rect.setAttribute("width", "100%");
        rect.setAttribute("height", "100%");
        rect.setAttribute("fill", this.backgroundColor);
        svg.appendChild(rect);
      }
      if (includeDataUrl && this._dataUrl) {
        var _this$_dataUrlOptions, _this$_dataUrlOptions2, _this$_dataUrlOptions3, _this$_dataUrlOptions4, _this$_dataUrlOptions5;
        var ratio2 = ((_this$_dataUrlOptions = this._dataUrlOptions) === null || _this$_dataUrlOptions === void 0 ? void 0 : _this$_dataUrlOptions.ratio) || window.devicePixelRatio || 1;
        var width = ((_this$_dataUrlOptions2 = this._dataUrlOptions) === null || _this$_dataUrlOptions2 === void 0 ? void 0 : _this$_dataUrlOptions2.width) || this.canvas.width / ratio2;
        var height = ((_this$_dataUrlOptions3 = this._dataUrlOptions) === null || _this$_dataUrlOptions3 === void 0 ? void 0 : _this$_dataUrlOptions3.height) || this.canvas.height / ratio2;
        var xOffset = ((_this$_dataUrlOptions4 = this._dataUrlOptions) === null || _this$_dataUrlOptions4 === void 0 ? void 0 : _this$_dataUrlOptions4.xOffset) || 0;
        var yOffset = ((_this$_dataUrlOptions5 = this._dataUrlOptions) === null || _this$_dataUrlOptions5 === void 0 ? void 0 : _this$_dataUrlOptions5.yOffset) || 0;
        var image = document.createElement("image");
        image.setAttribute("x", xOffset.toString());
        image.setAttribute("y", yOffset.toString());
        image.setAttribute("width", width.toString());
        image.setAttribute("height", height.toString());
        image.setAttribute("preserveAspectRatio", "none");
        image.setAttribute("href", this._dataUrl);
        svg.appendChild(image);
      }
      this._fromData(pointGroups, function (curve, _ref3) {
        var penColor = _ref3.penColor;
        var path = document.createElement("path");
        if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
          var attr = "M ".concat(curve.startPoint.x.toFixed(3), ",").concat(curve.startPoint.y.toFixed(3), " C ").concat(curve.control1.x.toFixed(3), ",").concat(curve.control1.y.toFixed(3), " ").concat(curve.control2.x.toFixed(3), ",").concat(curve.control2.y.toFixed(3), " ").concat(curve.endPoint.x.toFixed(3), ",").concat(curve.endPoint.y.toFixed(3));
          path.setAttribute("d", attr);
          path.setAttribute("stroke-width", (curve.endWidth * 2.25).toFixed(3));
          path.setAttribute("stroke", penColor);
          path.setAttribute("fill", "none");
          path.setAttribute("stroke-linecap", "round");
          svg.appendChild(path);
        }
      }, function (point, _ref4) {
        var penColor = _ref4.penColor,
          dotSize = _ref4.dotSize,
          minWidth = _ref4.minWidth,
          maxWidth = _ref4.maxWidth;
        var circle = document.createElement("circle");
        var size = dotSize > 0 ? dotSize : (minWidth + maxWidth) / 2;
        circle.setAttribute("r", size.toString());
        circle.setAttribute("cx", point.x.toString());
        circle.setAttribute("cy", point.y.toString());
        circle.setAttribute("fill", penColor);
        svg.appendChild(circle);
      });
      return svg.outerHTML;
    }
  }]);
}(signature_pad_SignatureEventTarget);


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "910d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var createIteratorProxy = __webpack_require__("c5cc");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var IS_PURE = __webpack_require__("c430");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__("2baa");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var getIteratorMethod = __webpack_require__("35a1");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a732":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var iterate = __webpack_require__("2266");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");

var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('some', TypeError);

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$({ target: 'Iterator', proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
  some: function some(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ "ab36":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");

// `InstallErrorCause` abstract operation
// https://tc39.es/ecma262/#sec-installerrorcause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "ab43":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var getIteratorDirect = __webpack_require__("46c4");
var createIteratorProxy = __webpack_require__("c5cc");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var iteratorClose = __webpack_require__("2a62");
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__("2baa");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("f99f");
var IS_PURE = __webpack_require__("c430");

var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('map', TypeError);

var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  map: function map(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper
    });
  }
});


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aeb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b5db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var iteratorClose = __webpack_require__("2a62");

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};


/***/ }),

/***/ "b7ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var globalThis = __webpack_require__("cfe9");
var getBuiltIn = __webpack_require__("d066");
var createPropertyDescriptor = __webpack_require__("5c6c");
var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var anInstance = __webpack_require__("19aa");
var inheritIfRequired = __webpack_require__("7156");
var normalizeStringArgument = __webpack_require__("e391");
var DOMExceptionConstants = __webpack_require__("cf98");
var clearErrorStack = __webpack_require__("0d26");
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }),

/***/ "b980":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "bb8e":
/***/ (function(module, exports) {

module.exports = require("@marcelodl49/zd-signature-input-common");

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "c5cc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var create = __webpack_require__("7c73");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIns = __webpack_require__("6964");
var wellKnownSymbol = __webpack_require__("b622");
var InternalStateModule = __webpack_require__("69f3");
var getMethod = __webpack_require__("dc4a");
var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var createIterResultObject = __webpack_require__("4754");
var iteratorClose = __webpack_require__("2a62");
var iteratorCloseAll = __webpack_require__("b64e");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      var done = state.done;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (done) return createIterResultObject(undefined, true);
      if (state.inner) try {
        iteratorClose(state.inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (state.openIters) try {
        iteratorCloseAll(state.openIters, NORMAL);
      } catch (error) {
        if (iterator) return iteratorClose(iterator, THROW, error);
        throw error;
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ "c64c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignatureInput_vue_vue_type_template_id_a2b446c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7993");
/* harmony import */ var _ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3b80");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SignatureInput_vue_vue_type_style_index_0_id_a2b446c0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("70d4");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _ZdSignatureInput_ts_vue_type_script_lang_ts_external__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignatureInput_vue_vue_type_template_id_a2b446c0__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SignatureInput_vue_vue_type_template_id_a2b446c0__WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null

)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("c430");
var globalThis = __webpack_require__("cfe9");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.49.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c9a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("d9e2");
__webpack_require__("e9f5");
__webpack_require__("910d");
__webpack_require__("ab43");
__webpack_require__("a732");
__webpack_require__("f8c9");
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
var ZdSignatureInput_1;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const signature_pad_1 = __importDefault(__webpack_require__("90e2"));
const vue_property_decorator_1 = __webpack_require__("01a6");
const vuetify_1 = __webpack_require__("2d67");
const zd_signature_input_common_1 = __webpack_require__("bb8e");
let ZdSignatureInput = ZdSignatureInput_1 = class ZdSignatureInput extends vuetify_1.ZdInput {
  constructor() {
    super(...arguments);
    this.hasSignatureValue = false;
    this.instanceType = zd_signature_input_common_1.SignatureInput;
    this.ignoreValueWatch = false;
    this.resizeObserver = null;
    this.resizeTimeout = 0;
    this.signaturePad = null;
    this.strokeCommitTimeout = 0;
    this.handleStrokeEnd = event => {
      window.clearTimeout(this.strokeCommitTimeout);
      this.commitSignatureFromPad(event);
    };
    this.handleStrokeUpdate = event => {
      if (!this.signaturePad || this.signaturePad.isEmpty()) return;
      if (!this.hasSignatureValue) {
        this.commitSignatureFromPad(event);
        return;
      }
      window.clearTimeout(this.strokeCommitTimeout);
      this.strokeCommitTimeout = window.setTimeout(() => this.commitSignatureFromPad(event), 120);
    };
    this.scheduleResize = () => {
      window.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(() => this.resizeCanvas(), 100);
    };
  }
  mounted() {
    this.hasSignatureValue = Boolean(this.instance.value);
    this.mountInputValidation();
    this.$nextTick(() => {
      this.createSignaturePad();
      this.bindResize();
      this.resizeCanvas();
    });
  }
  beforeDestroy() {
    this.unbindResize();
    window.clearTimeout(this.strokeCommitTimeout);
    if (this.signaturePad) {
      this.signaturePad.removeEventListener('endStroke', this.handleStrokeEnd);
      this.signaturePad.removeEventListener('afterUpdateStroke', this.handleStrokeUpdate);
      this.signaturePad.off();
      this.signaturePad = null;
    }
    const superBeforeDestroy = Object.getPrototypeOf(ZdSignatureInput_1.prototype).beforeDestroy;
    if (superBeforeDestroy) {
      superBeforeDestroy.call(this);
    }
  }
  get canvasStyle() {
    return {
      height: this.toCssSize(this.instance.height)
    };
  }
  get hideDetails() {
    return !this.instance.showHelper && !this.instance.alwaysShowError;
  }
  get inactive() {
    return Boolean(this.instance.disabled || this.instance.readonly);
  }
  get surfaceStyle() {
    return {
      backgroundColor: this.instance.backgroundColor
    };
  }
  clearSignature(event) {
    if (this.inactive) return;
    if (this.signaturePad) {
      this.signaturePad.clear();
    }
    this.commitValue('', event);
    this.instance.clear(event, this.$el);
  }
  openFileInput() {
    if (this.inactive || !this.instance.showUpload) return;
    const input = this.$refs.fileInput;
    if (input) {
      input.click();
    }
  }
  async handleFileChange(event) {
    const input = event.target;
    const file = input.files && input.files[0];
    if (!file || this.inactive) return;
    try {
      this.validateFile(file);
      const dataUrl = await this.readFileAsDataUrl(file);
      const pngDataUrl = await this.normalizeImage(dataUrl);
      await this.renderDataUrl(pngDataUrl);
      this.commitValue(pngDataUrl, event);
      this.instance.upload(file, event, this.$el);
    } catch (error) {
      this.instance.error(error, event, this.$el);
      this.$emit('error', error);
    } finally {
      input.value = '';
    }
  }
  updatePenColor(value) {
    if (this.signaturePad) {
      this.signaturePad.penColor = value;
    }
  }
  async updateBackgroundColor(value) {
    if (this.signaturePad) {
      this.signaturePad.backgroundColor = value;
      await this.redrawCurrentValue();
    }
  }
  updateInputState() {
    this.togglePadEvents();
  }
  handleHeightChange() {
    this.scheduleResize();
  }
  syncHeightProp(value) {
    if (!this.instance) return;
    this.instance.height = value;
    this.scheduleResize();
  }
  updateStrokeWidth() {
    if (!this.signaturePad) return;
    this.signaturePad.maxWidth = Number(this.instance.maxWidth) || 2.5;
    this.signaturePad.minWidth = Number(this.instance.minWidth) || 0.5;
  }
  async handleInstanceValueChange(value) {
    this.hasSignatureValue = Boolean(value);
    if (this.ignoreValueWatch || !this.signaturePad) return;
    await this.renderDataUrl(value || '');
  }
  bindResize() {
    window.addEventListener('resize', this.scheduleResize);
    if (typeof window.ResizeObserver === 'function') {
      this.resizeObserver = new window.ResizeObserver(this.scheduleResize);
      this.resizeObserver.observe(this.$el);
    }
  }
  commitValue(value, event) {
    this.ignoreValueWatch = true;
    this.hasSignatureValue = Boolean(value);
    this.instance.value = value;
    this.$emit('update:value', value);
    this.$emit('input', value);
    this.instance.input(event, this.$el);
    this.instance.change(event, this.$el);
    this.$nextTick(() => {
      this.ignoreValueWatch = false;
    });
  }
  createSignaturePad() {
    const canvas = this.getCanvas();
    if (!canvas) return;
    this.signaturePad = new signature_pad_1.default(canvas, {
      backgroundColor: this.instance.backgroundColor,
      maxWidth: Number(this.instance.maxWidth) || 2.5,
      minWidth: Number(this.instance.minWidth) || 0.5,
      penColor: this.instance.penColor
    });
    this.signaturePad.addEventListener('endStroke', this.handleStrokeEnd);
    this.signaturePad.addEventListener('afterUpdateStroke', this.handleStrokeUpdate);
    if (this.inactive) {
      this.signaturePad.off();
    }
  }
  fillBackground(context, width, height) {
    if (!this.shouldPaintBackground()) return;
    context.fillStyle = this.instance.backgroundColor;
    context.fillRect(0, 0, width, height);
  }
  getCanvas() {
    return this.$refs.canvas;
  }
  getCanvasHeight() {
    const parsedHeight = Number(this.instance.height);
    return parsedHeight > 0 ? parsedHeight : 220;
  }
  getCanvasWidth() {
    const canvas = this.getCanvas();
    const parentWidth = canvas && canvas.parentElement ? canvas.parentElement.clientWidth : 0;
    return parentWidth || (canvas ? canvas.offsetWidth : 0) || 600;
  }
  commitSignatureFromPad(event) {
    if (!this.signaturePad || this.signaturePad.isEmpty()) return;
    const value = this.signaturePad.toDataURL('image/png');
    if (value === this.instance.value) return;
    this.commitValue(value, event);
  }
  normalizeImage(dataUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const width = this.getCanvasWidth();
        const height = this.getCanvasHeight();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Nao foi possivel preparar a imagem da assinatura.'));
          return;
        }
        canvas.width = width;
        canvas.height = height;
        this.fillBackground(context, width, height);
        const scale = Math.min(width / image.width, height / image.height);
        const drawWidth = image.width * scale;
        const drawHeight = image.height * scale;
        const x = (width - drawWidth) / 2;
        const y = (height - drawHeight) / 2;
        context.drawImage(image, x, y, drawWidth, drawHeight);
        resolve(canvas.toDataURL('image/png'));
      };
      image.onerror = () => reject(new Error('Arquivo de assinatura invalido.'));
      image.src = dataUrl;
    });
  }
  mountInputValidation() {
    const inputRef = this.$refs.instance;
    this.inputRef = inputRef;
    if (!inputRef) return;
    this.instance.setViewValidate(force => {
      const isValid = inputRef.validate(force);
      this.hasErrors = !isValid;
      return isValid;
    });
    this.instance.setViewResetValidation(inputRef.resetValidation);
  }
  readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('Nao foi possivel ler o arquivo da assinatura.'));
      reader.readAsDataURL(file);
    });
  }
  async redrawCurrentValue() {
    const value = this.instance.value || '';
    await this.renderDataUrl(value);
  }
  async renderDataUrl(dataUrl) {
    if (!this.signaturePad) return;
    this.signaturePad.clear();
    if (!dataUrl) return;
    try {
      await this.signaturePad.fromDataURL(dataUrl, {
        height: this.getCanvasHeight(),
        ratio: 1,
        width: this.getCanvasWidth()
      });
    } catch (error) {
      this.instance.error(error, undefined, this.$el);
      this.$emit('error', error);
    }
  }
  resizeCanvas() {
    const canvas = this.getCanvas();
    if (!canvas) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const width = this.getCanvasWidth();
    const height = this.getCanvasHeight();
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const context = canvas.getContext('2d');
    if (context) {
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    this.redrawCurrentValue();
  }
  shouldPaintBackground() {
    const value = String(this.instance.backgroundColor || '').replace(/\s/g, '').toLowerCase();
    return Boolean(value && value !== 'transparent' && value !== 'rgba(0,0,0,0)');
  }
  toCssSize(value) {
    return typeof value === 'number' ? `${value}px` : value;
  }
  togglePadEvents() {
    if (!this.signaturePad) return;
    if (this.inactive) {
      this.signaturePad.off();
    } else {
      this.signaturePad.on();
    }
  }
  unbindResize() {
    window.removeEventListener('resize', this.scheduleResize);
    window.clearTimeout(this.resizeTimeout);
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  validateFile(file) {
    const accept = String(this.instance.accept || '').split(',').map(item => item.trim().toLowerCase()).filter(Boolean);
    const fileName = file.name.toLowerCase();
    const fileType = file.type.toLowerCase();
    const isAccepted = !accept.length || accept.some(item => {
      if (item.startsWith('.')) return fileName.endsWith(item);
      if (item.endsWith('/*')) return fileType.startsWith(item.replace('*', ''));
      return fileType === item;
    });
    if (!isAccepted) {
      throw new Error('Formato de arquivo invalido para assinatura.');
    }
    const maxFileSize = Number(this.instance.maxFileSize);
    if (maxFileSize > 0 && file.size > maxFileSize) {
      throw new Error('Arquivo de assinatura maior que o permitido.');
    }
  }
};
__decorate([(0, vue_property_decorator_1.Prop)({
  type: String,
  default: '.png,.jpg,.jpeg,image/png,image/jpeg'
}), __metadata("design:type", String)], ZdSignatureInput.prototype, "accept", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: String,
  default: 'rgba(0, 0, 0, 0)'
}), __metadata("design:type", String)], ZdSignatureInput.prototype, "backgroundColor", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: [Number, String],
  default: 220
}), __metadata("design:type", Object)], ZdSignatureInput.prototype, "height", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: [Number, String],
  default: 0
}), __metadata("design:type", Object)], ZdSignatureInput.prototype, "maxFileSize", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: [Number, String],
  default: 2.5
}), __metadata("design:type", Object)], ZdSignatureInput.prototype, "maxWidth", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: [Number, String],
  default: 0.5
}), __metadata("design:type", Object)], ZdSignatureInput.prototype, "minWidth", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: String,
  default: '#111827'
}), __metadata("design:type", String)], ZdSignatureInput.prototype, "penColor", void 0);
__decorate([(0, vue_property_decorator_1.Prop)({
  type: Boolean,
  default: true
}), __metadata("design:type", Boolean)], ZdSignatureInput.prototype, "showUpload", void 0);
__decorate([(0, vue_property_decorator_1.Watch)('instance.penColor'), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], ZdSignatureInput.prototype, "updatePenColor", null);
__decorate([(0, vue_property_decorator_1.Watch)('instance.backgroundColor'), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Promise)], ZdSignatureInput.prototype, "updateBackgroundColor", null);
__decorate([(0, vue_property_decorator_1.Watch)('instance.disabled'), (0, vue_property_decorator_1.Watch)('instance.readonly'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ZdSignatureInput.prototype, "updateInputState", null);
__decorate([(0, vue_property_decorator_1.Watch)('instance.height'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ZdSignatureInput.prototype, "handleHeightChange", null);
__decorate([(0, vue_property_decorator_1.Watch)('height'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], ZdSignatureInput.prototype, "syncHeightProp", null);
__decorate([(0, vue_property_decorator_1.Watch)('instance.maxWidth'), (0, vue_property_decorator_1.Watch)('instance.minWidth'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ZdSignatureInput.prototype, "updateStrokeWidth", null);
__decorate([(0, vue_property_decorator_1.Watch)('instance.value'), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Promise)], ZdSignatureInput.prototype, "handleInstanceValueChange", null);
ZdSignatureInput = ZdSignatureInput_1 = __decorate([vue_property_decorator_1.Component], ZdSignatureInput);
exports.default = ZdSignatureInput;

/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var isObject = __webpack_require__("861d");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var isCallable = __webpack_require__("1626");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "cf98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ "cfe9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d012":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__("7282");
var isObject = __webpack_require__("861d");
var requireObjectCoercible = __webpack_require__("1d80");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "d9e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("23e7");
var globalThis = __webpack_require__("cfe9");
var apply = __webpack_require__("2ba4");
var wrapErrorConstructorWithCause = __webpack_require__("e5cb");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = globalThis[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e391":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = __webpack_require__("577e");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "e5cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var isPrototypeOf = __webpack_require__("3a9b");
var setPrototypeOf = __webpack_require__("d2bb");
var copyConstructorProperties = __webpack_require__("e893");
var proxyAccessor = __webpack_require__("aeb0");
var inheritIfRequired = __webpack_require__("7156");
var normalizeStringArgument = __webpack_require__("e391");
var installErrorCause = __webpack_require__("ab36");
var installErrorStack = __webpack_require__("6f19");
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "e741":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatureInput = exports.ZdSignatureInput = void 0;
const common_1 = __webpack_require__("f7d3");
const zd_signature_input_common_1 = __webpack_require__("bb8e");
Object.defineProperty(exports, "SignatureInput", {
  enumerable: true,
  get: function () {
    return zd_signature_input_common_1.SignatureInput;
  }
});
const SignatureInput_vue_1 = __importDefault(__webpack_require__("c64c"));
var SignatureInput_vue_2 = __webpack_require__("c64c");
Object.defineProperty(exports, "ZdSignatureInput", {
  enumerable: true,
  get: function () {
    return __importDefault(SignatureInput_vue_2).default;
  }
});
__exportStar(__webpack_require__("bb8e"), exports);
const plugin = {
  install(Vue) {
    common_1.InputFactory.register('ZdSignatureInput', zd_signature_input_common_1.SignatureInput);
    Vue.component('ZdSignatureInput', SignatureInput_vue_1.default);
  }
};
exports.default = plugin;

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "e9f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var globalThis = __webpack_require__("cfe9");
var anInstance = __webpack_require__("19aa");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltInAccessor = __webpack_require__("edd0");
var createProperty = __webpack_require__("8418");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");
var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "edd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__("13d2");
var defineProperty = __webpack_require__("9bf2");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f7d3":
/***/ (function(module, exports) {

module.exports = require("@zeedhi/common");

/***/ }),

/***/ "f8c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var globalThis = __webpack_require__("cfe9");
var setToStringTag = __webpack_require__("d44e");

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(globalThis.Reflect, 'Reflect', true);


/***/ }),

/***/ "f99f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__("cfe9");

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e741");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });