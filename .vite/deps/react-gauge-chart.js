import {
  require_isEqual
} from "./chunk-TV5LQ4NJ.js";
import {
  Adder,
  FormatSpecifier,
  InternMap,
  InternSet,
  Path,
  Symbol as Symbol2,
  appearance_default,
  arc_default,
  areaRadial_default,
  area_default,
  array_default,
  ascending,
  ascending_default,
  asterisk_default,
  band,
  basisClosed_default,
  basisClosed_default2,
  basisOpen_default,
  basis_default,
  basis_default2,
  bin,
  bisectCenter,
  bisectLeft,
  bisectRight,
  bisect_default,
  bisector,
  blur,
  blur2,
  blurImage,
  bumpX,
  bumpY,
  bundle_default,
  cardinalClosed_default,
  cardinalOpen_default,
  cardinal_default,
  catmullRomClosed_default,
  catmullRomOpen_default,
  catmullRom_default,
  circle_default,
  color,
  count,
  cross,
  cross_default,
  cubehelix,
  cubehelixLong,
  cubehelix_default,
  cumsum,
  date_default,
  defaultLocale,
  defaultLocale2,
  descending,
  descending_default,
  deviation,
  diamond2_default,
  diamond_default,
  difference,
  discrete_default,
  disjoint,
  diverging,
  divergingLog,
  divergingPow,
  divergingSqrt,
  divergingSymlog,
  diverging_default,
  every,
  expand_default,
  extent,
  fcumsum,
  filter,
  flatGroup,
  flatRollup,
  format,
  formatLocale,
  formatPrefix,
  formatSpecifier,
  fsum,
  gray,
  greatest,
  greatestIndex,
  group,
  groupSort,
  groups,
  hcl,
  hclLong,
  hcl_default,
  hsl,
  hslLong,
  hsl_default,
  hue_default,
  identity,
  implicit,
  index,
  indexes,
  init_src,
  init_src2,
  init_src3,
  init_src4,
  init_src5,
  init_src6,
  init_src7,
  init_src8,
  init_src9,
  insideOut_default,
  interpolateTransformCss,
  interpolateTransformSvg,
  intersection,
  isoFormat_default,
  isoParse_default,
  lab,
  lab2,
  lch,
  least,
  leastIndex,
  lineRadial_default,
  line_default,
  linear,
  linearClosed_default,
  linear_default,
  link,
  linkHorizontal,
  linkRadial,
  linkVertical,
  locale_default,
  log,
  map,
  max,
  maxIndex,
  mean,
  median,
  medianIndex,
  merge,
  millisecond,
  milliseconds,
  min,
  minIndex,
  mode,
  monotoneX,
  monotoneY,
  natural_default,
  nice,
  none_default,
  none_default2,
  numberArray_default,
  number_default,
  object_default,
  ordinal,
  pairs,
  path,
  pathRound,
  permute,
  pie_default,
  piecewise,
  plus_default,
  point,
  pointRadial_default,
  pow,
  precisionFixed_default,
  precisionPrefix_default,
  precisionRound_default,
  quantile,
  quantile2,
  quantileIndex,
  quantileSorted,
  quantize,
  quantize_default,
  quickselect,
  radial,
  range,
  rank,
  reduce,
  require_prop_types,
  reverse,
  reverse_default,
  rgb,
  rgbBasis,
  rgbBasisClosed,
  rgb_default,
  rollup,
  rollups,
  round_default,
  scan,
  second,
  seconds,
  sequential,
  sequentialLog,
  sequentialPow,
  sequentialQuantile,
  sequentialSqrt,
  sequentialSymlog,
  shuffle_default,
  shuffler,
  silhouette_default,
  some,
  sort,
  sqrt,
  square2_default,
  square_default,
  stack_default,
  star_default,
  stepAfter,
  stepBefore,
  step_default,
  string_default,
  subset,
  sum,
  superset,
  symbolsFill,
  symbolsStroke,
  symlog,
  threshold,
  thresholdFreedmanDiaconis,
  thresholdScott,
  thresholdSturges,
  tickFormat,
  tickIncrement,
  tickStep,
  ticks,
  time,
  timeDay,
  timeDays,
  timeFormat,
  timeFriday,
  timeFridays,
  timeHour,
  timeHours,
  timeInterval,
  timeMinute,
  timeMinutes,
  timeMonday,
  timeMondays,
  timeMonth,
  timeMonths,
  timeParse,
  timeSaturday,
  timeSaturdays,
  timeSunday,
  timeSundays,
  timeThursday,
  timeThursdays,
  timeTickInterval,
  timeTicks,
  timeTuesday,
  timeTuesdays,
  timeWednesday,
  timeWednesdays,
  timeYear,
  timeYears,
  times_default,
  transpose,
  triangle2_default,
  triangle_default,
  union,
  unixDay,
  unixDays,
  utcDay,
  utcDays,
  utcFormat,
  utcFriday,
  utcFridays,
  utcHour,
  utcHours,
  utcMinute,
  utcMinutes,
  utcMonday,
  utcMondays,
  utcMonth,
  utcMonths,
  utcParse,
  utcSaturday,
  utcSaturdays,
  utcSunday,
  utcSundays,
  utcThursday,
  utcThursdays,
  utcTickInterval,
  utcTicks,
  utcTime,
  utcTuesday,
  utcTuesdays,
  utcWednesday,
  utcWednesdays,
  utcYear,
  utcYears,
  value_default,
  variance,
  wiggle_default,
  wye_default,
  zip,
  zoom_default
} from "./chunk-DDS6Z2OB.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/d3-axis/src/identity.js
function identity_default(x3) {
  return x3;
}
var init_identity = __esm({
  "node_modules/d3-axis/src/identity.js"() {
  }
});

// node_modules/d3-axis/src/axis.js
function translateX(x3) {
  return "translate(" + x3 + ",0)";
}
function translateY(y3) {
  return "translate(0," + y3 + ")";
}
function number(scale2) {
  return (d) => +scale2(d);
}
function center(scale2, offset) {
  offset = Math.max(0, scale2.bandwidth() - offset * 2) / 2;
  if (scale2.round()) offset = Math.round(offset);
  return (d) => +scale2(d) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale2) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x3 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale2.ticks ? scale2.ticks.apply(scale2, tickArguments) : scale2.domain() : tickValues, format2 = tickFormat2 == null ? scale2.tickFormat ? scale2.tickFormat.apply(scale2, tickArguments) : identity_default : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range4 = scale2.range(), range0 = +range4[0] + offset, range1 = +range4[range4.length - 1] + offset, position = (scale2.bandwidth ? center : number)(scale2.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale2).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x3 + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x3, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position(d)) ? transform2(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2((p && isFinite(p = p(d)) ? p : position(d)) + offset);
      });
    }
    tickExit.remove();
    path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position(d) + offset);
    });
    line.attr(x3 + "2", k * tickSizeInner);
    text.attr(x3, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale2 = _, axis2) : scale2;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisTop(scale2) {
  return axis(top, scale2);
}
function axisRight(scale2) {
  return axis(right, scale2);
}
function axisBottom(scale2) {
  return axis(bottom, scale2);
}
function axisLeft(scale2) {
  return axis(left, scale2);
}
var top, right, bottom, left, epsilon;
var init_axis = __esm({
  "node_modules/d3-axis/src/axis.js"() {
    init_identity();
    top = 1;
    right = 2;
    bottom = 3;
    left = 4;
    epsilon = 1e-6;
  }
});

// node_modules/d3-axis/src/index.js
var init_src10 = __esm({
  "node_modules/d3-axis/src/index.js"() {
    init_axis();
  }
});

// node_modules/d3-dispatch/src/dispatch.js
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
function get(type2, name) {
  for (var i = 0, n = type2.length, c5; i < n; ++i) {
    if ((c5 = type2[i]).name === name) {
      return c5.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null) type2.push({ name, value: callback });
  return type2;
}
var noop, dispatch_default;
var init_dispatch = __esm({
  "node_modules/d3-dispatch/src/dispatch.js"() {
    noop = { value: () => {
    } };
    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
          return;
        }
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
        }
        return this;
      },
      copy: function() {
        var copy = {}, _ = this._;
        for (var t in _) copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type2, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
        for (t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type2, that, args) {
        if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
        for (var t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };
    dispatch_default = dispatch;
  }
});

// node_modules/d3-dispatch/src/index.js
var init_src11 = __esm({
  "node_modules/d3-dispatch/src/index.js"() {
    init_dispatch();
  }
});

// node_modules/d3-selection/src/namespaces.js
var xhtml, namespaces_default;
var init_namespaces = __esm({
  "node_modules/d3-selection/src/namespaces.js"() {
    xhtml = "http://www.w3.org/1999/xhtml";
    namespaces_default = {
      svg: "http://www.w3.org/2000/svg",
      xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
  }
});

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}
var init_namespace = __esm({
  "node_modules/d3-selection/src/namespace.js"() {
    init_namespaces();
  }
});

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
var init_creator = __esm({
  "node_modules/d3-selection/src/creator.js"() {
    init_namespace();
    init_namespaces();
  }
});

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}
var init_selector = __esm({
  "node_modules/d3-selection/src/selector.js"() {
  }
});

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
var init_select = __esm({
  "node_modules/d3-selection/src/selection/select.js"() {
    init_selection();
    init_selector();
  }
});

// node_modules/d3-selection/src/array.js
function array(x3) {
  return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
}
var init_array = __esm({
  "node_modules/d3-selection/src/array.js"() {
  }
});

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}
var init_selectorAll = __esm({
  "node_modules/d3-selection/src/selectorAll.js"() {
  }
});

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = [], parents = [], j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        subgroups.push(select.call(node, node.__data__, i, group2));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}
var init_selectAll = __esm({
  "node_modules/d3-selection/src/selection/selectAll.js"() {
    init_selection();
    init_array();
    init_selectorAll();
  }
});

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}
var init_matcher = __esm({
  "node_modules/d3-selection/src/matcher.js"() {
  }
});

// node_modules/d3-selection/src/selection/selectChild.js
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var find;
var init_selectChild = __esm({
  "node_modules/d3-selection/src/selection/selectChild.js"() {
    init_matcher();
    find = Array.prototype.find;
  }
});

// node_modules/d3-selection/src/selection/selectChildren.js
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter2.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
var filter2;
var init_selectChildren = __esm({
  "node_modules/d3-selection/src/selection/selectChildren.js"() {
    init_matcher();
    filter2 = Array.prototype.filter;
  }
});

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
var init_filter = __esm({
  "node_modules/d3-selection/src/selection/filter.js"() {
    init_selection();
    init_matcher();
  }
});

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}
var init_sparse = __esm({
  "node_modules/d3-selection/src/selection/sparse.js"() {
  }
});

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
var init_enter = __esm({
  "node_modules/d3-selection/src/selection/enter.js"() {
    init_sparse();
    init_selection();
    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
      },
      insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
      },
      querySelector: function(selector) {
        return this._parent.querySelector(selector);
      },
      querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
      }
    };
  }
});

// node_modules/d3-selection/src/constant.js
function constant_default(x3) {
  return function() {
    return x3;
  };
}
var init_constant = __esm({
  "node_modules/d3-selection/src/constant.js"() {
  }
});

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group2, enter, update, exit, data) {
  var i = 0, node, groupLength = group2.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group2[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group2[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group2, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group2[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group2[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m3 = groups2.length, update = new Array(m3), enter = new Array(m3), exit = new Array(m3), j = 0; j < m3; ++j) {
    var parent = parents[j], group2 = groups2[j], groupLength = group2.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group2, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
var init_data = __esm({
  "node_modules/d3-selection/src/selection/data.js"() {
    init_selection();
    init_enter();
    init_constant();
  }
});

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}
var init_exit = __esm({
  "node_modules/d3-selection/src/selection/exit.js"() {
    init_sparse();
    init_selection();
  }
});

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
var init_join = __esm({
  "node_modules/d3-selection/src/selection/join.js"() {
  }
});

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m3 = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m3; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}
var init_merge = __esm({
  "node_modules/d3-selection/src/selection/merge.js"() {
    init_selection();
  }
});

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups2 = this._groups, j = -1, m3 = groups2.length; ++j < m3; ) {
    for (var group2 = groups2[j], i = group2.length - 1, next = group2[i], node; --i >= 0; ) {
      if (node = group2[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
var init_order = __esm({
  "node_modules/d3-selection/src/selection/order.js"() {
  }
});

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending2;
  function compareNode(a3, b) {
    return a3 && b ? compare(a3.__data__, b.__data__) : !a3 - !b;
  }
  for (var groups2 = this._groups, m3 = groups2.length, sortgroups = new Array(m3), j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending2(a3, b) {
  return a3 < b ? -1 : a3 > b ? 1 : a3 >= b ? 0 : NaN;
}
var init_sort = __esm({
  "node_modules/d3-selection/src/selection/sort.js"() {
    init_selection();
  }
});

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
var init_call = __esm({
  "node_modules/d3-selection/src/selection/call.js"() {
  }
});

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}
var init_nodes = __esm({
  "node_modules/d3-selection/src/selection/nodes.js"() {
  }
});

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups2 = this._groups, j = 0, m3 = groups2.length; j < m3; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length; i < n; ++i) {
      var node = group2[i];
      if (node) return node;
    }
  }
  return null;
}
var init_node = __esm({
  "node_modules/d3-selection/src/selection/node.js"() {
  }
});

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}
var init_size = __esm({
  "node_modules/d3-selection/src/selection/size.js"() {
  }
});

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}
var init_empty = __esm({
  "node_modules/d3-selection/src/selection/empty.js"() {
  }
});

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups2 = this._groups, j = 0, m3 = groups2.length; j < m3; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node; i < n; ++i) {
      if (node = group2[i]) callback.call(node, node.__data__, i, group2);
    }
  }
  return this;
}
var init_each = __esm({
  "node_modules/d3-selection/src/selection/each.js"() {
  }
});

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) this.removeAttribute(name);
    else this.setAttribute(name, v2);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
var init_attr = __esm({
  "node_modules/d3-selection/src/selection/attr.js"() {
    init_namespace();
  }
});

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
var init_window = __esm({
  "node_modules/d3-selection/src/window.js"() {
  }
});

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v2, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}
var init_style = __esm({
  "node_modules/d3-selection/src/selection/style.js"() {
    init_window();
  }
});

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) delete this[name];
    else this[name] = v2;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
var init_property = __esm({
  "node_modules/d3-selection/src/selection/property.js"() {
  }
});

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
var init_classed = __esm({
  "node_modules/d3-selection/src/selection/classed.js"() {
    ClassList.prototype = {
      add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
          this._names.splice(i, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function(name) {
        return this._names.indexOf(name) >= 0;
      }
    };
  }
});

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
var init_text = __esm({
  "node_modules/d3-selection/src/selection/text.js"() {
  }
});

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
var init_html = __esm({
  "node_modules/d3-selection/src/selection/html.js"() {
  }
});

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}
var init_raise = __esm({
  "node_modules/d3-selection/src/selection/raise.js"() {
  }
});

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}
var init_lower = __esm({
  "node_modules/d3-selection/src/selection/lower.js"() {
  }
});

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
var init_append = __esm({
  "node_modules/d3-selection/src/selection/append.js"() {
    init_creator();
  }
});

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
var init_insert = __esm({
  "node_modules/d3-selection/src/selection/insert.js"() {
    init_creator();
    init_selector();
  }
});

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}
var init_remove = __esm({
  "node_modules/d3-selection/src/selection/remove.js"() {
  }
});

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
var init_clone = __esm({
  "node_modules/d3-selection/src/selection/clone.js"() {
  }
});

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
var init_datum = __esm({
  "node_modules/d3-selection/src/selection/datum.js"() {
  }
});

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m3 = on.length, o; j < m3; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m3 = on.length; j < m3; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m3 = on.length, o; j < m3; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}
var init_on = __esm({
  "node_modules/d3-selection/src/selection/on.js"() {
  }
});

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}
var init_dispatch2 = __esm({
  "node_modules/d3-selection/src/selection/dispatch.js"() {
    init_window();
  }
});

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups2 = this._groups, j = 0, m3 = groups2.length; j < m3; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node; i < n; ++i) {
      if (node = group2[i]) yield node;
    }
  }
}
var init_iterator = __esm({
  "node_modules/d3-selection/src/selection/iterator.js"() {
  }
});

// node_modules/d3-selection/src/selection/index.js
function Selection(groups2, parents) {
  this._groups = groups2;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
var root, selection_default;
var init_selection = __esm({
  "node_modules/d3-selection/src/selection/index.js"() {
    init_select();
    init_selectAll();
    init_selectChild();
    init_selectChildren();
    init_filter();
    init_data();
    init_enter();
    init_exit();
    init_join();
    init_merge();
    init_order();
    init_sort();
    init_call();
    init_nodes();
    init_node();
    init_size();
    init_empty();
    init_each();
    init_attr();
    init_style();
    init_property();
    init_classed();
    init_text();
    init_html();
    init_raise();
    init_lower();
    init_append();
    init_insert();
    init_remove();
    init_clone();
    init_datum();
    init_on();
    init_dispatch2();
    init_iterator();
    root = [null];
    Selection.prototype = selection.prototype = {
      constructor: Selection,
      select: select_default,
      selectAll: selectAll_default,
      selectChild: selectChild_default,
      selectChildren: selectChildren_default,
      filter: filter_default,
      data: data_default,
      enter: enter_default,
      exit: exit_default,
      join: join_default,
      merge: merge_default,
      selection: selection_selection,
      order: order_default,
      sort: sort_default,
      call: call_default,
      nodes: nodes_default,
      node: node_default,
      size: size_default,
      empty: empty_default,
      each: each_default,
      attr: attr_default,
      style: style_default,
      property: property_default,
      classed: classed_default,
      text: text_default,
      html: html_default,
      raise: raise_default,
      lower: lower_default,
      append: append_default,
      insert: insert_default,
      remove: remove_default,
      clone: clone_default,
      datum: datum_default,
      on: on_default,
      dispatch: dispatch_default2,
      [Symbol.iterator]: iterator_default
    };
    selection_default = selection;
  }
});

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}
var init_select2 = __esm({
  "node_modules/d3-selection/src/select.js"() {
    init_selection();
  }
});

// node_modules/d3-selection/src/create.js
function create_default(name) {
  return select_default2(creator_default(name).call(document.documentElement));
}
var init_create = __esm({
  "node_modules/d3-selection/src/create.js"() {
    init_creator();
    init_select2();
  }
});

// node_modules/d3-selection/src/local.js
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
var nextId;
var init_local = __esm({
  "node_modules/d3-selection/src/local.js"() {
    nextId = 0;
    Local.prototype = local.prototype = {
      constructor: Local,
      get: function(node) {
        var id2 = this._;
        while (!(id2 in node)) if (!(node = node.parentNode)) return;
        return node[id2];
      },
      set: function(node, value) {
        return node[this._] = value;
      },
      remove: function(node) {
        return this._ in node && delete node[this._];
      },
      toString: function() {
        return this._;
      }
    };
  }
});

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}
var init_sourceEvent = __esm({
  "node_modules/d3-selection/src/sourceEvent.js"() {
  }
});

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg2 = node.ownerSVGElement || node;
    if (svg2.createSVGPoint) {
      var point2 = svg2.createSVGPoint();
      point2.x = event.clientX, point2.y = event.clientY;
      point2 = point2.matrixTransform(node.getScreenCTM().inverse());
      return [point2.x, point2.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
var init_pointer = __esm({
  "node_modules/d3-selection/src/pointer.js"() {
    init_sourceEvent();
  }
});

// node_modules/d3-selection/src/pointers.js
function pointers_default(events, node) {
  if (events.target) {
    events = sourceEvent_default(events);
    if (node === void 0) node = events.currentTarget;
    events = events.touches || [events];
  }
  return Array.from(events, (event) => pointer_default(event, node));
}
var init_pointers = __esm({
  "node_modules/d3-selection/src/pointers.js"() {
    init_pointer();
    init_sourceEvent();
  }
});

// node_modules/d3-selection/src/selectAll.js
function selectAll_default2(selector) {
  return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([array(selector)], root);
}
var init_selectAll2 = __esm({
  "node_modules/d3-selection/src/selectAll.js"() {
    init_array();
    init_selection();
  }
});

// node_modules/d3-selection/src/index.js
var init_src12 = __esm({
  "node_modules/d3-selection/src/index.js"() {
    init_create();
    init_creator();
    init_local();
    init_matcher();
    init_namespace();
    init_namespaces();
    init_pointer();
    init_pointers();
    init_select2();
    init_selectAll2();
    init_selection();
    init_selector();
    init_selectorAll();
    init_style();
    init_window();
  }
});

// node_modules/d3-drag/src/noevent.js
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
var nonpassive, nonpassivecapture;
var init_noevent = __esm({
  "node_modules/d3-drag/src/noevent.js"() {
    nonpassive = { passive: false };
    nonpassivecapture = { capture: true, passive: false };
  }
});

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root3.__noselect = root3.style.MozUserSelect;
    root3.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", null);
  } else {
    root3.style.MozUserSelect = root3.__noselect;
    delete root3.__noselect;
  }
}
var init_nodrag = __esm({
  "node_modules/d3-drag/src/nodrag.js"() {
    init_src12();
    init_noevent();
  }
});

// node_modules/d3-drag/src/constant.js
var constant_default2;
var init_constant2 = __esm({
  "node_modules/d3-drag/src/constant.js"() {
    constant_default2 = (x3) => () => x3;
  }
});

// node_modules/d3-drag/src/event.js
function DragEvent(type2, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x3,
  y: y3,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x3, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
var init_event = __esm({
  "node_modules/d3-drag/src/event.js"() {
    DragEvent.prototype.on = function() {
      var value = this._.on.apply(this._, arguments);
      return value === this._ ? this : value;
    };
  }
});

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter3 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter3.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter3.call(this, event, d)) return;
    var touches = event.changedTouches, c5 = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c5, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type2, event2, touch2) {
      var p02 = p, n;
      switch (type2) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type2,
        that,
        new DragEvent(type2, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p02[0],
          dy: p[1] - p02[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag.filter = function(_) {
    return arguments.length ? (filter3 = typeof _ === "function" ? _ : constant_default2(!!_), drag) : filter3;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default2(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default2(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default2(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}
var init_drag = __esm({
  "node_modules/d3-drag/src/drag.js"() {
    init_src11();
    init_src12();
    init_nodrag();
    init_noevent();
    init_constant2();
    init_event();
  }
});

// node_modules/d3-drag/src/index.js
var init_src13 = __esm({
  "node_modules/d3-drag/src/index.js"() {
    init_drag();
    init_nodrag();
  }
});

// node_modules/d3-timer/src/timer.js
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time2 = Infinity;
  while (t1) {
    if (t1._call) {
      if (time2 > t1._time) time2 = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time2);
}
function sleep(time2) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity) timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
var frame, timeout, interval, pokeDelay, taskHead, taskTail, clockLast, clockNow, clockSkew, clock, setFrame;
var init_timer = __esm({
  "node_modules/d3-timer/src/timer.js"() {
    frame = 0;
    timeout = 0;
    interval = 0;
    pokeDelay = 1e3;
    clockLast = 0;
    clockNow = 0;
    clockSkew = 0;
    clock = typeof performance === "object" && performance.now ? performance : Date;
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
      setTimeout(f, 17);
    };
    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time2) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time2;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };
  }
});

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}
var init_timeout = __esm({
  "node_modules/d3-timer/src/timeout.js"() {
    init_timer();
  }
});

// node_modules/d3-timer/src/interval.js
function interval_default(callback, delay, time2) {
  var t = new Timer(), total = delay;
  if (delay == null) return t.restart(callback, delay, time2), t;
  t._restart = t.restart;
  t.restart = function(callback2, delay2, time3) {
    delay2 = +delay2, time3 = time3 == null ? now() : +time3;
    t._restart(function tick(elapsed) {
      elapsed += total;
      t._restart(tick, total += delay2, time3);
      callback2(elapsed);
    }, delay2, time3);
  };
  t.restart(callback, delay, time2);
  return t;
}
var init_interval = __esm({
  "node_modules/d3-timer/src/interval.js"() {
    init_timer();
  }
});

// node_modules/d3-timer/src/index.js
var init_src14 = __esm({
  "node_modules/d3-timer/src/index.js"() {
    init_timer();
    init_timeout();
    init_interval();
  }
});

// node_modules/d3-transition/src/transition/schedule.js
function schedule_default(node, name, id2, index3, group2, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index: index3,
    // For context during callback.
    group: group2,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}
var emptyOn, emptyTween, CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED;
var init_schedule = __esm({
  "node_modules/d3-transition/src/transition/schedule.js"() {
    init_src11();
    init_src14();
    emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
    emptyTween = [];
    CREATED = 0;
    SCHEDULED = 1;
    STARTING = 2;
    STARTED = 3;
    RUNNING = 4;
    ENDING = 5;
    ENDED = 6;
  }
});

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty3 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty3 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty3) delete node.__transition;
}
var init_interrupt = __esm({
  "node_modules/d3-transition/src/interrupt.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}
var init_interrupt2 = __esm({
  "node_modules/d3-transition/src/selection/interrupt.js"() {
    init_interrupt();
  }
});

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}
var init_tween = __esm({
  "node_modules/d3-transition/src/transition/tween.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a3, b) {
  var c5;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c5 = color(b)) ? (b = c5, rgb_default) : string_default)(a3, b);
}
var init_interpolate = __esm({
  "node_modules/d3-transition/src/transition/interpolate.js"() {
    init_src2();
    init_src3();
  }
});

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}
var init_attr2 = __esm({
  "node_modules/d3-transition/src/transition/attr.js"() {
    init_src3();
    init_src12();
    init_tween();
    init_interpolate();
  }
});

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
var init_attrTween = __esm({
  "node_modules/d3-transition/src/transition/attrTween.js"() {
    init_src12();
  }
});

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}
var init_delay = __esm({
  "node_modules/d3-transition/src/transition/delay.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}
var init_duration = __esm({
  "node_modules/d3-transition/src/transition/duration.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}
var init_ease = __esm({
  "node_modules/d3-transition/src/transition/ease.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function") throw new Error();
    set2(this, id2).ease = v2;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}
var init_easeVarying = __esm({
  "node_modules/d3-transition/src/transition/easeVarying.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
var init_filter2 = __esm({
  "node_modules/d3-transition/src/transition/filter.js"() {
    init_src12();
    init_transition2();
  }
});

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m3 = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m3; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge2[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
var init_merge2 = __esm({
  "node_modules/d3-transition/src/transition/merge.js"() {
    init_transition2();
  }
});

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
var init_on2 = __esm({
  "node_modules/d3-transition/src/transition/on.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}
var init_remove2 = __esm({
  "node_modules/d3-transition/src/transition/remove.js"() {
  }
});

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
var init_select3 = __esm({
  "node_modules/d3-transition/src/transition/select.js"() {
    init_src12();
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = [], parents = [], j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        for (var children2 = select.call(node, node.__data__, i, group2), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var init_selectAll3 = __esm({
  "node_modules/d3-transition/src/transition/selectAll.js"() {
    init_src12();
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/selection.js
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}
var Selection2;
var init_selection2 = __esm({
  "node_modules/d3-transition/src/transition/selection.js"() {
    init_src12();
    Selection2 = selection_default.prototype.constructor;
  }
});

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}
var init_style2 = __esm({
  "node_modules/d3-transition/src/transition/style.js"() {
    init_src3();
    init_src12();
    init_schedule();
    init_tween();
    init_interpolate();
  }
});

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
var init_styleTween = __esm({
  "node_modules/d3-transition/src/transition/styleTween.js"() {
  }
});

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}
var init_text2 = __esm({
  "node_modules/d3-transition/src/transition/text.js"() {
    init_tween();
  }
});

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}
var init_textTween = __esm({
  "node_modules/d3-transition/src/transition/textTween.js"() {
  }
});

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups2 = this._groups, m3 = groups2.length, j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group2, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups2, this._parents, name, id1);
}
var init_transition = __esm({
  "node_modules/d3-transition/src/transition/transition.js"() {
    init_transition2();
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}
var init_end = __esm({
  "node_modules/d3-transition/src/transition/end.js"() {
    init_schedule();
  }
});

// node_modules/d3-transition/src/transition/index.js
function Transition(groups2, parents, name, id2) {
  this._groups = groups2;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var id, selection_prototype;
var init_transition2 = __esm({
  "node_modules/d3-transition/src/transition/index.js"() {
    init_src12();
    init_attr2();
    init_attrTween();
    init_delay();
    init_duration();
    init_ease();
    init_easeVarying();
    init_filter2();
    init_merge2();
    init_on2();
    init_remove2();
    init_select3();
    init_selectAll3();
    init_selection2();
    init_style2();
    init_styleTween();
    init_text2();
    init_textTween();
    init_transition();
    init_tween();
    init_end();
    id = 0;
    selection_prototype = selection_default.prototype;
    Transition.prototype = transition.prototype = {
      constructor: Transition,
      select: select_default3,
      selectAll: selectAll_default3,
      selectChild: selection_prototype.selectChild,
      selectChildren: selection_prototype.selectChildren,
      filter: filter_default2,
      merge: merge_default2,
      selection: selection_default2,
      transition: transition_default,
      call: selection_prototype.call,
      nodes: selection_prototype.nodes,
      node: selection_prototype.node,
      size: selection_prototype.size,
      empty: selection_prototype.empty,
      each: selection_prototype.each,
      on: on_default2,
      attr: attr_default2,
      attrTween: attrTween_default,
      style: style_default2,
      styleTween: styleTween_default,
      text: text_default2,
      textTween: textTween_default,
      remove: remove_default2,
      tween: tween_default,
      delay: delay_default,
      duration: duration_default,
      ease: ease_default,
      easeVarying: easeVarying_default,
      end: end_default,
      [Symbol.iterator]: selection_prototype[Symbol.iterator]
    };
  }
});

// node_modules/d3-ease/src/linear.js
var linear2;
var init_linear = __esm({
  "node_modules/d3-ease/src/linear.js"() {
    linear2 = (t) => +t;
  }
});

// node_modules/d3-ease/src/quad.js
function quadIn(t) {
  return t * t;
}
function quadOut(t) {
  return t * (2 - t);
}
function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
var init_quad = __esm({
  "node_modules/d3-ease/src/quad.js"() {
  }
});

// node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  return --t * t * t + 1;
}
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var init_cubic = __esm({
  "node_modules/d3-ease/src/cubic.js"() {
  }
});

// node_modules/d3-ease/src/poly.js
var exponent, polyIn, polyOut, polyInOut;
var init_poly = __esm({
  "node_modules/d3-ease/src/poly.js"() {
    exponent = 3;
    polyIn = function custom(e) {
      e = +e;
      function polyIn2(t) {
        return Math.pow(t, e);
      }
      polyIn2.exponent = custom;
      return polyIn2;
    }(exponent);
    polyOut = function custom2(e) {
      e = +e;
      function polyOut2(t) {
        return 1 - Math.pow(1 - t, e);
      }
      polyOut2.exponent = custom2;
      return polyOut2;
    }(exponent);
    polyInOut = function custom3(e) {
      e = +e;
      function polyInOut2(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
      }
      polyInOut2.exponent = custom3;
      return polyInOut2;
    }(exponent);
  }
});

// node_modules/d3-ease/src/sin.js
function sinIn(t) {
  return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}
function sinOut(t) {
  return Math.sin(t * halfPi);
}
function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}
var pi, halfPi;
var init_sin = __esm({
  "node_modules/d3-ease/src/sin.js"() {
    pi = Math.PI;
    halfPi = pi / 2;
  }
});

// node_modules/d3-ease/src/math.js
function tpmt(x3) {
  return (Math.pow(2, -10 * x3) - 9765625e-10) * 1.0009775171065494;
}
var init_math = __esm({
  "node_modules/d3-ease/src/math.js"() {
  }
});

// node_modules/d3-ease/src/exp.js
function expIn(t) {
  return tpmt(1 - +t);
}
function expOut(t) {
  return 1 - tpmt(t);
}
function expInOut(t) {
  return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
}
var init_exp = __esm({
  "node_modules/d3-ease/src/exp.js"() {
    init_math();
  }
});

// node_modules/d3-ease/src/circle.js
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}
function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
var init_circle = __esm({
  "node_modules/d3-ease/src/circle.js"() {
  }
});

// node_modules/d3-ease/src/bounce.js
function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}
function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b0;
var init_bounce = __esm({
  "node_modules/d3-ease/src/bounce.js"() {
    b1 = 4 / 11;
    b2 = 6 / 11;
    b3 = 8 / 11;
    b4 = 3 / 4;
    b5 = 9 / 11;
    b6 = 10 / 11;
    b7 = 15 / 16;
    b8 = 21 / 22;
    b9 = 63 / 64;
    b0 = 1 / b1 / b1;
  }
});

// node_modules/d3-ease/src/back.js
var overshoot, backIn, backOut, backInOut;
var init_back = __esm({
  "node_modules/d3-ease/src/back.js"() {
    overshoot = 1.70158;
    backIn = function custom4(s) {
      s = +s;
      function backIn2(t) {
        return (t = +t) * t * (s * (t - 1) + t);
      }
      backIn2.overshoot = custom4;
      return backIn2;
    }(overshoot);
    backOut = function custom5(s) {
      s = +s;
      function backOut2(t) {
        return --t * t * ((t + 1) * s + t) + 1;
      }
      backOut2.overshoot = custom5;
      return backOut2;
    }(overshoot);
    backInOut = function custom6(s) {
      s = +s;
      function backInOut2(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
      }
      backInOut2.overshoot = custom6;
      return backInOut2;
    }(overshoot);
  }
});

// node_modules/d3-ease/src/elastic.js
var tau, amplitude, period, elasticIn, elasticOut, elasticInOut;
var init_elastic = __esm({
  "node_modules/d3-ease/src/elastic.js"() {
    init_math();
    tau = 2 * Math.PI;
    amplitude = 1;
    period = 0.3;
    elasticIn = function custom7(a3, p) {
      var s = Math.asin(1 / (a3 = Math.max(1, a3))) * (p /= tau);
      function elasticIn2(t) {
        return a3 * tpmt(- --t) * Math.sin((s - t) / p);
      }
      elasticIn2.amplitude = function(a4) {
        return custom7(a4, p * tau);
      };
      elasticIn2.period = function(p2) {
        return custom7(a3, p2);
      };
      return elasticIn2;
    }(amplitude, period);
    elasticOut = function custom8(a3, p) {
      var s = Math.asin(1 / (a3 = Math.max(1, a3))) * (p /= tau);
      function elasticOut2(t) {
        return 1 - a3 * tpmt(t = +t) * Math.sin((t + s) / p);
      }
      elasticOut2.amplitude = function(a4) {
        return custom8(a4, p * tau);
      };
      elasticOut2.period = function(p2) {
        return custom8(a3, p2);
      };
      return elasticOut2;
    }(amplitude, period);
    elasticInOut = function custom9(a3, p) {
      var s = Math.asin(1 / (a3 = Math.max(1, a3))) * (p /= tau);
      function elasticInOut2(t) {
        return ((t = t * 2 - 1) < 0 ? a3 * tpmt(-t) * Math.sin((s - t) / p) : 2 - a3 * tpmt(t) * Math.sin((s + t) / p)) / 2;
      }
      elasticInOut2.amplitude = function(a4) {
        return custom9(a4, p * tau);
      };
      elasticInOut2.period = function(p2) {
        return custom9(a3, p2);
      };
      return elasticInOut2;
    }(amplitude, period);
  }
});

// node_modules/d3-ease/src/index.js
var init_src15 = __esm({
  "node_modules/d3-ease/src/index.js"() {
    init_linear();
    init_quad();
    init_cubic();
    init_poly();
    init_sin();
    init_exp();
    init_circle();
    init_bounce();
    init_back();
    init_elastic();
  }
});

// node_modules/d3-transition/src/selection/transition.js
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups2 = this._groups, m3 = groups2.length, j = 0; j < m3; ++j) {
    for (var group2 = groups2[j], n = group2.length, node, i = 0; i < n; ++i) {
      if (node = group2[i]) {
        schedule_default(node, name, id2, i, group2, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups2, this._parents, name, id2);
}
var defaultTiming;
var init_transition3 = __esm({
  "node_modules/d3-transition/src/selection/transition.js"() {
    init_transition2();
    init_schedule();
    init_src15();
    init_src14();
    defaultTiming = {
      time: null,
      // Set on use.
      delay: 0,
      duration: 250,
      ease: cubicInOut
    };
  }
});

// node_modules/d3-transition/src/selection/index.js
var init_selection3 = __esm({
  "node_modules/d3-transition/src/selection/index.js"() {
    init_src12();
    init_interrupt2();
    init_transition3();
    selection_default.prototype.interrupt = interrupt_default2;
    selection_default.prototype.transition = transition_default2;
  }
});

// node_modules/d3-transition/src/active.js
function active_default(node, name) {
  var schedules = node.__transition, schedule, i;
  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root2, name, +i);
      }
    }
  }
  return null;
}
var root2;
var init_active = __esm({
  "node_modules/d3-transition/src/active.js"() {
    init_transition2();
    init_schedule();
    root2 = [null];
  }
});

// node_modules/d3-transition/src/index.js
var init_src16 = __esm({
  "node_modules/d3-transition/src/index.js"() {
    init_selection3();
    init_transition2();
    init_active();
    init_interrupt();
  }
});

// node_modules/d3-brush/src/constant.js
var constant_default3;
var init_constant3 = __esm({
  "node_modules/d3-brush/src/constant.js"() {
    constant_default3 = (x3) => () => x3;
  }
});

// node_modules/d3-brush/src/event.js
function BrushEvent(type2, {
  sourceEvent,
  target,
  selection: selection2,
  mode: mode2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    selection: { value: selection2, enumerable: true, configurable: true },
    mode: { value: mode2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
var init_event2 = __esm({
  "node_modules/d3-brush/src/event.js"() {
  }
});

// node_modules/d3-brush/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
var init_noevent2 = __esm({
  "node_modules/d3-brush/src/noevent.js"() {
  }
});

// node_modules/d3-brush/src/brush.js
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
function type(t) {
  return { type: t };
}
function defaultFilter2(event) {
  return !event.ctrlKey && !event.button;
}
function defaultExtent() {
  var svg2 = this.ownerSVGElement || this;
  if (svg2.hasAttribute("viewBox")) {
    svg2 = svg2.viewBox.baseVal;
    return [[svg2.x, svg2.y], [svg2.x + svg2.width, svg2.y + svg2.height]];
  }
  return [[0, 0], [svg2.width.baseVal.value, svg2.height.baseVal.value]];
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function local2(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}
function empty2(extent2) {
  return extent2[0][0] === extent2[1][0] || extent2[0][1] === extent2[1][1];
}
function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}
function brushX() {
  return brush(X);
}
function brushY() {
  return brush(Y);
}
function brush_default() {
  return brush(XY);
}
function brush(dim) {
  var extent2 = defaultExtent, filter3 = defaultFilter2, touchable = defaultTouchable2, keys = true, listeners = dispatch_default("start", "brush", "end"), handleSize = 6, touchending;
  function brush2(group2) {
    var overlay = group2.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
    overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
      var extent3 = local2(this).extent;
      select_default2(this).attr("x", extent3[0][0]).attr("y", extent3[0][1]).attr("width", extent3[1][0] - extent3[0][0]).attr("height", extent3[1][1] - extent3[0][1]);
    });
    group2.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
    var handle = group2.selectAll(".handle").data(dim.handles, function(d) {
      return d.type;
    });
    handle.exit().remove();
    handle.enter().append("rect").attr("class", function(d) {
      return "handle handle--" + d.type;
    }).attr("cursor", function(d) {
      return cursors[d.type];
    });
    group2.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  brush2.move = function(group2, selection2, event) {
    if (group2.tween) {
      group2.on("start.brush", function(event2) {
        emitter(this, arguments).beforestart().start(event2);
      }).on("interrupt.brush end.brush", function(event2) {
        emitter(this, arguments).end(event2);
      }).tween("brush", function() {
        var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(this, arguments) : selection2, state.extent), i = value_default(selection0, selection1);
        function tween(t) {
          state.selection = t === 1 && selection1 === null ? null : i(t);
          redraw.call(that);
          emit.brush();
        }
        return selection0 !== null && selection1 !== null ? tween : tween(1);
      });
    } else {
      group2.each(function() {
        var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(that, args) : selection2, state.extent), emit = emitter(that, args).beforestart();
        interrupt_default(that);
        state.selection = selection1 === null ? null : selection1;
        redraw.call(that);
        emit.start(event).brush(event).end(event);
      });
    }
  };
  brush2.clear = function(group2, event) {
    brush2.move(group2, null, event);
  };
  function redraw() {
    var group2 = select_default2(this), selection2 = local2(this).selection;
    if (selection2) {
      group2.selectAll(".selection").style("display", null).attr("x", selection2[0][0]).attr("y", selection2[0][1]).attr("width", selection2[1][0] - selection2[0][0]).attr("height", selection2[1][1] - selection2[0][1]);
      group2.selectAll(".handle").style("display", null).attr("x", function(d) {
        return d.type[d.type.length - 1] === "e" ? selection2[1][0] - handleSize / 2 : selection2[0][0] - handleSize / 2;
      }).attr("y", function(d) {
        return d.type[0] === "s" ? selection2[1][1] - handleSize / 2 : selection2[0][1] - handleSize / 2;
      }).attr("width", function(d) {
        return d.type === "n" || d.type === "s" ? selection2[1][0] - selection2[0][0] + handleSize : handleSize;
      }).attr("height", function(d) {
        return d.type === "e" || d.type === "w" ? selection2[1][1] - selection2[0][1] + handleSize : handleSize;
      });
    } else {
      group2.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
  }
  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }
  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }
  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode2) {
      if (this.starting) this.starting = false, this.emit("start", event, mode2);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode2) {
      this.emit("brush", event, mode2);
      return this;
    },
    end: function(event, mode2) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode2);
      return this;
    },
    emit: function(type2, event, mode2) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type2,
        this.that,
        new BrushEvent(type2, {
          sourceEvent: event,
          target: brush2,
          selection: dim.output(this.state.selection),
          mode: mode2,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter3.apply(this, arguments)) return;
    var that = this, type2 = event.target.__data__.type, mode2 = (keys && event.metaKey ? type2 = "overlay" : type2) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type2], signY = dim === X ? null : signsY[type2], state = local2(that), extent3 = state.extent, selection2 = state.selection, W = extent3[0][0], w0, w1, N = extent3[0][1], n0, n1, E = extent3[1][0], e0, e1, S = extent3[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [event], (t) => {
      const i = t.identifier;
      t = pointer_default(t, that);
      t.point0 = t.slice();
      t.identifier = i;
      return t;
    });
    interrupt_default(that);
    var emit = emitter(that, arguments, true).beforestart();
    if (type2 === "overlay") {
      if (selection2) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection2 = [[
        w0 = dim === Y ? W : min2(pts[0][0], pts[1][0]),
        n0 = dim === X ? N : min2(pts[0][1], pts[1][1])
      ], [
        e0 = dim === Y ? E : max2(pts[0][0], pts[1][0]),
        s0 = dim === X ? S : max2(pts[0][1], pts[1][1])
      ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection2[0][0];
      n0 = selection2[0][1];
      e0 = selection2[1][0];
      s0 = selection2[1][1];
    }
    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;
    var group2 = select_default2(that).attr("pointer-events", "none");
    var overlay = group2.selectAll(".overlay").attr("cursor", cursors[type2]);
    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select_default2(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
      if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
      nodrag_default(event.view);
    }
    redraw.call(that);
    emit.start(event, mode2.name);
    function moved(event2) {
      for (const p of event2.changedTouches || [event2]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer_default(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point2 = points[0];
        if (abs(point2.cur[0] - point2[0]) > abs(point2.cur[1] - point2[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point2 of points)
        if (point2.cur) point2[0] = point2.cur[0], point2[1] = point2.cur[1];
      moving = true;
      noevent_default2(event2);
      move(event2);
    }
    function move(event2) {
      const point2 = points[0], point0 = point2.point0;
      var t;
      dx = point2[0] - point0[0];
      dy = point2[1] - point0[1];
      switch (mode2) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max2(W - w0, min2(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max2(N - n0, min2(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max2(W, min2(E, points[0][0])), e1 = max2(W, min2(E, points[1][0])), signX = 1;
            if (signY) n1 = max2(N, min2(S, points[0][1])), s1 = max2(N, min2(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max2(W - w0, min2(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max2(W - e0, min2(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max2(N - n0, min2(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max2(N - s0, min2(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max2(W, min2(E, w0 - dx * signX)), e1 = max2(W, min2(E, e0 + dx * signX));
          if (signY) n1 = max2(N, min2(S, n0 - dy * signY)), s1 = max2(N, min2(S, s0 + dy * signY));
          break;
        }
      }
      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type2 in flipX) overlay.attr("cursor", cursors[type2 = flipX[type2]]);
      }
      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type2 in flipY) overlay.attr("cursor", cursors[type2 = flipY[type2]]);
      }
      if (state.selection) selection2 = state.selection;
      if (lockX) w1 = selection2[0][0], e1 = selection2[1][0];
      if (lockY) n1 = selection2[0][1], s1 = selection2[1][1];
      if (selection2[0][0] !== w1 || selection2[0][1] !== n1 || selection2[1][0] !== e1 || selection2[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event2, mode2.name);
      }
    }
    function ended(event2) {
      nopropagation2(event2);
      if (event2.touches) {
        if (event2.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
          touchending = null;
        }, 500);
      } else {
        yesdrag(event2.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group2.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection2 = state.selection;
      if (empty2(selection2)) state.selection = null, redraw.call(that);
      emit.end(event2, mode2.name);
    }
    function keydowned(event2) {
      switch (event2.keyCode) {
        case 16: {
          shifting = signX && signY;
          break;
        }
        case 18: {
          if (mode2 === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode2 = MODE_CENTER;
            move(event2);
          }
          break;
        }
        case 32: {
          if (mode2 === MODE_HANDLE || mode2 === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx;
            else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy;
            else if (signY > 0) n0 = n1 - dy;
            mode2 = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event2);
          }
          break;
        }
        default:
          return;
      }
      noevent_default2(event2);
    }
    function keyupped(event2) {
      switch (event2.keyCode) {
        case 16: {
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event2);
          }
          break;
        }
        case 18: {
          if (mode2 === MODE_CENTER) {
            if (signX < 0) e0 = e1;
            else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1;
            else if (signY > 0) n0 = n1;
            mode2 = MODE_HANDLE;
            move(event2);
          }
          break;
        }
        case 32: {
          if (mode2 === MODE_SPACE) {
            if (event2.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode2 = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1;
              else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1;
              else if (signY > 0) n0 = n1;
              mode2 = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type2]);
            move(event2);
          }
          break;
        }
        default:
          return;
      }
      noevent_default2(event2);
    }
  }
  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }
  function touchended(event) {
    emitter(this, arguments).ended(event);
  }
  function initialize() {
    var state = this.__brush || { selection: null };
    state.extent = number2(extent2.apply(this, arguments));
    state.dim = dim;
    return state;
  }
  brush2.extent = function(_) {
    return arguments.length ? (extent2 = typeof _ === "function" ? _ : constant_default3(number2(_)), brush2) : extent2;
  };
  brush2.filter = function(_) {
    return arguments.length ? (filter3 = typeof _ === "function" ? _ : constant_default3(!!_), brush2) : filter3;
  };
  brush2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default3(!!_), brush2) : touchable;
  };
  brush2.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush2) : handleSize;
  };
  brush2.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush2) : keys;
  };
  brush2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush2 : value;
  };
  return brush2;
}
var MODE_DRAG, MODE_SPACE, MODE_HANDLE, MODE_CENTER, abs, max2, min2, X, Y, XY, cursors, flipX, flipY, signsX, signsY;
var init_brush = __esm({
  "node_modules/d3-brush/src/brush.js"() {
    init_src11();
    init_src13();
    init_src3();
    init_src12();
    init_src16();
    init_constant3();
    init_event2();
    init_noevent2();
    MODE_DRAG = { name: "drag" };
    MODE_SPACE = { name: "space" };
    MODE_HANDLE = { name: "handle" };
    MODE_CENTER = { name: "center" };
    ({ abs, max: max2, min: min2 } = Math);
    X = {
      name: "x",
      handles: ["w", "e"].map(type),
      input: function(x3, e) {
        return x3 == null ? null : [[+x3[0], e[0][1]], [+x3[1], e[1][1]]];
      },
      output: function(xy) {
        return xy && [xy[0][0], xy[1][0]];
      }
    };
    Y = {
      name: "y",
      handles: ["n", "s"].map(type),
      input: function(y3, e) {
        return y3 == null ? null : [[e[0][0], +y3[0]], [e[1][0], +y3[1]]];
      },
      output: function(xy) {
        return xy && [xy[0][1], xy[1][1]];
      }
    };
    XY = {
      name: "xy",
      handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
      input: function(xy) {
        return xy == null ? null : number2(xy);
      },
      output: function(xy) {
        return xy;
      }
    };
    cursors = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize"
    };
    flipX = {
      e: "w",
      w: "e",
      nw: "ne",
      ne: "nw",
      se: "sw",
      sw: "se"
    };
    flipY = {
      n: "s",
      s: "n",
      nw: "sw",
      ne: "se",
      se: "ne",
      sw: "nw"
    };
    signsX = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1
    };
    signsY = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1
    };
  }
});

// node_modules/d3-brush/src/index.js
var init_src17 = __esm({
  "node_modules/d3-brush/src/index.js"() {
    init_brush();
  }
});

// node_modules/d3-chord/src/math.js
var abs2, cos, sin, pi2, halfPi2, tau2, max3, epsilon2;
var init_math2 = __esm({
  "node_modules/d3-chord/src/math.js"() {
    abs2 = Math.abs;
    cos = Math.cos;
    sin = Math.sin;
    pi2 = Math.PI;
    halfPi2 = pi2 / 2;
    tau2 = pi2 * 2;
    max3 = Math.max;
    epsilon2 = 1e-12;
  }
});

// node_modules/d3-chord/src/chord.js
function range2(i, j) {
  return Array.from({ length: j - i }, (_, k) => i + k);
}
function compareValue(compare) {
  return function(a3, b) {
    return compare(
      a3.source.value + a3.target.value,
      b.source.value + b.target.value
    );
  };
}
function chord_default() {
  return chord(false, false);
}
function chordTranspose() {
  return chord(false, true);
}
function chordDirected() {
  return chord(true, false);
}
function chord(directed, transpose2) {
  var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
  function chord2(matrix) {
    var n = matrix.length, groupSums = new Array(n), groupIndex = range2(0, n), chords = new Array(n * n), groups2 = new Array(n), k = 0, dx;
    matrix = Float64Array.from({ length: n * n }, transpose2 ? (_, i) => matrix[i % n][i / n | 0] : (_, i) => matrix[i / n | 0][i % n]);
    for (let i = 0; i < n; ++i) {
      let x3 = 0;
      for (let j = 0; j < n; ++j) x3 += matrix[i * n + j] + directed * matrix[j * n + i];
      k += groupSums[i] = x3;
    }
    k = max3(0, tau2 - padAngle * n) / k;
    dx = k ? padAngle : tau2 / n;
    {
      let x3 = 0;
      if (sortGroups) groupIndex.sort((a3, b) => sortGroups(groupSums[a3], groupSums[b]));
      for (const i of groupIndex) {
        const x06 = x3;
        if (directed) {
          const subgroupIndex = range2(~n + 1, n).filter((j) => j < 0 ? matrix[~j * n + i] : matrix[i * n + j]);
          if (sortSubgroups) subgroupIndex.sort((a3, b) => sortSubgroups(a3 < 0 ? -matrix[~a3 * n + i] : matrix[i * n + a3], b < 0 ? -matrix[~b * n + i] : matrix[i * n + b]));
          for (const j of subgroupIndex) {
            if (j < 0) {
              const chord3 = chords[~j * n + i] || (chords[~j * n + i] = { source: null, target: null });
              chord3.target = { index: i, startAngle: x3, endAngle: x3 += matrix[~j * n + i] * k, value: matrix[~j * n + i] };
            } else {
              const chord3 = chords[i * n + j] || (chords[i * n + j] = { source: null, target: null });
              chord3.source = { index: i, startAngle: x3, endAngle: x3 += matrix[i * n + j] * k, value: matrix[i * n + j] };
            }
          }
          groups2[i] = { index: i, startAngle: x06, endAngle: x3, value: groupSums[i] };
        } else {
          const subgroupIndex = range2(0, n).filter((j) => matrix[i * n + j] || matrix[j * n + i]);
          if (sortSubgroups) subgroupIndex.sort((a3, b) => sortSubgroups(matrix[i * n + a3], matrix[i * n + b]));
          for (const j of subgroupIndex) {
            let chord3;
            if (i < j) {
              chord3 = chords[i * n + j] || (chords[i * n + j] = { source: null, target: null });
              chord3.source = { index: i, startAngle: x3, endAngle: x3 += matrix[i * n + j] * k, value: matrix[i * n + j] };
            } else {
              chord3 = chords[j * n + i] || (chords[j * n + i] = { source: null, target: null });
              chord3.target = { index: i, startAngle: x3, endAngle: x3 += matrix[i * n + j] * k, value: matrix[i * n + j] };
              if (i === j) chord3.source = chord3.target;
            }
            if (chord3.source && chord3.target && chord3.source.value < chord3.target.value) {
              const source = chord3.source;
              chord3.source = chord3.target;
              chord3.target = source;
            }
          }
          groups2[i] = { index: i, startAngle: x06, endAngle: x3, value: groupSums[i] };
        }
        x3 += dx;
      }
    }
    chords = Object.values(chords);
    chords.groups = groups2;
    return sortChords ? chords.sort(sortChords) : chords;
  }
  chord2.padAngle = function(_) {
    return arguments.length ? (padAngle = max3(0, _), chord2) : padAngle;
  };
  chord2.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord2) : sortGroups;
  };
  chord2.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord2) : sortSubgroups;
  };
  chord2.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord2) : sortChords && sortChords._;
  };
  return chord2;
}
var init_chord = __esm({
  "node_modules/d3-chord/src/chord.js"() {
    init_math2();
  }
});

