<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# groupOwn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Group an object's **own** property values according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
groupOwn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-group-own@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var groupOwn = require( 'path/to/vendor/umd/utils-group-own/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-group-own@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.groupOwn;
})();
</script>
```

#### groupOwn( obj, \[options,] indicator )

Groups an object's **own** property values according to an `indicator` function, which specifies which group a value in the input `object` belongs to.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var out = groupOwn( obj, indicator );
// e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

An `indicator` function is provided two arguments:

-   `value`: object value
-   `key`: object index

```javascript
function indicator( v, k ) {
    console.log( '%s: %s', k, v );
    return v[ 0 ];
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var out = groupOwn( obj, indicator );
// e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs values. If the option equals `'keys'`, the function outputs keys. If the option equals `'*'`, the function outputs both keys and values. Default: `'values'`.
-   `thisArg`: execution context.

By default, the function returns object values. To return object keys, set the `returns` option to `'keys'`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var opts = {
    'returns': 'keys'
};
var out = groupOwn( obj, opts, indicator );
// e.g., returns { 'b': [ 'a', 'b', 'd' ], 'f': [ 'c' ] }
```

To return key-value pairs, set the `returns` option to `'*'`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var opts = {
    'returns': '*'
};
var out = groupOwn( obj, opts, indicator );
// e.g., returns { 'b': [ [ 'a', 'beep' ], [ 'b', 'boop ], [ 'd', 'bar' ] ], 'f': [ [ 'c', 'foo' ] ] }
```

To set the `indicator` execution context, provide a `thisArg`.

```javascript
function indicator( v ) {
    this.count += 1;
    return v[ 0 ];
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};
var out = groupOwn( obj, opts, indicator );
// e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic iteration.

-   Because iteration order is **not** guaranteed, result order is **not** guaranteed.

-   The function determines the list of own enumerable properties **before** invoking the provided function. Hence, any modifications made to the input `object` **after** calling this function (such as adding and removing properties) will **not** affect the list of visited properties.

-   The value returned by an `indicator` function should be a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    function indicator( v ) {
        return {};
    }
    var obj = {
        'a': 'beep',
        'b': 'boop',
        'c': 'foo',
        'd': 'bar'
    };
    var out = groupOwn( obj, indicator );
    // e.g., returns { '[object Object]': [ 'beep', 'boop', 'foo', 'bar' ] }
    ```

    while each group identifier is unique, all object values resolve to the same group because each group identifier serializes to the same `string`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-group-own@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var key;
var obj;
var out;
var i;

// Generate a random object...
obj = {};
for ( i = 0; i < 100; i++ ) {
    key = fromCodePoint( 97+i );
    obj[ key ] = randu();
}

function indicator( v ) {
    if ( v < 0.5 ) {
        return 'low';
    }
    return 'high';
}

// Compute the groups:
out = groupOwn( obj, indicator );
console.log( out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-bifurcate-own`][@stdlib/utils/bifurcate-own]</span><span class="delimiter">: </span><span class="description">split an object's own property values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-group`][@stdlib/utils/group]</span><span class="delimiter">: </span><span class="description">group values as arrays associated with distinct keys.</span>
-   <span class="package-name">[`@stdlib/utils-group-by`][@stdlib/utils/group-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-group-own.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-group-own

[test-image]: https://github.com/stdlib-js/utils-group-own/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/utils-group-own/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-group-own/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-group-own?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-group-own.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-group-own/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-group-own/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-group-own/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-group-own/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-group-own/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-group-own/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/bifurcate-own]: https://github.com/stdlib-js/utils-bifurcate-own/tree/umd

[@stdlib/utils/group]: https://github.com/stdlib-js/utils-group/tree/umd

[@stdlib/utils/group-by]: https://github.com/stdlib-js/utils-group-by/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