// node_modules/d3-chord/src/array.js
var slice;
var init_array2 = __esm({
  "node_modules/d3-chord/src/array.js"() {
    slice = Array.prototype.slice;
  }
});

// node_modules/d3-chord/src/constant.js
function constant_default4(x3) {
  return function() {
    return x3;
  };
}
var init_constant4 = __esm({
  "node_modules/d3-chord/src/constant.js"() {
  }
});

// node_modules/d3-chord/src/ribbon.js
function defaultSource(d) {
  return d.source;
}
function defaultTarget(d) {
  return d.target;
}
function defaultRadius(d) {
  return d.radius;
}
function defaultStartAngle(d) {
  return d.startAngle;
}
function defaultEndAngle(d) {
  return d.endAngle;
}
function defaultPadAngle() {
  return 0;
}
function defaultArrowheadRadius() {
  return 10;
}
function ribbon(headRadius) {
  var source = defaultSource, target = defaultTarget, sourceRadius = defaultRadius, targetRadius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, padAngle = defaultPadAngle, context = null;
  function ribbon2() {
    var buffer, s = source.apply(this, arguments), t = target.apply(this, arguments), ap = padAngle.apply(this, arguments) / 2, argv = slice.call(arguments), sr = +sourceRadius.apply(this, (argv[0] = s, argv)), sa0 = startAngle.apply(this, argv) - halfPi2, sa1 = endAngle.apply(this, argv) - halfPi2, tr = +targetRadius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - halfPi2, ta1 = endAngle.apply(this, argv) - halfPi2;
    if (!context) context = buffer = path();
    if (ap > epsilon2) {
      if (abs2(sa1 - sa0) > ap * 2 + epsilon2) sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap);
      else sa0 = sa1 = (sa0 + sa1) / 2;
      if (abs2(ta1 - ta0) > ap * 2 + epsilon2) ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap);
      else ta0 = ta1 = (ta0 + ta1) / 2;
    }
    context.moveTo(sr * cos(sa0), sr * sin(sa0));
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) {
      if (headRadius) {
        var hr = +headRadius.apply(this, arguments), tr2 = tr - hr, ta2 = (ta0 + ta1) / 2;
        context.quadraticCurveTo(0, 0, tr2 * cos(ta0), tr2 * sin(ta0));
        context.lineTo(tr * cos(ta2), tr * sin(ta2));
        context.lineTo(tr2 * cos(ta1), tr2 * sin(ta1));
      } else {
        context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
        context.arc(0, 0, tr, ta0, ta1);
      }
    }
    context.quadraticCurveTo(0, 0, sr * cos(sa0), sr * sin(sa0));
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  if (headRadius) ribbon2.headRadius = function(_) {
    return arguments.length ? (headRadius = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : headRadius;
  };
  ribbon2.radius = function(_) {
    return arguments.length ? (sourceRadius = targetRadius = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : sourceRadius;
  };
  ribbon2.sourceRadius = function(_) {
    return arguments.length ? (sourceRadius = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : sourceRadius;
  };
  ribbon2.targetRadius = function(_) {
    return arguments.length ? (targetRadius = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : targetRadius;
  };
  ribbon2.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : startAngle;
  };
  ribbon2.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : endAngle;
  };
  ribbon2.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default4(+_), ribbon2) : padAngle;
  };
  ribbon2.source = function(_) {
    return arguments.length ? (source = _, ribbon2) : source;
  };
  ribbon2.target = function(_) {
    return arguments.length ? (target = _, ribbon2) : target;
  };
  ribbon2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, ribbon2) : context;
  };
  return ribbon2;
}
function ribbon_default() {
  return ribbon();
}
function ribbonArrow() {
  return ribbon(defaultArrowheadRadius);
}
var init_ribbon = __esm({
  "node_modules/d3-chord/src/ribbon.js"() {
    init_src4();
    init_array2();
    init_constant4();
    init_math2();
  }
});

// node_modules/d3-chord/src/index.js
var init_src18 = __esm({
  "node_modules/d3-chord/src/index.js"() {
    init_chord();
    init_ribbon();
  }
});

// node_modules/d3-contour/src/array.js
var array2, slice2;
var init_array3 = __esm({
  "node_modules/d3-contour/src/array.js"() {
    array2 = Array.prototype;
    slice2 = array2.slice;
  }
});

// node_modules/d3-contour/src/ascending.js
function ascending_default2(a3, b) {
  return a3 - b;
}
var init_ascending = __esm({
  "node_modules/d3-contour/src/ascending.js"() {
  }
});

// node_modules/d3-contour/src/area.js
function area_default2(ring) {
  var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
}
var init_area = __esm({
  "node_modules/d3-contour/src/area.js"() {
  }
});

// node_modules/d3-contour/src/constant.js
var constant_default5;
var init_constant5 = __esm({
  "node_modules/d3-contour/src/constant.js"() {
    constant_default5 = (x3) => () => x3;
  }
});

// node_modules/d3-contour/src/contains.js
function contains_default(ring, hole) {
  var i = -1, n = hole.length, c5;
  while (++i < n) if (c5 = ringContains(ring, hole[i])) return c5;
  return 0;
}
function ringContains(ring, point2) {
  var x3 = point2[0], y3 = point2[1], contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi4 = ring[i], xi = pi4[0], yi = pi4[1], pj = ring[j], xj = pj[0], yj = pj[1];
    if (segmentContains(pi4, pj, point2)) return 0;
    if (yi > y3 !== yj > y3 && x3 < (xj - xi) * (y3 - yi) / (yj - yi) + xi) contains = -contains;
  }
  return contains;
}
function segmentContains(a3, b, c5) {
  var i;
  return collinear(a3, b, c5) && within(a3[i = +(a3[0] === b[0])], c5[i], b[i]);
}
function collinear(a3, b, c5) {
  return (b[0] - a3[0]) * (c5[1] - a3[1]) === (c5[0] - a3[0]) * (b[1] - a3[1]);
}
function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}
var init_contains = __esm({
  "node_modules/d3-contour/src/contains.js"() {
  }
});

// node_modules/d3-contour/src/noop.js
function noop_default() {
}
var init_noop = __esm({
  "node_modules/d3-contour/src/noop.js"() {
  }
});

// node_modules/d3-contour/src/contours.js
function contours_default() {
  var dx = 1, dy = 1, threshold2 = thresholdSturges, smooth = smoothLinear;
  function contours(values) {
    var tz = threshold2(values);
    if (!Array.isArray(tz)) {
      const e = extent(values, finite);
      tz = ticks(...nice(e[0], e[1], tz), tz);
      while (tz[tz.length - 1] >= e[1]) tz.pop();
      while (tz[1] < e[0]) tz.shift();
    } else {
      tz = tz.slice().sort(ascending_default2);
    }
    return tz.map((value) => contour(values, value));
  }
  function contour(values, value) {
    const v2 = value == null ? NaN : +value;
    if (isNaN(v2)) throw new Error(`invalid value: ${value}`);
    var polygons = [], holes = [];
    isorings(values, v2, function(ring) {
      smooth(ring, values, v2);
      if (area_default2(ring) > 0) polygons.push([ring]);
      else holes.push(ring);
    });
    holes.forEach(function(hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (contains_default((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value,
      coordinates: polygons
    };
  }
  function isorings(values, value, callback) {
    var fragmentByStart = new Array(), fragmentByEnd = new Array(), x3, y3, t0, t1, t2, t3;
    x3 = y3 = -1;
    t1 = above(values[0], value);
    cases[t1 << 1].forEach(stitch);
    while (++x3 < dx - 1) {
      t0 = t1, t1 = above(values[x3 + 1], value);
      cases[t0 | t1 << 1].forEach(stitch);
    }
    cases[t1 << 0].forEach(stitch);
    while (++y3 < dy - 1) {
      x3 = -1;
      t1 = above(values[y3 * dx + dx], value);
      t2 = above(values[y3 * dx], value);
      cases[t1 << 1 | t2 << 2].forEach(stitch);
      while (++x3 < dx - 1) {
        t0 = t1, t1 = above(values[y3 * dx + dx + x3 + 1], value);
        t3 = t2, t2 = above(values[y3 * dx + x3 + 1], value);
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t1 | t2 << 3].forEach(stitch);
    }
    x3 = -1;
    t2 = values[y3 * dx] >= value;
    cases[t2 << 2].forEach(stitch);
    while (++x3 < dx - 1) {
      t3 = t2, t2 = above(values[y3 * dx + x3 + 1], value);
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }
    cases[t2 << 3].forEach(stitch);
    function stitch(line) {
      var start2 = [line[0][0] + x3, line[0][1] + y3], end = [line[1][0] + x3, line[1][1] + y3], startIndex = index3(start2), endIndex = index3(end), f, g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = { start: f.start, end: g.end, ring: f.ring.concat(g.ring) };
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = { start: g.start, end: f.end, ring: g.ring.concat(f.ring) };
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start2);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = { start: startIndex, end: endIndex, ring: [start2, end] };
      }
    }
  }
  function index3(point2) {
    return point2[0] * 2 + point2[1] * (dx + 1) * 4;
  }
  function smoothLinear(ring, values, value) {
    ring.forEach(function(point2) {
      var x3 = point2[0], y3 = point2[1], xt = x3 | 0, yt = y3 | 0, v1 = valid(values[yt * dx + xt]);
      if (x3 > 0 && x3 < dx && xt === x3) {
        point2[0] = smooth1(x3, valid(values[yt * dx + xt - 1]), v1, value);
      }
      if (y3 > 0 && y3 < dy && yt === y3) {
        point2[1] = smooth1(y3, valid(values[(yt - 1) * dx + xt]), v1, value);
      }
    });
  }
  contours.contour = contour;
  contours.size = function(_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.floor(_[0]), _1 = Math.floor(_[1]);
    if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };
  contours.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default5(slice2.call(_)) : constant_default5(_), contours) : threshold2;
  };
  contours.smooth = function(_) {
    return arguments.length ? (smooth = _ ? smoothLinear : noop_default, contours) : smooth === smoothLinear;
  };
  return contours;
}
function finite(x3) {
  return isFinite(x3) ? x3 : NaN;
}
function above(x3, value) {
  return x3 == null ? false : +x3 >= value;
}
function valid(v2) {
  return v2 == null || isNaN(v2 = +v2) ? -Infinity : v2;
}
function smooth1(x3, v0, v1, value) {
  const a3 = value - v0;
  const b = v1 - v0;
  const d = isFinite(a3) || isFinite(b) ? a3 / b : Math.sign(a3) / Math.sign(b);
  return isNaN(d) ? x3 : x3 + d - 0.5;
}
var cases;
var init_contours = __esm({
  "node_modules/d3-contour/src/contours.js"() {
    init_src();
    init_array3();
    init_ascending();
    init_area();
    init_constant5();
    init_contains();
    init_noop();
    cases = [
      [],
      [[[1, 1.5], [0.5, 1]]],
      [[[1.5, 1], [1, 1.5]]],
      [[[1.5, 1], [0.5, 1]]],
      [[[1, 0.5], [1.5, 1]]],
      [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
      [[[1, 0.5], [1, 1.5]]],
      [[[1, 0.5], [0.5, 1]]],
      [[[0.5, 1], [1, 0.5]]],
      [[[1, 1.5], [1, 0.5]]],
      [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
      [[[1.5, 1], [1, 0.5]]],
      [[[0.5, 1], [1.5, 1]]],
      [[[1, 1.5], [1.5, 1]]],
      [[[0.5, 1], [1, 1.5]]],
      []
    ];
  }
});

// node_modules/d3-contour/src/density.js
function defaultX(d) {
  return d[0];
}
function defaultY(d) {
  return d[1];
}
function defaultWeight() {
  return 1;
}
function density_default() {
  var x3 = defaultX, y3 = defaultY, weight = defaultWeight, dx = 960, dy = 500, r = 20, k = 2, o = r * 3, n = dx + o * 2 >> k, m3 = dy + o * 2 >> k, threshold2 = constant_default5(20);
  function grid(data) {
    var values = new Float32Array(n * m3), pow2k = Math.pow(2, -k), i = -1;
    for (const d of data) {
      var xi = (x3(d, ++i, data) + o) * pow2k, yi = (y3(d, i, data) + o) * pow2k, wi = +weight(d, i, data);
      if (wi && xi >= 0 && xi < n && yi >= 0 && yi < m3) {
        var x06 = Math.floor(xi), y06 = Math.floor(yi), xt = xi - x06 - 0.5, yt = yi - y06 - 0.5;
        values[x06 + y06 * n] += (1 - xt) * (1 - yt) * wi;
        values[x06 + 1 + y06 * n] += xt * (1 - yt) * wi;
        values[x06 + 1 + (y06 + 1) * n] += xt * yt * wi;
        values[x06 + (y06 + 1) * n] += (1 - xt) * yt * wi;
      }
    }
    blur2({ data: values, width: n, height: m3 }, r * pow2k);
    return values;
  }
  function density(data) {
    var values = grid(data), tz = threshold2(values), pow4k = Math.pow(2, 2 * k);
    if (!Array.isArray(tz)) {
      tz = ticks(Number.MIN_VALUE, max(values) / pow4k, tz);
    }
    return contours_default().size([n, m3]).thresholds(tz.map((d) => d * pow4k))(values).map((c5, i) => (c5.value = +tz[i], transform2(c5)));
  }
  density.contours = function(data) {
    var values = grid(data), contours = contours_default().size([n, m3]), pow4k = Math.pow(2, 2 * k), contour = (value) => {
      value = +value;
      var c5 = transform2(contours.contour(values, value * pow4k));
      c5.value = value;
      return c5;
    };
    Object.defineProperty(contour, "max", { get: () => max(values) / pow4k });
    return contour;
  };
  function transform2(geometry) {
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }
  function transformPolygon(coordinates2) {
    coordinates2.forEach(transformRing);
  }
  function transformRing(coordinates2) {
    coordinates2.forEach(transformPoint);
  }
  function transformPoint(coordinates2) {
    coordinates2[0] = coordinates2[0] * Math.pow(2, k) - o;
    coordinates2[1] = coordinates2[1] * Math.pow(2, k) - o;
  }
  function resize() {
    o = r * 3;
    n = dx + o * 2 >> k;
    m3 = dy + o * 2 >> k;
    return density;
  }
  density.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default5(+_), density) : x3;
  };
  density.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default5(+_), density) : y3;
  };
  density.weight = function(_) {
    return arguments.length ? (weight = typeof _ === "function" ? _ : constant_default5(+_), density) : weight;
  };
  density.size = function(_) {
    if (!arguments.length) return [dx, dy];
    var _0 = +_[0], _1 = +_[1];
    if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };
  density.cellSize = function(_) {
    if (!arguments.length) return 1 << k;
    if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
    return k = Math.floor(Math.log(_) / Math.LN2), resize();
  };
  density.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default5(slice2.call(_)) : constant_default5(_), density) : threshold2;
  };
  density.bandwidth = function(_) {
    if (!arguments.length) return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
    return r = (Math.sqrt(4 * _ * _ + 1) - 1) / 2, resize();
  };
  return density;
}
var init_density = __esm({
  "node_modules/d3-contour/src/density.js"() {
    init_src();
    init_array3();
    init_constant5();
    init_contours();
  }
});

// node_modules/d3-contour/src/index.js
var init_src19 = __esm({
  "node_modules/d3-contour/src/index.js"() {
    init_contours();
    init_density();
  }
});

// node_modules/robust-predicates/esm/util.js
function sum2(elen, e, flen, f, h) {
  let Q, Qnew, hh, bvirt;
  let enow = e[0];
  let fnow = f[0];
  let eindex = 0;
  let findex = 0;
  if (fnow > enow === fnow > -enow) {
    Q = enow;
    enow = e[++eindex];
  } else {
    Q = fnow;
    fnow = f[++findex];
  }
  let hindex = 0;
  if (eindex < elen && findex < flen) {
    if (fnow > enow === fnow > -enow) {
      Qnew = enow + Q;
      hh = Q - (Qnew - enow);
      enow = e[++eindex];
    } else {
      Qnew = fnow + Q;
      hh = Q - (Qnew - fnow);
      fnow = f[++findex];
    }
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    while (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
      } else {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
      }
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
  }
  while (eindex < elen) {
    Qnew = Q + enow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (enow - bvirt);
    enow = e[++eindex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  while (findex < flen) {
    Qnew = Q + fnow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (fnow - bvirt);
    fnow = f[++findex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q !== 0 || hindex === 0) {
    h[hindex++] = Q;
  }
  return hindex;
}
function estimate(elen, e) {
  let Q = e[0];
  for (let i = 1; i < elen; i++) Q += e[i];
  return Q;
}
function vec(n) {
  return new Float64Array(n);
}
var epsilon3, splitter, resulterrbound;
var init_util = __esm({
  "node_modules/robust-predicates/esm/util.js"() {
    epsilon3 = 11102230246251565e-32;
    splitter = 134217729;
    resulterrbound = (3 + 8 * epsilon3) * epsilon3;
  }
});

// node_modules/robust-predicates/esm/orient2d.js
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
  let acxtail, acytail, bcxtail, bcytail;
  let bvirt, c5, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u32;
  const acx = ax - cx;
  const bcx = bx - cx;
  const acy = ay - cy;
  const bcy = by - cy;
  s1 = acx * bcy;
  c5 = splitter * acx;
  ahi = c5 - (c5 - acx);
  alo = acx - ahi;
  c5 = splitter * bcy;
  bhi = c5 - (c5 - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c5 = splitter * acy;
  ahi = c5 - (c5 - acy);
  alo = acy - ahi;
  c5 = splitter * bcx;
  bhi = c5 - (c5 - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  B[2] = _j - (u32 - bvirt) + (_i - bvirt);
  B[3] = u32;
  let det = estimate(4, B);
  let errbound = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);
  if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
    return det;
  }
  errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
  det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound) return det;
  s1 = acxtail * bcy;
  c5 = splitter * acxtail;
  ahi = c5 - (c5 - acxtail);
  alo = acxtail - ahi;
  c5 = splitter * bcy;
  bhi = c5 - (c5 - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c5 = splitter * acytail;
  ahi = c5 - (c5 - acytail);
  alo = acytail - ahi;
  c5 = splitter * bcx;
  bhi = c5 - (c5 - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C1len = sum2(4, B, 4, u, C1);
  s1 = acx * bcytail;
  c5 = splitter * acx;
  ahi = c5 - (c5 - acx);
  alo = acx - ahi;
  c5 = splitter * bcytail;
  bhi = c5 - (c5 - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c5 = splitter * acy;
  ahi = c5 - (c5 - acy);
  alo = acy - ahi;
  c5 = splitter * bcxtail;
  bhi = c5 - (c5 - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C2len = sum2(C1len, C1, 4, u, C2);
  s1 = acxtail * bcytail;
  c5 = splitter * acxtail;
  ahi = c5 - (c5 - acxtail);
  alo = acxtail - ahi;
  c5 = splitter * bcytail;
  bhi = c5 - (c5 - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c5 = splitter * acytail;
  ahi = c5 - (c5 - acytail);
  alo = acytail - ahi;
  c5 = splitter * bcxtail;
  bhi = c5 - (c5 - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const Dlen = sum2(C2len, C2, 4, u, D);
  return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
  const detleft = (ay - cy) * (bx - cx);
  const detright = (ax - cx) * (by - cy);
  const det = detleft - detright;
  const detsum = Math.abs(detleft + detright);
  if (Math.abs(det) >= ccwerrboundA * detsum) return det;
  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}
var ccwerrboundA, ccwerrboundB, ccwerrboundC, B, C1, C2, D, u;
var init_orient2d = __esm({
  "node_modules/robust-predicates/esm/orient2d.js"() {
    init_util();
    ccwerrboundA = (3 + 16 * epsilon3) * epsilon3;
    ccwerrboundB = (2 + 12 * epsilon3) * epsilon3;
    ccwerrboundC = (9 + 64 * epsilon3) * epsilon3 * epsilon3;
    B = vec(4);
    C1 = vec(8);
    C2 = vec(12);
    D = vec(16);
    u = vec(4);
  }
});

// node_modules/robust-predicates/esm/orient3d.js
var o3derrboundA, o3derrboundB, o3derrboundC, bc, ca, ab, at_b, at_c, bt_c, bt_a, ct_a, ct_b, bct, cat, abt, u2, _8, _8b, _16, _12, fin, fin2;
var init_orient3d = __esm({
  "node_modules/robust-predicates/esm/orient3d.js"() {
    init_util();
    o3derrboundA = (7 + 56 * epsilon3) * epsilon3;
    o3derrboundB = (3 + 28 * epsilon3) * epsilon3;
    o3derrboundC = (26 + 288 * epsilon3) * epsilon3 * epsilon3;
    bc = vec(4);
    ca = vec(4);
    ab = vec(4);
    at_b = vec(4);
    at_c = vec(4);
    bt_c = vec(4);
    bt_a = vec(4);
    ct_a = vec(4);
    ct_b = vec(4);
    bct = vec(8);
    cat = vec(8);
    abt = vec(8);
    u2 = vec(4);
    _8 = vec(8);
    _8b = vec(8);
    _16 = vec(8);
    _12 = vec(12);
    fin = vec(192);
    fin2 = vec(192);
  }
});

// node_modules/robust-predicates/esm/incircle.js
var iccerrboundA, iccerrboundB, iccerrboundC, bc2, ca2, ab2, aa, bb, cc, u3, v, axtbc, aytbc, bxtca, bytca, cxtab, cytab, abt2, bct2, cat2, abtt, bctt, catt, _82, _162, _16b, _16c, _32, _32b, _48, _64, fin3, fin22;
var init_incircle = __esm({
  "node_modules/robust-predicates/esm/incircle.js"() {
    init_util();
    iccerrboundA = (10 + 96 * epsilon3) * epsilon3;
    iccerrboundB = (4 + 48 * epsilon3) * epsilon3;
    iccerrboundC = (44 + 576 * epsilon3) * epsilon3 * epsilon3;
    bc2 = vec(4);
    ca2 = vec(4);
    ab2 = vec(4);
    aa = vec(4);
    bb = vec(4);
    cc = vec(4);
    u3 = vec(4);
    v = vec(4);
    axtbc = vec(8);
    aytbc = vec(8);
    bxtca = vec(8);
    bytca = vec(8);
    cxtab = vec(8);
    cytab = vec(8);
    abt2 = vec(8);
    bct2 = vec(8);
    cat2 = vec(8);
    abtt = vec(4);
    bctt = vec(4);
    catt = vec(4);
    _82 = vec(8);
    _162 = vec(16);
    _16b = vec(16);
    _16c = vec(16);
    _32 = vec(32);
    _32b = vec(32);
    _48 = vec(48);
    _64 = vec(64);
    fin3 = vec(1152);
    fin22 = vec(1152);
  }
});

// node_modules/robust-predicates/esm/insphere.js
var isperrboundA, isperrboundB, isperrboundC, ab3, bc3, cd, de, ea, ac, bd, ce, da, eb, abc, bcd, cde, dea, eab, abd, bce, cda, deb, eac, adet, bdet, cdet, ddet, edet, abdet, cddet, cdedet, deter, _83, _8b2, _8c, _163, _24, _482, _48b, _96, _192, _384x, _384y, _384z, _768, xdet, ydet, zdet, fin4;
var init_insphere = __esm({
  "node_modules/robust-predicates/esm/insphere.js"() {
    init_util();
    isperrboundA = (16 + 224 * epsilon3) * epsilon3;
    isperrboundB = (5 + 72 * epsilon3) * epsilon3;
    isperrboundC = (71 + 1408 * epsilon3) * epsilon3 * epsilon3;
    ab3 = vec(4);
    bc3 = vec(4);
    cd = vec(4);
    de = vec(4);
    ea = vec(4);
    ac = vec(4);
    bd = vec(4);
    ce = vec(4);
    da = vec(4);
    eb = vec(4);
    abc = vec(24);
    bcd = vec(24);
    cde = vec(24);
    dea = vec(24);
    eab = vec(24);
    abd = vec(24);
    bce = vec(24);
    cda = vec(24);
    deb = vec(24);
    eac = vec(24);
    adet = vec(1152);
    bdet = vec(1152);
    cdet = vec(1152);
    ddet = vec(1152);
    edet = vec(1152);
    abdet = vec(2304);
    cddet = vec(2304);
    cdedet = vec(3456);
    deter = vec(5760);
    _83 = vec(8);
    _8b2 = vec(8);
    _8c = vec(8);
    _163 = vec(16);
    _24 = vec(24);
    _482 = vec(48);
    _48b = vec(48);
    _96 = vec(96);
    _192 = vec(192);
    _384x = vec(384);
    _384y = vec(384);
    _384z = vec(384);
    _768 = vec(768);
    xdet = vec(96);
    ydet = vec(96);
    zdet = vec(96);
    fin4 = vec(1152);
  }
});

// node_modules/robust-predicates/index.js
var init_robust_predicates = __esm({
  "node_modules/robust-predicates/index.js"() {
    init_orient2d();
    init_orient3d();
    init_incircle();
    init_insphere();
  }
});

// node_modules/delaunator/index.js
function pseudoAngle(dx, dy) {
  const p = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p : 1 + p) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x3 = (ey * bl - dy * cl) * d;
  const y3 = (dx * cl - ex * bl) * d;
  return x3 * x3 + y3 * y3;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x3 = ax + (ey * bl - dy * cl) * d;
  const y3 = ay + (dx * cl - ex * bl) * d;
  return { x: x3, y: y3 };
}
function quicksort(ids, dists, left2, right2) {
  if (right2 - left2 <= 20) {
    for (let i = left2 + 1; i <= right2; i++) {
      const temp = ids[i];
      const tempDist = dists[temp];
      let j = i - 1;
      while (j >= left2 && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
      ids[j + 1] = temp;
    }
  } else {
    const median2 = left2 + right2 >> 1;
    let i = left2 + 1;
    let j = right2;
    swap(ids, median2, i);
    if (dists[ids[left2]] > dists[ids[right2]]) swap(ids, left2, right2);
    if (dists[ids[i]] > dists[ids[right2]]) swap(ids, i, right2);
    if (dists[ids[left2]] > dists[ids[i]]) swap(ids, left2, i);
    const temp = ids[i];
    const tempDist = dists[temp];
    while (true) {
      do
        i++;
      while (dists[ids[i]] < tempDist);
      do
        j--;
      while (dists[ids[j]] > tempDist);
      if (j < i) break;
      swap(ids, i, j);
    }
    ids[left2 + 1] = ids[j];
    ids[j] = temp;
    if (right2 - i + 1 >= j - left2) {
      quicksort(ids, dists, i, right2);
      quicksort(ids, dists, left2, j - 1);
    } else {
      quicksort(ids, dists, left2, j - 1);
      quicksort(ids, dists, i, right2);
    }
  }
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function defaultGetX(p) {
  return p[0];
}
function defaultGetY(p) {
  return p[1];
}
var EPSILON, EDGE_STACK, Delaunator;
var init_delaunator = __esm({
  "node_modules/delaunator/index.js"() {
    init_robust_predicates();
    EPSILON = Math.pow(2, -52);
    EDGE_STACK = new Uint32Array(512);
    Delaunator = class _Delaunator {
      static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);
        for (let i = 0; i < n; i++) {
          const p = points[i];
          coords[2 * i] = getX(p);
          coords[2 * i + 1] = getY(p);
        }
        return new _Delaunator(coords);
      }
      constructor(coords) {
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
        this.coords = coords;
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n);
        this._hullNext = new Uint32Array(n);
        this._hullTri = new Uint32Array(n);
        this._hullHash = new Int32Array(this._hashSize);
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);
        this.update();
      }
      update() {
        const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
        const n = coords.length >> 1;
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY2 = -Infinity;
        for (let i = 0; i < n; i++) {
          const x3 = coords[2 * i];
          const y3 = coords[2 * i + 1];
          if (x3 < minX) minX = x3;
          if (y3 < minY) minY = y3;
          if (x3 > maxX) maxX = x3;
          if (y3 > maxY2) maxY2 = y3;
          this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY2) / 2;
        let i0, i1, i2;
        for (let i = 0, minDist = Infinity; i < n; i++) {
          const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
          if (d < minDist) {
            i0 = i;
            minDist = d;
          }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];
        for (let i = 0, minDist = Infinity; i < n; i++) {
          if (i === i0) continue;
          const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
          if (d < minDist && d > 0) {
            i1 = i;
            minDist = d;
          }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];
        let minRadius = Infinity;
        for (let i = 0; i < n; i++) {
          if (i === i0 || i === i1) continue;
          const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
          if (r < minRadius) {
            i2 = i;
            minRadius = r;
          }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];
        if (minRadius === Infinity) {
          for (let i = 0; i < n; i++) {
            this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
          }
          quicksort(this._ids, this._dists, 0, n - 1);
          const hull = new Uint32Array(n);
          let j = 0;
          for (let i = 0, d0 = -Infinity; i < n; i++) {
            const id2 = this._ids[i];
            const d = this._dists[id2];
            if (d > d0) {
              hull[j++] = id2;
              d0 = d;
            }
          }
          this.hull = hull.subarray(0, j);
          this.triangles = new Uint32Array(0);
          this.halfedges = new Uint32Array(0);
          return;
        }
        if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
          const i = i1;
          const x3 = i1x;
          const y3 = i1y;
          i1 = i2;
          i1x = i2x;
          i1y = i2y;
          i2 = i;
          i2x = x3;
          i2y = y3;
        }
        const center2 = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center2.x;
        this._cy = center2.y;
        for (let i = 0; i < n; i++) {
          this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center2.x, center2.y);
        }
        quicksort(this._ids, this._dists, 0, n - 1);
        this._hullStart = i0;
        let hullSize = 3;
        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;
        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;
        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;
        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);
        for (let k = 0, xp, yp; k < this._ids.length; k++) {
          const i = this._ids[k];
          const x3 = coords[2 * i];
          const y3 = coords[2 * i + 1];
          if (k > 0 && Math.abs(x3 - xp) <= EPSILON && Math.abs(y3 - yp) <= EPSILON) continue;
          xp = x3;
          yp = y3;
          if (i === i0 || i === i1 || i === i2) continue;
          let start2 = 0;
          for (let j = 0, key = this._hashKey(x3, y3); j < this._hashSize; j++) {
            start2 = hullHash[(key + j) % this._hashSize];
            if (start2 !== -1 && start2 !== hullNext[start2]) break;
          }
          start2 = hullPrev[start2];
          let e = start2, q;
          while (q = hullNext[e], orient2d(x3, y3, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
            e = q;
            if (e === start2) {
              e = -1;
              break;
            }
          }
          if (e === -1) continue;
          let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
          hullTri[i] = this._legalize(t + 2);
          hullTri[e] = t;
          hullSize++;
          let n2 = hullNext[e];
          while (q = hullNext[n2], orient2d(x3, y3, coords[2 * n2], coords[2 * n2 + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
            t = this._addTriangle(n2, i, q, hullTri[i], -1, hullTri[n2]);
            hullTri[i] = this._legalize(t + 2);
            hullNext[n2] = n2;
            hullSize--;
            n2 = q;
          }
          if (e === start2) {
            while (q = hullPrev[e], orient2d(x3, y3, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
              t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
              this._legalize(t + 2);
              hullTri[q] = t;
              hullNext[e] = e;
              hullSize--;
              e = q;
            }
          }
          this._hullStart = hullPrev[i] = e;
          hullNext[e] = hullPrev[n2] = i;
          hullNext[i] = n2;
          hullHash[this._hashKey(x3, y3)] = i;
          hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }
        this.hull = new Uint32Array(hullSize);
        for (let i = 0, e = this._hullStart; i < hullSize; i++) {
          this.hull[i] = e;
          e = hullNext[e];
        }
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
      }
      _hashKey(x3, y3) {
        return Math.floor(pseudoAngle(x3 - this._cx, y3 - this._cy) * this._hashSize) % this._hashSize;
      }
      _legalize(a3) {
        const { _triangles: triangles, _halfedges: halfedges, coords } = this;
        let i = 0;
        let ar = 0;
        while (true) {
          const b = halfedges[a3];
          const a0 = a3 - a3 % 3;
          ar = a0 + (a3 + 2) % 3;
          if (b === -1) {
            if (i === 0) break;
            a3 = EDGE_STACK[--i];
            continue;
          }
          const b02 = b - b % 3;
          const al = a0 + (a3 + 1) % 3;
          const bl = b02 + (b + 2) % 3;
          const p02 = triangles[ar];
          const pr = triangles[a3];
          const pl = triangles[al];
          const p1 = triangles[bl];
          const illegal = inCircle(
            coords[2 * p02],
            coords[2 * p02 + 1],
            coords[2 * pr],
            coords[2 * pr + 1],
            coords[2 * pl],
            coords[2 * pl + 1],
            coords[2 * p1],
            coords[2 * p1 + 1]
          );
          if (illegal) {
            triangles[a3] = p1;
            triangles[b] = p02;
            const hbl = halfedges[bl];
            if (hbl === -1) {
              let e = this._hullStart;
              do {
                if (this._hullTri[e] === bl) {
                  this._hullTri[e] = a3;
                  break;
                }
                e = this._hullPrev[e];
              } while (e !== this._hullStart);
            }
            this._link(a3, hbl);
            this._link(b, halfedges[ar]);
            this._link(ar, bl);
            const br = b02 + (b + 1) % 3;
            if (i < EDGE_STACK.length) {
              EDGE_STACK[i++] = br;
            }
          } else {
            if (i === 0) break;
            a3 = EDGE_STACK[--i];
          }
        }
        return ar;
      }
      _link(a3, b) {
        this._halfedges[a3] = b;
        if (b !== -1) this._halfedges[b] = a3;
      }
      // add a new triangle given vertex indices and adjacent half-edge ids
      _addTriangle(i0, i1, i2, a3, b, c5) {
        const t = this.trianglesLen;
        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;
        this._link(t, a3);
        this._link(t + 1, b);
        this._link(t + 2, c5);
        this.trianglesLen += 3;
        return t;
      }
    };
  }
});

// node_modules/d3-delaunay/src/path.js
var epsilon4, Path2;
var init_path = __esm({
  "node_modules/d3-delaunay/src/path.js"() {
    epsilon4 = 1e-6;
    Path2 = class {
      constructor() {
        this._x0 = this._y0 = // start of current subpath
        this._x1 = this._y1 = null;
        this._ = "";
      }
      moveTo(x3, y3) {
        this._ += `M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}`;
      }
      closePath() {
        if (this._x1 !== null) {
          this._x1 = this._x0, this._y1 = this._y0;
          this._ += "Z";
        }
      }
      lineTo(x3, y3) {
        this._ += `L${this._x1 = +x3},${this._y1 = +y3}`;
      }
      arc(x3, y3, r) {
        x3 = +x3, y3 = +y3, r = +r;
        const x06 = x3 + r;
        const y06 = y3;
        if (r < 0) throw new Error("negative radius");
        if (this._x1 === null) this._ += `M${x06},${y06}`;
        else if (Math.abs(this._x1 - x06) > epsilon4 || Math.abs(this._y1 - y06) > epsilon4) this._ += "L" + x06 + "," + y06;
        if (!r) return;
        this._ += `A${r},${r},0,1,1,${x3 - r},${y3}A${r},${r},0,1,1,${this._x1 = x06},${this._y1 = y06}`;
      }
      rect(x3, y3, w, h) {
        this._ += `M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}h${+w}v${+h}h${-w}Z`;
      }
      value() {
        return this._ || null;
      }
    };
  }
});

// node_modules/d3-delaunay/src/polygon.js
var Polygon;
var init_polygon = __esm({
  "node_modules/d3-delaunay/src/polygon.js"() {
    Polygon = class {
      constructor() {
        this._ = [];
      }
      moveTo(x3, y3) {
        this._.push([x3, y3]);
      }
      closePath() {
        this._.push(this._[0].slice());
      }
      lineTo(x3, y3) {
        this._.push([x3, y3]);
      }
      value() {
        return this._.length ? this._ : null;
      }
    };
  }
});

// node_modules/d3-delaunay/src/voronoi.js
var Voronoi;
var init_voronoi = __esm({
  "node_modules/d3-delaunay/src/voronoi.js"() {
    init_path();
    init_polygon();
    Voronoi = class {
      constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
        if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
        this.delaunay = delaunay;
        this._circumcenters = new Float64Array(delaunay.points.length * 2);
        this.vectors = new Float64Array(delaunay.points.length * 2);
        this.xmax = xmax, this.xmin = xmin;
        this.ymax = ymax, this.ymin = ymin;
        this._init();
      }
      update() {
        this.delaunay.update();
        this._init();
        return this;
      }
      _init() {
        const { delaunay: { points, hull, triangles }, vectors } = this;
        let bx, by;
        const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
        for (let i = 0, j = 0, n = triangles.length, x3, y3; i < n; i += 3, j += 2) {
          const t1 = triangles[i] * 2;
          const t2 = triangles[i + 1] * 2;
          const t3 = triangles[i + 2] * 2;
          const x13 = points[t1];
          const y13 = points[t1 + 1];
          const x22 = points[t2];
          const y22 = points[t2 + 1];
          const x32 = points[t3];
          const y32 = points[t3 + 1];
          const dx = x22 - x13;
          const dy = y22 - y13;
          const ex = x32 - x13;
          const ey = y32 - y13;
          const ab4 = (dx * ey - dy * ex) * 2;
          if (Math.abs(ab4) < 1e-9) {
            if (bx === void 0) {
              bx = by = 0;
              for (const i2 of hull) bx += points[i2 * 2], by += points[i2 * 2 + 1];
              bx /= hull.length, by /= hull.length;
            }
            const a3 = 1e9 * Math.sign((bx - x13) * ey - (by - y13) * ex);
            x3 = (x13 + x32) / 2 - a3 * ey;
            y3 = (y13 + y32) / 2 + a3 * ex;
          } else {
            const d = 1 / ab4;
            const bl = dx * dx + dy * dy;
            const cl = ex * ex + ey * ey;
            x3 = x13 + (ey * bl - dy * cl) * d;
            y3 = y13 + (dx * cl - ex * bl) * d;
          }
          circumcenters[j] = x3;
          circumcenters[j + 1] = y3;
        }
        let h = hull[hull.length - 1];
        let p02, p1 = h * 4;
        let x06, x12 = points[2 * h];
        let y06, y12 = points[2 * h + 1];
        vectors.fill(0);
        for (let i = 0; i < hull.length; ++i) {
          h = hull[i];
          p02 = p1, x06 = x12, y06 = y12;
          p1 = h * 4, x12 = points[2 * h], y12 = points[2 * h + 1];
          vectors[p02 + 2] = vectors[p1] = y06 - y12;
          vectors[p02 + 3] = vectors[p1 + 1] = x12 - x06;
        }
      }
      render(context) {
        const buffer = context == null ? context = new Path2() : void 0;
        const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
        if (hull.length <= 1) return null;
        for (let i = 0, n = halfedges.length; i < n; ++i) {
          const j = halfedges[i];
          if (j < i) continue;
          const ti = Math.floor(i / 3) * 2;
          const tj = Math.floor(j / 3) * 2;
          const xi = circumcenters[ti];
          const yi = circumcenters[ti + 1];
          const xj = circumcenters[tj];
          const yj = circumcenters[tj + 1];
          this._renderSegment(xi, yi, xj, yj, context);
        }
        let h0, h1 = hull[hull.length - 1];
        for (let i = 0; i < hull.length; ++i) {
          h0 = h1, h1 = hull[i];
          const t = Math.floor(inedges[h1] / 3) * 2;
          const x3 = circumcenters[t];
          const y3 = circumcenters[t + 1];
          const v2 = h0 * 4;
          const p = this._project(x3, y3, vectors[v2 + 2], vectors[v2 + 3]);
          if (p) this._renderSegment(x3, y3, p[0], p[1], context);
        }
        return buffer && buffer.value();
      }
      renderBounds(context) {
        const buffer = context == null ? context = new Path2() : void 0;
        context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
        return buffer && buffer.value();
      }
      renderCell(i, context) {
        const buffer = context == null ? context = new Path2() : void 0;
        const points = this._clip(i);
        if (points === null || !points.length) return;
        context.moveTo(points[0], points[1]);
        let n = points.length;
        while (points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1) n -= 2;
        for (let i2 = 2; i2 < n; i2 += 2) {
          if (points[i2] !== points[i2 - 2] || points[i2 + 1] !== points[i2 - 1])
            context.lineTo(points[i2], points[i2 + 1]);
        }
        context.closePath();
        return buffer && buffer.value();
      }
      *cellPolygons() {
        const { delaunay: { points } } = this;
        for (let i = 0, n = points.length / 2; i < n; ++i) {
          const cell = this.cellPolygon(i);
          if (cell) cell.index = i, yield cell;
        }
      }
      cellPolygon(i) {
        const polygon = new Polygon();
        this.renderCell(i, polygon);
        return polygon.value();
      }
      _renderSegment(x06, y06, x12, y12, context) {
        let S;
        const c0 = this._regioncode(x06, y06);
        const c1 = this._regioncode(x12, y12);
        if (c0 === 0 && c1 === 0) {
          context.moveTo(x06, y06);
          context.lineTo(x12, y12);
        } else if (S = this._clipSegment(x06, y06, x12, y12, c0, c1)) {
          context.moveTo(S[0], S[1]);
          context.lineTo(S[2], S[3]);
        }
      }
      contains(i, x3, y3) {
        if ((x3 = +x3, x3 !== x3) || (y3 = +y3, y3 !== y3)) return false;
        return this.delaunay._step(i, x3, y3) === i;
      }
      *neighbors(i) {
        const ci = this._clip(i);
        if (ci) for (const j of this.delaunay.neighbors(i)) {
          const cj = this._clip(j);
          if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
            for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
              if (ci[ai] === cj[aj] && ci[ai + 1] === cj[aj + 1] && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
                yield j;
                break loop;
              }
            }
          }
        }
      }
      _cell(i) {
        const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
        const e0 = inedges[i];
        if (e0 === -1) return null;
        const points = [];
        let e = e0;
        do {
          const t = Math.floor(e / 3);
          points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
          e = e % 3 === 2 ? e - 2 : e + 1;
          if (triangles[e] !== i) break;
          e = halfedges[e];
        } while (e !== e0 && e !== -1);
        return points;
      }
      _clip(i) {
        if (i === 0 && this.delaunay.hull.length === 1) {
          return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
        }
        const points = this._cell(i);
        if (points === null) return null;
        const { vectors: V } = this;
        const v2 = i * 4;
        return this._simplify(V[v2] || V[v2 + 1] ? this._clipInfinite(i, points, V[v2], V[v2 + 1], V[v2 + 2], V[v2 + 3]) : this._clipFinite(i, points));
      }
      _clipFinite(i, points) {
        const n = points.length;
        let P = null;
        let x06, y06, x12 = points[n - 2], y12 = points[n - 1];
        let c0, c1 = this._regioncode(x12, y12);
        let e0, e1 = 0;
        for (let j = 0; j < n; j += 2) {
          x06 = x12, y06 = y12, x12 = points[j], y12 = points[j + 1];
          c0 = c1, c1 = this._regioncode(x12, y12);
          if (c0 === 0 && c1 === 0) {
            e0 = e1, e1 = 0;
            if (P) P.push(x12, y12);
            else P = [x12, y12];
          } else {
            let S, sx0, sy0, sx1, sy1;
            if (c0 === 0) {
              if ((S = this._clipSegment(x06, y06, x12, y12, c0, c1)) === null) continue;
              [sx0, sy0, sx1, sy1] = S;
            } else {
              if ((S = this._clipSegment(x12, y12, x06, y06, c1, c0)) === null) continue;
              [sx1, sy1, sx0, sy0] = S;
              e0 = e1, e1 = this._edgecode(sx0, sy0);
              if (e0 && e1) this._edge(i, e0, e1, P, P.length);
              if (P) P.push(sx0, sy0);
              else P = [sx0, sy0];
            }
            e0 = e1, e1 = this._edgecode(sx1, sy1);
            if (e0 && e1) this._edge(i, e0, e1, P, P.length);
            if (P) P.push(sx1, sy1);
            else P = [sx1, sy1];
          }
        }
        if (P) {
          e0 = e1, e1 = this._edgecode(P[0], P[1]);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
          return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
        }
        return P;
      }
      _clipSegment(x06, y06, x12, y12, c0, c1) {
        const flip = c0 < c1;
        if (flip) [x06, y06, x12, y12, c0, c1] = [x12, y12, x06, y06, c1, c0];
        while (true) {
          if (c0 === 0 && c1 === 0) return flip ? [x12, y12, x06, y06] : [x06, y06, x12, y12];
          if (c0 & c1) return null;
          let x3, y3, c5 = c0 || c1;
          if (c5 & 8) x3 = x06 + (x12 - x06) * (this.ymax - y06) / (y12 - y06), y3 = this.ymax;
          else if (c5 & 4) x3 = x06 + (x12 - x06) * (this.ymin - y06) / (y12 - y06), y3 = this.ymin;
          else if (c5 & 2) y3 = y06 + (y12 - y06) * (this.xmax - x06) / (x12 - x06), x3 = this.xmax;
          else y3 = y06 + (y12 - y06) * (this.xmin - x06) / (x12 - x06), x3 = this.xmin;
          if (c0) x06 = x3, y06 = y3, c0 = this._regioncode(x06, y06);
          else x12 = x3, y12 = y3, c1 = this._regioncode(x12, y12);
        }
      }
      _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
        let P = Array.from(points), p;
        if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
        if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
        if (P = this._clipFinite(i, P)) {
          for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
            c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
            if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
          }
        } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
          P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
        }
        return P;
      }
      _edge(i, e0, e1, P, j) {
        while (e0 !== e1) {
          let x3, y3;
          switch (e0) {
            case 5:
              e0 = 4;
              continue;
            case 4:
              e0 = 6, x3 = this.xmax, y3 = this.ymin;
              break;
            case 6:
              e0 = 2;
              continue;
            case 2:
              e0 = 10, x3 = this.xmax, y3 = this.ymax;
              break;
            case 10:
              e0 = 8;
              continue;
            case 8:
              e0 = 9, x3 = this.xmin, y3 = this.ymax;
              break;
            case 9:
              e0 = 1;
              continue;
            case 1:
              e0 = 5, x3 = this.xmin, y3 = this.ymin;
              break;
          }
          if ((P[j] !== x3 || P[j + 1] !== y3) && this.contains(i, x3, y3)) {
            P.splice(j, 0, x3, y3), j += 2;
          }
        }
        return j;
      }
      _project(x06, y06, vx, vy) {
        let t = Infinity, c5, x3, y3;
        if (vy < 0) {
          if (y06 <= this.ymin) return null;
          if ((c5 = (this.ymin - y06) / vy) < t) y3 = this.ymin, x3 = x06 + (t = c5) * vx;
        } else if (vy > 0) {
          if (y06 >= this.ymax) return null;
          if ((c5 = (this.ymax - y06) / vy) < t) y3 = this.ymax, x3 = x06 + (t = c5) * vx;
        }
        if (vx > 0) {
          if (x06 >= this.xmax) return null;
          if ((c5 = (this.xmax - x06) / vx) < t) x3 = this.xmax, y3 = y06 + (t = c5) * vy;
        } else if (vx < 0) {
          if (x06 <= this.xmin) return null;
          if ((c5 = (this.xmin - x06) / vx) < t) x3 = this.xmin, y3 = y06 + (t = c5) * vy;
        }
        return [x3, y3];
      }
      _edgecode(x3, y3) {
        return (x3 === this.xmin ? 1 : x3 === this.xmax ? 2 : 0) | (y3 === this.ymin ? 4 : y3 === this.ymax ? 8 : 0);
      }
      _regioncode(x3, y3) {
        return (x3 < this.xmin ? 1 : x3 > this.xmax ? 2 : 0) | (y3 < this.ymin ? 4 : y3 > this.ymax ? 8 : 0);
      }
      _simplify(P) {
        if (P && P.length > 4) {
          for (let i = 0; i < P.length; i += 2) {
            const j = (i + 2) % P.length, k = (i + 4) % P.length;
            if (P[i] === P[j] && P[j] === P[k] || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1]) {
              P.splice(j, 2), i -= 2;
            }
          }
          if (!P.length) P = null;
        }
        return P;
      }
    };
  }
});

// node_modules/d3-delaunay/src/delaunay.js
function pointX(p) {
  return p[0];
}
function pointY(p) {
  return p[1];
}
function collinear2(d) {
  const { triangles, coords } = d;
  for (let i = 0; i < triangles.length; i += 3) {
    const a3 = 2 * triangles[i], b = 2 * triangles[i + 1], c5 = 2 * triangles[i + 2], cross2 = (coords[c5] - coords[a3]) * (coords[b + 1] - coords[a3 + 1]) - (coords[b] - coords[a3]) * (coords[c5 + 1] - coords[a3 + 1]);
    if (cross2 > 1e-10) return false;
  }
  return true;
}
function jitter(x3, y3, r) {
  return [x3 + Math.sin(x3 + y3) * r, y3 + Math.cos(x3 - y3) * r];
}
function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array3 = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array3[i * 2] = fx.call(that, p, i, points);
    array3[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array3;
}
function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}
var tau3, pow2, Delaunay;
var init_delaunay = __esm({
  "node_modules/d3-delaunay/src/delaunay.js"() {
    init_delaunator();
    init_path();
    init_polygon();
    init_voronoi();
    tau3 = 2 * Math.PI;
    pow2 = Math.pow;
    Delaunay = class _Delaunay {
      static from(points, fx = pointX, fy = pointY, that) {
        return new _Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
      }
      constructor(points) {
        this._delaunator = new Delaunator(points);
        this.inedges = new Int32Array(points.length / 2);
        this._hullIndex = new Int32Array(points.length / 2);
        this.points = this._delaunator.coords;
        this._init();
      }
      update() {
        this._delaunator.update();
        this._init();
        return this;
      }
      _init() {
        const d = this._delaunator, points = this.points;
        if (d.hull && d.hull.length > 2 && collinear2(d)) {
          this.collinear = Int32Array.from({ length: points.length / 2 }, (_, i) => i).sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]);
          const e = this.collinear[0], f = this.collinear[this.collinear.length - 1], bounds = [points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1]], r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
          for (let i = 0, n = points.length / 2; i < n; ++i) {
            const p = jitter(points[2 * i], points[2 * i + 1], r);
            points[2 * i] = p[0];
            points[2 * i + 1] = p[1];
          }
          this._delaunator = new Delaunator(points);
        } else {
          delete this.collinear;
        }
        const halfedges = this.halfedges = this._delaunator.halfedges;
        const hull = this.hull = this._delaunator.hull;
        const triangles = this.triangles = this._delaunator.triangles;
        const inedges = this.inedges.fill(-1);
        const hullIndex = this._hullIndex.fill(-1);
        for (let e = 0, n = halfedges.length; e < n; ++e) {
          const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
          if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
        }
        for (let i = 0, n = hull.length; i < n; ++i) {
          hullIndex[hull[i]] = i;
        }
        if (hull.length <= 2 && hull.length > 0) {
          this.triangles = new Int32Array(3).fill(-1);
          this.halfedges = new Int32Array(3).fill(-1);
          this.triangles[0] = hull[0];
          inedges[hull[0]] = 1;
          if (hull.length === 2) {
            inedges[hull[1]] = 0;
            this.triangles[1] = hull[1];
            this.triangles[2] = hull[1];
          }
        }
      }
      voronoi(bounds) {
        return new Voronoi(this, bounds);
      }
      *neighbors(i) {
        const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear3 } = this;
        if (collinear3) {
          const l = collinear3.indexOf(i);
          if (l > 0) yield collinear3[l - 1];
          if (l < collinear3.length - 1) yield collinear3[l + 1];
          return;
        }
        const e0 = inedges[i];
        if (e0 === -1) return;
        let e = e0, p02 = -1;
        do {
          yield p02 = triangles[e];
          e = e % 3 === 2 ? e - 2 : e + 1;
          if (triangles[e] !== i) return;
          e = halfedges[e];
          if (e === -1) {
            const p = hull[(_hullIndex[i] + 1) % hull.length];
            if (p !== p02) yield p;
            return;
          }
        } while (e !== e0);
      }
      find(x3, y3, i = 0) {
        if ((x3 = +x3, x3 !== x3) || (y3 = +y3, y3 !== y3)) return -1;
        const i0 = i;
        let c5;
        while ((c5 = this._step(i, x3, y3)) >= 0 && c5 !== i && c5 !== i0) i = c5;
        return c5;
      }
      _step(i, x3, y3) {
        const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
        if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
        let c5 = i;
        let dc = pow2(x3 - points[i * 2], 2) + pow2(y3 - points[i * 2 + 1], 2);
        const e0 = inedges[i];
        let e = e0;
        do {
          let t = triangles[e];
          const dt = pow2(x3 - points[t * 2], 2) + pow2(y3 - points[t * 2 + 1], 2);
          if (dt < dc) dc = dt, c5 = t;
          e = e % 3 === 2 ? e - 2 : e + 1;
          if (triangles[e] !== i) break;
          e = halfedges[e];
          if (e === -1) {
            e = hull[(_hullIndex[i] + 1) % hull.length];
            if (e !== t) {
              if (pow2(x3 - points[e * 2], 2) + pow2(y3 - points[e * 2 + 1], 2) < dc) return e;
            }
            break;
          }
        } while (e !== e0);
        return c5;
      }
      render(context) {
        const buffer = context == null ? context = new Path2() : void 0;
        const { points, halfedges, triangles } = this;
        for (let i = 0, n = halfedges.length; i < n; ++i) {
          const j = halfedges[i];
          if (j < i) continue;
          const ti = triangles[i] * 2;
          const tj = triangles[j] * 2;
          context.moveTo(points[ti], points[ti + 1]);
          context.lineTo(points[tj], points[tj + 1]);
        }
        this.renderHull(context);
        return buffer && buffer.value();
      }
      renderPoints(context, r) {
        if (r === void 0 && (!context || typeof context.moveTo !== "function")) r = context, context = null;
        r = r == void 0 ? 2 : +r;
        const buffer = context == null ? context = new Path2() : void 0;
        const { points } = this;
        for (let i = 0, n = points.length; i < n; i += 2) {
          const x3 = points[i], y3 = points[i + 1];
          context.moveTo(x3 + r, y3);
          context.arc(x3, y3, r, 0, tau3);
        }
        return buffer && buffer.value();
      }
      renderHull(context) {
        const buffer = context == null ? context = new Path2() : void 0;
        const { hull, points } = this;
        const h = hull[0] * 2, n = hull.length;
        context.moveTo(points[h], points[h + 1]);
        for (let i = 1; i < n; ++i) {
          const h2 = 2 * hull[i];
          context.lineTo(points[h2], points[h2 + 1]);
        }
        context.closePath();
        return buffer && buffer.value();
      }
      hullPolygon() {
        const polygon = new Polygon();
        this.renderHull(polygon);
        return polygon.value();
      }
      renderTriangle(i, context) {
        const buffer = context == null ? context = new Path2() : void 0;
        const { points, triangles } = this;
        const t0 = triangles[i *= 3] * 2;
        const t1 = triangles[i + 1] * 2;
        const t2 = triangles[i + 2] * 2;
        context.moveTo(points[t0], points[t0 + 1]);
        context.lineTo(points[t1], points[t1 + 1]);
        context.lineTo(points[t2], points[t2 + 1]);
        context.closePath();
        return buffer && buffer.value();
      }
      *trianglePolygons() {
        const { triangles } = this;
        for (let i = 0, n = triangles.length / 3; i < n; ++i) {
          yield this.trianglePolygon(i);
        }
      }
      trianglePolygon(i) {
        const polygon = new Polygon();
        this.renderTriangle(i, polygon);
        return polygon.value();
      }
    };
  }
});

// node_modules/d3-delaunay/src/index.js
var init_src20 = __esm({
  "node_modules/d3-delaunay/src/index.js"() {
    init_delaunay();
    init_voronoi();
  }
});

// node_modules/d3-dsv/src/dsv.js
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f) {
  var object2 = objectConverter(columns);
  return function(row, i) {
    return f(object2(row), i, columns);
  };
}
function inferColumns(rows) {
  var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}
function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}
function formatDate(date) {
  var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds2 = date.getUTCSeconds(), milliseconds2 = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}
function dsv_default(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f) {
    var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;
    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;
      var i, j = I, c5;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE) ;
        if ((i = I) >= N) eof = true;
        else if ((c5 = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c5 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, '"');
      }
      while (I < N) {
        if ((c5 = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c5 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        } else if (c5 !== DELIMITER) continue;
        return text.slice(j, i);
      }
      return eof = true, text.slice(j, N);
    }
    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}
var EOL, EOF, QUOTE, NEWLINE, RETURN;
var init_dsv = __esm({
  "node_modules/d3-dsv/src/dsv.js"() {
    EOL = {};
    EOF = {};
    QUOTE = 34;
    NEWLINE = 10;
    RETURN = 13;
  }
});

// node_modules/d3-dsv/src/csv.js
var csv, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue;
var init_csv = __esm({
  "node_modules/d3-dsv/src/csv.js"() {
    init_dsv();
    csv = dsv_default(",");
    csvParse = csv.parse;
    csvParseRows = csv.parseRows;
    csvFormat = csv.format;
    csvFormatBody = csv.formatBody;
    csvFormatRows = csv.formatRows;
    csvFormatRow = csv.formatRow;
    csvFormatValue = csv.formatValue;
  }
});

// node_modules/d3-dsv/src/tsv.js
var tsv, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue;
var init_tsv = __esm({
  "node_modules/d3-dsv/src/tsv.js"() {
    init_dsv();
    tsv = dsv_default("	");
    tsvParse = tsv.parse;
    tsvParseRows = tsv.parseRows;
    tsvFormat = tsv.format;
    tsvFormatBody = tsv.formatBody;
    tsvFormatRows = tsv.formatRows;
    tsvFormatRow = tsv.formatRow;
    tsvFormatValue = tsv.formatValue;
  }
});

// node_modules/d3-dsv/src/autoType.js
function autoType(object2) {
  for (var key in object2) {
    var value = object2[key].trim(), number3, m3;
    if (!value) value = null;
    else if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "NaN") value = NaN;
    else if (!isNaN(number3 = +value)) value = number3;
    else if (m3 = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m3[4] && !m3[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    } else continue;
    object2[key] = value;
  }
  return object2;
}
var fixtz;
var init_autoType = __esm({
  "node_modules/d3-dsv/src/autoType.js"() {
    fixtz = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();
  }
});

// node_modules/d3-dsv/src/index.js
var init_src21 = __esm({
  "node_modules/d3-dsv/src/index.js"() {
    init_dsv();
    init_csv();
    init_tsv();
    init_autoType();
  }
});

// node_modules/d3-fetch/src/blob.js
function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}
function blob_default(input, init2) {
  return fetch(input, init2).then(responseBlob);
}
var init_blob = __esm({
  "node_modules/d3-fetch/src/blob.js"() {
  }
});

// node_modules/d3-fetch/src/buffer.js
function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}
function buffer_default(input, init2) {
  return fetch(input, init2).then(responseArrayBuffer);
}
var init_buffer = __esm({
  "node_modules/d3-fetch/src/buffer.js"() {
  }
});

// node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default3(input, init2) {
  return fetch(input, init2).then(responseText);
}
var init_text3 = __esm({
  "node_modules/d3-fetch/src/text.js"() {
  }
});

// node_modules/d3-fetch/src/dsv.js
function dsvParse(parse) {
  return function(input, init2, row) {
    if (arguments.length === 2 && typeof init2 === "function") row = init2, init2 = void 0;
    return text_default3(input, init2).then(function(response) {
      return parse(response, row);
    });
  };
}
function dsv(delimiter, input, init2, row) {
  if (arguments.length === 3 && typeof init2 === "function") row = init2, init2 = void 0;
  var format2 = dsv_default(delimiter);
  return text_default3(input, init2).then(function(response) {
    return format2.parse(response, row);
  });
}
var csv2, tsv2;
var init_dsv2 = __esm({
  "node_modules/d3-fetch/src/dsv.js"() {
    init_src21();
    init_text3();
    csv2 = dsvParse(csvParse);
    tsv2 = dsvParse(tsvParse);
  }
});

// node_modules/d3-fetch/src/image.js
function image_default(input, init2) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    for (var key in init2) image[key] = init2[key];
    image.onerror = reject;
    image.onload = function() {
      resolve(image);
    };
    image.src = input;
  });
}
var init_image = __esm({
  "node_modules/d3-fetch/src/image.js"() {
  }
});

// node_modules/d3-fetch/src/json.js
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205) return;
  return response.json();
}
function json_default(input, init2) {
  return fetch(input, init2).then(responseJson);
}
var init_json = __esm({
  "node_modules/d3-fetch/src/json.js"() {
  }
});

// node_modules/d3-fetch/src/xml.js
function parser(type2) {
  return (input, init2) => text_default3(input, init2).then((text) => new DOMParser().parseFromString(text, type2));
}
var xml_default, html, svg;
var init_xml = __esm({
  "node_modules/d3-fetch/src/xml.js"() {
    init_text3();
    xml_default = parser("application/xml");
    html = parser("text/html");
    svg = parser("image/svg+xml");
  }
});

// node_modules/d3-fetch/src/index.js
var init_src22 = __esm({
  "node_modules/d3-fetch/src/index.js"() {
    init_blob();
    init_buffer();
    init_dsv2();
    init_image();
    init_json();
    init_text3();
    init_xml();
  }
});

// node_modules/d3-force/src/center.js
function center_default(x3, y3) {
  var nodes, strength = 1;
  if (x3 == null) x3 = 0;
  if (y3 == null) y3 = 0;
  function force() {
    var i, n = nodes.length, node, sx = 0, sy = 0;
    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }
    for (sx = (sx / n - x3) * strength, sy = (sy / n - y3) * strength, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }
  force.initialize = function(_) {
    nodes = _;
  };
  force.x = function(_) {
    return arguments.length ? (x3 = +_, force) : x3;
  };
  force.y = function(_) {
    return arguments.length ? (y3 = +_, force) : y3;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  return force;
}
var init_center = __esm({
  "node_modules/d3-force/src/center.js"() {
  }
});

// node_modules/d3-quadtree/src/add.js
function add_default(d) {
  const x3 = +this._x.call(null, d), y3 = +this._y.call(null, d);
  return add(this.cover(x3, y3), x3, y3, d);
}
function add(tree, x3, y3, d) {
  if (isNaN(x3) || isNaN(y3)) return tree;
  var parent, node = tree._root, leaf = { data: d }, x06 = tree._x0, y06 = tree._y0, x12 = tree._x1, y12 = tree._y1, xm, ym, xp, yp, right2, bottom2, i, j;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right2 = x3 >= (xm = (x06 + x12) / 2)) x06 = xm;
    else x12 = xm;
    if (bottom2 = y3 >= (ym = (y06 + y12) / 2)) y06 = ym;
    else y12 = ym;
    if (parent = node, !(node = node[i = bottom2 << 1 | right2])) return parent[i] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x3 === xp && y3 === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right2 = x3 >= (xm = (x06 + x12) / 2)) x06 = xm;
    else x12 = xm;
    if (bottom2 = y3 >= (ym = (y06 + y12) / 2)) y06 = ym;
    else y12 = ym;
  } while ((i = bottom2 << 1 | right2) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
  var d, i, n = data.length, x3, y3, xz = new Array(n), yz = new Array(n), x06 = Infinity, y06 = Infinity, x12 = -Infinity, y12 = -Infinity;
  for (i = 0; i < n; ++i) {
    if (isNaN(x3 = +this._x.call(null, d = data[i])) || isNaN(y3 = +this._y.call(null, d))) continue;
    xz[i] = x3;
    yz[i] = y3;
    if (x3 < x06) x06 = x3;
    if (x3 > x12) x12 = x3;
    if (y3 < y06) y06 = y3;
    if (y3 > y12) y12 = y3;
  }
  if (x06 > x12 || y06 > y12) return this;
  this.cover(x06, y06).cover(x12, y12);
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }
  return this;
}
var init_add = __esm({
  "node_modules/d3-quadtree/src/add.js"() {
  }
});

// node_modules/d3-quadtree/src/cover.js
function cover_default(x3, y3) {
  if (isNaN(x3 = +x3) || isNaN(y3 = +y3)) return this;
  var x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1;
  if (isNaN(x06)) {
    x12 = (x06 = Math.floor(x3)) + 1;
    y12 = (y06 = Math.floor(y3)) + 1;
  } else {
    var z = x12 - x06 || 1, node = this._root, parent, i;
    while (x06 > x3 || x3 >= x12 || y06 > y3 || y3 >= y12) {
      i = (y3 < y06) << 1 | x3 < x06;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0:
          x12 = x06 + z, y12 = y06 + z;
          break;
        case 1:
          x06 = x12 - z, y12 = y06 + z;
          break;
        case 2:
          x12 = x06 + z, y06 = y12 - z;
          break;
        case 3:
          x06 = x12 - z, y06 = y12 - z;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x06;
  this._y0 = y06;
  this._x1 = x12;
  this._y1 = y12;
  return this;
}
var init_cover = __esm({
  "node_modules/d3-quadtree/src/cover.js"() {
  }
});

// node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}
var init_data2 = __esm({
  "node_modules/d3-quadtree/src/data.js"() {
  }
});

// node_modules/d3-quadtree/src/extent.js
function extent_default(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
var init_extent = __esm({
  "node_modules/d3-quadtree/src/extent.js"() {
  }
});

// node_modules/d3-quadtree/src/quad.js
function quad_default(node, x06, y06, x12, y12) {
  this.node = node;
  this.x0 = x06;
  this.y0 = y06;
  this.x1 = x12;
  this.y1 = y12;
}
var init_quad2 = __esm({
  "node_modules/d3-quadtree/src/quad.js"() {
  }
});

// node_modules/d3-quadtree/src/find.js
function find_default(x3, y3, radius) {
  var data, x06 = this._x0, y06 = this._y0, x12, y12, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q, i;
  if (node) quads.push(new quad_default(node, x06, y06, x32, y32));
  if (radius == null) radius = Infinity;
  else {
    x06 = x3 - radius, y06 = y3 - radius;
    x32 = x3 + radius, y32 = y3 + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    if (!(node = q.node) || (x12 = q.x0) > x32 || (y12 = q.y0) > y32 || (x22 = q.x1) < x06 || (y22 = q.y1) < y06) continue;
    if (node.length) {
      var xm = (x12 + x22) / 2, ym = (y12 + y22) / 2;
      quads.push(
        new quad_default(node[3], xm, ym, x22, y22),
        new quad_default(node[2], x12, ym, xm, y22),
        new quad_default(node[1], xm, y12, x22, ym),
        new quad_default(node[0], x12, y12, xm, ym)
      );
      if (i = (y3 >= ym) << 1 | x3 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } else {
      var dx = x3 - +this._x.call(null, node.data), dy = y3 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x06 = x3 - d, y06 = y3 - d;
        x32 = x3 + d, y32 = y3 + d;
        data = node.data;
      }
    }
  }
  return data;
}
var init_find = __esm({
  "node_modules/d3-quadtree/src/find.js"() {
    init_quad2();
  }
});

// node_modules/d3-quadtree/src/remove.js
function remove_default3(d) {
  if (isNaN(x3 = +this._x.call(null, d)) || isNaN(y3 = +this._y.call(null, d))) return this;
  var parent, node = this._root, retainer, previous, next, x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1, x3, y3, xm, ym, right2, bottom2, i, j;
  if (!node) return this;
  if (node.length) while (true) {
    if (right2 = x3 >= (xm = (x06 + x12) / 2)) x06 = xm;
    else x12 = xm;
    if (bottom2 = y3 >= (ym = (y06 + y12) / 2)) y06 = ym;
    else y12 = ym;
    if (!(parent = node, node = node[i = bottom2 << 1 | right2])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i] = next : delete parent[i];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}
var init_remove3 = __esm({
  "node_modules/d3-quadtree/src/remove.js"() {
  }
});

// node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}
var init_root = __esm({
  "node_modules/d3-quadtree/src/root.js"() {
  }
});

// node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size;
    while (node = node.next);
  });
  return size;
}
var init_size2 = __esm({
  "node_modules/d3-quadtree/src/size.js"() {
  }
});

// node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q, node = this._root, child, x06, y06, x12, y12;
  if (node) quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x06 = q.x0, y06 = q.y0, x12 = q.x1, y12 = q.y1) && node.length) {
      var xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x12, y12));
      if (child = node[2]) quads.push(new quad_default(child, x06, ym, xm, y12));
      if (child = node[1]) quads.push(new quad_default(child, xm, y06, x12, ym));
      if (child = node[0]) quads.push(new quad_default(child, x06, y06, xm, ym));
    }
  }
  return this;
}
var init_visit = __esm({
  "node_modules/d3-quadtree/src/visit.js"() {
    init_quad2();
  }
});

// node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x06 = q.x0, y06 = q.y0, x12 = q.x1, y12 = q.y1, xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
      if (child = node[0]) quads.push(new quad_default(child, x06, y06, xm, ym));
      if (child = node[1]) quads.push(new quad_default(child, xm, y06, x12, ym));
      if (child = node[2]) quads.push(new quad_default(child, x06, ym, xm, y12));
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x12, y12));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}
var init_visitAfter = __esm({
  "node_modules/d3-quadtree/src/visitAfter.js"() {
    init_quad2();
  }
});

// node_modules/d3-quadtree/src/x.js
function defaultX2(d) {
  return d[0];
}
function x_default(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}
var init_x = __esm({
  "node_modules/d3-quadtree/src/x.js"() {
  }
});

// node_modules/d3-quadtree/src/y.js
function defaultY2(d) {
  return d[1];
}
function y_default(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}
var init_y = __esm({
  "node_modules/d3-quadtree/src/y.js"() {
  }
});

// node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x3, y3) {
  var tree = new Quadtree(x3 == null ? defaultX2 : x3, y3 == null ? defaultY2 : y3, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x3, y3, x06, y06, x12, y12) {
  this._x = x3;
  this._y = y3;
  this._x0 = x06;
  this._y0 = y06;
  this._x1 = x12;
  this._y1 = y12;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy = { data: leaf.data }, next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}
var treeProto;
var init_quadtree = __esm({
  "node_modules/d3-quadtree/src/quadtree.js"() {
    init_add();
    init_cover();
    init_data2();
    init_extent();
    init_find();
    init_remove3();
    init_root();
    init_size2();
    init_visit();
    init_visitAfter();
    init_x();
    init_y();
    treeProto = quadtree.prototype = Quadtree.prototype;
    treeProto.copy = function() {
      var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
      if (!node) return copy;
      if (!node.length) return copy._root = leaf_copy(node), copy;
      nodes = [{ source: node, target: copy._root = new Array(4) }];
      while (node = nodes.pop()) {
        for (var i = 0; i < 4; ++i) {
          if (child = node.source[i]) {
            if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });
            else node.target[i] = leaf_copy(child);
          }
        }
      }
      return copy;
    };
    treeProto.add = add_default;
    treeProto.addAll = addAll;
    treeProto.cover = cover_default;
    treeProto.data = data_default2;
    treeProto.extent = extent_default;
    treeProto.find = find_default;
    treeProto.remove = remove_default3;
    treeProto.removeAll = removeAll;
    treeProto.root = root_default;
    treeProto.size = size_default2;
    treeProto.visit = visit_default;
    treeProto.visitAfter = visitAfter_default;
    treeProto.x = x_default;
    treeProto.y = y_default;
  }
});

// node_modules/d3-quadtree/src/index.js
var init_src23 = __esm({
  "node_modules/d3-quadtree/src/index.js"() {
    init_quadtree();
  }
});

// node_modules/d3-force/src/constant.js
function constant_default6(x3) {
  return function() {
    return x3;
  };
}
var init_constant6 = __esm({
  "node_modules/d3-force/src/constant.js"() {
  }
});

// node_modules/d3-force/src/jiggle.js
function jiggle_default(random) {
  return (random() - 0.5) * 1e-6;
}
var init_jiggle = __esm({
  "node_modules/d3-force/src/jiggle.js"() {
  }
});

// node_modules/d3-force/src/collide.js
function x(d) {
  return d.x + d.vx;
}
function y(d) {
  return d.y + d.vy;
}
function collide_default(radius) {
  var nodes, radii, random, strength = 1, iterations2 = 1;
  if (typeof radius !== "function") radius = constant_default6(radius == null ? 1 : +radius);
  function force() {
    var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
    for (var k = 0; k < iterations2; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x06, y06, x12, y12) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x3 = xi - data.x - data.vx, y3 = yi - data.y - data.vy, l = x3 * x3 + y3 * y3;
          if (l < r * r) {
            if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
            if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x3 *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y3 *= l) * r;
            data.vx -= x3 * (r = 1 - r);
            data.vy -= y3 * r;
          }
        }
        return;
      }
      return x06 > xi + r || x12 < xi - r || y06 > yi + r || y12 < yi - r;
    }
  }
  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations2 = +_, force) : iterations2;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : radius;
  };
  return force;
}
var init_collide = __esm({
  "node_modules/d3-force/src/collide.js"() {
    init_src23();
    init_constant6();
    init_jiggle();
  }
});

// node_modules/d3-force/src/link.js
function index2(d) {
  return d.index;
}
function find2(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
function link_default(links) {
  var id2 = index2, strength = defaultStrength, strengths, distance = constant_default6(30), distances, nodes, count3, bias, random, iterations2 = 1;
  if (links == null) links = [];
  function defaultStrength(link3) {
    return 1 / Math.min(count3[link3.source.index], count3[link3.target.index]);
  }
  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations2; ++k) {
      for (var i = 0, link3, source, target, x3, y3, l, b; i < n; ++i) {
        link3 = links[i], source = link3.source, target = link3.target;
        x3 = target.x + target.vx - source.x - source.vx || jiggle_default(random);
        y3 = target.y + target.vy - source.y - source.vy || jiggle_default(random);
        l = Math.sqrt(x3 * x3 + y3 * y3);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x3 *= l, y3 *= l;
        target.vx -= x3 * (b = bias[i]);
        target.vy -= y3 * b;
        source.vx += x3 * (b = 1 - b);
        source.vy += y3 * b;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, m3 = links.length, nodeById = new Map(nodes.map((d, i2) => [id2(d, i2, nodes), d])), link3;
    for (i = 0, count3 = new Array(n); i < m3; ++i) {
      link3 = links[i], link3.index = i;
      if (typeof link3.source !== "object") link3.source = find2(nodeById, link3.source);
      if (typeof link3.target !== "object") link3.target = find2(nodeById, link3.target);
      count3[link3.source.index] = (count3[link3.source.index] || 0) + 1;
      count3[link3.target.index] = (count3[link3.target.index] || 0) + 1;
    }
    for (i = 0, bias = new Array(m3); i < m3; ++i) {
      link3 = links[i], bias[i] = count3[link3.source.index] / (count3[link3.source.index] + count3[link3.target.index]);
    }
    strengths = new Array(m3), initializeStrength();
    distances = new Array(m3), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };
  force.id = function(_) {
    return arguments.length ? (id2 = _, force) : id2;
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations2 = +_, force) : iterations2;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default6(+_), initializeStrength(), force) : strength;
  };
  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant_default6(+_), initializeDistance(), force) : distance;
  };
  return force;
}
var init_link = __esm({
  "node_modules/d3-force/src/link.js"() {
    init_constant6();
    init_jiggle();
  }
});

// node_modules/d3-force/src/lcg.js
function lcg_default() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}
var a, c, m;
var init_lcg = __esm({
  "node_modules/d3-force/src/lcg.js"() {
    a = 1664525;
    c = 1013904223;
    m = 4294967296;
  }
});

// node_modules/d3-force/src/simulation.js
function x2(d) {
  return d.x;
}
function y2(d) {
  return d.y;
}
function simulation_default(nodes) {
  var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch_default("tick", "end"), random = lcg_default();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations2) {
    var i, n = nodes.length, node;
    if (iterations2 === void 0) iterations2 = 1;
    for (var k = 0; k < iterations2; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle2 = i * initialAngle;
        node.x = radius * Math.cos(angle2);
        node.y = radius * Math.sin(angle2);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },
    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },
    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },
    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },
    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },
    force: function(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function(x3, y3, radius) {
      var i = 0, n = nodes.length, dx, dy, d2, node, closest;
      if (radius == null) radius = Infinity;
      else radius *= radius;
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x3 - node.x;
        dy = y3 - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }
      return closest;
    },
    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}
var initialRadius, initialAngle;
var init_simulation = __esm({
  "node_modules/d3-force/src/simulation.js"() {
    init_src11();
    init_src14();
    init_lcg();
    initialRadius = 10;
    initialAngle = Math.PI * (3 - Math.sqrt(5));
  }
});

// node_modules/d3-force/src/manyBody.js
function manyBody_default() {
  var nodes, node, random, alpha, strength = constant_default6(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, x2, y2).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node2;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node2 = nodes[i], strengths[node2.index] = +strength(node2, i, nodes);
  }
  function accumulate(quad) {
    var strength2 = 0, q, c5, weight = 0, x3, y3, i;
    if (quad.length) {
      for (x3 = y3 = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c5 = Math.abs(q.value))) {
          strength2 += q.value, weight += c5, x3 += c5 * q.x, y3 += c5 * q.y;
        }
      }
      quad.x = x3 / weight;
      quad.y = y3 / weight;
    } else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do
        strength2 += strengths[q.data.index];
      while (q = q.next);
    }
    quad.value = strength2;
  }
  function apply(quad, x12, _, x22) {
    if (!quad.value) return true;
    var x3 = quad.x - node.x, y3 = quad.y - node.y, w = x22 - x12, l = x3 * x3 + y3 * y3;
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
        if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x3 * quad.value * alpha / l;
        node.vy += y3 * quad.value * alpha / l;
      }
      return true;
    } else if (quad.length || l >= distanceMax2) return;
    if (quad.data !== node || quad.next) {
      if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
      if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }
    do
      if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x3 * w;
        node.vy += y3 * w;
      }
    while (quad = quad.next);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : strength;
  };
  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };
  return force;
}
var init_manyBody = __esm({
  "node_modules/d3-force/src/manyBody.js"() {
    init_src23();
    init_constant6();
    init_jiggle();
    init_simulation();
  }
});

// node_modules/d3-force/src/radial.js
function radial_default(radius, x3, y3) {
  var nodes, strength = constant_default6(0.1), strengths, radiuses;
  if (typeof radius !== "function") radius = constant_default6(+radius);
  if (x3 == null) x3 = 0;
  if (y3 == null) y3 = 0;
  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i], dx = node.x - x3 || 1e-6, dy = node.y - y3 || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _, initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : strength;
  };
  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : radius;
  };
  force.x = function(_) {
    return arguments.length ? (x3 = +_, force) : x3;
  };
  force.y = function(_) {
    return arguments.length ? (y3 = +_, force) : y3;
  };
  return force;
}
var init_radial = __esm({
  "node_modules/d3-force/src/radial.js"() {
    init_constant6();
  }
});

// node_modules/d3-force/src/x.js
function x_default2(x3) {
  var strength = constant_default6(0.1), nodes, strengths, xz;
  if (typeof x3 !== "function") x3 = constant_default6(x3 == null ? 0 : +x3);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x3(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : strength;
  };
  force.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : x3;
  };
  return force;
}
var init_x2 = __esm({
  "node_modules/d3-force/src/x.js"() {
    init_constant6();
  }
});

// node_modules/d3-force/src/y.js
function y_default2(y3) {
  var strength = constant_default6(0.1), nodes, strengths, yz;
  if (typeof y3 !== "function") y3 = constant_default6(y3 == null ? 0 : +y3);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y3(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : strength;
  };
  force.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default6(+_), initialize(), force) : y3;
  };
  return force;
}
var init_y2 = __esm({
  "node_modules/d3-force/src/y.js"() {
    init_constant6();
  }
});

// node_modules/d3-force/src/index.js
var init_src24 = __esm({
  "node_modules/d3-force/src/index.js"() {
    init_center();
    init_collide();
    init_link();
    init_manyBody();
    init_radial();
    init_simulation();
    init_x2();
    init_y2();
  }
});

// node_modules/d3-geo/src/math.js
function acos(x3) {
  return x3 > 1 ? 0 : x3 < -1 ? pi3 : Math.acos(x3);
}
function asin(x3) {
  return x3 > 1 ? halfPi3 : x3 < -1 ? -halfPi3 : Math.asin(x3);
}
function haversin(x3) {
  return (x3 = sin2(x3 / 2)) * x3;
}
var epsilon5, epsilon22, pi3, halfPi3, quarterPi, tau4, degrees, radians, abs3, atan, atan2, cos2, ceil, exp, hypot, log2, pow3, sin2, sign, sqrt2, tan;
var init_math3 = __esm({
  "node_modules/d3-geo/src/math.js"() {
    epsilon5 = 1e-6;
    epsilon22 = 1e-12;
    pi3 = Math.PI;
    halfPi3 = pi3 / 2;
    quarterPi = pi3 / 4;
    tau4 = pi3 * 2;
    degrees = 180 / pi3;
    radians = pi3 / 180;
    abs3 = Math.abs;
    atan = Math.atan;
    atan2 = Math.atan2;
    cos2 = Math.cos;
    ceil = Math.ceil;
    exp = Math.exp;
    hypot = Math.hypot;
    log2 = Math.log;
    pow3 = Math.pow;
    sin2 = Math.sin;
    sign = Math.sign || function(x3) {
      return x3 > 0 ? 1 : x3 < 0 ? -1 : 0;
    };
    sqrt2 = Math.sqrt;
    tan = Math.tan;
  }
});

// node_modules/d3-geo/src/noop.js
function noop2() {
}
var init_noop2 = __esm({
  "node_modules/d3-geo/src/noop.js"() {
  }
});

// node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
function streamLine(coordinates2, stream, closed) {
  var i = -1, n = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i = -1, n = coordinates2.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates2[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}
var streamObjectType, streamGeometryType;
var init_stream = __esm({
  "node_modules/d3-geo/src/stream.js"() {
    streamObjectType = {
      Feature: function(object2, stream) {
        streamGeometry(object2.geometry, stream);
      },
      FeatureCollection: function(object2, stream) {
        var features = object2.features, i = -1, n = features.length;
        while (++i < n) streamGeometry(features[i].geometry, stream);
      }
    };
    streamGeometryType = {
      Sphere: function(object2, stream) {
        stream.sphere();
      },
      Point: function(object2, stream) {
        object2 = object2.coordinates;
        stream.point(object2[0], object2[1], object2[2]);
      },
      MultiPoint: function(object2, stream) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) object2 = coordinates2[i], stream.point(object2[0], object2[1], object2[2]);
      },
      LineString: function(object2, stream) {
        streamLine(object2.coordinates, stream, 0);
      },
      MultiLineString: function(object2, stream) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) streamLine(coordinates2[i], stream, 0);
      },
      Polygon: function(object2, stream) {
        streamPolygon(object2.coordinates, stream);
      },
      MultiPolygon: function(object2, stream) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) streamPolygon(coordinates2[i], stream);
      },
      GeometryCollection: function(object2, stream) {
        var geometries = object2.geometries, i = -1, n = geometries.length;
        while (++i < n) streamGeometry(geometries[i], stream);
      }
    };
  }
});

// node_modules/d3-geo/src/area.js
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaRingEnd() {
  areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi2) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi2;
  lambda *= radians, phi2 *= radians;
  lambda0 = lambda, cosPhi0 = cos2(phi2 = phi2 / 2 + quarterPi), sinPhi0 = sin2(phi2);
}
function areaPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  phi2 = phi2 / 2 + quarterPi;
  var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos2(phi2), sinPhi = sin2(phi2), k = sinPhi0 * sinPhi, u4 = cosPhi0 * cosPhi + k * cos2(adLambda), v2 = k * sdLambda * sin2(adLambda);
  areaRingSum.add(atan2(v2, u4));
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
function area_default3(object2) {
  areaSum = new Adder();
  stream_default(object2, areaStream);
  return areaSum * 2;
}
var areaRingSum, areaSum, lambda00, phi00, lambda0, cosPhi0, sinPhi0, areaStream;
var init_area2 = __esm({
  "node_modules/d3-geo/src/area.js"() {
    init_src();
    init_math3();
    init_noop2();
    init_stream();
    areaRingSum = new Adder();
    areaSum = new Adder();
    areaStream = {
      point: noop2,
      lineStart: noop2,
      lineEnd: noop2,
      polygonStart: function() {
        areaRingSum = new Adder();
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
      },
      polygonEnd: function() {
        var areaRing = +areaRingSum;
        areaSum.add(areaRing < 0 ? tau4 + areaRing : areaRing);
        this.lineStart = this.lineEnd = this.point = noop2;
      },
      sphere: function() {
        areaSum.add(tau4);
      }
    };
  }
});

// node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos2(phi2);
  return [cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2)];
}
function cartesianDot(a3, b) {
  return a3[0] * b[0] + a3[1] * b[1] + a3[2] * b[2];
}
function cartesianCross(a3, b) {
  return [a3[1] * b[2] - a3[2] * b[1], a3[2] * b[0] - a3[0] * b[2], a3[0] * b[1] - a3[1] * b[0]];
}
function cartesianAddInPlace(a3, b) {
  a3[0] += b[0], a3[1] += b[1], a3[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt2(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}
var init_cartesian = __esm({
  "node_modules/d3-geo/src/cartesian.js"() {
    init_math3();
  }
});

// node_modules/d3-geo/src/bounds.js
function boundsPoint(lambda, phi2) {
  ranges.push(range3 = [lambda02 = lambda, lambda1 = lambda]);
  if (phi2 < phi0) phi0 = phi2;
  if (phi2 > phi1) phi1 = phi2;
}
function linePoint(lambda, phi2) {
  var p = cartesian([lambda * radians, phi2 * radians]);
  if (p0) {
    var normal = cartesianCross(p0, p), equatorial = [normal[1], -normal[0], 0], inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2, sign2 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees * sign2, phii, antimeridian = abs3(delta) > 180;
    if (antimeridian ^ (sign2 * lambda2 < lambdai && lambdai < sign2 * lambda)) {
      phii = inflection[1] * degrees;
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign2 * lambda2 < lambdai && lambdai < sign2 * lambda)) {
      phii = -inflection[1] * degrees;
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi2 < phi0) phi0 = phi2;
      if (phi2 > phi1) phi1 = phi2;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
      }
    } else {
      if (lambda1 >= lambda02) {
        if (lambda < lambda02) lambda02 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
        }
      }
    }
  } else {
    ranges.push(range3 = [lambda02 = lambda, lambda1 = lambda]);
  }
  if (phi2 < phi0) phi0 = phi2;
  if (phi2 > phi1) phi1 = phi2;
  p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
  boundsStream.point = linePoint;
}
function boundsLineEnd() {
  range3[0] = lambda02, range3[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}
function boundsRingPoint(lambda, phi2) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs3(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda002 = lambda, phi002 = phi2;
  }
  areaStream.point(lambda, phi2);
  linePoint(lambda, phi2);
}
function boundsRingStart() {
  areaStream.lineStart();
}
function boundsRingEnd() {
  boundsRingPoint(lambda002, phi002);
  areaStream.lineEnd();
  if (abs3(deltaSum) > epsilon5) lambda02 = -(lambda1 = 180);
  range3[0] = lambda02, range3[1] = lambda1;
  p0 = null;
}
function angle(lambda04, lambda12) {
  return (lambda12 -= lambda04) < 0 ? lambda12 + 360 : lambda12;
}
function rangeCompare(a3, b) {
  return a3[0] - b[0];
}
function rangeContains(range4, x3) {
  return range4[0] <= range4[1] ? range4[0] <= x3 && x3 <= range4[1] : x3 < range4[0] || range4[1] < x3;
}
function bounds_default(feature) {
  var i, n, a3, b, merged, deltaMax, delta;
  phi1 = lambda1 = -(lambda02 = phi0 = Infinity);
  ranges = [];
  stream_default(feature, boundsStream);
  if (n = ranges.length) {
    ranges.sort(rangeCompare);
    for (i = 1, a3 = ranges[0], merged = [a3]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a3, b[0]) || rangeContains(a3, b[1])) {
        if (angle(a3[0], b[1]) > angle(a3[0], a3[1])) a3[1] = b[1];
        if (angle(b[0], a3[1]) > angle(a3[0], a3[1])) a3[0] = b[0];
      } else {
        merged.push(a3 = b);
      }
    }
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a3 = merged[n]; i <= n; a3 = b, ++i) {
      b = merged[i];
      if ((delta = angle(a3[1], b[0])) > deltaMax) deltaMax = delta, lambda02 = b[0], lambda1 = a3[1];
    }
  }
  ranges = range3 = null;
  return lambda02 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda02, phi0], [lambda1, phi1]];
}
var lambda02, phi0, lambda1, phi1, lambda2, lambda002, phi002, p0, deltaSum, ranges, range3, boundsStream;
var init_bounds = __esm({
  "node_modules/d3-geo/src/bounds.js"() {
    init_src();
    init_area2();
    init_cartesian();
    init_math3();
    init_stream();
    boundsStream = {
      point: boundsPoint,
      lineStart: boundsLineStart,
      lineEnd: boundsLineEnd,
      polygonStart: function() {
        boundsStream.point = boundsRingPoint;
        boundsStream.lineStart = boundsRingStart;
        boundsStream.lineEnd = boundsRingEnd;
        deltaSum = new Adder();
        areaStream.polygonStart();
      },
      polygonEnd: function() {
        areaStream.polygonEnd();
        boundsStream.point = boundsPoint;
        boundsStream.lineStart = boundsLineStart;
        boundsStream.lineEnd = boundsLineEnd;
        if (areaRingSum < 0) lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
        else if (deltaSum > epsilon5) phi1 = 90;
        else if (deltaSum < -epsilon5) phi0 = -90;
        range3[0] = lambda02, range3[1] = lambda1;
      },
      sphere: function() {
        lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      }
    };
  }
});

// node_modules/d3-geo/src/centroid.js
function centroidPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2);
  centroidPointCartesian(cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2));
}
function centroidPointCartesian(x3, y3, z) {
  ++W0;
  X0 += (x3 - X0) / W0;
  Y0 += (y3 - Y0) / W0;
  Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2);
  x0 = cosPhi * cos2(lambda);
  y0 = cosPhi * sin2(lambda);
  z0 = sin2(phi2);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2), x3 = cosPhi * cos2(lambda), y3 = cosPhi * sin2(lambda), z = sin2(phi2), w = atan2(sqrt2((w = y0 * z - z0 * y3) * w + (w = z0 * x3 - x0 * z) * w + (w = x0 * y3 - y0 * x3) * w), x0 * x3 + y0 * y3 + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x3));
  Y1 += w * (y0 + (y0 = y3));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
  centroidRingPoint(lambda003, phi003);
  centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi2) {
  lambda003 = lambda, phi003 = phi2;
  lambda *= radians, phi2 *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos2(phi2);
  x0 = cosPhi * cos2(lambda);
  y0 = cosPhi * sin2(lambda);
  z0 = sin2(phi2);
  centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2), x3 = cosPhi * cos2(lambda), y3 = cosPhi * sin2(lambda), z = sin2(phi2), cx = y0 * z - z0 * y3, cy = z0 * x3 - x0 * z, cz = x0 * y3 - y0 * x3, m3 = hypot(cx, cy, cz), w = asin(m3), v2 = m3 && -w / m3;
  X2.add(v2 * cx);
  Y2.add(v2 * cy);
  Z2.add(v2 * cz);
  W1 += w;
  X1 += w * (x0 + (x0 = x3));
  Y1 += w * (y0 + (y0 = y3));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroid_default(object2) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
  X2 = new Adder();
  Y2 = new Adder();
  Z2 = new Adder();
  stream_default(object2, centroidStream);
  var x3 = +X2, y3 = +Y2, z = +Z2, m3 = hypot(x3, y3, z);
  if (m3 < epsilon22) {
    x3 = X1, y3 = Y1, z = Z1;
    if (W1 < epsilon5) x3 = X0, y3 = Y0, z = Z0;
    m3 = hypot(x3, y3, z);
    if (m3 < epsilon22) return [NaN, NaN];
  }
  return [atan2(y3, x3) * degrees, asin(z / m3) * degrees];
}
var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda003, phi003, x0, y0, z0, centroidStream;
var init_centroid = __esm({
  "node_modules/d3-geo/src/centroid.js"() {
    init_src();
    init_math3();
    init_noop2();
    init_stream();
    centroidStream = {
      sphere: noop2,
      point: centroidPoint,
      lineStart: centroidLineStart,
      lineEnd: centroidLineEnd,
      polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
      },
      polygonEnd: function() {
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
      }
    };
  }
});

// node_modules/d3-geo/src/constant.js
function constant_default7(x3) {
  return function() {
    return x3;
  };
}
var init_constant7 = __esm({
  "node_modules/d3-geo/src/constant.js"() {
  }
});

// node_modules/d3-geo/src/compose.js
function compose_default(a3, b) {
  function compose(x3, y3) {
    return x3 = a3(x3, y3), b(x3[0], x3[1]);
  }
  if (a3.invert && b.invert) compose.invert = function(x3, y3) {
    return x3 = b.invert(x3, y3), x3 && a3.invert(x3[0], x3[1]);
  };
  return compose;
}
var init_compose = __esm({
  "node_modules/d3-geo/src/compose.js"() {
  }
});

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi2) {
  if (abs3(lambda) > pi3) lambda -= Math.round(lambda / tau4) * tau4;
  return [lambda, phi2];
}
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau4) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi2) {
    lambda += deltaLambda;
    if (abs3(lambda) > pi3) lambda -= Math.round(lambda / tau4) * tau4;
    return [lambda, phi2];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos2(deltaPhi), sinDeltaPhi = sin2(deltaPhi), cosDeltaGamma = cos2(deltaGamma), sinDeltaGamma = sin2(deltaGamma);
  function rotation(lambda, phi2) {
    var cosPhi = cos2(phi2), x3 = cos2(lambda) * cosPhi, y3 = sin2(lambda) * cosPhi, z = sin2(phi2), k = z * cosDeltaPhi + x3 * sinDeltaPhi;
    return [
      atan2(y3 * cosDeltaGamma - k * sinDeltaGamma, x3 * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y3 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi2) {
    var cosPhi = cos2(phi2), x3 = cos2(lambda) * cosPhi, y3 = sin2(lambda) * cosPhi, z = sin2(phi2), k = z * cosDeltaGamma - y3 * sinDeltaGamma;
    return [
      atan2(y3 * cosDeltaGamma + z * sinDeltaGamma, x3 * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x3 * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  };
  return forward;
}
var init_rotation = __esm({
  "node_modules/d3-geo/src/rotation.js"() {
    init_compose();
    init_math3();
    rotationIdentity.invert = rotationIdentity;
  }
});

// node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos2(radius), sinRadius = sin2(radius), step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau4;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau4;
  }
  for (var point2, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point2 = spherical([cosRadius, -sinRadius * cos2(t), -sinRadius * sin2(t)]);
    stream.point(point2[0], point2[1]);
  }
}
function circleRadius(cosRadius, point2) {
  point2 = cartesian(point2), point2[0] -= cosRadius;
  cartesianNormalizeInPlace(point2);
  var radius = acos(-point2[1]);
  return ((-point2[2] < 0 ? -radius : radius) + tau4 - epsilon5) % tau4;
}
function circle_default2() {
  var center2 = constant_default7([0, 0]), radius = constant_default7(90), precision = constant_default7(2), ring, rotate, stream = { point: point2 };
  function point2(x3, y3) {
    ring.push(x3 = rotate(x3, y3));
    x3[0] *= degrees, x3[1] *= degrees;
  }
  function circle() {
    var c5 = center2.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c5[0] * radians, -c5[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c5 = { type: "Polygon", coordinates: [ring] };
    ring = rotate = null;
    return c5;
  }
  circle.center = function(_) {
    return arguments.length ? (center2 = typeof _ === "function" ? _ : constant_default7([+_[0], +_[1]]), circle) : center2;
  };
  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default7(+_), circle) : radius;
  };
  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant_default7(+_), circle) : precision;
  };
  return circle;
}
var init_circle2 = __esm({
  "node_modules/d3-geo/src/circle.js"() {
    init_cartesian();
    init_constant7();
    init_math3();
    init_rotation();
  }
});

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default2() {
  var lines = [], line;
  return {
    point: function(x3, y3, m3) {
      line.push([x3, y3, m3]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop2,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}
var init_buffer2 = __esm({
  "node_modules/d3-geo/src/clip/buffer.js"() {
    init_noop2();
  }
});

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a3, b) {
  return abs3(a3[0] - b[0]) < epsilon5 && abs3(a3[1] - b[1]) < epsilon5;
}
var init_pointEqual = __esm({
  "node_modules/d3-geo/src/pointEqual.js"() {
    init_math3();
  }
});

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point2, points, other, entry) {
  this.x = point2;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0) return;
    var n2, p02 = segment[0], p1 = segment[n2], x3;
    if (pointEqual_default(p02, p1)) {
      if (!p02[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i) stream.point((p02 = segment[i])[0], p02[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon5;
    }
    subject.push(x3 = new Intersection(p02, segment, null, true));
    clip.push(x3.o = new Intersection(p02, null, x3, false));
    subject.push(x3 = new Intersection(p1, segment, null, false));
    clip.push(x3.o = new Intersection(p1, null, x3, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection2);
  link2(subject);
  link2(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start2 = subject[0], points, point2;
  while (1) {
    var current = start2, isSubject = true;
    while (current.v) if ((current = current.n) === start2) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point2 = points[i])[0], point2[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point2 = points[i])[0], point2[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link2(array3) {
  if (!(n = array3.length)) return;
  var n, i = 0, a3 = array3[0], b;
  while (++i < n) {
    a3.n = b = array3[i];
    b.p = a3;
    a3 = b;
  }
  a3.n = b = array3[0];
  b.p = a3;
}
var init_rejoin = __esm({
  "node_modules/d3-geo/src/clip/rejoin.js"() {
    init_pointEqual();
    init_math3();
  }
});

// node_modules/d3-geo/src/polygonContains.js
function longitude(point2) {
  return abs3(point2[0]) <= pi3 ? point2[0] : sign(point2[0]) * ((abs3(point2[0]) + pi3) % tau4 - pi3);
}
function polygonContains_default(polygon, point2) {
  var lambda = longitude(point2), phi2 = point2[1], sinPhi = sin2(phi2), normal = [sin2(lambda), -cos2(lambda), 0], angle2 = 0, winding = 0;
  var sum3 = new Adder();
  if (sinPhi === 1) phi2 = halfPi3 + epsilon5;
  else if (sinPhi === -1) phi2 = -halfPi3 - epsilon5;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m3 = (ring = polygon[i]).length)) continue;
    var ring, m3, point0 = ring[m3 - 1], lambda04 = longitude(point0), phi02 = point0[1] / 2 + quarterPi, sinPhi03 = sin2(phi02), cosPhi03 = cos2(phi02);
    for (var j = 0; j < m3; ++j, lambda04 = lambda12, sinPhi03 = sinPhi1, cosPhi03 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda12 = longitude(point1), phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin2(phi12), cosPhi1 = cos2(phi12), delta = lambda12 - lambda04, sign2 = delta >= 0 ? 1 : -1, absDelta = sign2 * delta, antimeridian = absDelta > pi3, k = sinPhi03 * sinPhi1;
      sum3.add(atan2(k * sign2 * sin2(absDelta), cosPhi03 * cosPhi1 + k * cos2(absDelta)));
      angle2 += antimeridian ? delta + sign2 * tau4 : delta;
      if (antimeridian ^ lambda04 >= lambda ^ lambda12 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection2 = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection2);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection2[2]);
        if (phi2 > phiArc || phi2 === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle2 < -epsilon5 || angle2 < epsilon5 && sum3 < -epsilon22) ^ winding & 1;
}
var init_polygonContains = __esm({
  "node_modules/d3-geo/src/polygonContains.js"() {
    init_src();
    init_cartesian();
    init_math3();
  }
});

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start2) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default2(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point: point2,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point2;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains_default(polygon, start2);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point2(lambda, phi2) {
      if (pointVisible(lambda, phi2)) sink.point(lambda, phi2);
    }
    function pointLine(lambda, phi2) {
      line.point(lambda, phi2);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point2;
      line.lineEnd();
    }
    function pointRing(lambda, phi2) {
      ring.push([lambda, phi2]);
      ringSink.point(lambda, phi2);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m3, segment, point3;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n) return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m3 = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m3; ++i) sink.point((point3 = segment[i])[0], point3[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a3, b) {
  return ((a3 = a3.x)[0] < 0 ? a3[1] - halfPi3 - epsilon5 : halfPi3 - a3[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi3 - epsilon5 : halfPi3 - b[1]);
}
var init_clip = __esm({
  "node_modules/d3-geo/src/clip/index.js"() {
    init_buffer2();
    init_rejoin();
    init_math3();
    init_polygonContains();
    init_src();
  }
});

// node_modules/d3-geo/src/clip/antimeridian.js
function clipAntimeridianLine(stream) {
  var lambda04 = NaN, phi02 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda12, phi12) {
      var sign1 = lambda12 > 0 ? pi3 : -pi3, delta = abs3(lambda12 - lambda04);
      if (abs3(delta - pi3) < epsilon5) {
        stream.point(lambda04, phi02 = (phi02 + phi12) / 2 > 0 ? halfPi3 : -halfPi3);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        stream.point(lambda12, phi02);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi3) {
        if (abs3(lambda04 - sign0) < epsilon5) lambda04 -= sign0 * epsilon5;
        if (abs3(lambda12 - sign1) < epsilon5) lambda12 -= sign1 * epsilon5;
        phi02 = clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        clean = 0;
      }
      stream.point(lambda04 = lambda12, phi02 = phi12);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda04 = phi02 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12) {
  var cosPhi03, cosPhi1, sinLambda0Lambda1 = sin2(lambda04 - lambda12);
  return abs3(sinLambda0Lambda1) > epsilon5 ? atan((sin2(phi02) * (cosPhi1 = cos2(phi12)) * sin2(lambda12) - sin2(phi12) * (cosPhi03 = cos2(phi02)) * sin2(lambda04)) / (cosPhi03 * cosPhi1 * sinLambda0Lambda1)) : (phi02 + phi12) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi2;
  if (from == null) {
    phi2 = direction * halfPi3;
    stream.point(-pi3, phi2);
    stream.point(0, phi2);
    stream.point(pi3, phi2);
    stream.point(pi3, 0);
    stream.point(pi3, -phi2);
    stream.point(0, -phi2);
    stream.point(-pi3, -phi2);
    stream.point(-pi3, 0);
    stream.point(-pi3, phi2);
  } else if (abs3(from[0] - to[0]) > epsilon5) {
    var lambda = from[0] < to[0] ? pi3 : -pi3;
    phi2 = direction * lambda / 2;
    stream.point(-lambda, phi2);
    stream.point(0, phi2);
    stream.point(lambda, phi2);
  } else {
    stream.point(to[0], to[1]);
  }
}
var antimeridian_default;
var init_antimeridian = __esm({
  "node_modules/d3-geo/src/clip/antimeridian.js"() {
    init_clip();
    init_math3();
    antimeridian_default = clip_default(
      function() {
        return true;
      },
      clipAntimeridianLine,
      clipAntimeridianInterpolate,
      [-pi3, -halfPi3]
    );
  }
});

// node_modules/d3-geo/src/clip/circle.js
function circle_default3(radius) {
  var cr = cos2(radius), delta = 2 * radians, smallRadius = cr > 0, notHemisphere = abs3(cr) > epsilon5;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi2) {
    return cos2(lambda) * cos2(phi2) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi2) {
        var point1 = [lambda, phi2], point2, v2 = visible(lambda, phi2), c5 = smallRadius ? v2 ? 0 : code(lambda, phi2) : v2 ? code(lambda + (lambda < 0 ? pi3 : -pi3), phi2) : 0;
        if (!point0 && (v00 = v0 = v2)) stream.lineStart();
        if (v2 !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual_default(point0, point2) || pointEqual_default(point1, point2))
            point1[2] = 1;
        }
        if (v2 !== v0) {
          clean = 0;
          if (v2) {
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v2) {
          var t;
          if (!(c5 & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v2 && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v2, c0 = c5;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect(a3, b, two) {
    var pa = cartesian(a3), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant) return !two && a3;
    var c1 = cr * n2n2 / determinant, c22 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A = cartesianScale(n1, c1), B2 = cartesianScale(n2, c22);
    cartesianAddInPlace(A, B2);
    var u4 = n1xn2, w = cartesianDot(A, u4), uu = cartesianDot(u4, u4), t2 = w * w - uu * (cartesianDot(A, A) - 1);
    if (t2 < 0) return;
    var t = sqrt2(t2), q = cartesianScale(u4, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical(q);
    if (!two) return q;
    var lambda04 = a3[0], lambda12 = b[0], phi02 = a3[1], phi12 = b[1], z;
    if (lambda12 < lambda04) z = lambda04, lambda04 = lambda12, lambda12 = z;
    var delta2 = lambda12 - lambda04, polar = abs3(delta2 - pi3) < epsilon5, meridian = polar || delta2 < epsilon5;
    if (!polar && phi12 < phi02) z = phi02, phi02 = phi12, phi12 = z;
    if (meridian ? polar ? phi02 + phi12 > 0 ^ q[1] < (abs3(q[0] - lambda04) < epsilon5 ? phi02 : phi12) : phi02 <= q[1] && q[1] <= phi12 : delta2 > pi3 ^ (lambda04 <= q[0] && q[0] <= lambda12)) {
      var q1 = cartesianScale(u4, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi2) {
    var r = smallRadius ? radius : pi3 - radius, code2 = 0;
    if (lambda < -r) code2 |= 1;
    else if (lambda > r) code2 |= 2;
    if (phi2 < -r) code2 |= 4;
    else if (phi2 > r) code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi3, radius - pi3]);
}
var init_circle3 = __esm({
  "node_modules/d3-geo/src/clip/circle.js"() {
    init_cartesian();
    init_circle2();
    init_math3();
    init_pointEqual();
    init_clip();
  }
});

// node_modules/d3-geo/src/clip/line.js
function line_default2(a3, b, x06, y06, x12, y12) {
  var ax = a3[0], ay = a3[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
  r = x06 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y06 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (t0 > 0) a3[0] = ax + t0 * dx, a3[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}
var init_line = __esm({
  "node_modules/d3-geo/src/clip/line.js"() {
  }
});

// node_modules/d3-geo/src/clip/rectangle.js
function clipRectangle(x06, y06, x12, y12) {
  function visible(x3, y3) {
    return x06 <= x3 && x3 <= x12 && y06 <= y3 && y3 <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a3 = 0, a1 = 0;
    if (from == null || (a3 = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a3 === 0 || a3 === 3 ? x06 : x12, a3 > 1 ? y12 : y06);
      while ((a3 = (a3 + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs3(p[0] - x06) < epsilon5 ? direction > 0 ? 0 : 3 : abs3(p[0] - x12) < epsilon5 ? direction > 0 ? 2 : 1 : abs3(p[1] - y06) < epsilon5 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a3, b) {
    return comparePoint(a3.x, b.x);
  }
  function comparePoint(a3, b) {
    var ca3 = corner(a3, 1), cb = corner(b, 1);
    return ca3 !== cb ? ca3 - cb : ca3 === 0 ? b[1] - a3[1] : ca3 === 1 ? a3[0] - b[0] : ca3 === 2 ? a3[1] - b[1] : b[0] - a3[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default2(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point: point2,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point2(x3, y3) {
      if (visible(x3, y3)) activeStream.point(x3, y3);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring2 = polygon[i], j = 1, m3 = ring2.length, point3 = ring2[0], a0, a1, b02 = point3[0], b12 = point3[1]; j < m3; ++j) {
          a0 = b02, a1 = b12, point3 = ring2[j], b02 = point3[0], b12 = point3[1];
          if (a1 <= y12) {
            if (b12 > y12 && (b02 - a0) * (y12 - a1) > (b12 - a1) * (x06 - a0)) ++winding;
          } else {
            if (b12 <= y12 && (b02 - a0) * (y12 - a1) < (b12 - a1) * (x06 - a0)) --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint2;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint2(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point2;
      if (v_) activeStream.lineEnd();
    }
    function linePoint2(x3, y3) {
      var v2 = visible(x3, y3);
      if (polygon) ring.push([x3, y3]);
      if (first) {
        x__ = x3, y__ = y3, v__ = v2;
        first = false;
        if (v2) {
          activeStream.lineStart();
          activeStream.point(x3, y3);
        }
      } else {
        if (v2 && v_) activeStream.point(x3, y3);
        else {
          var a3 = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x3 = Math.max(clipMin, Math.min(clipMax, x3)), y3 = Math.max(clipMin, Math.min(clipMax, y3))];
          if (line_default2(a3, b, x06, y06, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a3[0], a3[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v2) activeStream.lineEnd();
            clean = false;
          } else if (v2) {
            activeStream.lineStart();
            activeStream.point(x3, y3);
            clean = false;
          }
        }
      }
      x_ = x3, y_ = y3, v_ = v2;
    }
    return clipStream;
  };
}
var clipMax, clipMin;
var init_rectangle = __esm({
  "node_modules/d3-geo/src/clip/rectangle.js"() {
    init_math3();
    init_buffer2();
    init_line();
    init_rejoin();
    init_src();
    clipMax = 1e9;
    clipMin = -clipMax;
  }
});

// node_modules/d3-geo/src/clip/extent.js
function extent_default2() {
  var x06 = 0, y06 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip;
  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x06, y06, x12, y12)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1], cache = cacheStream = null, clip) : [[x06, y06], [x12, y12]];
    }
  };
}
var init_extent2 = __esm({
  "node_modules/d3-geo/src/clip/extent.js"() {
    init_rectangle();
  }
});

// node_modules/d3-geo/src/length.js
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop2;
}
function lengthPointFirst(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  lambda03 = lambda, sinPhi02 = sin2(phi2), cosPhi02 = cos2(phi2);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var sinPhi = sin2(phi2), cosPhi = cos2(phi2), delta = abs3(lambda - lambda03), cosDelta = cos2(delta), sinDelta = sin2(delta), x3 = cosPhi * sinDelta, y3 = cosPhi02 * sinPhi - sinPhi02 * cosPhi * cosDelta, z = sinPhi02 * sinPhi + cosPhi02 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt2(x3 * x3 + y3 * y3), z));
  lambda03 = lambda, sinPhi02 = sinPhi, cosPhi02 = cosPhi;
}
function length_default(object2) {
  lengthSum = new Adder();
  stream_default(object2, lengthStream);
  return +lengthSum;
}
var lengthSum, lambda03, sinPhi02, cosPhi02, lengthStream;
var init_length = __esm({
  "node_modules/d3-geo/src/length.js"() {
    init_src();
    init_math3();
    init_noop2();
    init_stream();
    lengthStream = {
      sphere: noop2,
      point: noop2,
      lineStart: lengthLineStart,
      lineEnd: noop2,
      polygonStart: noop2,
      polygonEnd: noop2
    };
  }
});

// node_modules/d3-geo/src/distance.js
function distance_default(a3, b) {
  coordinates[0] = a3;
  coordinates[1] = b;
  return length_default(object);
}
var coordinates, object;
var init_distance = __esm({
  "node_modules/d3-geo/src/distance.js"() {
    init_length();
    coordinates = [null, null];
    object = { type: "LineString", coordinates };
  }
});

// node_modules/d3-geo/src/contains.js
function containsGeometry(geometry, point2) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point2) : false;
}
function containsPoint(coordinates2, point2) {
  return distance_default(coordinates2, point2) === 0;
}
function containsLine(coordinates2, point2) {
  var ao, bo, ab4;
  for (var i = 0, n = coordinates2.length; i < n; i++) {
    bo = distance_default(coordinates2[i], point2);
    if (bo === 0) return true;
    if (i > 0) {
      ab4 = distance_default(coordinates2[i], coordinates2[i - 1]);
      if (ab4 > 0 && ao <= ab4 && bo <= ab4 && (ao + bo - ab4) * (1 - Math.pow((ao - bo) / ab4, 2)) < epsilon22 * ab4)
        return true;
    }
    ao = bo;
  }
  return false;
}
function containsPolygon(coordinates2, point2) {
  return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point2));
}
function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point2) {
  return [point2[0] * radians, point2[1] * radians];
}
function contains_default2(object2, point2) {
  return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point2);
}
var containsObjectType, containsGeometryType;
var init_contains2 = __esm({
  "node_modules/d3-geo/src/contains.js"() {
    init_polygonContains();
    init_distance();
    init_math3();
    containsObjectType = {
      Feature: function(object2, point2) {
        return containsGeometry(object2.geometry, point2);
      },
      FeatureCollection: function(object2, point2) {
        var features = object2.features, i = -1, n = features.length;
        while (++i < n) if (containsGeometry(features[i].geometry, point2)) return true;
        return false;
      }
    };
    containsGeometryType = {
      Sphere: function() {
        return true;
      },
      Point: function(object2, point2) {
        return containsPoint(object2.coordinates, point2);
      },
      MultiPoint: function(object2, point2) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) if (containsPoint(coordinates2[i], point2)) return true;
        return false;
      },
      LineString: function(object2, point2) {
        return containsLine(object2.coordinates, point2);
      },
      MultiLineString: function(object2, point2) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) if (containsLine(coordinates2[i], point2)) return true;
        return false;
      },
      Polygon: function(object2, point2) {
        return containsPolygon(object2.coordinates, point2);
      },
      MultiPolygon: function(object2, point2) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) if (containsPolygon(coordinates2[i], point2)) return true;
        return false;
      },
      GeometryCollection: function(object2, point2) {
        var geometries = object2.geometries, i = -1, n = geometries.length;
        while (++i < n) if (containsGeometry(geometries[i], point2)) return true;
        return false;
      }
    };
  }
});

// node_modules/d3-geo/src/graticule.js
function graticuleX(y06, y12, dy) {
  var y3 = range(y06, y12 - epsilon5, dy).concat(y12);
  return function(x3) {
    return y3.map(function(y4) {
      return [x3, y4];
    });
  };
}
function graticuleY(x06, x12, dx) {
  var x3 = range(x06, x12 - epsilon5, dx).concat(x12);
  return function(y3) {
    return x3.map(function(x4) {
      return [x4, y3];
    });
  };
}
function graticule() {
  var x12, x06, X13, X03, y12, y06, Y13, Y03, dx = 10, dy = dx, DX = 90, DY = 360, x3, y3, X3, Y3, precision = 2.5;
  function graticule2() {
    return { type: "MultiLineString", coordinates: lines() };
  }
  function lines() {
    return range(ceil(X03 / DX) * DX, X13, DX).map(X3).concat(range(ceil(Y03 / DY) * DY, Y13, DY).map(Y3)).concat(range(ceil(x06 / dx) * dx, x12, dx).filter(function(x4) {
      return abs3(x4 % DX) > epsilon5;
    }).map(x3)).concat(range(ceil(y06 / dy) * dy, y12, dy).filter(function(y4) {
      return abs3(y4 % DY) > epsilon5;
    }).map(y3));
  }
  graticule2.lines = function() {
    return lines().map(function(coordinates2) {
      return { type: "LineString", coordinates: coordinates2 };
    });
  };
  graticule2.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X3(X03).concat(
          Y3(Y13).slice(1),
          X3(X13).reverse().slice(1),
          Y3(Y03).reverse().slice(1)
        )
      ]
    };
  };
  graticule2.extent = function(_) {
    if (!arguments.length) return graticule2.extentMinor();
    return graticule2.extentMajor(_).extentMinor(_);
  };
  graticule2.extentMajor = function(_) {
    if (!arguments.length) return [[X03, Y03], [X13, Y13]];
    X03 = +_[0][0], X13 = +_[1][0];
    Y03 = +_[0][1], Y13 = +_[1][1];
    if (X03 > X13) _ = X03, X03 = X13, X13 = _;
    if (Y03 > Y13) _ = Y03, Y03 = Y13, Y13 = _;
    return graticule2.precision(precision);
  };
  graticule2.extentMinor = function(_) {
    if (!arguments.length) return [[x06, y06], [x12, y12]];
    x06 = +_[0][0], x12 = +_[1][0];
    y06 = +_[0][1], y12 = +_[1][1];
    if (x06 > x12) _ = x06, x06 = x12, x12 = _;
    if (y06 > y12) _ = y06, y06 = y12, y12 = _;
    return graticule2.precision(precision);
  };
  graticule2.step = function(_) {
    if (!arguments.length) return graticule2.stepMinor();
    return graticule2.stepMajor(_).stepMinor(_);
  };
  graticule2.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule2;
  };
  graticule2.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule2;
  };
  graticule2.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x3 = graticuleX(y06, y12, 90);
    y3 = graticuleY(x06, x12, precision);
    X3 = graticuleX(Y03, Y13, 90);
    Y3 = graticuleY(X03, X13, precision);
    return graticule2;
  };
  return graticule2.extentMajor([[-180, -90 + epsilon5], [180, 90 - epsilon5]]).extentMinor([[-180, -80 - epsilon5], [180, 80 + epsilon5]]);
}
function graticule10() {
  return graticule()();
}
var init_graticule = __esm({
  "node_modules/d3-geo/src/graticule.js"() {
    init_src();
    init_math3();
  }
});

// node_modules/d3-geo/src/interpolate.js
function interpolate_default2(a3, b) {
  var x06 = a3[0] * radians, y06 = a3[1] * radians, x12 = b[0] * radians, y12 = b[1] * radians, cy0 = cos2(y06), sy0 = sin2(y06), cy1 = cos2(y12), sy1 = sin2(y12), kx0 = cy0 * cos2(x06), ky0 = cy0 * sin2(x06), kx1 = cy1 * cos2(x12), ky1 = cy1 * sin2(x12), d = 2 * asin(sqrt2(haversin(y12 - y06) + cy0 * cy1 * haversin(x12 - x06))), k = sin2(d);
  var interpolate = d ? function(t) {
    var B2 = sin2(t *= d) / k, A = sin2(d - t) / k, x3 = A * kx0 + B2 * kx1, y3 = A * ky0 + B2 * ky1, z = A * sy0 + B2 * sy1;
    return [
      atan2(y3, x3) * degrees,
      atan2(z, sqrt2(x3 * x3 + y3 * y3)) * degrees
    ];
  } : function() {
    return [x06 * degrees, y06 * degrees];
  };
  interpolate.distance = d;
  return interpolate;
}
var init_interpolate2 = __esm({
  "node_modules/d3-geo/src/interpolate.js"() {
    init_math3();
  }
});

// node_modules/d3-geo/src/identity.js
var identity_default2;
var init_identity2 = __esm({
  "node_modules/d3-geo/src/identity.js"() {
    identity_default2 = (x3) => x3;
  }
});

// node_modules/d3-geo/src/path/area.js
function areaRingStart2() {
  areaStream2.point = areaPointFirst2;
}
function areaPointFirst2(x3, y3) {
  areaStream2.point = areaPoint2;
  x00 = x02 = x3, y00 = y02 = y3;
}
function areaPoint2(x3, y3) {
  areaRingSum2.add(y02 * x3 - x02 * y3);
  x02 = x3, y02 = y3;
}
function areaRingEnd2() {
  areaPoint2(x00, y00);
}
var areaSum2, areaRingSum2, x00, y00, x02, y02, areaStream2, area_default4;
var init_area3 = __esm({
  "node_modules/d3-geo/src/path/area.js"() {
    init_src();
    init_math3();
    init_noop2();
    areaSum2 = new Adder();
    areaRingSum2 = new Adder();
    areaStream2 = {
      point: noop2,
      lineStart: noop2,
      lineEnd: noop2,
      polygonStart: function() {
        areaStream2.lineStart = areaRingStart2;
        areaStream2.lineEnd = areaRingEnd2;
      },
      polygonEnd: function() {
        areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop2;
        areaSum2.add(abs3(areaRingSum2));
        areaRingSum2 = new Adder();
      },
      result: function() {
        var area = areaSum2 / 2;
        areaSum2 = new Adder();
        return area;
      }
    };
    area_default4 = areaStream2;
  }
});

// node_modules/d3-geo/src/path/bounds.js
function boundsPoint2(x3, y3) {
  if (x3 < x03) x03 = x3;
  if (x3 > x1) x1 = x3;
  if (y3 < y03) y03 = y3;
  if (y3 > y1) y1 = y3;
}
var x03, y03, x1, y1, boundsStream2, bounds_default2;
var init_bounds2 = __esm({
  "node_modules/d3-geo/src/path/bounds.js"() {
    init_noop2();
    x03 = Infinity;
    y03 = x03;
    x1 = -x03;
    y1 = x1;
    boundsStream2 = {
      point: boundsPoint2,
      lineStart: noop2,
      lineEnd: noop2,
      polygonStart: noop2,
      polygonEnd: noop2,
      result: function() {
        var bounds = [[x03, y03], [x1, y1]];
        x1 = y1 = -(y03 = x03 = Infinity);
        return bounds;
      }
    };
    bounds_default2 = boundsStream2;
  }
});

// node_modules/d3-geo/src/path/centroid.js
function centroidPoint2(x3, y3) {
  X02 += x3;
  Y02 += y3;
  ++Z02;
}
function centroidLineStart2() {
  centroidStream2.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x3, y3) {
  centroidStream2.point = centroidPointLine;
  centroidPoint2(x04 = x3, y04 = y3);
}
function centroidPointLine(x3, y3) {
  var dx = x3 - x04, dy = y3 - y04, z = sqrt2(dx * dx + dy * dy);
  X12 += z * (x04 + x3) / 2;
  Y12 += z * (y04 + y3) / 2;
  Z12 += z;
  centroidPoint2(x04 = x3, y04 = y3);
}
function centroidLineEnd2() {
  centroidStream2.point = centroidPoint2;
}
function centroidRingStart2() {
  centroidStream2.point = centroidPointFirstRing;
}
function centroidRingEnd2() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x3, y3) {
  centroidStream2.point = centroidPointRing;
  centroidPoint2(x002 = x04 = x3, y002 = y04 = y3);
}
function centroidPointRing(x3, y3) {
  var dx = x3 - x04, dy = y3 - y04, z = sqrt2(dx * dx + dy * dy);
  X12 += z * (x04 + x3) / 2;
  Y12 += z * (y04 + y3) / 2;
  Z12 += z;
  z = y04 * x3 - x04 * y3;
  X22 += z * (x04 + x3);
  Y22 += z * (y04 + y3);
  Z22 += z * 3;
  centroidPoint2(x04 = x3, y04 = y3);
}
var X02, Y02, Z02, X12, Y12, Z12, X22, Y22, Z22, x002, y002, x04, y04, centroidStream2, centroid_default2;
var init_centroid2 = __esm({
  "node_modules/d3-geo/src/path/centroid.js"() {
    init_math3();
    X02 = 0;
    Y02 = 0;
    Z02 = 0;
    X12 = 0;
    Y12 = 0;
    Z12 = 0;
    X22 = 0;
    Y22 = 0;
    Z22 = 0;
    centroidStream2 = {
      point: centroidPoint2,
      lineStart: centroidLineStart2,
      lineEnd: centroidLineEnd2,
      polygonStart: function() {
        centroidStream2.lineStart = centroidRingStart2;
        centroidStream2.lineEnd = centroidRingEnd2;
      },
      polygonEnd: function() {
        centroidStream2.point = centroidPoint2;
        centroidStream2.lineStart = centroidLineStart2;
        centroidStream2.lineEnd = centroidLineEnd2;
      },
      result: function() {
        var centroid = Z22 ? [X22 / Z22, Y22 / Z22] : Z12 ? [X12 / Z12, Y12 / Z12] : Z02 ? [X02 / Z02, Y02 / Z02] : [NaN, NaN];
        X02 = Y02 = Z02 = X12 = Y12 = Z12 = X22 = Y22 = Z22 = 0;
        return centroid;
      }
    };
    centroid_default2 = centroidStream2;
  }
});

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
var init_context = __esm({
  "node_modules/d3-geo/src/path/context.js"() {
    init_math3();
    init_noop2();
    PathContext.prototype = {
      _radius: 4.5,
      pointRadius: function(_) {
        return this._radius = _, this;
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
      },
      point: function(x3, y3) {
        switch (this._point) {
          case 0: {
            this._context.moveTo(x3, y3);
            this._point = 1;
            break;
          }
          case 1: {
            this._context.lineTo(x3, y3);
            break;
          }
          default: {
            this._context.moveTo(x3 + this._radius, y3);
            this._context.arc(x3, y3, this._radius, 0, tau4);
            break;
          }
        }
      },
      result: noop2
    };
  }
});

// node_modules/d3-geo/src/path/measure.js
function lengthPointFirst2(x3, y3) {
  lengthStream2.point = lengthPoint2;
  x003 = x05 = x3, y003 = y05 = y3;
}
function lengthPoint2(x3, y3) {
  x05 -= x3, y05 -= y3;
  lengthSum2.add(sqrt2(x05 * x05 + y05 * y05));
  x05 = x3, y05 = y3;
}
var lengthSum2, lengthRing, x003, y003, x05, y05, lengthStream2, measure_default;
var init_measure = __esm({
  "node_modules/d3-geo/src/path/measure.js"() {
    init_src();
    init_math3();
    init_noop2();
    lengthSum2 = new Adder();
    lengthStream2 = {
      point: noop2,
      lineStart: function() {
        lengthStream2.point = lengthPointFirst2;
      },
      lineEnd: function() {
        if (lengthRing) lengthPoint2(x003, y003);
        lengthStream2.point = noop2;
      },
      polygonStart: function() {
        lengthRing = true;
      },
      polygonEnd: function() {
        lengthRing = null;
      },
      result: function() {
        var length = +lengthSum2;
        lengthSum2 = new Adder();
        return length;
      }
    };
    measure_default = lengthStream2;
  }
});

// node_modules/d3-geo/src/path/string.js
function append(strings) {
  let i = 1;
  this._ += strings[0];
  for (const j = strings.length; i < j; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  const d = Math.floor(digits);
  if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
  if (d > 15) return append;
  if (d !== cacheDigits) {
    const k = 10 ** d;
    cacheDigits = d;
    cacheAppend = function append2(strings) {
      let i = 1;
      this._ += strings[0];
      for (const j = strings.length; i < j; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }
  return cacheAppend;
}
var cacheDigits, cacheAppend, cacheRadius, cacheCircle, PathString;
var init_string = __esm({
  "node_modules/d3-geo/src/path/string.js"() {
    PathString = class {
      constructor(digits) {
        this._append = digits == null ? append : appendRound(digits);
        this._radius = 4.5;
        this._ = "";
      }
      pointRadius(_) {
        this._radius = +_;
        return this;
      }
      polygonStart() {
        this._line = 0;
      }
      polygonEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        if (this._line === 0) this._ += "Z";
        this._point = NaN;
      }
      point(x3, y3) {
        switch (this._point) {
          case 0: {
            this._append`M${x3},${y3}`;
            this._point = 1;
            break;
          }
          case 1: {
            this._append`L${x3},${y3}`;
            break;
          }
          default: {
            this._append`M${x3},${y3}`;
            if (this._radius !== cacheRadius || this._append !== cacheAppend) {
              const r = this._radius;
              const s = this._;
              this._ = "";
              this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
              cacheRadius = r;
              cacheAppend = this._append;
              cacheCircle = this._;
              this._ = s;
            }
            this._ += cacheCircle;
            break;
          }
        }
      }
      result() {
        const result = this._;
        this._ = "";
        return result.length ? result : null;
      }
    };
  }
});

// node_modules/d3-geo/src/path/index.js
function path_default(projection2, context) {
  let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
  function path2(object2) {
    if (object2) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object2, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path2.area = function(object2) {
    stream_default(object2, projectionStream(area_default4));
    return area_default4.result();
  };
  path2.measure = function(object2) {
    stream_default(object2, projectionStream(measure_default));
    return measure_default.result();
  };
  path2.bounds = function(object2) {
    stream_default(object2, projectionStream(bounds_default2));
    return bounds_default2.result();
  };
  path2.centroid = function(object2) {
    stream_default(object2, projectionStream(centroid_default2));
    return centroid_default2.result();
  };
  path2.projection = function(_) {
    if (!arguments.length) return projection2;
    projectionStream = _ == null ? (projection2 = null, identity_default2) : (projection2 = _).stream;
    return path2;
  };
  path2.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString(digits)) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path2;
  };
  path2.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path2;
  };
  path2.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) digits = null;
    else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    if (context === null) contextStream = new PathString(digits);
    return path2;
  };
  return path2.projection(projection2).digits(digits).context(context);
}
var init_path2 = __esm({
  "node_modules/d3-geo/src/path/index.js"() {
    init_identity2();
    init_stream();
    init_area3();
    init_bounds2();
    init_centroid2();
    init_context();
    init_measure();
    init_string();
  }
});

// node_modules/d3-geo/src/transform.js
function transform_default(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {
}
var init_transform = __esm({
  "node_modules/d3-geo/src/transform.js"() {
    TransformStream.prototype = {
      constructor: TransformStream,
      point: function(x3, y3) {
        this.stream.point(x3, y3);
      },
      sphere: function() {
        this.stream.sphere();
      },
      lineStart: function() {
        this.stream.lineStart();
      },
      lineEnd: function() {
        this.stream.lineEnd();
      },
      polygonStart: function() {
        this.stream.polygonStart();
      },
      polygonEnd: function() {
        this.stream.polygonEnd();
      }
    };
  }
});

// node_modules/d3-geo/src/projection/fit.js
function fit(projection2, fitBounds, object2) {
  var clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null) projection2.clipExtent(null);
  stream_default(object2, projection2.stream(bounds_default2));
  fitBounds(bounds_default2.result());
  if (clip != null) projection2.clipExtent(clip);
  return projection2;
}
function fitExtent(projection2, extent2, object2) {
  return fit(projection2, function(b) {
    var w = extent2[1][0] - extent2[0][0], h = extent2[1][1] - extent2[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x3 = +extent2[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y3 = +extent2[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x3, y3]);
  }, object2);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}
function fitWidth(projection2, width, object2) {
  return fit(projection2, function(b) {
    var w = +width, k = w / (b[1][0] - b[0][0]), x3 = (w - k * (b[1][0] + b[0][0])) / 2, y3 = -k * b[0][1];
    projection2.scale(150 * k).translate([x3, y3]);
  }, object2);
}
function fitHeight(projection2, height, object2) {
  return fit(projection2, function(b) {
    var h = +height, k = h / (b[1][1] - b[0][1]), x3 = -k * b[0][0], y3 = (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x3, y3]);
  }, object2);
}
var init_fit = __esm({
  "node_modules/d3-geo/src/projection/fit.js"() {
    init_stream();
    init_bounds2();
  }
});

// node_modules/d3-geo/src/projection/resample.js
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x3, y3) {
      x3 = project(x3, y3);
      this.stream.point(x3[0], x3[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x06, y06, lambda04, a0, b02, c0, x12, y12, lambda12, a1, b12, c1, depth, stream) {
    var dx = x12 - x06, dy = y12 - y06, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a3 = a0 + a1, b = b02 + b12, c5 = c0 + c1, m3 = sqrt2(a3 * a3 + b * b + c5 * c5), phi2 = asin(c5 /= m3), lambda22 = abs3(abs3(c5) - 1) < epsilon5 || abs3(lambda04 - lambda12) < epsilon5 ? (lambda04 + lambda12) / 2 : atan2(b, a3), p = project(lambda22, phi2), x22 = p[0], y22 = p[1], dx2 = x22 - x06, dy2 = y22 - y06, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs3((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b02 * b12 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x06, y06, lambda04, a0, b02, c0, x22, y22, lambda22, a3 /= m3, b /= m3, c5, depth, stream);
        stream.point(x22, y22);
        resampleLineTo(x22, y22, lambda22, a3, b, c5, x12, y12, lambda12, a1, b12, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda004, x004, y004, a00, b00, c00, lambda04, x06, y06, a0, b02, c0;
    var resampleStream = {
      point: point2,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point2(x3, y3) {
      x3 = project(x3, y3);
      stream.point(x3[0], x3[1]);
    }
    function lineStart() {
      x06 = NaN;
      resampleStream.point = linePoint2;
      stream.lineStart();
    }
    function linePoint2(lambda, phi2) {
      var c5 = cartesian([lambda, phi2]), p = project(lambda, phi2);
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x06 = p[0], y06 = p[1], lambda04 = lambda, a0 = c5[0], b02 = c5[1], c0 = c5[2], maxDepth, stream);
      stream.point(x06, y06);
    }
    function lineEnd() {
      resampleStream.point = point2;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi2) {
      linePoint2(lambda004 = lambda, phi2), x004 = x06, y004 = y06, a00 = a0, b00 = b02, c00 = c0;
      resampleStream.point = linePoint2;
    }
    function ringEnd() {
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x004, y004, lambda004, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}
var maxDepth, cosMinDistance;
var init_resample = __esm({
  "node_modules/d3-geo/src/projection/resample.js"() {
    init_cartesian();
    init_math3();
    init_transform();
    maxDepth = 16;
    cosMinDistance = cos2(30 * radians);
  }
});

// node_modules/d3-geo/src/projection/index.js
function transformRotate(rotate) {
  return transformer({
    point: function(x3, y3) {
      var r = rotate(x3, y3);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k, dx, dy, sx, sy) {
  function transform2(x3, y3) {
    x3 *= sx;
    y3 *= sy;
    return [dx + k * x3, dy - k * y3];
  }
  transform2.invert = function(x3, y3) {
    return [(x3 - dx) / k * sx, (dy - y3) / k * sy];
  };
  return transform2;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = cos2(alpha), sinAlpha = sin2(alpha), a3 = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform2(x3, y3) {
    x3 *= sx;
    y3 *= sy;
    return [a3 * x3 - b * y3 + dx, dy - b * x3 - a3 * y3];
  }
  transform2.invert = function(x3, y3) {
    return [sx * (ai * x3 - bi * y3 + ci), sy * (fi - bi * x3 - ai * y3)];
  };
  return transform2;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k = 150, x3 = 480, y3 = 250, lambda = 0, phi2 = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x06 = null, y06, x12, y12, postclip = identity_default2, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point2) {
    return projectRotateTransform(point2[0] * radians, point2[1] * radians);
  }
  function invert(point2) {
    point2 = projectRotateTransform.invert(point2[0], point2[1]);
    return point2 && [point2[0] * degrees, point2[1] * degrees];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? circle_default3(theta = _ * radians) : (theta = null, antimeridian_default), reset()) : theta * degrees;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default2) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (x3 = +_[0], y3 = +_[1], recenter()) : [x3, y3];
  };
  projection2.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi2 = _[1] % 360 * radians, recenter()) : [lambda * degrees, phi2 * degrees];
  };
  projection2.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _ * _), reset()) : sqrt2(delta2);
  };
  projection2.fitExtent = function(extent2, object2) {
    return fitExtent(projection2, extent2, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  function recenter() {
    var center2 = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi2)), transform2 = scaleTranslateRotate(k, x3 - center2[0], y3 - center2[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project, transform2);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}
var transformRadians;
var init_projection = __esm({
  "node_modules/d3-geo/src/projection/index.js"() {
    init_antimeridian();
    init_circle3();
    init_rectangle();
    init_compose();
    init_identity2();
    init_math3();
    init_rotation();
    init_transform();
    init_fit();
    init_resample();
    transformRadians = transformer({
      point: function(x3, y3) {
        this.stream.point(x3 * radians, y3 * radians);
      }
    });
  }
});

// node_modules/d3-geo/src/projection/conic.js
function conicProjection(projectAt) {
  var phi02 = 0, phi12 = pi3 / 3, m3 = projectionMutator(projectAt), p = m3(phi02, phi12);
  p.parallels = function(_) {
    return arguments.length ? m3(phi02 = _[0] * radians, phi12 = _[1] * radians) : [phi02 * degrees, phi12 * degrees];
  };
  return p;
}
var init_conic = __esm({
  "node_modules/d3-geo/src/projection/conic.js"() {
    init_math3();
    init_projection();
  }
});

// node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function cylindricalEqualAreaRaw(phi02) {
  var cosPhi03 = cos2(phi02);
  function forward(lambda, phi2) {
    return [lambda * cosPhi03, sin2(phi2) / cosPhi03];
  }
  forward.invert = function(x3, y3) {
    return [x3 / cosPhi03, asin(y3 * cosPhi03)];
  };
  return forward;
}
var init_cylindricalEqualArea = __esm({
  "node_modules/d3-geo/src/projection/cylindricalEqualArea.js"() {
    init_math3();
  }
});

// node_modules/d3-geo/src/projection/conicEqualArea.js
function conicEqualAreaRaw(y06, y12) {
  var sy0 = sin2(y06), n = (sy0 + sin2(y12)) / 2;
  if (abs3(n) < epsilon5) return cylindricalEqualAreaRaw(y06);
  var c5 = 1 + sy0 * (2 * n - sy0), r0 = sqrt2(c5) / n;
  function project(x3, y3) {
    var r = sqrt2(c5 - 2 * n * sin2(y3)) / n;
    return [r * sin2(x3 *= n), r0 - r * cos2(x3)];
  }
  project.invert = function(x3, y3) {
    var r0y = r0 - y3, l = atan2(x3, abs3(r0y)) * sign(r0y);
    if (r0y * n < 0)
      l -= pi3 * sign(x3) * sign(r0y);
    return [l / n, asin((c5 - (x3 * x3 + r0y * r0y) * n * n) / (2 * n))];
  };
  return project;
}
function conicEqualArea_default() {
  return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}
var init_conicEqualArea = __esm({
  "node_modules/d3-geo/src/projection/conicEqualArea.js"() {
    init_math3();
    init_conic();
    init_cylindricalEqualArea();
  }
});

// node_modules/d3-geo/src/projection/albers.js
function albers_default() {
  return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
var init_albers = __esm({
  "node_modules/d3-geo/src/projection/albers.js"() {
    init_conicEqualArea();
  }
});

// node_modules/d3-geo/src/projection/albersUsa.js
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x3, y3) {
      var i = -1;
      while (++i < n) streams[i].point(x3, y3);
    },
    sphere: function() {
      var i = -1;
      while (++i < n) streams[i].sphere();
    },
    lineStart: function() {
      var i = -1;
      while (++i < n) streams[i].lineStart();
    },
    lineEnd: function() {
      var i = -1;
      while (++i < n) streams[i].lineEnd();
    },
    polygonStart: function() {
      var i = -1;
      while (++i < n) streams[i].polygonStart();
    },
    polygonEnd: function() {
      var i = -1;
      while (++i < n) streams[i].polygonEnd();
    }
  };
}
function albersUsa_default() {
  var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point2, pointStream = { point: function(x3, y3) {
    point2 = [x3, y3];
  } };
  function albersUsa(coordinates2) {
    var x3 = coordinates2[0], y3 = coordinates2[1];
    return point2 = null, (lower48Point.point(x3, y3), point2) || (alaskaPoint.point(x3, y3), point2) || (hawaiiPoint.point(x3, y3), point2);
  }
  albersUsa.invert = function(coordinates2) {
    var k = lower48.scale(), t = lower48.translate(), x3 = (coordinates2[0] - t[0]) / k, y3 = (coordinates2[1] - t[1]) / k;
    return (y3 >= 0.12 && y3 < 0.234 && x3 >= -0.425 && x3 < -0.214 ? alaska : y3 >= 0.166 && y3 < 0.234 && x3 >= -0.214 && x3 < -0.115 ? hawaii : lower48).invert(coordinates2);
  };
  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x3 = +_[0], y3 = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x3 - 0.455 * k, y3 - 0.238 * k], [x3 + 0.455 * k, y3 + 0.238 * k]]).stream(pointStream);
    alaskaPoint = alaska.translate([x3 - 0.307 * k, y3 + 0.201 * k]).clipExtent([[x3 - 0.425 * k + epsilon5, y3 + 0.12 * k + epsilon5], [x3 - 0.214 * k - epsilon5, y3 + 0.234 * k - epsilon5]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x3 - 0.205 * k, y3 + 0.212 * k]).clipExtent([[x3 - 0.214 * k + epsilon5, y3 + 0.166 * k + epsilon5], [x3 - 0.115 * k - epsilon5, y3 + 0.234 * k - epsilon5]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function(extent2, object2) {
    return fitExtent(albersUsa, extent2, object2);
  };
  albersUsa.fitSize = function(size, object2) {
    return fitSize(albersUsa, size, object2);
  };
  albersUsa.fitWidth = function(width, object2) {
    return fitWidth(albersUsa, width, object2);
  };
  albersUsa.fitHeight = function(height, object2) {
    return fitHeight(albersUsa, height, object2);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}
var init_albersUsa = __esm({
  "node_modules/d3-geo/src/projection/albersUsa.js"() {
    init_math3();
    init_albers();
    init_conicEqualArea();
    init_fit();
  }
});

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale2) {
  return function(x3, y3) {
    var cx = cos2(x3), cy = cos2(y3), k = scale2(cx * cy);
    if (k === Infinity) return [2, 0];
    return [
      k * cy * sin2(x3),
      k * sin2(y3)
    ];
  };
}
function azimuthalInvert(angle2) {
  return function(x3, y3) {
    var z = sqrt2(x3 * x3 + y3 * y3), c5 = angle2(z), sc = sin2(c5), cc2 = cos2(c5);
    return [
      atan2(x3 * sc, z * cc2),
      asin(z && y3 * sc / z)
    ];
  };
}
var init_azimuthal = __esm({
  "node_modules/d3-geo/src/projection/azimuthal.js"() {
    init_math3();
  }
});

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}
var azimuthalEqualAreaRaw;
var init_azimuthalEqualArea = __esm({
  "node_modules/d3-geo/src/projection/azimuthalEqualArea.js"() {
    init_math3();
    init_azimuthal();
    init_projection();
    azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
      return sqrt2(2 / (1 + cxcy));
    });
    azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
      return 2 * asin(z / 2);
    });
  }
});

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}
var azimuthalEquidistantRaw;
var init_azimuthalEquidistant = __esm({
  "node_modules/d3-geo/src/projection/azimuthalEquidistant.js"() {
    init_math3();
    init_azimuthal();
    init_projection();
    azimuthalEquidistantRaw = azimuthalRaw(function(c5) {
      return (c5 = acos(c5)) && c5 / sin2(c5);
    });
    azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
      return z;
    });
  }
});

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi2) {
  return [lambda, log2(tan((halfPi3 + phi2) / 2))];
}
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau4);
}
function mercatorProjection(project) {
  var m3 = projection(project), center2 = m3.center, scale2 = m3.scale, translate = m3.translate, clipExtent = m3.clipExtent, x06 = null, y06, x12, y12;
  m3.scale = function(_) {
    return arguments.length ? (scale2(_), reclip()) : scale2();
  };
  m3.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m3.center = function(_) {
    return arguments.length ? (center2(_), reclip()) : center2();
  };
  m3.clipExtent = function(_) {
    return arguments.length ? (_ == null ? x06 = y06 = x12 = y12 = null : (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reclip()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  function reclip() {
    var k = pi3 * scale2(), t = m3(rotation_default(m3.rotate()).invert([0, 0]));
    return clipExtent(x06 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x06), y06], [Math.min(t[0] + k, x12), y12]] : [[x06, Math.max(t[1] - k, y06)], [x12, Math.min(t[1] + k, y12)]]);
  }
  return reclip();
}
var init_mercator = __esm({
  "node_modules/d3-geo/src/projection/mercator.js"() {
    init_math3();
    init_rotation();
    init_projection();
    mercatorRaw.invert = function(x3, y3) {
      return [x3, 2 * atan(exp(y3)) - halfPi3];
    };
  }
});

// node_modules/d3-geo/src/projection/conicConformal.js
function tany(y3) {
  return tan((halfPi3 + y3) / 2);
}
function conicConformalRaw(y06, y12) {
  var cy0 = cos2(y06), n = y06 === y12 ? sin2(y06) : log2(cy0 / cos2(y12)) / log2(tany(y12) / tany(y06)), f = cy0 * pow3(tany(y06), n) / n;
  if (!n) return mercatorRaw;
  function project(x3, y3) {
    if (f > 0) {
      if (y3 < -halfPi3 + epsilon5) y3 = -halfPi3 + epsilon5;
    } else {
      if (y3 > halfPi3 - epsilon5) y3 = halfPi3 - epsilon5;
    }
    var r = f / pow3(tany(y3), n);
    return [r * sin2(n * x3), f - r * cos2(n * x3)];
  }
  project.invert = function(x3, y3) {
    var fy = f - y3, r = sign(n) * sqrt2(x3 * x3 + fy * fy), l = atan2(x3, abs3(fy)) * sign(fy);
    if (fy * n < 0)
      l -= pi3 * sign(x3) * sign(fy);
    return [l / n, 2 * atan(pow3(f / r, 1 / n)) - halfPi3];
  };
  return project;
}
function conicConformal_default() {
  return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
}
var init_conicConformal = __esm({
  "node_modules/d3-geo/src/projection/conicConformal.js"() {
    init_math3();
    init_conic();
    init_mercator();
  }
});

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi2) {
  return [lambda, phi2];
}
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}
var init_equirectangular = __esm({
  "node_modules/d3-geo/src/projection/equirectangular.js"() {
    init_projection();
    equirectangularRaw.invert = equirectangularRaw;
  }
});

// node_modules/d3-geo/src/projection/conicEquidistant.js
function conicEquidistantRaw(y06, y12) {
  var cy0 = cos2(y06), n = y06 === y12 ? sin2(y06) : (cy0 - cos2(y12)) / (y12 - y06), g = cy0 / n + y06;
  if (abs3(n) < epsilon5) return equirectangularRaw;
  function project(x3, y3) {
    var gy = g - y3, nx = n * x3;
    return [gy * sin2(nx), g - gy * cos2(nx)];
  }
  project.invert = function(x3, y3) {
    var gy = g - y3, l = atan2(x3, abs3(gy)) * sign(gy);
    if (gy * n < 0)
      l -= pi3 * sign(x3) * sign(gy);
    return [l / n, g - sign(n) * sqrt2(x3 * x3 + gy * gy)];
  };
  return project;
}
function conicEquidistant_default() {
  return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}
var init_conicEquidistant = __esm({
  "node_modules/d3-geo/src/projection/conicEquidistant.js"() {
    init_math3();
    init_conic();
    init_equirectangular();
  }
});

// node_modules/d3-geo/src/projection/equalEarth.js
function equalEarthRaw(lambda, phi2) {
  var l = asin(M * sin2(phi2)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos2(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}
var A1, A2, A3, A4, M, iterations;
var init_equalEarth = __esm({
  "node_modules/d3-geo/src/projection/equalEarth.js"() {
    init_projection();
    init_math3();
    A1 = 1.340264;
    A2 = -0.081106;
    A3 = 893e-6;
    A4 = 3796e-6;
    M = sqrt2(3) / 2;
    iterations = 12;
    equalEarthRaw.invert = function(x3, y3) {
      var l = y3, l2 = l * l, l6 = l2 * l2 * l2;
      for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
        fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y3;
        fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
        l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
        if (abs3(delta) < epsilon22) break;
      }
      return [
        M * x3 * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos2(l),
        asin(sin2(l) / M)
      ];
    };
  }
});

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x3, y3) {
  var cy = cos2(y3), k = cos2(x3) * cy;
  return [cy * sin2(x3) / k, sin2(y3) / k];
}
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}
var init_gnomonic = __esm({
  "node_modules/d3-geo/src/projection/gnomonic.js"() {
    init_math3();
    init_azimuthal();
    init_projection();
    gnomonicRaw.invert = azimuthalInvert(atan);
  }
});

// node_modules/d3-geo/src/projection/identity.js
function identity_default3() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca3, sa, x06 = null, y06, x12, y12, kx = 1, ky = 1, transform2 = transformer({
    point: function(x3, y3) {
      var p = projection2([x3, y3]);
      this.stream.point(p[0], p[1]);
    }
  }), postclip = identity_default2, cache, cacheStream;
  function reset() {
    kx = k * sx;
    ky = k * sy;
    cache = cacheStream = null;
    return projection2;
  }
  function projection2(p) {
    var x3 = p[0] * kx, y3 = p[1] * ky;
    if (alpha) {
      var t = y3 * ca3 - x3 * sa;
      x3 = x3 * ca3 + y3 * sa;
      y3 = t;
    }
    return [x3 + tx, y3 + ty];
  }
  projection2.invert = function(p) {
    var x3 = p[0] - tx, y3 = p[1] - ty;
    if (alpha) {
      var t = y3 * ca3 + x3 * sa;
      x3 = x3 * ca3 - y3 * sa;
      y3 = t;
    }
    return [x3 / kx, y3 / ky];
  };
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transform2(postclip(cacheStream = stream));
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default2) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, reset()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin2(alpha), ca3 = cos2(alpha), reset()) : alpha * degrees;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
  };
  projection2.fitExtent = function(extent2, object2) {
    return fitExtent(projection2, extent2, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  return projection2;
}
var init_identity3 = __esm({
  "node_modules/d3-geo/src/projection/identity.js"() {
    init_rectangle();
    init_identity2();
    init_transform();
    init_fit();
    init_math3();
  }
});

// node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi2) {
  var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
  return [
    lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
    phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
  ];
}
function naturalEarth1_default() {
  return projection(naturalEarth1Raw).scale(175.295);
}
var init_naturalEarth1 = __esm({
  "node_modules/d3-geo/src/projection/naturalEarth1.js"() {
    init_projection();
    init_math3();
    naturalEarth1Raw.invert = function(x3, y3) {
      var phi2 = y3, i = 25, delta;
      do {
        var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
        phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y3) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
      } while (abs3(delta) > epsilon5 && --i > 0);
      return [
        x3 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
        phi2
      ];
    };
  }
});

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x3, y3) {
  return [cos2(y3) * sin2(x3), sin2(y3)];
}
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon5);
}
var init_orthographic = __esm({
  "node_modules/d3-geo/src/projection/orthographic.js"() {
    init_math3();
    init_azimuthal();
    init_projection();
    orthographicRaw.invert = azimuthalInvert(asin);
  }
});

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x3, y3) {
  var cy = cos2(y3), k = 1 + cos2(x3) * cy;
  return [cy * sin2(x3) / k, sin2(y3) / k];
}
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}
var init_stereographic = __esm({
  "node_modules/d3-geo/src/projection/stereographic.js"() {
    init_math3();
    init_azimuthal();
    init_projection();
    stereographicRaw.invert = azimuthalInvert(function(z) {
      return 2 * atan(z);
    });
  }
});

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi2) {
  return [log2(tan((halfPi3 + phi2) / 2)), -lambda];
}
function transverseMercator_default() {
  var m3 = mercatorProjection(transverseMercatorRaw), center2 = m3.center, rotate = m3.rotate;
  m3.center = function(_) {
    return arguments.length ? center2([-_[1], _[0]]) : (_ = center2(), [_[1], -_[0]]);
  };
  m3.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}
var init_transverseMercator = __esm({
  "node_modules/d3-geo/src/projection/transverseMercator.js"() {
    init_math3();
    init_mercator();
    transverseMercatorRaw.invert = function(x3, y3) {
      return [-y3, 2 * atan(exp(x3)) - halfPi3];
    };
  }
});

// node_modules/d3-geo/src/index.js
var init_src25 = __esm({
  "node_modules/d3-geo/src/index.js"() {
    init_area2();
    init_bounds();
    init_centroid();
    init_circle2();
    init_antimeridian();
    init_circle3();
    init_extent2();
    init_rectangle();
    init_contains2();
    init_distance();
    init_graticule();
    init_interpolate2();
    init_length();
    init_path2();
    init_albers();
    init_albersUsa();
    init_azimuthalEqualArea();
    init_azimuthalEquidistant();
    init_conicConformal();
    init_conicEqualArea();
    init_conicEquidistant();
    init_equalEarth();
    init_equirectangular();
    init_gnomonic();
    init_identity3();
    init_projection();
    init_mercator();
    init_naturalEarth1();
    init_orthographic();
    init_stereographic();
    init_transverseMercator();
    init_rotation();
    init_stream();
    init_transform();
  }
});

// node_modules/d3-hierarchy/src/cluster.js
function defaultSeparation(a3, b) {
  return a3.parent === b.parent ? 1 : 2;
}
function meanX(children2) {
  return children2.reduce(meanXReduce, 0) / children2.length;
}
function meanXReduce(x3, c5) {
  return x3 + c5.x;
}
function maxY(children2) {
  return 1 + children2.reduce(maxYReduce, 0);
}
function maxYReduce(y3, c5) {
  return Math.max(y3, c5.y);
}
function leafLeft(node) {
  var children2;
  while (children2 = node.children) node = children2[0];
  return node;
}
function leafRight(node) {
  var children2;
  while (children2 = node.children) node = children2[children2.length - 1];
  return node;
}
function cluster_default() {
  var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
  function cluster(root3) {
    var previousNode, x3 = 0;
    root3.eachAfter(function(node) {
      var children2 = node.children;
      if (children2) {
        node.x = meanX(children2);
        node.y = maxY(children2);
      } else {
        node.x = previousNode ? x3 += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });
    var left2 = leafLeft(root3), right2 = leafRight(root3), x06 = left2.x - separation(left2, right2) / 2, x12 = right2.x + separation(right2, left2) / 2;
    return root3.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root3.x) * dx;
      node.y = (root3.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x06) / (x12 - x06) * dx;
      node.y = (1 - (root3.y ? node.y / root3.y : 1)) * dy;
    });
  }
  cluster.separation = function(x3) {
    return arguments.length ? (separation = x3, cluster) : separation;
  };
  cluster.size = function(x3) {
    return arguments.length ? (nodeSize = false, dx = +x3[0], dy = +x3[1], cluster) : nodeSize ? null : [dx, dy];
  };
  cluster.nodeSize = function(x3) {
    return arguments.length ? (nodeSize = true, dx = +x3[0], dy = +x3[1], cluster) : nodeSize ? [dx, dy] : null;
  };
  return cluster;
}
var init_cluster = __esm({
  "node_modules/d3-hierarchy/src/cluster.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count2(node) {
  var sum3 = 0, children2 = node.children, i = children2 && children2.length;
  if (!i) sum3 = 1;
  else while (--i >= 0) sum3 += children2[i].value;
  node.value = sum3;
}
function count_default() {
  return this.eachAfter(count2);
}
var init_count = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/count.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback, that) {
  let index3 = -1;
  for (const node of this) {
    callback.call(that, node, ++index3, this);
  }
  return this;
}
var init_each2 = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/each.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node = this, nodes = [node], children2, i, index3 = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index3, this);
    if (children2 = node.children) {
      for (i = children2.length - 1; i >= 0; --i) {
        nodes.push(children2[i]);
      }
    }
  }
  return this;
}
var init_eachBefore = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/eachBefore.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node = this, nodes = [node], next = [], children2, i, n, index3 = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children2 = node.children) {
      for (i = 0, n = children2.length; i < n; ++i) {
        nodes.push(children2[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index3, this);
  }
  return this;
}
var init_eachAfter = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/eachAfter.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default2(callback, that) {
  let index3 = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index3, this)) {
      return node;
    }
  }
}
var init_find2 = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/find.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum3 = +value(node.data) || 0, children2 = node.children, i = children2 && children2.length;
    while (--i >= 0) sum3 += children2[i].value;
    node.value = sum3;
  });
}
var init_sum = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/sum.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default2(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}
var init_sort2 = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/sort.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default2(end) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a3, b) {
  if (a3 === b) return a3;
  var aNodes = a3.ancestors(), bNodes = b.ancestors(), c5 = null;
  a3 = aNodes.pop();
  b = bNodes.pop();
  while (a3 === b) {
    c5 = a3;
    a3 = aNodes.pop();
    b = bNodes.pop();
  }
  return c5;
}
var init_path3 = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/path.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}
var init_ancestors = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/ancestors.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}
var init_descendants = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/descendants.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}
var init_leaves = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/leaves.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root3 = this, links = [];
  root3.each(function(node) {
    if (node !== root3) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}
var init_links = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/links.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default2() {
  var node = this, current, next = [node], children2, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children2 = node.children) {
        for (i = 0, n = children2.length; i < n; ++i) {
          next.push(children2[i]);
        }
      }
    }
  } while (next.length);
}
var init_iterator2 = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/iterator.js"() {
  }
});

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children2) {
  if (data instanceof Map) {
    data = [void 0, data];
    if (children2 === void 0) children2 = mapChildren;
  } else if (children2 === void 0) {
    children2 = objectChildren;
  }
  var root3 = new Node(data), node, nodes = [root3], child, childs, i, n;
  while (node = nodes.pop()) {
    if ((childs = children2(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root3.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== void 0) node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
var init_hierarchy = __esm({
  "node_modules/d3-hierarchy/src/hierarchy/index.js"() {
    init_count();
    init_each2();
    init_eachBefore();
    init_eachAfter();
    init_find2();
    init_sum();
    init_sort2();
    init_path3();
    init_ancestors();
    init_descendants();
    init_leaves();
    init_links();
    init_iterator2();
    Node.prototype = hierarchy.prototype = {
      constructor: Node,
      count: count_default,
      each: each_default2,
      eachAfter: eachAfter_default,
      eachBefore: eachBefore_default,
      find: find_default2,
      sum: sum_default,
      sort: sort_default2,
      path: path_default2,
      ancestors: ancestors_default,
      descendants: descendants_default,
      leaves: leaves_default,
      links: links_default,
      copy: node_copy,
      [Symbol.iterator]: iterator_default2
    };
  }
});

// node_modules/d3-hierarchy/src/accessors.js
function optional(f) {
  return f == null ? null : required(f);
}
function required(f) {
  if (typeof f !== "function") throw new Error();
  return f;
}
var init_accessors = __esm({
  "node_modules/d3-hierarchy/src/accessors.js"() {
  }
});

// node_modules/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}
function constant_default8(x3) {
  return function() {
    return x3;
  };
}
var init_constant8 = __esm({
  "node_modules/d3-hierarchy/src/constant.js"() {
  }
});

// node_modules/d3-hierarchy/src/lcg.js
function lcg_default2() {
  let s = 1;
  return () => (s = (a2 * s + c2) % m2) / m2;
}
var a2, c2, m2;
var init_lcg2 = __esm({
  "node_modules/d3-hierarchy/src/lcg.js"() {
    a2 = 1664525;
    c2 = 1013904223;
    m2 = 4294967296;
  }
});

// node_modules/d3-hierarchy/src/array.js
function array_default2(x3) {
  return typeof x3 === "object" && "length" in x3 ? x3 : Array.from(x3);
}
function shuffle(array3, random) {
  let m3 = array3.length, t, i;
  while (m3) {
    i = random() * m3-- | 0;
    t = array3[m3];
    array3[m3] = array3[i];
    array3[i] = t;
  }
  return array3;
}
var init_array4 = __esm({
  "node_modules/d3-hierarchy/src/array.js"() {
  }
});

// node_modules/d3-hierarchy/src/pack/enclose.js
function enclose_default(circles) {
  return packEncloseRandom(circles, lcg_default2());
}
function packEncloseRandom(circles, random) {
  var i = 0, n = (circles = shuffle(Array.from(circles), random)).length, B2 = [], p, e;
  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B2 = extendBasis(B2, p)), i = 0;
  }
  return e;
}
function extendBasis(B2, p) {
  var i, j;
  if (enclosesWeakAll(p, B2)) return [p];
  for (i = 0; i < B2.length; ++i) {
    if (enclosesNot(p, B2[i]) && enclosesWeakAll(encloseBasis2(B2[i], p), B2)) {
      return [B2[i], p];
    }
  }
  for (i = 0; i < B2.length - 1; ++i) {
    for (j = i + 1; j < B2.length; ++j) {
      if (enclosesNot(encloseBasis2(B2[i], B2[j]), p) && enclosesNot(encloseBasis2(B2[i], p), B2[j]) && enclosesNot(encloseBasis2(B2[j], p), B2[i]) && enclosesWeakAll(encloseBasis3(B2[i], B2[j], p), B2)) {
        return [B2[i], B2[j], p];
      }
    }
  }
  throw new Error();
}
function enclosesNot(a3, b) {
  var dr = a3.r - b.r, dx = b.x - a3.x, dy = b.y - a3.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function enclosesWeak(a3, b) {
  var dr = a3.r - b.r + Math.max(a3.r, b.r, 1) * 1e-9, dx = b.x - a3.x, dy = b.y - a3.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function enclosesWeakAll(a3, B2) {
  for (var i = 0; i < B2.length; ++i) {
    if (!enclosesWeak(a3, B2[i])) {
      return false;
    }
  }
  return true;
}
function encloseBasis(B2) {
  switch (B2.length) {
    case 1:
      return encloseBasis1(B2[0]);
    case 2:
      return encloseBasis2(B2[0], B2[1]);
    case 3:
      return encloseBasis3(B2[0], B2[1], B2[2]);
  }
}
function encloseBasis1(a3) {
  return {
    x: a3.x,
    y: a3.y,
    r: a3.r
  };
}
function encloseBasis2(a3, b) {
  var x12 = a3.x, y12 = a3.y, r1 = a3.r, x22 = b.x, y22 = b.y, r2 = b.r, x21 = x22 - x12, y21 = y22 - y12, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x12 + x22 + x21 / l * r21) / 2,
    y: (y12 + y22 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}
function encloseBasis3(a3, b, c5) {
  var x12 = a3.x, y12 = a3.y, r1 = a3.r, x22 = b.x, y22 = b.y, r2 = b.r, x3 = c5.x, y3 = c5.y, r3 = c5.r, a22 = x12 - x22, a32 = x12 - x3, b22 = y12 - y22, b32 = y12 - y3, c22 = r2 - r1, c32 = r3 - r1, d1 = x12 * x12 + y12 * y12 - r1 * r1, d2 = d1 - x22 * x22 - y22 * y22 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab4 = a32 * b22 - a22 * b32, xa = (b22 * d3 - b32 * d2) / (ab4 * 2) - x12, xb = (b32 * c22 - b22 * c32) / ab4, ya = (a32 * d2 - a22 * d3) / (ab4 * 2) - y12, yb = (a22 * c32 - a32 * c22) / ab4, A = xb * xb + yb * yb - 1, B2 = 2 * (r1 + xa * xb + ya * yb), C = xa * xa + ya * ya - r1 * r1, r = -(Math.abs(A) > 1e-6 ? (B2 + Math.sqrt(B2 * B2 - 4 * A * C)) / (2 * A) : C / B2);
  return {
    x: x12 + xa + xb * r,
    y: y12 + ya + yb * r,
    r
  };
}
var init_enclose = __esm({
  "node_modules/d3-hierarchy/src/pack/enclose.js"() {
    init_array4();
    init_lcg2();
  }
});

// node_modules/d3-hierarchy/src/pack/siblings.js
function place(b, a3, c5) {
  var dx = b.x - a3.x, x3, a22, dy = b.y - a3.y, y3, b22, d2 = dx * dx + dy * dy;
  if (d2) {
    a22 = a3.r + c5.r, a22 *= a22;
    b22 = b.r + c5.r, b22 *= b22;
    if (a22 > b22) {
      x3 = (d2 + b22 - a22) / (2 * d2);
      y3 = Math.sqrt(Math.max(0, b22 / d2 - x3 * x3));
      c5.x = b.x - x3 * dx - y3 * dy;
      c5.y = b.y - x3 * dy + y3 * dx;
    } else {
      x3 = (d2 + a22 - b22) / (2 * d2);
      y3 = Math.sqrt(Math.max(0, a22 / d2 - x3 * x3));
      c5.x = a3.x + x3 * dx - y3 * dy;
      c5.y = a3.y + x3 * dy + y3 * dx;
    }
  } else {
    c5.x = a3.x + c5.r;
    c5.y = a3.y;
  }
}
function intersects(a3, b) {
  var dr = a3.r + b.r - 1e-6, dx = b.x - a3.x, dy = b.y - a3.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function score(node) {
  var a3 = node._, b = node.next._, ab4 = a3.r + b.r, dx = (a3.x * b.r + b.x * a3.r) / ab4, dy = (a3.y * b.r + b.y * a3.r) / ab4;
  return dx * dx + dy * dy;
}
function Node2(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}
function packSiblingsRandom(circles, random) {
  if (!(n = (circles = array_default2(circles)).length)) return 0;
  var a3, b, c5, n, aa2, ca3, i, j, k, sj, sk;
  a3 = circles[0], a3.x = 0, a3.y = 0;
  if (!(n > 1)) return a3.r;
  b = circles[1], a3.x = -b.r, b.x = a3.r, b.y = 0;
  if (!(n > 2)) return a3.r + b.r;
  place(b, a3, c5 = circles[2]);
  a3 = new Node2(a3), b = new Node2(b), c5 = new Node2(c5);
  a3.next = c5.previous = b;
  b.next = a3.previous = c5;
  c5.next = b.previous = a3;
  pack: for (i = 3; i < n; ++i) {
    place(a3._, b._, c5 = circles[i]), c5 = new Node2(c5);
    j = b.next, k = a3.previous, sj = b._.r, sk = a3._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c5._)) {
          b = j, a3.next = b, b.previous = a3, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c5._)) {
          a3 = k, a3.next = b, b.previous = a3, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);
    c5.previous = a3, c5.next = b, a3.next = b.previous = b = c5;
    aa2 = score(a3);
    while ((c5 = c5.next) !== b) {
      if ((ca3 = score(c5)) < aa2) {
        a3 = c5, aa2 = ca3;
      }
    }
    b = a3.next;
  }
  a3 = [b._], c5 = b;
  while ((c5 = c5.next) !== b) a3.push(c5._);
  c5 = packEncloseRandom(a3, random);
  for (i = 0; i < n; ++i) a3 = circles[i], a3.x -= c5.x, a3.y -= c5.y;
  return c5.r;
}
function siblings_default(circles) {
  packSiblingsRandom(circles, lcg_default2());
  return circles;
}
var init_siblings = __esm({
  "node_modules/d3-hierarchy/src/pack/siblings.js"() {
    init_array4();
    init_lcg2();
    init_enclose();
  }
});

// node_modules/d3-hierarchy/src/pack/index.js
function defaultRadius2(d) {
  return Math.sqrt(d.value);
}
function pack_default() {
  var radius = null, dx = 1, dy = 1, padding = constantZero;
  function pack(root3) {
    const random = lcg_default2();
    root3.x = dx / 2, root3.y = dy / 2;
    if (radius) {
      root3.eachBefore(radiusLeaf(radius)).eachAfter(packChildrenRandom(padding, 0.5, random)).eachBefore(translateChild(1));
    } else {
      root3.eachBefore(radiusLeaf(defaultRadius2)).eachAfter(packChildrenRandom(constantZero, 1, random)).eachAfter(packChildrenRandom(padding, root3.r / Math.min(dx, dy), random)).eachBefore(translateChild(Math.min(dx, dy) / (2 * root3.r)));
    }
    return root3;
  }
  pack.radius = function(x3) {
    return arguments.length ? (radius = optional(x3), pack) : radius;
  };
  pack.size = function(x3) {
    return arguments.length ? (dx = +x3[0], dy = +x3[1], pack) : [dx, dy];
  };
  pack.padding = function(x3) {
    return arguments.length ? (padding = typeof x3 === "function" ? x3 : constant_default8(+x3), pack) : padding;
  };
  return pack;
}
function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}
function packChildrenRandom(padding, k, random) {
  return function(node) {
    if (children2 = node.children) {
      var children2, i, n = children2.length, r = padding(node) * k || 0, e;
      if (r) for (i = 0; i < n; ++i) children2[i].r += r;
      e = packSiblingsRandom(children2, random);
      if (r) for (i = 0; i < n; ++i) children2[i].r -= r;
      node.r = e + r;
    }
  };
}
function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}
var init_pack = __esm({
  "node_modules/d3-hierarchy/src/pack/index.js"() {
    init_accessors();
    init_constant8();
    init_lcg2();
    init_siblings();
  }
});

// node_modules/d3-hierarchy/src/treemap/round.js
function round_default2(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}
var init_round = __esm({
  "node_modules/d3-hierarchy/src/treemap/round.js"() {
  }
});

// node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x12 - x06) / parent.value;
  while (++i < n) {
    node = nodes[i], node.y0 = y06, node.y1 = y12;
    node.x0 = x06, node.x1 = x06 += node.value * k;
  }
}
var init_dice = __esm({
  "node_modules/d3-hierarchy/src/treemap/dice.js"() {
  }
});

// node_modules/d3-hierarchy/src/partition.js
function partition_default() {
  var dx = 1, dy = 1, padding = 0, round = false;
  function partition(root3) {
    var n = root3.height + 1;
    root3.x0 = root3.y0 = padding;
    root3.x1 = dx;
    root3.y1 = dy / n;
    root3.eachBefore(positionNode(dy, n));
    if (round) root3.eachBefore(round_default2);
    return root3;
  }
  function positionNode(dy2, n) {
    return function(node) {
      if (node.children) {
        dice_default(node, node.x0, dy2 * (node.depth + 1) / n, node.x1, dy2 * (node.depth + 2) / n);
      }
      var x06 = node.x0, y06 = node.y0, x12 = node.x1 - padding, y12 = node.y1 - padding;
      if (x12 < x06) x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06) y06 = y12 = (y06 + y12) / 2;
      node.x0 = x06;
      node.y0 = y06;
      node.x1 = x12;
      node.y1 = y12;
    };
  }
  partition.round = function(x3) {
    return arguments.length ? (round = !!x3, partition) : round;
  };
  partition.size = function(x3) {
    return arguments.length ? (dx = +x3[0], dy = +x3[1], partition) : [dx, dy];
  };
  partition.padding = function(x3) {
    return arguments.length ? (padding = +x3, partition) : padding;
  };
  return partition;
}
var init_partition = __esm({
  "node_modules/d3-hierarchy/src/partition.js"() {
    init_round();
    init_dice();
  }
});

// node_modules/d3-hierarchy/src/stratify.js
function defaultId(d) {
  return d.id;
}
function defaultParentId(d) {
  return d.parentId;
}
function stratify_default() {
  var id2 = defaultId, parentId = defaultParentId, path2;
  function stratify(data) {
    var nodes = Array.from(data), currentId = id2, currentParentId = parentId, n, d, i, root3, parent, node, nodeId, nodeKey, nodeByKey = /* @__PURE__ */ new Map();
    if (path2 != null) {
      const I = nodes.map((d2, i2) => normalize(path2(d2, i2, data)));
      const P = I.map(parentof);
      const S = new Set(I).add("");
      for (const i2 of P) {
        if (!S.has(i2)) {
          S.add(i2);
          I.push(i2);
          P.push(parentof(i2));
          nodes.push(imputed);
        }
      }
      currentId = (_, i2) => I[i2];
      currentParentId = (_, i2) => P[i2];
    }
    for (i = 0, n = nodes.length; i < n; ++i) {
      d = nodes[i], node = nodes[i] = new Node(d);
      if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
        nodeKey = node.id = nodeId;
        nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
      }
      if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) {
        node.parent = nodeId;
      }
    }
    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (nodeId = node.parent) {
        parent = nodeByKey.get(nodeId);
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      } else {
        if (root3) throw new Error("multiple roots");
        root3 = node;
      }
    }
    if (!root3) throw new Error("no root");
    if (path2 != null) {
      while (root3.data === imputed && root3.children.length === 1) {
        root3 = root3.children[0], --n;
      }
      for (let i2 = nodes.length - 1; i2 >= 0; --i2) {
        node = nodes[i2];
        if (node.data !== imputed) break;
        node.data = null;
      }
    }
    root3.parent = preroot;
    root3.eachBefore(function(node2) {
      node2.depth = node2.parent.depth + 1;
      --n;
    }).eachBefore(computeHeight);
    root3.parent = null;
    if (n > 0) throw new Error("cycle");
    return root3;
  }
  stratify.id = function(x3) {
    return arguments.length ? (id2 = optional(x3), stratify) : id2;
  };
  stratify.parentId = function(x3) {
    return arguments.length ? (parentId = optional(x3), stratify) : parentId;
  };
  stratify.path = function(x3) {
    return arguments.length ? (path2 = optional(x3), stratify) : path2;
  };
  return stratify;
}
function normalize(path2) {
  path2 = `${path2}`;
  let i = path2.length;
  if (slash(path2, i - 1) && !slash(path2, i - 2)) path2 = path2.slice(0, -1);
  return path2[0] === "/" ? path2 : `/${path2}`;
}
function parentof(path2) {
  let i = path2.length;
  if (i < 2) return "";
  while (--i > 1) if (slash(path2, i)) break;
  return path2.slice(0, i);
}
function slash(path2, i) {
  if (path2[i] === "/") {
    let k = 0;
    while (i > 0 && path2[--i] === "\\") ++k;
    if ((k & 1) === 0) return true;
  }
  return false;
}
var preroot, ambiguous, imputed;
var init_stratify = __esm({
  "node_modules/d3-hierarchy/src/stratify.js"() {
    init_accessors();
    init_hierarchy();
    preroot = { depth: -1 };
    ambiguous = {};
    imputed = {};
  }
});

// node_modules/d3-hierarchy/src/tree.js
function defaultSeparation2(a3, b) {
  return a3.parent === b.parent ? 1 : 2;
}
function nextLeft(v2) {
  var children2 = v2.children;
  return children2 ? children2[0] : v2.t;
}
function nextRight(v2) {
  var children2 = v2.children;
  return children2 ? children2[children2.length - 1] : v2.t;
}
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}
function executeShifts(v2) {
  var shift = 0, change = 0, children2 = v2.children, i = children2.length, w;
  while (--i >= 0) {
    w = children2[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}
function nextAncestor(vim, v2, ancestor) {
  return vim.a.parent === v2.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i;
}
function treeRoot(root3) {
  var tree = new TreeNode(root3, 0), node, nodes = [tree], child, children2, i, n;
  while (node = nodes.pop()) {
    if (children2 = node._.children) {
      node.children = new Array(n = children2.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children2[i], i));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}
function tree_default() {
  var separation = defaultSeparation2, dx = 1, dy = 1, nodeSize = null;
  function tree(root3) {
    var t = treeRoot(root3);
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);
    if (nodeSize) root3.eachBefore(sizeNode);
    else {
      var left2 = root3, right2 = root3, bottom2 = root3;
      root3.eachBefore(function(node) {
        if (node.x < left2.x) left2 = node;
        if (node.x > right2.x) right2 = node;
        if (node.depth > bottom2.depth) bottom2 = node;
      });
      var s = left2 === right2 ? 1 : separation(left2, right2) / 2, tx = s - left2.x, kx = dx / (right2.x + s + tx), ky = dy / (bottom2.depth || 1);
      root3.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }
    return root3;
  }
  function firstWalk(v2) {
    var children2 = v2.children, siblings = v2.parent.children, w = v2.i ? siblings[v2.i - 1] : null;
    if (children2) {
      executeShifts(v2);
      var midpoint = (children2[0].z + children2[children2.length - 1].z) / 2;
      if (w) {
        v2.z = w.z + separation(v2._, w._);
        v2.m = v2.z - midpoint;
      } else {
        v2.z = midpoint;
      }
    } else if (w) {
      v2.z = w.z + separation(v2._, w._);
    }
    v2.parent.A = apportion(v2, w, v2.parent.A || siblings[0]);
  }
  function secondWalk(v2) {
    v2._.x = v2.z + v2.parent.m;
    v2.m += v2.parent.m;
  }
  function apportion(v2, w, ancestor) {
    if (w) {
      var vip = v2, vop = v2, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v2;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v2, ancestor), v2, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v2;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function(x3) {
    return arguments.length ? (separation = x3, tree) : separation;
  };
  tree.size = function(x3) {
    return arguments.length ? (nodeSize = false, dx = +x3[0], dy = +x3[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function(x3) {
    return arguments.length ? (nodeSize = true, dx = +x3[0], dy = +x3[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}
var init_tree = __esm({
  "node_modules/d3-hierarchy/src/tree.js"() {
    init_hierarchy();
    TreeNode.prototype = Object.create(Node.prototype);
  }
});

// node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y12 - y06) / parent.value;
  while (++i < n) {
    node = nodes[i], node.x0 = x06, node.x1 = x12;
    node.y0 = y06, node.y1 = y06 += node.value * k;
  }
}
var init_slice = __esm({
  "node_modules/d3-hierarchy/src/treemap/slice.js"() {
  }
});

// node_modules/d3-hierarchy/src/treemap/squarify.js
function squarifyRatio(ratio, parent, x06, y06, x12, y12) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n) {
    dx = x12 - x06, dy = y12 - y06;
    do
      sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
    if (row.dice) dice_default(row, x06, y06, x12, value ? y06 += dy * sumValue / value : y12);
    else slice_default(row, x06, y06, value ? x06 += dx * sumValue / value : x12, y12);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
var phi, squarify_default;
var init_squarify = __esm({
  "node_modules/d3-hierarchy/src/treemap/squarify.js"() {
    init_dice();
    init_slice();
    phi = (1 + Math.sqrt(5)) / 2;
    squarify_default = function custom10(ratio) {
      function squarify(parent, x06, y06, x12, y12) {
        squarifyRatio(ratio, parent, x06, y06, x12, y12);
      }
      squarify.ratio = function(x3) {
        return custom10((x3 = +x3) > 1 ? x3 : 1);
      };
      return squarify;
    }(phi);
  }
});

// node_modules/d3-hierarchy/src/treemap/index.js
function treemap_default() {
  var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
  function treemap(root3) {
    root3.x0 = root3.y0 = 0;
    root3.x1 = dx;
    root3.y1 = dy;
    root3.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root3.eachBefore(round_default2);
    return root3;
  }
  function positionNode(node) {
    var p = paddingStack[node.depth], x06 = node.x0 + p, y06 = node.y0 + p, x12 = node.x1 - p, y12 = node.y1 - p;
    if (x12 < x06) x06 = x12 = (x06 + x12) / 2;
    if (y12 < y06) y06 = y12 = (y06 + y12) / 2;
    node.x0 = x06;
    node.y0 = y06;
    node.x1 = x12;
    node.y1 = y12;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x06 += paddingLeft(node) - p;
      y06 += paddingTop(node) - p;
      x12 -= paddingRight(node) - p;
      y12 -= paddingBottom(node) - p;
      if (x12 < x06) x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06) y06 = y12 = (y06 + y12) / 2;
      tile(node, x06, y06, x12, y12);
    }
  }
  treemap.round = function(x3) {
    return arguments.length ? (round = !!x3, treemap) : round;
  };
  treemap.size = function(x3) {
    return arguments.length ? (dx = +x3[0], dy = +x3[1], treemap) : [dx, dy];
  };
  treemap.tile = function(x3) {
    return arguments.length ? (tile = required(x3), treemap) : tile;
  };
  treemap.padding = function(x3) {
    return arguments.length ? treemap.paddingInner(x3).paddingOuter(x3) : treemap.paddingInner();
  };
  treemap.paddingInner = function(x3) {
    return arguments.length ? (paddingInner = typeof x3 === "function" ? x3 : constant_default8(+x3), treemap) : paddingInner;
  };
  treemap.paddingOuter = function(x3) {
    return arguments.length ? treemap.paddingTop(x3).paddingRight(x3).paddingBottom(x3).paddingLeft(x3) : treemap.paddingTop();
  };
  treemap.paddingTop = function(x3) {
    return arguments.length ? (paddingTop = typeof x3 === "function" ? x3 : constant_default8(+x3), treemap) : paddingTop;
  };
  treemap.paddingRight = function(x3) {
    return arguments.length ? (paddingRight = typeof x3 === "function" ? x3 : constant_default8(+x3), treemap) : paddingRight;
  };
  treemap.paddingBottom = function(x3) {
    return arguments.length ? (paddingBottom = typeof x3 === "function" ? x3 : constant_default8(+x3), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function(x3) {
    return arguments.length ? (paddingLeft = typeof x3 === "function" ? x3 : constant_default8(+x3), treemap) : paddingLeft;
  };
  return treemap;
}
var init_treemap = __esm({
  "node_modules/d3-hierarchy/src/treemap/index.js"() {
    init_round();
    init_squarify();
    init_accessors();
    init_constant8();
  }
});

// node_modules/d3-hierarchy/src/treemap/binary.js
function binary_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, i, n = nodes.length, sum3, sums = new Array(n + 1);
  for (sums[0] = sum3 = i = 0; i < n; ++i) {
    sums[i + 1] = sum3 += nodes[i].value;
  }
  partition(0, n, parent.value, x06, y06, x12, y12);
  function partition(i2, j, value, x07, y07, x13, y13) {
    if (i2 >= j - 1) {
      var node = nodes[i2];
      node.x0 = x07, node.y0 = y07;
      node.x1 = x13, node.y1 = y13;
      return;
    }
    var valueOffset = sums[i2], valueTarget = value / 2 + valueOffset, k = i2 + 1, hi = j - 1;
    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }
    if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i2 + 1 < k) --k;
    var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
    if (x13 - x07 > y13 - y07) {
      var xk = value ? (x07 * valueRight + x13 * valueLeft) / value : x13;
      partition(i2, k, valueLeft, x07, y07, xk, y13);
      partition(k, j, valueRight, xk, y07, x13, y13);
    } else {
      var yk = value ? (y07 * valueRight + y13 * valueLeft) / value : y13;
      partition(i2, k, valueLeft, x07, y07, x13, yk);
      partition(k, j, valueRight, x07, yk, x13, y13);
    }
  }
}
var init_binary = __esm({
  "node_modules/d3-hierarchy/src/treemap/binary.js"() {
  }
});

// node_modules/d3-hierarchy/src/treemap/sliceDice.js
function sliceDice_default(parent, x06, y06, x12, y12) {
  (parent.depth & 1 ? slice_default : dice_default)(parent, x06, y06, x12, y12);
}
var init_sliceDice = __esm({
  "node_modules/d3-hierarchy/src/treemap/sliceDice.js"() {
    init_dice();
    init_slice();
  }
});

// node_modules/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default;
var init_resquarify = __esm({
  "node_modules/d3-hierarchy/src/treemap/resquarify.js"() {
    init_dice();
    init_slice();
    init_squarify();
    resquarify_default = function custom11(ratio) {
      function resquarify(parent, x06, y06, x12, y12) {
        if ((rows = parent._squarify) && rows.ratio === ratio) {
          var rows, row, nodes, i, j = -1, n, m3 = rows.length, value = parent.value;
          while (++j < m3) {
            row = rows[j], nodes = row.children;
            for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
            if (row.dice) dice_default(row, x06, y06, x12, value ? y06 += (y12 - y06) * row.value / value : y12);
            else slice_default(row, x06, y06, value ? x06 += (x12 - x06) * row.value / value : x12, y12);
            value -= row.value;
          }
        } else {
          parent._squarify = rows = squarifyRatio(ratio, parent, x06, y06, x12, y12);
          rows.ratio = ratio;
        }
      }
      resquarify.ratio = function(x3) {
        return custom11((x3 = +x3) > 1 ? x3 : 1);
      };
      return resquarify;
    }(phi);
  }
});

// node_modules/d3-hierarchy/src/index.js
var init_src26 = __esm({
  "node_modules/d3-hierarchy/src/index.js"() {
    init_cluster();
    init_hierarchy();
    init_pack();
    init_siblings();
    init_enclose();
    init_partition();
    init_stratify();
    init_tree();
    init_treemap();
    init_binary();
    init_dice();
    init_slice();
    init_sliceDice();
    init_squarify();
    init_resquarify();
  }
});

// node_modules/d3-polygon/src/area.js
function area_default5(polygon) {
  var i = -1, n = polygon.length, a3, b = polygon[n - 1], area = 0;
  while (++i < n) {
    a3 = b;
    b = polygon[i];
    area += a3[1] * b[0] - a3[0] * b[1];
  }
  return area / 2;
}
var init_area4 = __esm({
  "node_modules/d3-polygon/src/area.js"() {
  }
});

// node_modules/d3-polygon/src/centroid.js
function centroid_default3(polygon) {
  var i = -1, n = polygon.length, x3 = 0, y3 = 0, a3, b = polygon[n - 1], c5, k = 0;
  while (++i < n) {
    a3 = b;
    b = polygon[i];
    k += c5 = a3[0] * b[1] - b[0] * a3[1];
    x3 += (a3[0] + b[0]) * c5;
    y3 += (a3[1] + b[1]) * c5;
  }
  return k *= 3, [x3 / k, y3 / k];
}
var init_centroid3 = __esm({
  "node_modules/d3-polygon/src/centroid.js"() {
  }
});

// node_modules/d3-polygon/src/cross.js
function cross_default2(a3, b, c5) {
  return (b[0] - a3[0]) * (c5[1] - a3[1]) - (b[1] - a3[1]) * (c5[0] - a3[0]);
}
var init_cross = __esm({
  "node_modules/d3-polygon/src/cross.js"() {
  }
});

// node_modules/d3-polygon/src/hull.js
function lexicographicOrder(a3, b) {
  return a3[0] - b[0] || a3[1] - b[1];
}
function computeUpperHullIndexes(points) {
  const n = points.length, indexes2 = [0, 1];
  let size = 2, i;
  for (i = 2; i < n; ++i) {
    while (size > 1 && cross_default2(points[indexes2[size - 2]], points[indexes2[size - 1]], points[i]) <= 0) --size;
    indexes2[size++] = i;
  }
  return indexes2.slice(0, size);
}
function hull_default(points) {
  if ((n = points.length) < 3) return null;
  var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
  var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
  var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
  return hull;
}
var init_hull = __esm({
  "node_modules/d3-polygon/src/hull.js"() {
    init_cross();
  }
});

// node_modules/d3-polygon/src/contains.js
function contains_default3(polygon, point2) {
  var n = polygon.length, p = polygon[n - 1], x3 = point2[0], y3 = point2[1], x06 = p[0], y06 = p[1], x12, y12, inside = false;
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x12 = p[0], y12 = p[1];
    if (y12 > y3 !== y06 > y3 && x3 < (x06 - x12) * (y3 - y12) / (y06 - y12) + x12) inside = !inside;
    x06 = x12, y06 = y12;
  }
  return inside;
}
var init_contains3 = __esm({
  "node_modules/d3-polygon/src/contains.js"() {
  }
});

// node_modules/d3-polygon/src/length.js
function length_default2(polygon) {
  var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.hypot(xa, ya);
  }
  return perimeter;
}
var init_length2 = __esm({
  "node_modules/d3-polygon/src/length.js"() {
  }
});

// node_modules/d3-polygon/src/index.js
var init_src27 = __esm({
  "node_modules/d3-polygon/src/index.js"() {
    init_area4();
    init_centroid3();
    init_hull();
    init_contains3();
    init_length2();
  }
});

// node_modules/d3-random/src/defaultSource.js
var defaultSource_default;
var init_defaultSource = __esm({
  "node_modules/d3-random/src/defaultSource.js"() {
    defaultSource_default = Math.random;
  }
});

// node_modules/d3-random/src/uniform.js
var uniform_default;
var init_uniform = __esm({
  "node_modules/d3-random/src/uniform.js"() {
    init_defaultSource();
    uniform_default = function sourceRandomUniform(source) {
      function randomUniform(min3, max4) {
        min3 = min3 == null ? 0 : +min3;
        max4 = max4 == null ? 1 : +max4;
        if (arguments.length === 1) max4 = min3, min3 = 0;
        else max4 -= min3;
        return function() {
          return source() * max4 + min3;
        };
      }
      randomUniform.source = sourceRandomUniform;
      return randomUniform;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/int.js
var int_default;
var init_int = __esm({
  "node_modules/d3-random/src/int.js"() {
    init_defaultSource();
    int_default = function sourceRandomInt(source) {
      function randomInt(min3, max4) {
        if (arguments.length < 2) max4 = min3, min3 = 0;
        min3 = Math.floor(min3);
        max4 = Math.floor(max4) - min3;
        return function() {
          return Math.floor(source() * max4 + min3);
        };
      }
      randomInt.source = sourceRandomInt;
      return randomInt;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/normal.js
var normal_default;
var init_normal = __esm({
  "node_modules/d3-random/src/normal.js"() {
    init_defaultSource();
    normal_default = function sourceRandomNormal(source) {
      function randomNormal(mu, sigma) {
        var x3, r;
        mu = mu == null ? 0 : +mu;
        sigma = sigma == null ? 1 : +sigma;
        return function() {
          var y3;
          if (x3 != null) y3 = x3, x3 = null;
          else do {
            x3 = source() * 2 - 1;
            y3 = source() * 2 - 1;
            r = x3 * x3 + y3 * y3;
          } while (!r || r > 1);
          return mu + sigma * y3 * Math.sqrt(-2 * Math.log(r) / r);
        };
      }
      randomNormal.source = sourceRandomNormal;
      return randomNormal;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/logNormal.js
var logNormal_default;
var init_logNormal = __esm({
  "node_modules/d3-random/src/logNormal.js"() {
    init_defaultSource();
    init_normal();
    logNormal_default = function sourceRandomLogNormal(source) {
      var N = normal_default.source(source);
      function randomLogNormal() {
        var randomNormal = N.apply(this, arguments);
        return function() {
          return Math.exp(randomNormal());
        };
      }
      randomLogNormal.source = sourceRandomLogNormal;
      return randomLogNormal;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/irwinHall.js
var irwinHall_default;
var init_irwinHall = __esm({
  "node_modules/d3-random/src/irwinHall.js"() {
    init_defaultSource();
    irwinHall_default = function sourceRandomIrwinHall(source) {
      function randomIrwinHall(n) {
        if ((n = +n) <= 0) return () => 0;
        return function() {
          for (var sum3 = 0, i = n; i > 1; --i) sum3 += source();
          return sum3 + i * source();
        };
      }
      randomIrwinHall.source = sourceRandomIrwinHall;
      return randomIrwinHall;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/bates.js
var bates_default;
var init_bates = __esm({
  "node_modules/d3-random/src/bates.js"() {
    init_defaultSource();
    init_irwinHall();
    bates_default = function sourceRandomBates(source) {
      var I = irwinHall_default.source(source);
      function randomBates(n) {
        if ((n = +n) === 0) return source;
        var randomIrwinHall = I(n);
        return function() {
          return randomIrwinHall() / n;
        };
      }
      randomBates.source = sourceRandomBates;
      return randomBates;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/exponential.js
var exponential_default;
var init_exponential = __esm({
  "node_modules/d3-random/src/exponential.js"() {
    init_defaultSource();
    exponential_default = function sourceRandomExponential(source) {
      function randomExponential(lambda) {
        return function() {
          return -Math.log1p(-source()) / lambda;
        };
      }
      randomExponential.source = sourceRandomExponential;
      return randomExponential;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/pareto.js
var pareto_default;
var init_pareto = __esm({
  "node_modules/d3-random/src/pareto.js"() {
    init_defaultSource();
    pareto_default = function sourceRandomPareto(source) {
      function randomPareto(alpha) {
        if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
        alpha = 1 / -alpha;
        return function() {
          return Math.pow(1 - source(), alpha);
        };
      }
      randomPareto.source = sourceRandomPareto;
      return randomPareto;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/bernoulli.js
var bernoulli_default;
var init_bernoulli = __esm({
  "node_modules/d3-random/src/bernoulli.js"() {
    init_defaultSource();
    bernoulli_default = function sourceRandomBernoulli(source) {
      function randomBernoulli(p) {
        if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
        return function() {
          return Math.floor(source() + p);
        };
      }
      randomBernoulli.source = sourceRandomBernoulli;
      return randomBernoulli;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/geometric.js
var geometric_default;
var init_geometric = __esm({
  "node_modules/d3-random/src/geometric.js"() {
    init_defaultSource();
    geometric_default = function sourceRandomGeometric(source) {
      function randomGeometric(p) {
        if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
        if (p === 0) return () => Infinity;
        if (p === 1) return () => 1;
        p = Math.log1p(-p);
        return function() {
          return 1 + Math.floor(Math.log1p(-source()) / p);
        };
      }
      randomGeometric.source = sourceRandomGeometric;
      return randomGeometric;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/gamma.js
var gamma_default;
var init_gamma = __esm({
  "node_modules/d3-random/src/gamma.js"() {
    init_defaultSource();
    init_normal();
    gamma_default = function sourceRandomGamma(source) {
      var randomNormal = normal_default.source(source)();
      function randomGamma(k, theta) {
        if ((k = +k) < 0) throw new RangeError("invalid k");
        if (k === 0) return () => 0;
        theta = theta == null ? 1 : +theta;
        if (k === 1) return () => -Math.log1p(-source()) * theta;
        var d = (k < 1 ? k + 1 : k) - 1 / 3, c5 = 1 / (3 * Math.sqrt(d)), multiplier = k < 1 ? () => Math.pow(source(), 1 / k) : () => 1;
        return function() {
          do {
            do {
              var x3 = randomNormal(), v2 = 1 + c5 * x3;
            } while (v2 <= 0);
            v2 *= v2 * v2;
            var u4 = 1 - source();
          } while (u4 >= 1 - 0.0331 * x3 * x3 * x3 * x3 && Math.log(u4) >= 0.5 * x3 * x3 + d * (1 - v2 + Math.log(v2)));
          return d * v2 * multiplier() * theta;
        };
      }
      randomGamma.source = sourceRandomGamma;
      return randomGamma;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/beta.js
var beta_default;
var init_beta = __esm({
  "node_modules/d3-random/src/beta.js"() {
    init_defaultSource();
    init_gamma();
    beta_default = function sourceRandomBeta(source) {
      var G = gamma_default.source(source);
      function randomBeta(alpha, beta) {
        var X3 = G(alpha), Y3 = G(beta);
        return function() {
          var x3 = X3();
          return x3 === 0 ? 0 : x3 / (x3 + Y3());
        };
      }
      randomBeta.source = sourceRandomBeta;
      return randomBeta;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/binomial.js
var binomial_default;
var init_binomial = __esm({
  "node_modules/d3-random/src/binomial.js"() {
    init_defaultSource();
    init_beta();
    init_geometric();
    binomial_default = function sourceRandomBinomial(source) {
      var G = geometric_default.source(source), B2 = beta_default.source(source);
      function randomBinomial(n, p) {
        n = +n;
        if ((p = +p) >= 1) return () => n;
        if (p <= 0) return () => 0;
        return function() {
          var acc = 0, nn = n, pp = p;
          while (nn * pp > 16 && nn * (1 - pp) > 16) {
            var i = Math.floor((nn + 1) * pp), y3 = B2(i, nn - i + 1)();
            if (y3 <= pp) {
              acc += i;
              nn -= i;
              pp = (pp - y3) / (1 - y3);
            } else {
              nn = i - 1;
              pp /= y3;
            }
          }
          var sign2 = pp < 0.5, pFinal = sign2 ? pp : 1 - pp, g = G(pFinal);
          for (var s = g(), k = 0; s <= nn; ++k) s += g();
          return acc + (sign2 ? k : nn - k);
        };
      }
      randomBinomial.source = sourceRandomBinomial;
      return randomBinomial;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/weibull.js
var weibull_default;
var init_weibull = __esm({
  "node_modules/d3-random/src/weibull.js"() {
    init_defaultSource();
    weibull_default = function sourceRandomWeibull(source) {
      function randomWeibull(k, a3, b) {
        var outerFunc;
        if ((k = +k) === 0) {
          outerFunc = (x3) => -Math.log(x3);
        } else {
          k = 1 / k;
          outerFunc = (x3) => Math.pow(x3, k);
        }
        a3 = a3 == null ? 0 : +a3;
        b = b == null ? 1 : +b;
        return function() {
          return a3 + b * outerFunc(-Math.log1p(-source()));
        };
      }
      randomWeibull.source = sourceRandomWeibull;
      return randomWeibull;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/cauchy.js
var cauchy_default;
var init_cauchy = __esm({
  "node_modules/d3-random/src/cauchy.js"() {
    init_defaultSource();
    cauchy_default = function sourceRandomCauchy(source) {
      function randomCauchy(a3, b) {
        a3 = a3 == null ? 0 : +a3;
        b = b == null ? 1 : +b;
        return function() {
          return a3 + b * Math.tan(Math.PI * source());
        };
      }
      randomCauchy.source = sourceRandomCauchy;
      return randomCauchy;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/logistic.js
var logistic_default;
var init_logistic = __esm({
  "node_modules/d3-random/src/logistic.js"() {
    init_defaultSource();
    logistic_default = function sourceRandomLogistic(source) {
      function randomLogistic(a3, b) {
        a3 = a3 == null ? 0 : +a3;
        b = b == null ? 1 : +b;
        return function() {
          var u4 = source();
          return a3 + b * Math.log(u4 / (1 - u4));
        };
      }
      randomLogistic.source = sourceRandomLogistic;
      return randomLogistic;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/poisson.js
var poisson_default;
var init_poisson = __esm({
  "node_modules/d3-random/src/poisson.js"() {
    init_defaultSource();
    init_binomial();
    init_gamma();
    poisson_default = function sourceRandomPoisson(source) {
      var G = gamma_default.source(source), B2 = binomial_default.source(source);
      function randomPoisson(lambda) {
        return function() {
          var acc = 0, l = lambda;
          while (l > 16) {
            var n = Math.floor(0.875 * l), t = G(n)();
            if (t > l) return acc + B2(n - 1, l / t)();
            acc += n;
            l -= t;
          }
          for (var s = -Math.log1p(-source()), k = 0; s <= l; ++k) s -= Math.log1p(-source());
          return acc + k;
        };
      }
      randomPoisson.source = sourceRandomPoisson;
      return randomPoisson;
    }(defaultSource_default);
  }
});

// node_modules/d3-random/src/lcg.js
function lcg(seed = Math.random()) {
  let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
  return () => (state = mul * state + inc | 0, eps * (state >>> 0));
}
var mul, inc, eps;
var init_lcg3 = __esm({
  "node_modules/d3-random/src/lcg.js"() {
    mul = 1664525;
    inc = 1013904223;
    eps = 1 / 4294967296;
  }
});

// node_modules/d3-random/src/index.js
var init_src28 = __esm({
  "node_modules/d3-random/src/index.js"() {
    init_uniform();
    init_int();
    init_normal();
    init_logNormal();
    init_bates();
    init_irwinHall();
    init_exponential();
    init_pareto();
    init_bernoulli();
    init_geometric();
    init_binomial();
    init_gamma();
    init_beta();
    init_weibull();
    init_cauchy();
    init_logistic();
    init_poisson();
    init_lcg3();
  }
});

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}
var init_colors = __esm({
  "node_modules/d3-scale-chromatic/src/colors.js"() {
  }
});

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default;
var init_category10 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/category10.js"() {
    init_colors();
    category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default;
var init_Accent = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Accent.js"() {
    init_colors();
    Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default;
var init_Dark2 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Dark2.js"() {
    init_colors();
    Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/observable10.js
var observable10_default;
var init_observable10 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/observable10.js"() {
    init_colors();
    observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default;
var init_Paired = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Paired.js"() {
    init_colors();
    Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default;
var init_Pastel1 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Pastel1.js"() {
    init_colors();
    Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default;
var init_Pastel2 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Pastel2.js"() {
    init_colors();
    Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default;
var init_Set1 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Set1.js"() {
    init_colors();
    Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default;
var init_Set2 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Set2.js"() {
    init_colors();
    Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default;
var init_Set3 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Set3.js"() {
    init_colors();
    Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
  }
});

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default;
var init_Tableau10 = __esm({
  "node_modules/d3-scale-chromatic/src/categorical/Tableau10.js"() {
    init_colors();
    Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
  }
});

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default;
var init_ramp = __esm({
  "node_modules/d3-scale-chromatic/src/ramp.js"() {
    init_src3();
    ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme, BrBG_default;
var init_BrBG = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/BrBG.js"() {
    init_colors();
    init_ramp();
    scheme = new Array(3).concat(
      "d8b365f5f5f55ab4ac",
      "a6611adfc27d80cdc1018571",
      "a6611adfc27df5f5f580cdc1018571",
      "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
      "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
      "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
      "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
      "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
      "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
    ).map(colors_default);
    BrBG_default = ramp_default(scheme);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2, PRGn_default;
var init_PRGn = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/PRGn.js"() {
    init_colors();
    init_ramp();
    scheme2 = new Array(3).concat(
      "af8dc3f7f7f77fbf7b",
      "7b3294c2a5cfa6dba0008837",
      "7b3294c2a5cff7f7f7a6dba0008837",
      "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
      "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
      "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
      "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
      "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
      "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
    ).map(colors_default);
    PRGn_default = ramp_default(scheme2);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3, PiYG_default;
var init_PiYG = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/PiYG.js"() {
    init_colors();
    init_ramp();
    scheme3 = new Array(3).concat(
      "e9a3c9f7f7f7a1d76a",
      "d01c8bf1b6dab8e1864dac26",
      "d01c8bf1b6daf7f7f7b8e1864dac26",
      "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
      "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
      "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
      "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
      "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
      "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
    ).map(colors_default);
    PiYG_default = ramp_default(scheme3);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4, PuOr_default;
var init_PuOr = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/PuOr.js"() {
    init_colors();
    init_ramp();
    scheme4 = new Array(3).concat(
      "998ec3f7f7f7f1a340",
      "5e3c99b2abd2fdb863e66101",
      "5e3c99b2abd2f7f7f7fdb863e66101",
      "542788998ec3d8daebfee0b6f1a340b35806",
      "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
      "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
      "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
      "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
      "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
    ).map(colors_default);
    PuOr_default = ramp_default(scheme4);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5, RdBu_default;
var init_RdBu = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/RdBu.js"() {
    init_colors();
    init_ramp();
    scheme5 = new Array(3).concat(
      "ef8a62f7f7f767a9cf",
      "ca0020f4a58292c5de0571b0",
      "ca0020f4a582f7f7f792c5de0571b0",
      "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
      "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
      "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
      "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
      "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
      "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
    ).map(colors_default);
    RdBu_default = ramp_default(scheme5);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6, RdGy_default;
var init_RdGy = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/RdGy.js"() {
    init_colors();
    init_ramp();
    scheme6 = new Array(3).concat(
      "ef8a62ffffff999999",
      "ca0020f4a582bababa404040",
      "ca0020f4a582ffffffbababa404040",
      "b2182bef8a62fddbc7e0e0e09999994d4d4d",
      "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
      "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
      "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
      "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
      "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
    ).map(colors_default);
    RdGy_default = ramp_default(scheme6);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7, RdYlBu_default;
var init_RdYlBu = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js"() {
    init_colors();
    init_ramp();
    scheme7 = new Array(3).concat(
      "fc8d59ffffbf91bfdb",
      "d7191cfdae61abd9e92c7bb6",
      "d7191cfdae61ffffbfabd9e92c7bb6",
      "d73027fc8d59fee090e0f3f891bfdb4575b4",
      "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
      "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
      "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
      "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
      "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
    ).map(colors_default);
    RdYlBu_default = ramp_default(scheme7);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8, RdYlGn_default;
var init_RdYlGn = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js"() {
    init_colors();
    init_ramp();
    scheme8 = new Array(3).concat(
      "fc8d59ffffbf91cf60",
      "d7191cfdae61a6d96a1a9641",
      "d7191cfdae61ffffbfa6d96a1a9641",
      "d73027fc8d59fee08bd9ef8b91cf601a9850",
      "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
      "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
      "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
      "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
      "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
    ).map(colors_default);
    RdYlGn_default = ramp_default(scheme8);
  }
});

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9, Spectral_default;
var init_Spectral = __esm({
  "node_modules/d3-scale-chromatic/src/diverging/Spectral.js"() {
    init_colors();
    init_ramp();
    scheme9 = new Array(3).concat(
      "fc8d59ffffbf99d594",
      "d7191cfdae61abdda42b83ba",
      "d7191cfdae61ffffbfabdda42b83ba",
      "d53e4ffc8d59fee08be6f59899d5943288bd",
      "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
      "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
      "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
      "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
      "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
    ).map(colors_default);
    Spectral_default = ramp_default(scheme9);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10, BuGn_default;
var init_BuGn = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js"() {
    init_colors();
    init_ramp();
    scheme10 = new Array(3).concat(
      "e5f5f999d8c92ca25f",
      "edf8fbb2e2e266c2a4238b45",
      "edf8fbb2e2e266c2a42ca25f006d2c",
      "edf8fbccece699d8c966c2a42ca25f006d2c",
      "edf8fbccece699d8c966c2a441ae76238b45005824",
      "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
      "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
    ).map(colors_default);
    BuGn_default = ramp_default(scheme10);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11, BuPu_default;
var init_BuPu = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js"() {
    init_colors();
    init_ramp();
    scheme11 = new Array(3).concat(
      "e0ecf49ebcda8856a7",
      "edf8fbb3cde38c96c688419d",
      "edf8fbb3cde38c96c68856a7810f7c",
      "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
      "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
      "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
      "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
    ).map(colors_default);
    BuPu_default = ramp_default(scheme11);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12, GnBu_default;
var init_GnBu = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js"() {
    init_colors();
    init_ramp();
    scheme12 = new Array(3).concat(
      "e0f3dba8ddb543a2ca",
      "f0f9e8bae4bc7bccc42b8cbe",
      "f0f9e8bae4bc7bccc443a2ca0868ac",
      "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
      "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
      "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
      "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
    ).map(colors_default);
    GnBu_default = ramp_default(scheme12);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13, OrRd_default;
var init_OrRd = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js"() {
    init_colors();
    init_ramp();
    scheme13 = new Array(3).concat(
      "fee8c8fdbb84e34a33",
      "fef0d9fdcc8afc8d59d7301f",
      "fef0d9fdcc8afc8d59e34a33b30000",
      "fef0d9fdd49efdbb84fc8d59e34a33b30000",
      "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
      "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
      "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
    ).map(colors_default);
    OrRd_default = ramp_default(scheme13);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14, PuBuGn_default;
var init_PuBuGn = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js"() {
    init_colors();
    init_ramp();
    scheme14 = new Array(3).concat(
      "ece2f0a6bddb1c9099",
      "f6eff7bdc9e167a9cf02818a",
      "f6eff7bdc9e167a9cf1c9099016c59",
      "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
      "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
      "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
      "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
    ).map(colors_default);
    PuBuGn_default = ramp_default(scheme14);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15, PuBu_default;
var init_PuBu = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js"() {
    init_colors();
    init_ramp();
    scheme15 = new Array(3).concat(
      "ece7f2a6bddb2b8cbe",
      "f1eef6bdc9e174a9cf0570b0",
      "f1eef6bdc9e174a9cf2b8cbe045a8d",
      "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
      "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
      "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
      "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
    ).map(colors_default);
    PuBu_default = ramp_default(scheme15);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16, PuRd_default;
var init_PuRd = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js"() {
    init_colors();
    init_ramp();
    scheme16 = new Array(3).concat(
      "e7e1efc994c7dd1c77",
      "f1eef6d7b5d8df65b0ce1256",
      "f1eef6d7b5d8df65b0dd1c77980043",
      "f1eef6d4b9dac994c7df65b0dd1c77980043",
      "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
      "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
      "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
    ).map(colors_default);
    PuRd_default = ramp_default(scheme16);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17, RdPu_default;
var init_RdPu = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js"() {
    init_colors();
    init_ramp();
    scheme17 = new Array(3).concat(
      "fde0ddfa9fb5c51b8a",
      "feebe2fbb4b9f768a1ae017e",
      "feebe2fbb4b9f768a1c51b8a7a0177",
      "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
      "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
      "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
      "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
    ).map(colors_default);
    RdPu_default = ramp_default(scheme17);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18, YlGnBu_default;
var init_YlGnBu = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js"() {
    init_colors();
    init_ramp();
    scheme18 = new Array(3).concat(
      "edf8b17fcdbb2c7fb8",
      "ffffcca1dab441b6c4225ea8",
      "ffffcca1dab441b6c42c7fb8253494",
      "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
      "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
      "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
      "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
    ).map(colors_default);
    YlGnBu_default = ramp_default(scheme18);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19, YlGn_default;
var init_YlGn = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js"() {
    init_colors();
    init_ramp();
    scheme19 = new Array(3).concat(
      "f7fcb9addd8e31a354",
      "ffffccc2e69978c679238443",
      "ffffccc2e69978c67931a354006837",
      "ffffccd9f0a3addd8e78c67931a354006837",
      "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
      "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
      "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
    ).map(colors_default);
    YlGn_default = ramp_default(scheme19);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20, YlOrBr_default;
var init_YlOrBr = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js"() {
    init_colors();
    init_ramp();
    scheme20 = new Array(3).concat(
      "fff7bcfec44fd95f0e",
      "ffffd4fed98efe9929cc4c02",
      "ffffd4fed98efe9929d95f0e993404",
      "ffffd4fee391fec44ffe9929d95f0e993404",
      "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
      "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
      "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
    ).map(colors_default);
    YlOrBr_default = ramp_default(scheme20);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21, YlOrRd_default;
var init_YlOrRd = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js"() {
    init_colors();
    init_ramp();
    scheme21 = new Array(3).concat(
      "ffeda0feb24cf03b20",
      "ffffb2fecc5cfd8d3ce31a1c",
      "ffffb2fecc5cfd8d3cf03b20bd0026",
      "ffffb2fed976feb24cfd8d3cf03b20bd0026",
      "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
      "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
      "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
    ).map(colors_default);
    YlOrRd_default = ramp_default(scheme21);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22, Blues_default;
var init_Blues = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-single/Blues.js"() {
    init_colors();
    init_ramp();
    scheme22 = new Array(3).concat(
      "deebf79ecae13182bd",
      "eff3ffbdd7e76baed62171b5",
      "eff3ffbdd7e76baed63182bd08519c",
      "eff3ffc6dbef9ecae16baed63182bd08519c",
      "eff3ffc6dbef9ecae16baed64292c62171b5084594",
      "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
      "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
    ).map(colors_default);
    Blues_default = ramp_default(scheme22);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23, Greens_default;
var init_Greens = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-single/Greens.js"() {
    init_colors();
    init_ramp();
    scheme23 = new Array(3).concat(
      "e5f5e0a1d99b31a354",
      "edf8e9bae4b374c476238b45",
      "edf8e9bae4b374c47631a354006d2c",
      "edf8e9c7e9c0a1d99b74c47631a354006d2c",
      "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
      "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
      "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
    ).map(colors_default);
    Greens_default = ramp_default(scheme23);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24, Greys_default;
var init_Greys = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-single/Greys.js"() {
    init_colors();
    init_ramp();
    scheme24 = new Array(3).concat(
      "f0f0f0bdbdbd636363",
      "f7f7f7cccccc969696525252",
      "f7f7f7cccccc969696636363252525",
      "f7f7f7d9d9d9bdbdbd969696636363252525",
      "f7f7f7d9d9d9bdbdbd969696737373525252252525",
      "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
      "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
    ).map(colors_default);
    Greys_default = ramp_default(scheme24);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25, Purples_default;
var init_Purples = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-single/Purples.js"() {
    init_colors();
    init_ramp();
    scheme25 = new Array(3).concat(
      "efedf5bcbddc756bb1",
      "f2f0f7cbc9e29e9ac86a51a3",
      "f2f0f7cbc9e29e9ac8756bb154278f",
      "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
      "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
      "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
      "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
    ).map(colors_default);
    Purples_default = ramp_default(scheme25);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26, Reds_default;
var init_Reds = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-single/Reds.js"() {
    init_colors();
    init_ramp();
    scheme26 = new Array(3).concat(
      "fee0d2fc9272de2d26",
      "fee5d9fcae91fb6a4acb181d",
      "fee5d9fcae91fb6a4ade2d26a50f15",
      "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
      "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
      "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
      "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
    ).map(colors_default);
    Reds_default = ramp_default(scheme26);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27, Oranges_default;
var init_Oranges = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js"() {
    init_colors();
    init_ramp();
    scheme27 = new Array(3).concat(
      "fee6cefdae6be6550d",
      "feeddefdbe85fd8d3cd94701",
      "feeddefdbe85fd8d3ce6550da63603",
      "feeddefdd0a2fdae6bfd8d3ce6550da63603",
      "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
      "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
      "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
    ).map(colors_default);
    Oranges_default = ramp_default(scheme27);
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}
var init_cividis = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js"() {
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2;
var init_cubehelix = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js"() {
    init_src2();
    init_src3();
    cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
function rainbow_default(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c3.h = 360 * t - 100;
  c3.s = 1.5 - 1.5 * ts;
  c3.l = 0.8 - 0.9 * ts;
  return c3 + "";
}
var warm, cool, c3;
var init_rainbow = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js"() {
    init_src2();
    init_src3();
    warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
    cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
    c3 = cubehelix();
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
function sinebow_default(t) {
  var x3;
  t = (0.5 - t) * Math.PI;
  c4.r = 255 * (x3 = Math.sin(t)) * x3;
  c4.g = 255 * (x3 = Math.sin(t + pi_1_3)) * x3;
  c4.b = 255 * (x3 = Math.sin(t + pi_2_3)) * x3;
  return c4 + "";
}
var c4, pi_1_3, pi_2_3;
var init_sinebow = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js"() {
    init_src2();
    c4 = rgb();
    pi_1_3 = Math.PI / 3;
    pi_2_3 = Math.PI * 2 / 3;
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}
var init_turbo = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js"() {
  }
});

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range4) {
  var n = range4.length;
  return function(t) {
    return range4[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default, magma, inferno, plasma;
var init_viridis = __esm({
  "node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js"() {
    init_colors();
    viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
    inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
    plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
  }
});

// node_modules/d3-scale-chromatic/src/index.js
var init_src29 = __esm({
  "node_modules/d3-scale-chromatic/src/index.js"() {
    init_category10();
    init_Accent();
    init_Dark2();
    init_observable10();
    init_Paired();
    init_Pastel1();
    init_Pastel2();
    init_Set1();
    init_Set2();
    init_Set3();
    init_Tableau10();
    init_BrBG();
    init_PRGn();
    init_PiYG();
    init_PuOr();
    init_RdBu();
    init_RdGy();
    init_RdYlBu();
    init_RdYlGn();
    init_Spectral();
    init_BuGn();
    init_BuPu();
    init_GnBu();
    init_OrRd();
    init_PuBuGn();
    init_PuBu();
    init_PuRd();
    init_RdPu();
    init_YlGnBu();
    init_YlGn();
    init_YlOrBr();
    init_YlOrRd();
    init_Blues();
    init_Greens();
    init_Greys();
    init_Purples();
    init_Reds();
    init_Oranges();
    init_cividis();
    init_cubehelix();
    init_rainbow();
    init_sinebow();
    init_turbo();
    init_viridis();
  }
});

// node_modules/d3-zoom/src/constant.js
var constant_default9;
var init_constant9 = __esm({
  "node_modules/d3-zoom/src/constant.js"() {
    constant_default9 = (x3) => () => x3;
  }
});

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type2, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
var init_event3 = __esm({
  "node_modules/d3-zoom/src/event.js"() {
  }
});

// node_modules/d3-zoom/src/transform.js
function Transform(k, x3, y3) {
  this.k = k;
  this.x = x3;
  this.y = y3;
}
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}
var identity2;
var init_transform2 = __esm({
  "node_modules/d3-zoom/src/transform.js"() {
    Transform.prototype = {
      constructor: Transform,
      scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
      },
      translate: function(x3, y3) {
        return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
      },
      apply: function(point2) {
        return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
      },
      applyX: function(x3) {
        return x3 * this.k + this.x;
      },
      applyY: function(y3) {
        return y3 * this.k + this.y;
      },
      invert: function(location) {
        return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
      },
      invertX: function(x3) {
        return (x3 - this.x) / this.k;
      },
      invertY: function(y3) {
        return (y3 - this.y) / this.k;
      },
      rescaleX: function(x3) {
        return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
      },
      rescaleY: function(y3) {
        return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
      },
      toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };
    identity2 = new Transform(1, 0, 0);
    transform.prototype = Transform.prototype;
  }
});

// node_modules/d3-zoom/src/noevent.js
function nopropagation3(event) {
  event.stopImmediatePropagation();
}
function noevent_default3(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
var init_noevent3 = __esm({
  "node_modules/d3-zoom/src/noevent.js"() {
  }
});

// node_modules/d3-zoom/src/zoom.js
function defaultFilter3(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent2() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable3() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent2, translateExtent) {
  var dx0 = transform2.invertX(extent2[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent2[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent2[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent2[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter3 = defaultFilter3, extent2 = defaultExtent2, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable3, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point2, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point2, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent2.apply(this, arguments), t0 = this.__zoom, p02 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p02), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale2(t0, k1), p02, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x3, y3, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x3 === "function" ? x3.apply(this, arguments) : x3,
        typeof y3 === "function" ? y3.apply(this, arguments) : y3
      ), extent2.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x3, y3, p, event) {
    zoom.transform(selection2, function() {
      var e = extent2.apply(this, arguments), t = this.__zoom, p02 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p02[0], p02[1]).scale(t.k).translate(
        typeof x3 === "function" ? -x3.apply(this, arguments) : -x3,
        typeof y3 === "function" ? -y3.apply(this, arguments) : -y3
      ), e, translateExtent);
    }, p, event);
  };
  function scale2(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p02, p1) {
    var x3 = p02[0] - p1[0] * transform2.k, y3 = p02[1] - p1[1] * transform2.k;
    return x3 === transform2.x && y3 === transform2.y ? transform2 : new Transform(transform2.k, x3, y3);
  }
  function centroid(extent3) {
    return [(+extent3[0][0] + +extent3[1][0]) / 2, (+extent3[0][1] + +extent3[1][1]) / 2];
  }
  function schedule(transition2, transform2, point2, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent2.apply(that, args), p = point2 == null ? centroid(e) : typeof point2 === "function" ? point2.apply(that, args) : point2, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a3 = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a3.invert(p).concat(w / a3.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent2.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type2) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type2,
        this.that,
        new ZoomEvent(type2, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type: type2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default3(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale2(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter3.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v2 = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x06 = event.clientX, y06 = event.clientY;
    nodrag_default(event.view);
    nopropagation3(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default3(event2);
      if (!g.moved) {
        var dx = event2.clientX - x06, dy = event2.clientY - y06;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v2.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default3(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var t0 = this.__zoom, p02 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p02), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale2(t0, k1), p02, p1), extent2.apply(this, args), translateExtent);
    noevent_default3(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p02, event);
    else select_default2(this).call(zoom.transform, t1, p02, event);
  }
  function touchstarted(event, ...args) {
    if (!filter3.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation3(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default3(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p02 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p02[0]) * dp + (dp = p1[1] - p02[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale2(t, Math.sqrt(dp / dl));
      p = [(p02[0] + p1[0]) / 2, (p02[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation3(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default9(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter3 = typeof _ === "function" ? _ : constant_default9(!!_), zoom) : filter3;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default9(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent2 = typeof _ === "function" ? _ : constant_default9([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent2;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}
var init_zoom = __esm({
  "node_modules/d3-zoom/src/zoom.js"() {
    init_src11();
    init_src13();
    init_src3();
    init_src12();
    init_src16();
    init_constant9();
    init_event3();
    init_transform2();
    init_noevent3();
  }
});

// node_modules/d3-zoom/src/index.js
var init_src30 = __esm({
  "node_modules/d3-zoom/src/index.js"() {
    init_zoom();
    init_transform2();
  }
});

// node_modules/d3/src/index.js
var src_exports = {};
__export(src_exports, {
  Adder: () => Adder,
  Delaunay: () => Delaunay,
  FormatSpecifier: () => FormatSpecifier,
  InternMap: () => InternMap,
  InternSet: () => InternSet,
  Node: () => Node,
  Path: () => Path,
  Voronoi: () => Voronoi,
  ZoomTransform: () => Transform,
  active: () => active_default,
  arc: () => arc_default,
  area: () => area_default,
  areaRadial: () => areaRadial_default,
  ascending: () => ascending,
  autoType: () => autoType,
  axisBottom: () => axisBottom,
  axisLeft: () => axisLeft,
  axisRight: () => axisRight,
  axisTop: () => axisTop,
  bin: () => bin,
  bisect: () => bisect_default,
  bisectCenter: () => bisectCenter,
  bisectLeft: () => bisectLeft,
  bisectRight: () => bisectRight,
  bisector: () => bisector,
  blob: () => blob_default,
  blur: () => blur,
  blur2: () => blur2,
  blurImage: () => blurImage,
  brush: () => brush_default,
  brushSelection: () => brushSelection,
  brushX: () => brushX,
  brushY: () => brushY,
  buffer: () => buffer_default,
  chord: () => chord_default,
  chordDirected: () => chordDirected,
  chordTranspose: () => chordTranspose,
  cluster: () => cluster_default,
  color: () => color,
  contourDensity: () => density_default,
  contours: () => contours_default,
  count: () => count,
  create: () => create_default,
  creator: () => creator_default,
  cross: () => cross,
  csv: () => csv2,
  csvFormat: () => csvFormat,
  csvFormatBody: () => csvFormatBody,
  csvFormatRow: () => csvFormatRow,
  csvFormatRows: () => csvFormatRows,
  csvFormatValue: () => csvFormatValue,
  csvParse: () => csvParse,
  csvParseRows: () => csvParseRows,
  cubehelix: () => cubehelix,
  cumsum: () => cumsum,
  curveBasis: () => basis_default2,
  curveBasisClosed: () => basisClosed_default2,
  curveBasisOpen: () => basisOpen_default,
  curveBumpX: () => bumpX,
  curveBumpY: () => bumpY,
  curveBundle: () => bundle_default,
  curveCardinal: () => cardinal_default,
  curveCardinalClosed: () => cardinalClosed_default,
  curveCardinalOpen: () => cardinalOpen_default,
  curveCatmullRom: () => catmullRom_default,
  curveCatmullRomClosed: () => catmullRomClosed_default,
  curveCatmullRomOpen: () => catmullRomOpen_default,
  curveLinear: () => linear_default,
  curveLinearClosed: () => linearClosed_default,
  curveMonotoneX: () => monotoneX,
  curveMonotoneY: () => monotoneY,
  curveNatural: () => natural_default,
  curveStep: () => step_default,
  curveStepAfter: () => stepAfter,
  curveStepBefore: () => stepBefore,
  descending: () => descending,
  deviation: () => deviation,
  difference: () => difference,
  disjoint: () => disjoint,
  dispatch: () => dispatch_default,
  drag: () => drag_default,
  dragDisable: () => nodrag_default,
  dragEnable: () => yesdrag,
  dsv: () => dsv,
  dsvFormat: () => dsv_default,
  easeBack: () => backInOut,
  easeBackIn: () => backIn,
  easeBackInOut: () => backInOut,
  easeBackOut: () => backOut,
  easeBounce: () => bounceOut,
  easeBounceIn: () => bounceIn,
  easeBounceInOut: () => bounceInOut,
  easeBounceOut: () => bounceOut,
  easeCircle: () => circleInOut,
  easeCircleIn: () => circleIn,
  easeCircleInOut: () => circleInOut,
  easeCircleOut: () => circleOut,
  easeCubic: () => cubicInOut,
  easeCubicIn: () => cubicIn,
  easeCubicInOut: () => cubicInOut,
  easeCubicOut: () => cubicOut,
  easeElastic: () => elasticOut,
  easeElasticIn: () => elasticIn,
  easeElasticInOut: () => elasticInOut,
  easeElasticOut: () => elasticOut,
  easeExp: () => expInOut,
  easeExpIn: () => expIn,
  easeExpInOut: () => expInOut,
  easeExpOut: () => expOut,
  easeLinear: () => linear2,
  easePoly: () => polyInOut,
  easePolyIn: () => polyIn,
  easePolyInOut: () => polyInOut,
  easePolyOut: () => polyOut,
  easeQuad: () => quadInOut,
  easeQuadIn: () => quadIn,
  easeQuadInOut: () => quadInOut,
  easeQuadOut: () => quadOut,
  easeSin: () => sinInOut,
  easeSinIn: () => sinIn,
  easeSinInOut: () => sinInOut,
  easeSinOut: () => sinOut,
  every: () => every,
  extent: () => extent,
  fcumsum: () => fcumsum,
  filter: () => filter,
  flatGroup: () => flatGroup,
  flatRollup: () => flatRollup,
  forceCenter: () => center_default,
  forceCollide: () => collide_default,
  forceLink: () => link_default,
  forceManyBody: () => manyBody_default,
  forceRadial: () => radial_default,
  forceSimulation: () => simulation_default,
  forceX: () => x_default2,
  forceY: () => y_default2,
  format: () => format,
  formatDefaultLocale: () => defaultLocale,
  formatLocale: () => locale_default,
  formatPrefix: () => formatPrefix,
  formatSpecifier: () => formatSpecifier,
  fsum: () => fsum,
  geoAlbers: () => albers_default,
  geoAlbersUsa: () => albersUsa_default,
  geoArea: () => area_default3,
  geoAzimuthalEqualArea: () => azimuthalEqualArea_default,
  geoAzimuthalEqualAreaRaw: () => azimuthalEqualAreaRaw,
  geoAzimuthalEquidistant: () => azimuthalEquidistant_default,
  geoAzimuthalEquidistantRaw: () => azimuthalEquidistantRaw,
  geoBounds: () => bounds_default,
  geoCentroid: () => centroid_default,
  geoCircle: () => circle_default2,
  geoClipAntimeridian: () => antimeridian_default,
  geoClipCircle: () => circle_default3,
  geoClipExtent: () => extent_default2,
  geoClipRectangle: () => clipRectangle,
  geoConicConformal: () => conicConformal_default,
  geoConicConformalRaw: () => conicConformalRaw,
  geoConicEqualArea: () => conicEqualArea_default,
  geoConicEqualAreaRaw: () => conicEqualAreaRaw,
  geoConicEquidistant: () => conicEquidistant_default,
  geoConicEquidistantRaw: () => conicEquidistantRaw,
  geoContains: () => contains_default2,
  geoDistance: () => distance_default,
  geoEqualEarth: () => equalEarth_default,
  geoEqualEarthRaw: () => equalEarthRaw,
  geoEquirectangular: () => equirectangular_default,
  geoEquirectangularRaw: () => equirectangularRaw,
  geoGnomonic: () => gnomonic_default,
  geoGnomonicRaw: () => gnomonicRaw,
  geoGraticule: () => graticule,
  geoGraticule10: () => graticule10,
  geoIdentity: () => identity_default3,
  geoInterpolate: () => interpolate_default2,
  geoLength: () => length_default,
  geoMercator: () => mercator_default,
  geoMercatorRaw: () => mercatorRaw,
  geoNaturalEarth1: () => naturalEarth1_default,
  geoNaturalEarth1Raw: () => naturalEarth1Raw,
  geoOrthographic: () => orthographic_default,
  geoOrthographicRaw: () => orthographicRaw,
  geoPath: () => path_default,
  geoProjection: () => projection,
  geoProjectionMutator: () => projectionMutator,
  geoRotation: () => rotation_default,
  geoStereographic: () => stereographic_default,
  geoStereographicRaw: () => stereographicRaw,
  geoStream: () => stream_default,
  geoTransform: () => transform_default,
  geoTransverseMercator: () => transverseMercator_default,
  geoTransverseMercatorRaw: () => transverseMercatorRaw,
  gray: () => gray,
  greatest: () => greatest,
  greatestIndex: () => greatestIndex,
  group: () => group,
  groupSort: () => groupSort,
  groups: () => groups,
  hcl: () => hcl,
  hierarchy: () => hierarchy,
  histogram: () => bin,
  hsl: () => hsl,
  html: () => html,
  image: () => image_default,
  index: () => index,
  indexes: () => indexes,
  interpolate: () => value_default,
  interpolateArray: () => array_default,
  interpolateBasis: () => basis_default,
  interpolateBasisClosed: () => basisClosed_default,
  interpolateBlues: () => Blues_default,
  interpolateBrBG: () => BrBG_default,
  interpolateBuGn: () => BuGn_default,
  interpolateBuPu: () => BuPu_default,
  interpolateCividis: () => cividis_default,
  interpolateCool: () => cool,
  interpolateCubehelix: () => cubehelix_default,
  interpolateCubehelixDefault: () => cubehelix_default2,
  interpolateCubehelixLong: () => cubehelixLong,
  interpolateDate: () => date_default,
  interpolateDiscrete: () => discrete_default,
  interpolateGnBu: () => GnBu_default,
  interpolateGreens: () => Greens_default,
  interpolateGreys: () => Greys_default,
  interpolateHcl: () => hcl_default,
  interpolateHclLong: () => hclLong,
  interpolateHsl: () => hsl_default,
  interpolateHslLong: () => hslLong,
  interpolateHue: () => hue_default,
  interpolateInferno: () => inferno,
  interpolateLab: () => lab2,
  interpolateMagma: () => magma,
  interpolateNumber: () => number_default,
  interpolateNumberArray: () => numberArray_default,
  interpolateObject: () => object_default,
  interpolateOrRd: () => OrRd_default,
  interpolateOranges: () => Oranges_default,
  interpolatePRGn: () => PRGn_default,
  interpolatePiYG: () => PiYG_default,
  interpolatePlasma: () => plasma,
  interpolatePuBu: () => PuBu_default,
  interpolatePuBuGn: () => PuBuGn_default,
  interpolatePuOr: () => PuOr_default,
  interpolatePuRd: () => PuRd_default,
  interpolatePurples: () => Purples_default,
  interpolateRainbow: () => rainbow_default,
  interpolateRdBu: () => RdBu_default,
  interpolateRdGy: () => RdGy_default,
  interpolateRdPu: () => RdPu_default,
  interpolateRdYlBu: () => RdYlBu_default,
  interpolateRdYlGn: () => RdYlGn_default,
  interpolateReds: () => Reds_default,
  interpolateRgb: () => rgb_default,
  interpolateRgbBasis: () => rgbBasis,
  interpolateRgbBasisClosed: () => rgbBasisClosed,
  interpolateRound: () => round_default,
  interpolateSinebow: () => sinebow_default,
  interpolateSpectral: () => Spectral_default,
  interpolateString: () => string_default,
  interpolateTransformCss: () => interpolateTransformCss,
  interpolateTransformSvg: () => interpolateTransformSvg,
  interpolateTurbo: () => turbo_default,
  interpolateViridis: () => viridis_default,
  interpolateWarm: () => warm,
  interpolateYlGn: () => YlGn_default,
  interpolateYlGnBu: () => YlGnBu_default,
  interpolateYlOrBr: () => YlOrBr_default,
  interpolateYlOrRd: () => YlOrRd_default,
  interpolateZoom: () => zoom_default,
  interrupt: () => interrupt_default,
  intersection: () => intersection,
  interval: () => interval_default,
  isoFormat: () => isoFormat_default,
  isoParse: () => isoParse_default,
  json: () => json_default,
  lab: () => lab,
  lch: () => lch,
  least: () => least,
  leastIndex: () => leastIndex,
  line: () => line_default,
  lineRadial: () => lineRadial_default,
  link: () => link,
  linkHorizontal: () => linkHorizontal,
  linkRadial: () => linkRadial,
  linkVertical: () => linkVertical,
  local: () => local,
  map: () => map,
  matcher: () => matcher_default,
  max: () => max,
  maxIndex: () => maxIndex,
  mean: () => mean,
  median: () => median,
  medianIndex: () => medianIndex,
  merge: () => merge,
  min: () => min,
  minIndex: () => minIndex,
  mode: () => mode,
  namespace: () => namespace_default,
  namespaces: () => namespaces_default,
  nice: () => nice,
  now: () => now,
  pack: () => pack_default,
  packEnclose: () => enclose_default,
  packSiblings: () => siblings_default,
  pairs: () => pairs,
  partition: () => partition_default,
  path: () => path,
  pathRound: () => pathRound,
  permute: () => permute,
  pie: () => pie_default,
  piecewise: () => piecewise,
  pointRadial: () => pointRadial_default,
  pointer: () => pointer_default,
  pointers: () => pointers_default,
  polygonArea: () => area_default5,
  polygonCentroid: () => centroid_default3,
  polygonContains: () => contains_default3,
  polygonHull: () => hull_default,
  polygonLength: () => length_default2,
  precisionFixed: () => precisionFixed_default,
  precisionPrefix: () => precisionPrefix_default,
  precisionRound: () => precisionRound_default,
  quadtree: () => quadtree,
  quantile: () => quantile,
  quantileIndex: () => quantileIndex,
  quantileSorted: () => quantileSorted,
  quantize: () => quantize_default,
  quickselect: () => quickselect,
  radialArea: () => areaRadial_default,
  radialLine: () => lineRadial_default,
  randomBates: () => bates_default,
  randomBernoulli: () => bernoulli_default,
  randomBeta: () => beta_default,
  randomBinomial: () => binomial_default,
  randomCauchy: () => cauchy_default,
  randomExponential: () => exponential_default,
  randomGamma: () => gamma_default,
  randomGeometric: () => geometric_default,
  randomInt: () => int_default,
  randomIrwinHall: () => irwinHall_default,
  randomLcg: () => lcg,
  randomLogNormal: () => logNormal_default,
  randomLogistic: () => logistic_default,
  randomNormal: () => normal_default,
  randomPareto: () => pareto_default,
  randomPoisson: () => poisson_default,
  randomUniform: () => uniform_default,
  randomWeibull: () => weibull_default,
  range: () => range,
  rank: () => rank,
  reduce: () => reduce,
  reverse: () => reverse,
  rgb: () => rgb,
  ribbon: () => ribbon_default,
  ribbonArrow: () => ribbonArrow,
  rollup: () => rollup,
  rollups: () => rollups,
  scaleBand: () => band,
  scaleDiverging: () => diverging,
  scaleDivergingLog: () => divergingLog,
  scaleDivergingPow: () => divergingPow,
  scaleDivergingSqrt: () => divergingSqrt,
  scaleDivergingSymlog: () => divergingSymlog,
  scaleIdentity: () => identity,
  scaleImplicit: () => implicit,
  scaleLinear: () => linear,
  scaleLog: () => log,
  scaleOrdinal: () => ordinal,
  scalePoint: () => point,
  scalePow: () => pow,
  scaleQuantile: () => quantile2,
  scaleQuantize: () => quantize,
  scaleRadial: () => radial,
  scaleSequential: () => sequential,
  scaleSequentialLog: () => sequentialLog,
  scaleSequentialPow: () => sequentialPow,
  scaleSequentialQuantile: () => sequentialQuantile,
  scaleSequentialSqrt: () => sequentialSqrt,
  scaleSequentialSymlog: () => sequentialSymlog,
  scaleSqrt: () => sqrt,
  scaleSymlog: () => symlog,
  scaleThreshold: () => threshold,
  scaleTime: () => time,
  scaleUtc: () => utcTime,
  scan: () => scan,
  schemeAccent: () => Accent_default,
  schemeBlues: () => scheme22,
  schemeBrBG: () => scheme,
  schemeBuGn: () => scheme10,
  schemeBuPu: () => scheme11,
  schemeCategory10: () => category10_default,
  schemeDark2: () => Dark2_default,
  schemeGnBu: () => scheme12,
  schemeGreens: () => scheme23,
  schemeGreys: () => scheme24,
  schemeObservable10: () => observable10_default,
  schemeOrRd: () => scheme13,
  schemeOranges: () => scheme27,
  schemePRGn: () => scheme2,
  schemePaired: () => Paired_default,
  schemePastel1: () => Pastel1_default,
  schemePastel2: () => Pastel2_default,
  schemePiYG: () => scheme3,
  schemePuBu: () => scheme15,
  schemePuBuGn: () => scheme14,
  schemePuOr: () => scheme4,
  schemePuRd: () => scheme16,
  schemePurples: () => scheme25,
  schemeRdBu: () => scheme5,
  schemeRdGy: () => scheme6,
  schemeRdPu: () => scheme17,
  schemeRdYlBu: () => scheme7,
  schemeRdYlGn: () => scheme8,
  schemeReds: () => scheme26,
  schemeSet1: () => Set1_default,
  schemeSet2: () => Set2_default,
  schemeSet3: () => Set3_default,
  schemeSpectral: () => scheme9,
  schemeTableau10: () => Tableau10_default,
  schemeYlGn: () => scheme19,
  schemeYlGnBu: () => scheme18,
  schemeYlOrBr: () => scheme20,
  schemeYlOrRd: () => scheme21,
  select: () => select_default2,
  selectAll: () => selectAll_default2,
  selection: () => selection_default,
  selector: () => selector_default,
  selectorAll: () => selectorAll_default,
  shuffle: () => shuffle_default,
  shuffler: () => shuffler,
  some: () => some,
  sort: () => sort,
  stack: () => stack_default,
  stackOffsetDiverging: () => diverging_default,
  stackOffsetExpand: () => expand_default,
  stackOffsetNone: () => none_default,
  stackOffsetSilhouette: () => silhouette_default,
  stackOffsetWiggle: () => wiggle_default,
  stackOrderAppearance: () => appearance_default,
  stackOrderAscending: () => ascending_default,
  stackOrderDescending: () => descending_default,
  stackOrderInsideOut: () => insideOut_default,
  stackOrderNone: () => none_default2,
  stackOrderReverse: () => reverse_default,
  stratify: () => stratify_default,
  style: () => styleValue,
  subset: () => subset,
  sum: () => sum,
  superset: () => superset,
  svg: () => svg,
  symbol: () => Symbol2,
  symbolAsterisk: () => asterisk_default,
  symbolCircle: () => circle_default,
  symbolCross: () => cross_default,
  symbolDiamond: () => diamond_default,
  symbolDiamond2: () => diamond2_default,
  symbolPlus: () => plus_default,
  symbolSquare: () => square_default,
  symbolSquare2: () => square2_default,
  symbolStar: () => star_default,
  symbolTimes: () => times_default,
  symbolTriangle: () => triangle_default,
  symbolTriangle2: () => triangle2_default,
  symbolWye: () => wye_default,
  symbolX: () => times_default,
  symbols: () => symbolsFill,
  symbolsFill: () => symbolsFill,
  symbolsStroke: () => symbolsStroke,
  text: () => text_default3,
  thresholdFreedmanDiaconis: () => thresholdFreedmanDiaconis,
  thresholdScott: () => thresholdScott,
  thresholdSturges: () => thresholdSturges,
  tickFormat: () => tickFormat,
  tickIncrement: () => tickIncrement,
  tickStep: () => tickStep,
  ticks: () => ticks,
  timeDay: () => timeDay,
  timeDays: () => timeDays,
  timeFormat: () => timeFormat,
  timeFormatDefaultLocale: () => defaultLocale2,
  timeFormatLocale: () => formatLocale,
  timeFriday: () => timeFriday,
  timeFridays: () => timeFridays,
  timeHour: () => timeHour,
  timeHours: () => timeHours,
  timeInterval: () => timeInterval,
  timeMillisecond: () => millisecond,
  timeMilliseconds: () => milliseconds,
  timeMinute: () => timeMinute,
  timeMinutes: () => timeMinutes,
  timeMonday: () => timeMonday,
  timeMondays: () => timeMondays,
  timeMonth: () => timeMonth,
  timeMonths: () => timeMonths,
  timeParse: () => timeParse,
  timeSaturday: () => timeSaturday,
  timeSaturdays: () => timeSaturdays,
  timeSecond: () => second,
  timeSeconds: () => seconds,
  timeSunday: () => timeSunday,
  timeSundays: () => timeSundays,
  timeThursday: () => timeThursday,
  timeThursdays: () => timeThursdays,
  timeTickInterval: () => timeTickInterval,
  timeTicks: () => timeTicks,
  timeTuesday: () => timeTuesday,
  timeTuesdays: () => timeTuesdays,
  timeWednesday: () => timeWednesday,
  timeWednesdays: () => timeWednesdays,
  timeWeek: () => timeSunday,
  timeWeeks: () => timeSundays,
  timeYear: () => timeYear,
  timeYears: () => timeYears,
  timeout: () => timeout_default,
  timer: () => timer,
  timerFlush: () => timerFlush,
  transition: () => transition,
  transpose: () => transpose,
  tree: () => tree_default,
  treemap: () => treemap_default,
  treemapBinary: () => binary_default,
  treemapDice: () => dice_default,
  treemapResquarify: () => resquarify_default,
  treemapSlice: () => slice_default,
  treemapSliceDice: () => sliceDice_default,
  treemapSquarify: () => squarify_default,
  tsv: () => tsv2,
  tsvFormat: () => tsvFormat,
  tsvFormatBody: () => tsvFormatBody,
  tsvFormatRow: () => tsvFormatRow,
  tsvFormatRows: () => tsvFormatRows,
  tsvFormatValue: () => tsvFormatValue,
  tsvParse: () => tsvParse,
  tsvParseRows: () => tsvParseRows,
  union: () => union,
  unixDay: () => unixDay,
  unixDays: () => unixDays,
  utcDay: () => utcDay,
  utcDays: () => utcDays,
  utcFormat: () => utcFormat,
  utcFriday: () => utcFriday,
  utcFridays: () => utcFridays,
  utcHour: () => utcHour,
  utcHours: () => utcHours,
  utcMillisecond: () => millisecond,
  utcMilliseconds: () => milliseconds,
  utcMinute: () => utcMinute,
  utcMinutes: () => utcMinutes,
  utcMonday: () => utcMonday,
  utcMondays: () => utcMondays,
  utcMonth: () => utcMonth,
  utcMonths: () => utcMonths,
  utcParse: () => utcParse,
  utcSaturday: () => utcSaturday,
  utcSaturdays: () => utcSaturdays,
  utcSecond: () => second,
  utcSeconds: () => seconds,
  utcSunday: () => utcSunday,
  utcSundays: () => utcSundays,
  utcThursday: () => utcThursday,
  utcThursdays: () => utcThursdays,
  utcTickInterval: () => utcTickInterval,
  utcTicks: () => utcTicks,
  utcTuesday: () => utcTuesday,
  utcTuesdays: () => utcTuesdays,
  utcWednesday: () => utcWednesday,
  utcWednesdays: () => utcWednesdays,
  utcWeek: () => utcSunday,
  utcWeeks: () => utcSundays,
  utcYear: () => utcYear,
  utcYears: () => utcYears,
  variance: () => variance,
  window: () => window_default,
  xml: () => xml_default,
  zip: () => zip,
  zoom: () => zoom_default2,
  zoomIdentity: () => identity2,
  zoomTransform: () => transform
});
var init_src31 = __esm({
  "node_modules/d3/src/index.js"() {
    init_src();
    init_src10();
    init_src17();
    init_src18();
    init_src2();
    init_src19();
    init_src20();
    init_src11();
    init_src13();
    init_src21();
    init_src15();
    init_src22();
    init_src24();
    init_src5();
    init_src25();
    init_src26();
    init_src3();
    init_src4();
    init_src27();
    init_src23();
    init_src28();
    init_src8();
    init_src29();
    init_src12();
    init_src9();
    init_src6();
    init_src7();
    init_src14();
    init_src16();
    init_src30();
  }
});

// node_modules/react-gauge-chart/dist/GaugeChart/utils.js
var require_utils = __commonJS({
  "node_modules/react-gauge-chart/dist/GaugeChart/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setArcData = exports.addText = exports.calculateRotation = exports.updateDimensions = exports.centerGraph = exports.calculateRadius = void 0;
    var _d = (init_src31(), __toCommonJS(src_exports));
    var calculateRadius = function calculateRadius2(width, height, outerRadius, margin, g) {
      if (width.current < 2 * height.current) {
        outerRadius.current = (width.current - margin.current.left - margin.current.right) / 2;
      } else {
        outerRadius.current = height.current - margin.current.top - margin.current.bottom;
      }
      centerGraph(width, g, outerRadius, margin);
    };
    exports.calculateRadius = calculateRadius;
    var centerGraph = function centerGraph2(width, g, outerRadius, margin) {
      margin.current.left = width.current / 2 - outerRadius.current + margin.current.right;
      g.current.attr("transform", "translate(" + margin.current.left + ", " + margin.current.top + ")");
    };
    exports.centerGraph = centerGraph;
    var updateDimensions = function updateDimensions2(props, container, margin, width, height) {
      var marginInPercent = props.marginInPercent;
      var divDimensions = container.current.node().getBoundingClientRect(), divWidth = divDimensions.width, divHeight = divDimensions.height;
      margin.current.left = divWidth * marginInPercent;
      margin.current.right = divWidth * marginInPercent;
      width.current = divWidth - margin.current.left - margin.current.right;
      margin.current.top = divHeight * marginInPercent;
      margin.current.bottom = divHeight * marginInPercent;
      height.current = width.current / 2 - margin.current.top - margin.current.bottom;
    };
    exports.updateDimensions = updateDimensions;
    var calculateRotation = function calculateRotation2(percent, outerRadius, width, needleScale) {
      var needleLength = outerRadius.current * needleScale, needleRadius = 15 * (width.current / 500), theta = percentToRad(percent), centerPoint = [0, -needleRadius / 2], topPoint = [centerPoint[0] - needleLength * Math.cos(theta), centerPoint[1] - needleLength * Math.sin(theta)], leftPoint = [centerPoint[0] - needleRadius * Math.cos(theta - Math.PI / 2), centerPoint[1] - needleRadius * Math.sin(theta - Math.PI / 2)], rightPoint = [centerPoint[0] - needleRadius * Math.cos(theta + Math.PI / 2), centerPoint[1] - needleRadius * Math.sin(theta + Math.PI / 2)];
      var pathStr = "M ".concat(leftPoint[0], " ").concat(leftPoint[1], " L ").concat(topPoint[0], " ").concat(topPoint[1], " L ").concat(rightPoint[0], " ").concat(rightPoint[1]);
      return pathStr;
    };
    exports.calculateRotation = calculateRotation;
    var addText = function addText2(percentage, props, outerRadius, width, g) {
      var formatTextValue = props.formatTextValue, fontSize = props.fontSize;
      var textPadding = 20;
      var text = formatTextValue ? formatTextValue(floatingNumber(percentage)) : floatingNumber(percentage) + "%";
      g.current.append("g").attr("class", "text-group").attr("transform", "translate(".concat(outerRadius.current, ", ").concat(outerRadius.current / 2 + textPadding, ")")).append("text").text(text).style("font-size", function() {
        return fontSize ? fontSize : "".concat(width.current / 11 / (text.length > 10 ? text.length / 10 : 1), "px");
      }).style("fill", props.textColor).style("text-anchor", "middle");
    };
    exports.addText = addText;
    var setArcData = function setArcData2(props, nbArcsToDisplay, colorArray, arcData) {
      nbArcsToDisplay.current = props.arcsLength ? props.arcsLength.length : props.nrOfLevels;
      if (nbArcsToDisplay.current === props.colors.length) {
        colorArray.current = props.colors;
      } else {
        colorArray.current = getColors(props, nbArcsToDisplay);
      }
      arcData.current = [];
      for (var i = 0; i < nbArcsToDisplay.current; i++) {
        var arcDatum = {
          value: props.arcsLength && props.arcsLength.length > i ? props.arcsLength[i] : 1,
          color: colorArray.current[i]
        };
        arcData.current.push(arcDatum);
      }
    };
    exports.setArcData = setArcData;
    var getColors = function getColors2(props, nbArcsToDisplay) {
      var colors = props.colors;
      var colorScale = (0, _d.scaleLinear)().domain([1, nbArcsToDisplay.current]).range([colors[0], colors[colors.length - 1]]).interpolate(_d.interpolateHsl);
      var colorArray = [];
      for (var i = 1; i <= nbArcsToDisplay.current; i++) {
        colorArray.push(colorScale(i));
      }
      return colorArray;
    };
    var floatingNumber = function floatingNumber2(value) {
      var maxDigits = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      return Math.round(value * 100 * Math.pow(10, maxDigits)) / Math.pow(10, maxDigits);
    };
    var percentToRad = function percentToRad2(percent) {
      return percent * Math.PI;
    };
  }
});

// node_modules/react-gauge-chart/dist/GaugeChart/renderChart.js
var require_renderChart = __commonJS({
  "node_modules/react-gauge-chart/dist/GaugeChart/renderChart.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.renderChart = void 0;
    var _utils = require_utils();
    var renderChart = function renderChart2(resize, prevProps, width, margin, height, outerRadius, g, doughnut, arcChart, needle, pieChart, svg2, props, container, arcData) {
      (0, _utils.updateDimensions)(props, container, margin, width, height);
      svg2.current.attr("width", width.current + margin.current.left + margin.current.right).attr("height", height.current + margin.current.top + margin.current.bottom);
      g.current.attr("transform", "translate(" + margin.current.left + ", " + margin.current.top + ")");
      (0, _utils.calculateRadius)(width, height, outerRadius, margin, g);
      doughnut.current.attr("transform", "translate(" + outerRadius.current + ", " + outerRadius.current + ")");
      arcChart.current.outerRadius(outerRadius.current).innerRadius(outerRadius.current * (1 - props.arcWidth)).cornerRadius(props.cornerRadius).padAngle(props.arcPadding);
      doughnut.current.selectAll(".arc").remove();
      g.current.selectAll(".text-group").remove();
      var arcPaths = doughnut.current.selectAll(".arc").data(pieChart.current(arcData.current)).enter().append("g").attr("class", "arc");
      arcPaths.append("path").attr("d", arcChart.current).style("fill", function(d) {
        return d.data.color;
      });
    };
    exports.renderChart = renderChart;
  }
});

// node_modules/react-gauge-chart/dist/GaugeChart/drawNeedle.js
var require_drawNeedle = __commonJS({
  "node_modules/react-gauge-chart/dist/GaugeChart/drawNeedle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.drawNeedle = void 0;
    var _d = (init_src31(), __toCommonJS(src_exports));
    var _utils = require_utils();
    var drawNeedle = function drawNeedle2(resize, prevProps, props, width, needle, container, outerRadius, g) {
      var percent = props.percent, needleColor = props.needleColor, needleBaseColor = props.needleBaseColor, hideText = props.hideText, animate = props.animate, needleScale = props.needleScale, textComponent = props.textComponent;
      var needleRadius = 15 * (width.current / 500), centerPoint = [0, -needleRadius / 2];
      needle.current.selectAll("*").remove();
      needle.current.attr("transform", "translate(" + outerRadius.current + ", " + outerRadius.current + ")");
      var prevPercent = prevProps ? prevProps.percent : 0;
      var pathStr = (0, _utils.calculateRotation)(prevPercent || percent, outerRadius, width, needleScale);
      needle.current.append("path").attr("d", pathStr).attr("fill", needleColor);
      needle.current.append("circle").attr("cx", centerPoint[0]).attr("cy", centerPoint[1]).attr("r", needleRadius).attr("fill", needleBaseColor);
      if (!hideText && !textComponent) {
        (0, _utils.addText)(percent, props, outerRadius, width, g);
      }
      if (!resize && animate) {
        needle.current.transition().delay(props.animDelay).ease(_d.easeElastic).duration(props.animateDuration).tween("progress", function() {
          var currentPercent = (0, _d.interpolateNumber)(prevPercent, percent);
          return function(percentOfPercent) {
            var progress = currentPercent(percentOfPercent);
            return container.current.select(".needle path").attr("d", (0, _utils.calculateRotation)(progress, outerRadius, width, needleScale));
          };
        });
      } else {
        container.current.select(".needle path").attr("d", (0, _utils.calculateRotation)(percent, outerRadius, width, needleScale));
      }
    };
    exports.drawNeedle = drawNeedle;
  }
});

// node_modules/react-gauge-chart/dist/GaugeChart/customHooks.js
var require_customHooks = __commonJS({
  "node_modules/react-gauge-chart/dist/GaugeChart/customHooks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _isEqual = _interopRequireDefault(require_isEqual());
    var _react = require_react();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isDeepEquals = function isDeepEquals2(toCompare, reference) {
      return (0, _isEqual.default)(toCompare, reference);
    };
    var useDeepCompareMemo = function useDeepCompareMemo2(dependencies) {
      var ref = (0, _react.useRef)(null);
      if (isDeepEquals(dependencies, ref.current)) {
        ref.current = dependencies;
      }
      return ref.current;
    };
    var useDeepCompareEffect = function useDeepCompareEffect2(callback, dependencies) {
      (0, _react.useEffect)(callback, [useDeepCompareMemo(dependencies), callback]);
    };
    var _default = useDeepCompareEffect;
    exports.default = _default;
  }
});

// node_modules/react-gauge-chart/dist/GaugeChart/index.js
var require_GaugeChart = __commonJS({
  "node_modules/react-gauge-chart/dist/GaugeChart/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _d = (init_src31(), __toCommonJS(src_exports));
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _utils = require_utils();
    var _renderChart = require_renderChart();
    var _drawNeedle = require_drawNeedle();
    var _customHooks = _interopRequireDefault(require_customHooks());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object2, enumerableOnly) {
      var keys = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var startAngle = -Math.PI / 2;
    var endAngle = Math.PI / 2;
    var defaultStyle = {
      width: "100%"
    };
    var animateNeedleProps = ["marginInPercent", "arcPadding", "percent", "nrOfLevels", "animDelay"];
    var defaultProps = {
      style: defaultStyle,
      marginInPercent: 0.05,
      cornerRadius: 6,
      nrOfLevels: 3,
      percent: 0.4,
      arcPadding: 0.05,
      //The padding between arcs, in rad
      arcWidth: 0.2,
      //The width of the arc given in percent of the radius
      colors: ["#00FF00", "#FF0000"],
      //Default defined colors
      textColor: "#fff",
      needleColor: "#464A4F",
      needleBaseColor: "#464A4F",
      hideText: false,
      animate: true,
      animDelay: 500,
      formatTextValue: null,
      fontSize: null,
      animateDuration: 3e3,
      textComponent: void 0,
      needleScale: 0.55,
      customNeedleComponent: null
    };
    var GaugeChart = function GaugeChart2(initialProps) {
      var props = (0, _react.useMemo)(function() {
        return _objectSpread(_objectSpread({}, defaultProps), initialProps);
      }, [initialProps]);
      var svg2 = (0, _react.useRef)({});
      var g = (0, _react.useRef)({});
      var width = (0, _react.useRef)({});
      var height = (0, _react.useRef)({});
      var doughnut = (0, _react.useRef)({});
      var needle = (0, _react.useRef)({});
      var outerRadius = (0, _react.useRef)({});
      var margin = (0, _react.useRef)({});
      var container = (0, _react.useRef)({});
      var nbArcsToDisplay = (0, _react.useRef)(0);
      var colorArray = (0, _react.useRef)([]);
      var arcChart = (0, _react.useRef)((0, _d.arc)());
      var arcData = (0, _react.useRef)([]);
      var pieChart = (0, _react.useRef)((0, _d.pie)());
      var prevProps = (0, _react.useRef)(props);
      var selectedRef = (0, _react.useRef)({});
      var initChart = (0, _react.useCallback)(function(update) {
        var resize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var prevProps2 = arguments.length > 2 ? arguments[2] : void 0;
        if (update) {
          (0, _renderChart.renderChart)(resize, prevProps2, width, margin, height, outerRadius, g, doughnut, arcChart, needle, pieChart, svg2, props, container, arcData);
          !customNeedleComponent && (0, _drawNeedle.drawNeedle)(resize, prevProps2, props, width, needle, container, outerRadius, g);
          return;
        }
        container.current.select("svg").remove();
        svg2.current = container.current.append("svg");
        g.current = svg2.current.append("g");
        doughnut.current = g.current.append("g").attr("class", "doughnut");
        pieChart.current.value(function(d) {
          return d.value;
        }).startAngle(startAngle).endAngle(endAngle).sort(null);
        needle.current = g.current.append("g").attr("class", "needle");
        (0, _renderChart.renderChart)(resize, prevProps2, width, margin, height, outerRadius, g, doughnut, arcChart, needle, pieChart, svg2, props, container, arcData);
        !customNeedleComponent && (0, _drawNeedle.drawNeedle)(resize, prevProps2, props, width, needle, container, outerRadius, g);
      }, [props]);
      (0, _react.useLayoutEffect)(function() {
        (0, _utils.setArcData)(props, nbArcsToDisplay, colorArray, arcData);
        container.current = (0, _d.select)(selectedRef);
        initChart();
      }, [props, initChart]);
      (0, _customHooks.default)(function() {
        if (props.nrOfLevels || prevProps.current.arcsLength.every(function(a3) {
          return props.arcsLength.includes(a3);
        }) || prevProps.current.colors.every(function(a3) {
          return props.colors.includes(a3);
        })) {
          (0, _utils.setArcData)(props, nbArcsToDisplay, colorArray, arcData);
        }
        var resize = !animateNeedleProps.some(function(key) {
          return prevProps.current[key] !== props[key];
        });
        initChart(true, resize, prevProps.current);
        prevProps.current = props;
      }, [props.nrOfLevels, props.arcsLength, props.colors, props.percent, props.needleColor, props.needleBaseColor]);
      (0, _react.useEffect)(function() {
        var handleResize = function handleResize2() {
          var resize = true;
          (0, _renderChart.renderChart)(resize, prevProps, width, margin, height, outerRadius, g, doughnut, arcChart, needle, pieChart, svg2, props, container, arcData);
          !customNeedleComponent && (0, _drawNeedle.drawNeedle)(resize, prevProps, props, width, needle, container, outerRadius, g);
        };
        window.addEventListener("resize", handleResize);
        return function() {
          window.removeEventListener("resize", handleResize);
        };
      }, [props]);
      var id2 = props.id, style = props.style, className = props.className, textComponent = props.textComponent, textComponentContainerClassName = props.textComponentContainerClassName, customNeedleComponent = props.customNeedleComponent, customNeedleStyle = props.customNeedleStyle, customNeedleComponentClassName = props.customNeedleComponentClassName;
      return _react.default.createElement("div", {
        id: id2,
        className,
        style
      }, _react.default.createElement("div", {
        ref: function ref(svg3) {
          return selectedRef = svg3;
        }
      }, _react.default.createElement("div", {
        className: textComponentContainerClassName,
        style: {
          position: "relative",
          top: "50%"
        }
      }, textComponent)), customNeedleComponent && _react.default.createElement("div", {
        className: customNeedleComponentClassName,
        style: _objectSpread({
          position: "relative"
        }, customNeedleStyle)
      }, customNeedleComponent));
    };
    var _default = GaugeChart;
    exports.default = _default;
    GaugeChart.propTypes = {
      id: _propTypes.default.string,
      className: _propTypes.default.string,
      style: _propTypes.default.object,
      marginInPercent: _propTypes.default.number,
      cornerRadius: _propTypes.default.number,
      nrOfLevels: _propTypes.default.number,
      percent: _propTypes.default.number,
      arcPadding: _propTypes.default.number,
      arcWidth: _propTypes.default.number,
      arcsLength: _propTypes.default.array,
      colors: _propTypes.default.array,
      textColor: _propTypes.default.string,
      needleColor: _propTypes.default.string,
      needleBaseColor: _propTypes.default.string,
      hideText: _propTypes.default.bool,
      animate: _propTypes.default.bool,
      formatTextValue: _propTypes.default.func,
      fontSize: _propTypes.default.string,
      animateDuration: _propTypes.default.number,
      animDelay: _propTypes.default.number,
      textComponent: _propTypes.default.element,
      textComponentContainerClassName: _propTypes.default.string,
      needleScale: _propTypes.default.number,
      customNeedleComponent: _propTypes.default.element,
      customNeedleComponentClassName: _propTypes.default.string,
      customNeedleStyle: _propTypes.default.object
    };
  }
});

// node_modules/react-gauge-chart/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-gauge-chart/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _GaugeChart = _interopRequireDefault(require_GaugeChart());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _default = _GaugeChart.default;
    exports.default = _default;
  }
});
export default require_dist();
//# sourceMappingURL=react-gauge-chart.js.map
