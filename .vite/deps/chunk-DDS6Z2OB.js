import {
  __commonJS,
  __esm
} from "./chunk-EWTE5DHJ.js";

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
var init_define = __esm({
  "node_modules/d3-color/src/define.js"() {
  }
});

// node_modules/d3-color/src/color.js
function Color() {
}
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0) h = s2 = l = NaN;
  else if (l <= 0 || l >= 1) h = s2 = NaN;
  else if (s2 <= 0) h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min3 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s2 = max3 - min3, l = (max3 + min3) / 2;
  if (s2) {
    if (r === max3) h = (g - b) / s2 + (g < b) * 6;
    else if (g === max3) h = (b - r) / s2 + 2;
    else h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var darker, brighter, reI, reN, reP, reHex, reRgbInteger, reRgbPercent, reRgbaInteger, reRgbaPercent, reHslPercent, reHslaPercent, named;
var init_color = __esm({
  "node_modules/d3-color/src/color.js"() {
    init_define();
    darker = 0.7;
    brighter = 1 / darker;
    reI = "\\s*([+-]?\\d+)\\s*";
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
    reHex = /^#([0-9a-f]{3,8})$/;
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
    named = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };
    define_default(Color, color, {
      copy(channels) {
        return Object.assign(new this.constructor(), this, channels);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: color_formatHex,
      // Deprecated! Use color.formatHex.
      formatHex: color_formatHex,
      formatHex8: color_formatHex8,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });
    define_default(Rgb, rgb, extend(Color, {
      brighter(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
      },
      darker(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
      },
      hex: rgb_formatHex,
      // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));
    define_default(Hsl, hsl, extend(Color, {
      brighter(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Hsl(this.h, this.s, this.l * k2, this.opacity);
      },
      darker(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Hsl(this.h, this.s, this.l * k2, this.opacity);
      },
      rgb() {
        var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
        return new Rgb(
          hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
          hsl2rgb(h, m1, m2),
          hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
          this.opacity
        );
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
      },
      formatHsl() {
        const a2 = clampa(this.opacity);
        return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
      }
    }));
  }
});

// node_modules/d3-color/src/math.js
var radians, degrees;
var init_math = __esm({
  "node_modules/d3-color/src/math.js"() {
    radians = Math.PI / 180;
    degrees = 180 / Math.PI;
  }
});

// node_modules/d3-color/src/lab.js
function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y2 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x2, z;
  if (r === g && g === b) x2 = z = y2;
  else {
    x2 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y2 - 16, 500 * (x2 - y2), 200 * (y2 - z), o.opacity);
}
function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l, a2, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity == null ? 1 : opacity);
}
function Lab(l, a2, b, opacity) {
  this.l = +l;
  this.a = +a2;
  this.b = +b;
  this.opacity = +opacity;
}
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x2) {
  return 255 * (x2 <= 31308e-7 ? 12.92 * x2 : 1.055 * Math.pow(x2, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x2) {
  return (x2 /= 255) <= 0.04045 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function lch(l, c2, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c2, l, opacity == null ? 1 : opacity);
}
function hcl(h, c2, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c2, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c2, l, opacity) {
  this.h = +h;
  this.c = +c2;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
var K, Xn, Yn, Zn, t0, t1, t2, t3;
var init_lab = __esm({
  "node_modules/d3-color/src/lab.js"() {
    init_define();
    init_color();
    init_math();
    K = 18;
    Xn = 0.96422;
    Yn = 1;
    Zn = 0.82521;
    t0 = 4 / 29;
    t1 = 6 / 29;
    t2 = 3 * t1 * t1;
    t3 = t1 * t1 * t1;
    define_default(Lab, lab, extend(Color, {
      brighter(k2) {
        return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
      },
      darker(k2) {
        return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
      },
      rgb() {
        var y2 = (this.l + 16) / 116, x2 = isNaN(this.a) ? y2 : y2 + this.a / 500, z = isNaN(this.b) ? y2 : y2 - this.b / 200;
        x2 = Xn * lab2xyz(x2);
        y2 = Yn * lab2xyz(y2);
        z = Zn * lab2xyz(z);
        return new Rgb(
          lrgb2rgb(3.1338561 * x2 - 1.6168667 * y2 - 0.4906146 * z),
          lrgb2rgb(-0.9787684 * x2 + 1.9161415 * y2 + 0.033454 * z),
          lrgb2rgb(0.0719453 * x2 - 0.2289914 * y2 + 1.4052427 * z),
          this.opacity
        );
      }
    }));
    define_default(Hcl, hcl, extend(Color, {
      brighter(k2) {
        return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
      },
      darker(k2) {
        return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
      },
      rgb() {
        return hcl2lab(this).rgb();
      }
    }));
  }
});

// node_modules/d3-color/src/cubehelix.js
function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
}
function cubehelix(h, s2, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
var A, B, C, D, E, ED, EB, BC_DA;
var init_cubehelix = __esm({
  "node_modules/d3-color/src/cubehelix.js"() {
    init_define();
    init_color();
    init_math();
    A = -0.14861;
    B = 1.78277;
    C = -0.29227;
    D = -0.90649;
    E = 1.97294;
    ED = E * D;
    EB = E * B;
    BC_DA = B * C - D * A;
    define_default(Cubehelix, cubehelix, extend(Color, {
      brighter(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
      },
      darker(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
      },
      rgb() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
        return new Rgb(
          255 * (l + a2 * (A * cosh2 + B * sinh2)),
          255 * (l + a2 * (C * cosh2 + D * sinh2)),
          255 * (l + a2 * (E * cosh2)),
          this.opacity
        );
      }
    }));
  }
});

// node_modules/d3-color/src/index.js
var init_src = __esm({
  "node_modules/d3-color/src/index.js"() {
    init_color();
    init_lab();
    init_cubehelix();
  }
});

// node_modules/d3-array/src/ascending.js
function ascending(a2, b) {
  return a2 == null || b == null ? NaN : a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}
var init_ascending = __esm({
  "node_modules/d3-array/src/ascending.js"() {
  }
});

// node_modules/d3-array/src/descending.js
function descending(a2, b) {
  return a2 == null || b == null ? NaN : b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}
var init_descending = __esm({
  "node_modules/d3-array/src/descending.js"() {
  }
});

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a2, x2, lo = 0, hi = a2.length) {
    const i = left(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero() {
  return 0;
}
var init_bisector = __esm({
  "node_modules/d3-array/src/bisector.js"() {
    init_ascending();
    init_descending();
  }
});

// node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}
function* numbers(values, valueof) {
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}
var init_number = __esm({
  "node_modules/d3-array/src/number.js"() {
  }
});

// node_modules/d3-array/src/bisect.js
var ascendingBisect, bisectRight, bisectLeft, bisectCenter, bisect_default;
var init_bisect = __esm({
  "node_modules/d3-array/src/bisect.js"() {
    init_ascending();
    init_bisector();
    init_number();
    ascendingBisect = bisector(ascending);
    bisectRight = ascendingBisect.right;
    bisectLeft = ascendingBisect.left;
    bisectCenter = bisector(number).center;
    bisect_default = bisectRight;
  }
});

// node_modules/d3-array/src/blur.js
function blur(values, r) {
  if (!((r = +r) >= 0)) throw new RangeError("invalid r");
  let length3 = values.length;
  if (!((length3 = Math.floor(length3)) >= 0)) throw new RangeError("invalid length");
  if (!length3 || !r) return values;
  const blur3 = blurf(r);
  const temp = values.slice();
  blur3(values, temp, 0, length3, 1);
  blur3(temp, values, 0, length3, 1);
  blur3(values, temp, 0, length3, 1);
  return values;
}
function Blur2(blur3) {
  return function(data, rx, ry = rx) {
    if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
    if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
    let { data: values, width, height } = data;
    if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
    if (!((height = Math.floor(height !== void 0 ? height : values.length / width)) >= 0)) throw new RangeError("invalid height");
    if (!width || !height || !rx && !ry) return data;
    const blurx = rx && blur3(rx);
    const blury = ry && blur3(ry);
    const temp = values.slice();
    if (blurx && blury) {
      blurh(blurx, temp, values, width, height);
      blurh(blurx, values, temp, width, height);
      blurh(blurx, temp, values, width, height);
      blurv(blury, values, temp, width, height);
      blurv(blury, temp, values, width, height);
      blurv(blury, values, temp, width, height);
    } else if (blurx) {
      blurh(blurx, values, temp, width, height);
      blurh(blurx, temp, values, width, height);
      blurh(blurx, values, temp, width, height);
    } else if (blury) {
      blurv(blury, values, temp, width, height);
      blurv(blury, temp, values, width, height);
      blurv(blury, values, temp, width, height);
    }
    return data;
  };
}
function blurh(blur3, T, S, w, h) {
  for (let y2 = 0, n = w * h; y2 < n; ) {
    blur3(T, S, y2, y2 += w, 1);
  }
}
function blurv(blur3, T, S, w, h) {
  for (let x2 = 0, n = w * h; x2 < w; ++x2) {
    blur3(T, S, x2, x2 + n, w);
  }
}
function blurfImage(radius) {
  const blur3 = blurf(radius);
  return (T, S, start, stop, step) => {
    start <<= 2, stop <<= 2, step <<= 2;
    blur3(T, S, start + 0, stop + 0, step);
    blur3(T, S, start + 1, stop + 1, step);
    blur3(T, S, start + 2, stop + 2, step);
    blur3(T, S, start + 3, stop + 3, step);
  };
}
function blurf(radius) {
  const radius0 = Math.floor(radius);
  if (radius0 === radius) return bluri(radius);
  const t = radius - radius0;
  const w = 2 * radius + 1;
  return (T, S, start, stop, step) => {
    if (!((stop -= step) >= start)) return;
    let sum3 = radius0 * S[start];
    const s0 = step * radius0;
    const s1 = s0 + step;
    for (let i = start, j = start + s0; i < j; i += step) {
      sum3 += S[Math.min(stop, i)];
    }
    for (let i = start, j = stop; i <= j; i += step) {
      sum3 += S[Math.min(stop, i + s0)];
      T[i] = (sum3 + t * (S[Math.max(start, i - s1)] + S[Math.min(stop, i + s1)])) / w;
      sum3 -= S[Math.max(start, i - s0)];
    }
  };
}
function bluri(radius) {
  const w = 2 * radius + 1;
  return (T, S, start, stop, step) => {
    if (!((stop -= step) >= start)) return;
    let sum3 = radius * S[start];
    const s2 = step * radius;
    for (let i = start, j = start + s2; i < j; i += step) {
      sum3 += S[Math.min(stop, i)];
    }
    for (let i = start, j = stop; i <= j; i += step) {
      sum3 += S[Math.min(stop, i + s2)];
      T[i] = sum3 / w;
      sum3 -= S[Math.max(start, i - s2)];
    }
  };
}
var blur2, blurImage;
var init_blur = __esm({
  "node_modules/d3-array/src/blur.js"() {
    blur2 = Blur2(blurf);
    blurImage = Blur2(blurfImage);
  }
});

// node_modules/d3-array/src/count.js
function count(values, valueof) {
  let count2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count2;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        ++count2;
      }
    }
  }
  return count2;
}
var init_count = __esm({
  "node_modules/d3-array/src/count.js"() {
  }
});

// node_modules/d3-array/src/cross.js
function length(array2) {
  return array2.length | 0;
}
function empty(length3) {
  return !(length3 > 0);
}
function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce2) {
  return (values) => reduce2(...values);
}
function cross(...values) {
  const reduce2 = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index2 = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index2.map((j2, i2) => values[i2][j2]));
    let i = j;
    while (++index2[i] === lengths[i]) {
      if (i === 0) return reduce2 ? product.map(reduce2) : product;
      index2[i--] = 0;
    }
  }
}
var init_cross = __esm({
  "node_modules/d3-array/src/cross.js"() {
  }
});

// node_modules/d3-array/src/cumsum.js
function cumsum(values, valueof) {
  var sum3 = 0, index2 = 0;
  return Float64Array.from(values, valueof === void 0 ? (v) => sum3 += +v || 0 : (v) => sum3 += +valueof(v, index2++, values) || 0);
}
var init_cumsum = __esm({
  "node_modules/d3-array/src/cumsum.js"() {
  }
});

// node_modules/d3-array/src/variance.js
function variance(values, valueof) {
  let count2 = 0;
  let delta;
  let mean2 = 0;
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count2;
        sum3 += delta * (value - mean2);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count2;
        sum3 += delta * (value - mean2);
      }
    }
  }
  if (count2 > 1) return sum3 / (count2 - 1);
}
var init_variance = __esm({
  "node_modules/d3-array/src/variance.js"() {
  }
});

// node_modules/d3-array/src/deviation.js
function deviation(values, valueof) {
  const v = variance(values, valueof);
  return v ? Math.sqrt(v) : v;
}
var init_deviation = __esm({
  "node_modules/d3-array/src/deviation.js"() {
    init_variance();
  }
});

// node_modules/d3-array/src/extent.js
function extent(values, valueof) {
  let min3;
  let max3;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min3 === void 0) {
          if (value >= value) min3 = max3 = value;
        } else {
          if (min3 > value) min3 = value;
          if (max3 < value) max3 = value;
        }
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null) {
        if (min3 === void 0) {
          if (value >= value) min3 = max3 = value;
        } else {
          if (min3 > value) min3 = value;
          if (max3 < value) max3 = value;
        }
      }
    }
  }
  return [min3, max3];
}
var init_extent = __esm({
  "node_modules/d3-array/src/extent.js"() {
  }
});

// node_modules/d3-array/src/fsum.js
function fsum(values, valueof) {
  const adder = new Adder();
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index2, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
}
function fcumsum(values, valueof) {
  const adder = new Adder();
  let index2 = -1;
  return Float64Array.from(
    values,
    valueof === void 0 ? (v) => adder.add(+v || 0) : (v) => adder.add(+valueof(v, ++index2, values) || 0)
  );
}
var Adder;
var init_fsum = __esm({
  "node_modules/d3-array/src/fsum.js"() {
    Adder = class {
      constructor() {
        this._partials = new Float64Array(32);
        this._n = 0;
      }
      add(x2) {
        const p = this._partials;
        let i = 0;
        for (let j = 0; j < this._n && j < 32; j++) {
          const y2 = p[j], hi = x2 + y2, lo = Math.abs(x2) < Math.abs(y2) ? x2 - (hi - y2) : y2 - (hi - x2);
          if (lo) p[i++] = lo;
          x2 = hi;
        }
        p[i] = x2;
        this._n = i + 1;
        return this;
      }
      valueOf() {
        const p = this._partials;
        let n = this._n, x2, y2, lo, hi = 0;
        if (n > 0) {
          hi = p[--n];
          while (n > 0) {
            x2 = hi;
            y2 = p[--n];
            hi = x2 + y2;
            lo = y2 - (hi - x2);
            if (lo) break;
          }
          if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
            y2 = lo * 2;
            x2 = hi + y2;
            if (y2 == x2 - hi) hi = x2;
          }
        }
        return hi;
      }
    };
  }
});

// node_modules/internmap/src/index.js
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
var InternMap, InternSet;
var init_src2 = __esm({
  "node_modules/internmap/src/index.js"() {
    InternMap = class extends Map {
      constructor(entries, key = keyof) {
        super();
        Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
        if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
      }
      get(key) {
        return super.get(intern_get(this, key));
      }
      has(key) {
        return super.has(intern_get(this, key));
      }
      set(key, value) {
        return super.set(intern_set(this, key), value);
      }
      delete(key) {
        return super.delete(intern_delete(this, key));
      }
    };
    InternSet = class extends Set {
      constructor(values, key = keyof) {
        super();
        Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
        if (values != null) for (const value of values) this.add(value);
      }
      has(value) {
        return super.has(intern_get(this, value));
      }
      add(value) {
        return super.add(intern_set(this, value));
      }
      delete(value) {
        return super.delete(intern_delete(this, value));
      }
    };
  }
});

// node_modules/d3-array/src/identity.js
function identity(x2) {
  return x2;
}
var init_identity = __esm({
  "node_modules/d3-array/src/identity.js"() {
  }
});

// node_modules/d3-array/src/group.js
function group(values, ...keys) {
  return nest(values, identity, identity, keys);
}
function groups(values, ...keys) {
  return nest(values, Array.from, identity, keys);
}
function flatten(groups2, keys) {
  for (let i = 1, n = keys.length; i < n; ++i) {
    groups2 = groups2.flatMap((g) => g.pop().map(([key, value]) => [...g, key, value]));
  }
  return groups2;
}
function flatGroup(values, ...keys) {
  return flatten(groups(values, ...keys), keys);
}
function flatRollup(values, reduce2, ...keys) {
  return flatten(rollups(values, reduce2, ...keys), keys);
}
function rollup(values, reduce2, ...keys) {
  return nest(values, identity, reduce2, keys);
}
function rollups(values, reduce2, ...keys) {
  return nest(values, Array.from, reduce2, keys);
}
function index(values, ...keys) {
  return nest(values, identity, unique, keys);
}
function indexes(values, ...keys) {
  return nest(values, Array.from, unique, keys);
}
function unique(values) {
  if (values.length !== 1) throw new Error("duplicate key");
  return values[0];
}
function nest(values, map4, reduce2, keys) {
  return function regroup(values2, i) {
    if (i >= keys.length) return reduce2(values2);
    const groups2 = new InternMap();
    const keyof2 = keys[i++];
    let index2 = -1;
    for (const value of values2) {
      const key = keyof2(value, ++index2, values2);
      const group2 = groups2.get(key);
      if (group2) group2.push(value);
      else groups2.set(key, [value]);
    }
    for (const [key, values3] of groups2) {
      groups2.set(key, regroup(values3, i));
    }
    return map4(groups2);
  }(values, 0);
}
var init_group = __esm({
  "node_modules/d3-array/src/group.js"() {
    init_src2();
    init_identity();
  }
});

// node_modules/d3-array/src/permute.js
function permute(source, keys) {
  return Array.from(keys, (key) => source[key]);
}
var init_permute = __esm({
  "node_modules/d3-array/src/permute.js"() {
  }
});

// node_modules/d3-array/src/sort.js
function sort(values, ...F) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f] = F;
  if (f && f.length !== 2 || F.length > 1) {
    const index2 = Uint32Array.from(values, (d, i) => i);
    if (F.length > 1) {
      F = F.map((f2) => values.map(f2));
      index2.sort((i, j) => {
        for (const f2 of F) {
          const c2 = ascendingDefined(f2[i], f2[j]);
          if (c2) return c2;
        }
      });
    } else {
      f = values.map(f);
      index2.sort((i, j) => ascendingDefined(f[i], f[j]));
    }
    return permute(values, index2);
  }
  return values.sort(compareDefined(f));
}
function compareDefined(compare = ascending) {
  if (compare === ascending) return ascendingDefined;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return (a2, b) => {
    const x2 = compare(a2, b);
    if (x2 || x2 === 0) return x2;
    return (compare(b, b) === 0) - (compare(a2, a2) === 0);
  };
}
function ascendingDefined(a2, b) {
  return (a2 == null || !(a2 >= a2)) - (b == null || !(b >= b)) || (a2 < b ? -1 : a2 > b ? 1 : 0);
}
var init_sort = __esm({
  "node_modules/d3-array/src/sort.js"() {
    init_ascending();
    init_permute();
  }
});

// node_modules/d3-array/src/groupSort.js
function groupSort(values, reduce2, key) {
  return (reduce2.length !== 2 ? sort(rollup(values, reduce2, key), ([ak, av], [bk, bv]) => ascending(av, bv) || ascending(ak, bk)) : sort(group(values, key), ([ak, av], [bk, bv]) => reduce2(av, bv) || ascending(ak, bk))).map(([key2]) => key2);
}
var init_groupSort = __esm({
  "node_modules/d3-array/src/groupSort.js"() {
    init_ascending();
    init_group();
    init_sort();
  }
});

// node_modules/d3-array/src/array.js
var array, slice, map;
var init_array = __esm({
  "node_modules/d3-array/src/array.js"() {
    array = Array.prototype;
    slice = array.slice;
    map = array.map;
  }
});

// node_modules/d3-array/src/constant.js
function constant(x2) {
  return () => x2;
}
var init_constant = __esm({
  "node_modules/d3-array/src/constant.js"() {
  }
});

// node_modules/d3-array/src/ticks.js
function tickSpec(start, stop, count2) {
  const step = (stop - start) / Math.max(0, count2), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count2 && count2 < 2) return tickSpec(start, stop, count2 * 2);
  return [i1, i2, inc];
}
function ticks(start, stop, count2) {
  stop = +stop, start = +start, count2 = +count2;
  if (!(count2 > 0)) return [];
  if (start === stop) return [start];
  const reverse2 = stop < start, [i1, i2, inc] = reverse2 ? tickSpec(stop, start, count2) : tickSpec(start, stop, count2);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse2) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start, stop, count2) {
  stop = +stop, start = +start, count2 = +count2;
  return tickSpec(start, stop, count2)[2];
}
function tickStep(start, stop, count2) {
  stop = +stop, start = +start, count2 = +count2;
  const reverse2 = stop < start, inc = reverse2 ? tickIncrement(stop, start, count2) : tickIncrement(start, stop, count2);
  return (reverse2 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
var e10, e5, e2;
var init_ticks = __esm({
  "node_modules/d3-array/src/ticks.js"() {
    e10 = Math.sqrt(50);
    e5 = Math.sqrt(10);
    e2 = Math.sqrt(2);
  }
});

// node_modules/d3-array/src/nice.js
function nice(start, stop, count2) {
  let prestep;
  while (true) {
    const step = tickIncrement(start, stop, count2);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}
var init_nice = __esm({
  "node_modules/d3-array/src/nice.js"() {
    init_ticks();
  }
});

// node_modules/d3-array/src/threshold/sturges.js
function thresholdSturges(values) {
  return Math.max(1, Math.ceil(Math.log(count(values)) / Math.LN2) + 1);
}
var init_sturges = __esm({
  "node_modules/d3-array/src/threshold/sturges.js"() {
    init_count();
  }
});

// node_modules/d3-array/src/bin.js
function bin() {
  var value = identity, domain = extent, threshold2 = thresholdSturges;
  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var i, n = data.length, x2, step, values = new Array(n);
    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }
    var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold2(values, x0, x1);
    if (!Array.isArray(tz)) {
      const max3 = x1, tn = +tz;
      if (domain === extent) [x0, x1] = nice(x0, x1, tn);
      tz = ticks(x0, x1, tn);
      if (tz[0] <= x0) step = tickIncrement(x0, x1, tn);
      if (tz[tz.length - 1] >= x1) {
        if (max3 >= x1 && domain === extent) {
          const step2 = tickIncrement(x0, x1, tn);
          if (isFinite(step2)) {
            if (step2 > 0) {
              x1 = (Math.floor(x1 / step2) + 1) * step2;
            } else if (step2 < 0) {
              x1 = (Math.ceil(x1 * -step2) + 1) / -step2;
            }
          }
        } else {
          tz.pop();
        }
      }
    }
    var m = tz.length, a2 = 0, b = m;
    while (tz[a2] <= x0) ++a2;
    while (tz[b - 1] > x1) --b;
    if (a2 || b < m) tz = tz.slice(a2, b), m = b - a2;
    var bins = new Array(m + 1), bin2;
    for (i = 0; i <= m; ++i) {
      bin2 = bins[i] = [];
      bin2.x0 = i > 0 ? tz[i - 1] : x0;
      bin2.x1 = i < m ? tz[i] : x1;
    }
    if (isFinite(step)) {
      if (step > 0) {
        for (i = 0; i < n; ++i) {
          if ((x2 = values[i]) != null && x0 <= x2 && x2 <= x1) {
            bins[Math.min(m, Math.floor((x2 - x0) / step))].push(data[i]);
          }
        }
      } else if (step < 0) {
        for (i = 0; i < n; ++i) {
          if ((x2 = values[i]) != null && x0 <= x2 && x2 <= x1) {
            const j = Math.floor((x0 - x2) * step);
            bins[Math.min(m, j + (tz[j] <= x2))].push(data[i]);
          }
        }
      }
    } else {
      for (i = 0; i < n; ++i) {
        if ((x2 = values[i]) != null && x0 <= x2 && x2 <= x1) {
          bins[bisect_default(tz, x2, 0, m)].push(data[i]);
        }
      }
    }
    return bins;
  }
  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };
  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };
  histogram.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : constant(Array.isArray(_) ? slice.call(_) : _), histogram) : threshold2;
  };
  return histogram;
}
var init_bin = __esm({
  "node_modules/d3-array/src/bin.js"() {
    init_array();
    init_bisect();
    init_constant();
    init_extent();
    init_identity();
    init_nice();
    init_ticks();
    init_sturges();
  }
});

// node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max3;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  }
  return max3;
}
var init_max = __esm({
  "node_modules/d3-array/src/max.js"() {
  }
});

// node_modules/d3-array/src/maxIndex.js
function maxIndex(values, valueof) {
  let max3;
  let maxIndex2 = -1;
  let index2 = -1;
  if (valueof === void 0) {
    for (const value of values) {
      ++index2;
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value, maxIndex2 = index2;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value, maxIndex2 = index2;
      }
    }
  }
  return maxIndex2;
}
var init_maxIndex = __esm({
  "node_modules/d3-array/src/maxIndex.js"() {
  }
});

// node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min3;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value;
      }
    }
  }
  return min3;
}
var init_min = __esm({
  "node_modules/d3-array/src/min.js"() {
  }
});

// node_modules/d3-array/src/minIndex.js
function minIndex(values, valueof) {
  let min3;
  let minIndex2 = -1;
  let index2 = -1;
  if (valueof === void 0) {
    for (const value of values) {
      ++index2;
      if (value != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value, minIndex2 = index2;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value, minIndex2 = index2;
      }
    }
  }
  return minIndex2;
}
var init_minIndex = __esm({
  "node_modules/d3-array/src/minIndex.js"() {
  }
});

// node_modules/d3-array/src/quickselect.js
function quickselect(array2, k2, left = 0, right = Infinity, compare) {
  k2 = Math.floor(k2);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array2.length - 1, right));
  if (!(left <= k2 && k2 <= right)) return array2;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k2 - left + 1;
      const z = Math.log(n);
      const s2 = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k2 - m * s2 / n + sd));
      const newRight = Math.min(right, Math.floor(k2 + (n - m) * s2 / n + sd));
      quickselect(array2, k2, newLeft, newRight, compare);
    }
    const t = array2[k2];
    let i = left;
    let j = right;
    swap(array2, left, k2);
    if (compare(array2[right], t) > 0) swap(array2, left, right);
    while (i < j) {
      swap(array2, i, j), ++i, --j;
      while (compare(array2[i], t) < 0) ++i;
      while (compare(array2[j], t) > 0) --j;
    }
    if (compare(array2[left], t) === 0) swap(array2, left, j);
    else ++j, swap(array2, j, right);
    if (j <= k2) left = j + 1;
    if (k2 <= j) right = j - 1;
  }
  return array2;
}
function swap(array2, i, j) {
  const t = array2[i];
  array2[i] = array2[j];
  array2[j] = t;
}
var init_quickselect = __esm({
  "node_modules/d3-array/src/quickselect.js"() {
    init_sort();
  }
});

// node_modules/d3-array/src/greatest.js
function greatest(values, compare = ascending) {
  let max3;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
        max3 = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, max3) > 0 : compare(value, value) === 0) {
        max3 = value;
        defined = true;
      }
    }
  }
  return max3;
}
var init_greatest = __esm({
  "node_modules/d3-array/src/greatest.js"() {
    init_ascending();
  }
});

// node_modules/d3-array/src/quantile.js
function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p, valueof = number) {
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
function quantileIndex(values, p, valueof = number) {
  if (isNaN(p = +p)) return;
  numbers2 = Float64Array.from(values, (_, i2) => number(valueof(values[i2], i2, values)));
  if (p <= 0) return minIndex(numbers2);
  if (p >= 1) return maxIndex(numbers2);
  var numbers2, index2 = Uint32Array.from(values, (_, i2) => i2), j = numbers2.length - 1, i = Math.floor(j * p);
  quickselect(index2, i, 0, j, (i2, j2) => ascendingDefined(numbers2[i2], numbers2[j2]));
  i = greatest(index2.subarray(0, i + 1), (i2) => numbers2[i2]);
  return i >= 0 ? i : -1;
}
var init_quantile = __esm({
  "node_modules/d3-array/src/quantile.js"() {
    init_max();
    init_maxIndex();
    init_min();
    init_minIndex();
    init_quickselect();
    init_number();
    init_sort();
    init_greatest();
  }
});

// node_modules/d3-array/src/threshold/freedmanDiaconis.js
function thresholdFreedmanDiaconis(values, min3, max3) {
  const c2 = count(values), d = quantile(values, 0.75) - quantile(values, 0.25);
  return c2 && d ? Math.ceil((max3 - min3) / (2 * d * Math.pow(c2, -1 / 3))) : 1;
}
var init_freedmanDiaconis = __esm({
  "node_modules/d3-array/src/threshold/freedmanDiaconis.js"() {
    init_count();
    init_quantile();
  }
});

// node_modules/d3-array/src/threshold/scott.js
function thresholdScott(values, min3, max3) {
  const c2 = count(values), d = deviation(values);
  return c2 && d ? Math.ceil((max3 - min3) * Math.cbrt(c2) / (3.49 * d)) : 1;
}
var init_scott = __esm({
  "node_modules/d3-array/src/threshold/scott.js"() {
    init_count();
    init_deviation();
  }
});

// node_modules/d3-array/src/mean.js
function mean(values, valueof) {
  let count2 = 0;
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count2, sum3 += value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        ++count2, sum3 += value;
      }
    }
  }
  if (count2) return sum3 / count2;
}
var init_mean = __esm({
  "node_modules/d3-array/src/mean.js"() {
  }
});

// node_modules/d3-array/src/median.js
function median(values, valueof) {
  return quantile(values, 0.5, valueof);
}
function medianIndex(values, valueof) {
  return quantileIndex(values, 0.5, valueof);
}
var init_median = __esm({
  "node_modules/d3-array/src/median.js"() {
    init_quantile();
  }
});

// node_modules/d3-array/src/merge.js
function* flatten2(arrays) {
  for (const array2 of arrays) {
    yield* array2;
  }
}
function merge(arrays) {
  return Array.from(flatten2(arrays));
}
var init_merge = __esm({
  "node_modules/d3-array/src/merge.js"() {
  }
});

// node_modules/d3-array/src/mode.js
function mode(values, valueof) {
  const counts = new InternMap();
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && value >= value) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && value >= value) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
  }
  let modeValue;
  let modeCount = 0;
  for (const [value, count2] of counts) {
    if (count2 > modeCount) {
      modeCount = count2;
      modeValue = value;
    }
  }
  return modeValue;
}
var init_mode = __esm({
  "node_modules/d3-array/src/mode.js"() {
    init_src2();
  }
});

// node_modules/d3-array/src/pairs.js
function pairs(values, pairof = pair) {
  const pairs2 = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs2.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs2;
}
function pair(a2, b) {
  return [a2, b];
}
var init_pairs = __esm({
  "node_modules/d3-array/src/pairs.js"() {
  }
});

// node_modules/d3-array/src/range.js
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start + i * step;
  }
  return range2;
}
var init_range = __esm({
  "node_modules/d3-array/src/range.js"() {
  }
});

// node_modules/d3-array/src/rank.js
function rank(values, valueof = ascending) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  let V = Array.from(values);
  const R = new Float64Array(V.length);
  if (valueof.length !== 2) V = V.map(valueof), valueof = ascending;
  const compareIndex = (i, j) => valueof(V[i], V[j]);
  let k2, r;
  values = Uint32Array.from(V, (_, i) => i);
  values.sort(valueof === ascending ? (i, j) => ascendingDefined(V[i], V[j]) : compareDefined(compareIndex));
  values.forEach((j, i) => {
    const c2 = compareIndex(j, k2 === void 0 ? j : k2);
    if (c2 >= 0) {
      if (k2 === void 0 || c2 > 0) k2 = j, r = i;
      R[j] = r;
    } else {
      R[j] = NaN;
    }
  });
  return R;
}
var init_rank = __esm({
  "node_modules/d3-array/src/rank.js"() {
    init_ascending();
    init_sort();
  }
});

// node_modules/d3-array/src/least.js
function least(values, compare = ascending) {
  let min3;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? ascending(value, minValue) < 0 : ascending(value, value) === 0) {
        min3 = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, min3) < 0 : compare(value, value) === 0) {
        min3 = value;
        defined = true;
      }
    }
  }
  return min3;
}
var init_least = __esm({
  "node_modules/d3-array/src/least.js"() {
    init_ascending();
  }
});

// node_modules/d3-array/src/leastIndex.js
function leastIndex(values, compare = ascending) {
  if (compare.length === 1) return minIndex(values, compare);
  let minValue;
  let min3 = -1;
  let index2 = -1;
  for (const value of values) {
    ++index2;
    if (min3 < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
      minValue = value;
      min3 = index2;
    }
  }
  return min3;
}
var init_leastIndex = __esm({
  "node_modules/d3-array/src/leastIndex.js"() {
    init_ascending();
    init_minIndex();
  }
});

// node_modules/d3-array/src/greatestIndex.js
function greatestIndex(values, compare = ascending) {
  if (compare.length === 1) return maxIndex(values, compare);
  let maxValue;
  let max3 = -1;
  let index2 = -1;
  for (const value of values) {
    ++index2;
    if (max3 < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
      maxValue = value;
      max3 = index2;
    }
  }
  return max3;
}
var init_greatestIndex = __esm({
  "node_modules/d3-array/src/greatestIndex.js"() {
    init_ascending();
    init_maxIndex();
  }
});

// node_modules/d3-array/src/scan.js
function scan(values, compare) {
  const index2 = leastIndex(values, compare);
  return index2 < 0 ? void 0 : index2;
}
var init_scan = __esm({
  "node_modules/d3-array/src/scan.js"() {
    init_leastIndex();
  }
});

// node_modules/d3-array/src/shuffle.js
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}
var shuffle_default;
var init_shuffle = __esm({
  "node_modules/d3-array/src/shuffle.js"() {
    shuffle_default = shuffler(Math.random);
  }
});

// node_modules/d3-array/src/sum.js
function sum(values, valueof) {
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        sum3 += value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index2, values)) {
        sum3 += value;
      }
    }
  }
  return sum3;
}
var init_sum = __esm({
  "node_modules/d3-array/src/sum.js"() {
  }
});

// node_modules/d3-array/src/transpose.js
function transpose(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min(matrix, length2), transpose2 = new Array(m); ++i < m; ) {
    for (var j = -1, n, row = transpose2[i] = new Array(n); ++j < n; ) {
      row[j] = matrix[j][i];
    }
  }
  return transpose2;
}
function length2(d) {
  return d.length;
}
var init_transpose = __esm({
  "node_modules/d3-array/src/transpose.js"() {
    init_min();
  }
});

// node_modules/d3-array/src/zip.js
function zip() {
  return transpose(arguments);
}
var init_zip = __esm({
  "node_modules/d3-array/src/zip.js"() {
    init_transpose();
  }
});

// node_modules/d3-array/src/every.js
function every(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index2 = -1;
  for (const value of values) {
    if (!test(value, ++index2, values)) {
      return false;
    }
  }
  return true;
}
var init_every = __esm({
  "node_modules/d3-array/src/every.js"() {
  }
});

// node_modules/d3-array/src/some.js
function some(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index2 = -1;
  for (const value of values) {
    if (test(value, ++index2, values)) {
      return true;
    }
  }
  return false;
}
var init_some = __esm({
  "node_modules/d3-array/src/some.js"() {
  }
});

// node_modules/d3-array/src/filter.js
function filter(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  const array2 = [];
  let index2 = -1;
  for (const value of values) {
    if (test(value, ++index2, values)) {
      array2.push(value);
    }
  }
  return array2;
}
var init_filter = __esm({
  "node_modules/d3-array/src/filter.js"() {
  }
});

// node_modules/d3-array/src/map.js
function map2(values, mapper) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
  return Array.from(values, (value, index2) => mapper(value, index2, values));
}
var init_map = __esm({
  "node_modules/d3-array/src/map.js"() {
  }
});

// node_modules/d3-array/src/reduce.js
function reduce(values, reducer2, value) {
  if (typeof reducer2 !== "function") throw new TypeError("reducer is not a function");
  const iterator = values[Symbol.iterator]();
  let done, next, index2 = -1;
  if (arguments.length < 3) {
    ({ done, value } = iterator.next());
    if (done) return;
    ++index2;
  }
  while ({ done, value: next } = iterator.next(), !done) {
    value = reducer2(value, next, ++index2, values);
  }
  return value;
}
var init_reduce = __esm({
  "node_modules/d3-array/src/reduce.js"() {
  }
});

// node_modules/d3-array/src/reverse.js
function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}
var init_reverse = __esm({
  "node_modules/d3-array/src/reverse.js"() {
  }
});

// node_modules/d3-array/src/difference.js
function difference(values, ...others) {
  values = new InternSet(values);
  for (const other of others) {
    for (const value of other) {
      values.delete(value);
    }
  }
  return values;
}
var init_difference = __esm({
  "node_modules/d3-array/src/difference.js"() {
    init_src2();
  }
});

// node_modules/d3-array/src/disjoint.js
function disjoint(values, other) {
  const iterator = other[Symbol.iterator](), set2 = new InternSet();
  for (const v of values) {
    if (set2.has(v)) return false;
    let value, done;
    while ({ value, done } = iterator.next()) {
      if (done) break;
      if (Object.is(v, value)) return false;
      set2.add(value);
    }
  }
  return true;
}
var init_disjoint = __esm({
  "node_modules/d3-array/src/disjoint.js"() {
    init_src2();
  }
});

// node_modules/d3-array/src/intersection.js
function intersection(values, ...others) {
  values = new InternSet(values);
  others = others.map(set);
  out: for (const value of values) {
    for (const other of others) {
      if (!other.has(value)) {
        values.delete(value);
        continue out;
      }
    }
  }
  return values;
}
function set(values) {
  return values instanceof InternSet ? values : new InternSet(values);
}
var init_intersection = __esm({
  "node_modules/d3-array/src/intersection.js"() {
    init_src2();
  }
});

// node_modules/d3-array/src/superset.js
function superset(values, other) {
  const iterator = values[Symbol.iterator](), set2 = /* @__PURE__ */ new Set();
  for (const o of other) {
    const io = intern(o);
    if (set2.has(io)) continue;
    let value, done;
    while ({ value, done } = iterator.next()) {
      if (done) return false;
      const ivalue = intern(value);
      set2.add(ivalue);
      if (Object.is(io, ivalue)) break;
    }
  }
  return true;
}
function intern(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
var init_superset = __esm({
  "node_modules/d3-array/src/superset.js"() {
  }
});

// node_modules/d3-array/src/subset.js
function subset(values, other) {
  return superset(other, values);
}
var init_subset = __esm({
  "node_modules/d3-array/src/subset.js"() {
    init_superset();
  }
});

// node_modules/d3-array/src/union.js
function union(...others) {
  const set2 = new InternSet();
  for (const other of others) {
    for (const o of other) {
      set2.add(o);
    }
  }
  return set2;
}
var init_union = __esm({
  "node_modules/d3-array/src/union.js"() {
    init_src2();
  }
});

// node_modules/d3-array/src/index.js
var init_src3 = __esm({
  "node_modules/d3-array/src/index.js"() {
    init_bisect();
    init_ascending();
    init_bisector();
    init_blur();
    init_count();
    init_cross();
    init_cumsum();
    init_descending();
    init_deviation();
    init_extent();
    init_fsum();
    init_group();
    init_groupSort();
    init_bin();
    init_freedmanDiaconis();
    init_scott();
    init_sturges();
    init_max();
    init_maxIndex();
    init_mean();
    init_median();
    init_merge();
    init_min();
    init_minIndex();
    init_mode();
    init_nice();
    init_pairs();
    init_permute();
    init_quantile();
    init_quickselect();
    init_range();
    init_rank();
    init_least();
    init_leastIndex();
    init_greatest();
    init_greatestIndex();
    init_scan();
    init_shuffle();
    init_sum();
    init_ticks();
    init_transpose();
    init_variance();
    init_zip();
    init_every();
    init_some();
    init_filter();
    init_map();
    init_reduce();
    init_reverse();
    init_sort();
    init_difference();
    init_disjoint();
    init_intersection();
    init_subset();
    init_superset();
    init_union();
    init_src2();
  }
});

// node_modules/d3-scale/src/init.js
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}
var init_init = __esm({
  "node_modules/d3-scale/src/init.js"() {
  }
});

// node_modules/d3-scale/src/ordinal.js
function ordinal() {
  var index2 = new InternMap(), domain = [], range2 = [], unknown = implicit;
  function scale(d) {
    let i = index2.get(d);
    if (i === void 0) {
      if (unknown !== implicit) return unknown;
      index2.set(d, i = domain.push(d) - 1);
    }
    return range2[i % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index2 = new InternMap();
    for (const value of _) {
      if (index2.has(value)) continue;
      index2.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
var implicit;
var init_ordinal = __esm({
  "node_modules/d3-scale/src/ordinal.js"() {
    init_src3();
    init_init();
    implicit = Symbol("implicit");
  }
});

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse2 = r1 < r0, start = reverse2 ? r1 : r0, stop = reverse2 ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse2 ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}
var init_band = __esm({
  "node_modules/d3-scale/src/band.js"() {
    init_src3();
    init_init();
    init_ordinal();
  }
});

// node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
var init_basis = __esm({
  "node_modules/d3-interpolate/src/basis.js"() {
  }
});

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
var init_basisClosed = __esm({
  "node_modules/d3-interpolate/src/basisClosed.js"() {
    init_basis();
  }
});

// node_modules/d3-interpolate/src/constant.js
var constant_default;
var init_constant2 = __esm({
  "node_modules/d3-interpolate/src/constant.js"() {
    constant_default = (x2) => () => x2;
  }
});

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y2) {
  return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
    return Math.pow(a2 + t * b, y2);
  };
}
function hue(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default(isNaN(a2) ? b : a2);
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y2) : constant_default(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default(isNaN(a2) ? b : a2);
}
var init_color2 = __esm({
  "node_modules/d3-interpolate/src/color.js"() {
    init_constant2();
  }
});

// node_modules/d3-interpolate/src/rgb.js
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgb_default, rgbBasis, rgbBasisClosed;
var init_rgb = __esm({
  "node_modules/d3-interpolate/src/rgb.js"() {
    init_src();
    init_basis();
    init_basisClosed();
    init_color2();
    rgb_default = function rgbGamma(y2) {
      var color2 = gamma(y2);
      function rgb2(start, end) {
        var r = color2((start = rgb(start)).r, (end = rgb(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }
      rgb2.gamma = rgbGamma;
      return rgb2;
    }(1);
    rgbBasis = rgbSpline(basis_default);
    rgbBasisClosed = rgbSpline(basisClosed_default);
  }
});

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b) b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c2 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c2[i] = a2[i] * (1 - t) + b[i] * t;
    return c2;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}
var init_numberArray = __esm({
  "node_modules/d3-interpolate/src/numberArray.js"() {
  }
});

// node_modules/d3-interpolate/src/array.js
function array_default(a2, b) {
  return (isNumberArray(b) ? numberArray_default : genericArray)(a2, b);
}
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c2 = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i) c2[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c2[i] = x2[i](t);
    return c2;
  };
}
var init_array2 = __esm({
  "node_modules/d3-interpolate/src/array.js"() {
    init_value();
    init_numberArray();
  }
});

// node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = /* @__PURE__ */ new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}
var init_date = __esm({
  "node_modules/d3-interpolate/src/date.js"() {
  }
});

// node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}
var init_number2 = __esm({
  "node_modules/d3-interpolate/src/number.js"() {
  }
});

// node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c2 = {}, k2;
  if (a2 === null || typeof a2 !== "object") a2 = {};
  if (b === null || typeof b !== "object") b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c2[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i) c2[k2] = i[k2](t);
    return c2;
  };
}
var init_object = __esm({
  "node_modules/d3-interpolate/src/object.js"() {
    init_value();
  }
});

// node_modules/d3-interpolate/src/string.js
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i]) s2[i] += bs;
      else s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i]) s2[i] += bm;
      else s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i]) s2[i] += bs;
    else s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}
var reA, reB;
var init_string = __esm({
  "node_modules/d3-interpolate/src/string.js"() {
    init_number2();
    reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    reB = new RegExp(reA.source, "g");
  }
});

// node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c2;
  return b == null || t === "boolean" ? constant_default(b) : (t === "number" ? number_default : t === "string" ? (c2 = color(b)) ? (b = c2, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a2, b);
}
var init_value = __esm({
  "node_modules/d3-interpolate/src/value.js"() {
    init_src();
    init_rgb();
    init_array2();
    init_date();
    init_number2();
    init_object();
    init_string();
    init_constant2();
    init_numberArray();
  }
});

// node_modules/d3-interpolate/src/discrete.js
function discrete_default(range2) {
  var n = range2.length;
  return function(t) {
    return range2[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var init_discrete = __esm({
  "node_modules/d3-interpolate/src/discrete.js"() {
  }
});

// node_modules/d3-interpolate/src/hue.js
function hue_default(a2, b) {
  var i = hue(+a2, +b);
  return function(t) {
    var x2 = i(t);
    return x2 - 360 * Math.floor(x2 / 360);
  };
}
var init_hue = __esm({
  "node_modules/d3-interpolate/src/hue.js"() {
    init_color2();
  }
});

// node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}
var init_round = __esm({
  "node_modules/d3-interpolate/src/round.js"() {
  }
});

// node_modules/d3-interpolate/src/transform/decompose.js
function decompose_default(a2, b, c2, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b)) a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c2 + b * d) c2 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d * d)) c2 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c2) a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}
var degrees2, identity2;
var init_decompose = __esm({
  "node_modules/d3-interpolate/src/transform/decompose.js"() {
    degrees2 = 180 / Math.PI;
    identity2 = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };
  }
});

// node_modules/d3-interpolate/src/transform/parse.js
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity2;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity2;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}
var svgNode;
var init_parse = __esm({
  "node_modules/d3-interpolate/src/transform/parse.js"() {
    init_decompose();
  }
});

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s2) {
    return s2.length ? s2.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s2.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s2, q) {
    if (a2 !== b) {
      if (a2 - b > 180) b += 360;
      else if (b - a2 > 180) a2 += 360;
      q.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s2, q) {
    if (a2 !== b) {
      q.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s2 = [], q = [];
    a2 = parse(a2), b = parse(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
    rotate(a2.rotate, b.rotate, s2, q);
    skewX(a2.skewX, b.skewX, s2, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s2[(o = q[i]).i] = o.x(t);
      return s2.join("");
    };
  };
}
var interpolateTransformCss, interpolateTransformSvg;
var init_transform = __esm({
  "node_modules/d3-interpolate/src/transform/index.js"() {
    init_number2();
    init_parse();
    interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
    interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
  }
});

// node_modules/d3-interpolate/src/zoom.js
function cosh(x2) {
  return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
}
function sinh(x2) {
  return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
}
function tanh(x2) {
  return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
}
var epsilon2, zoom_default;
var init_zoom = __esm({
  "node_modules/d3-interpolate/src/zoom.js"() {
    epsilon2 = 1e-12;
    zoom_default = function zoomRho(rho, rho2, rho4) {
      function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        if (d2 < epsilon2) {
          S = Math.log(w1 / w0) / rho;
          i = function(t) {
            return [
              ux0 + t * dx,
              uy0 + t * dy,
              w0 * Math.exp(rho * t * S)
            ];
          };
        } else {
          var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S = (r1 - r0) / rho;
          i = function(t) {
            var s2 = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
            return [
              ux0 + u * dx,
              uy0 + u * dy,
              w0 * coshr0 / cosh(rho * s2 + r0)
            ];
          };
        }
        i.duration = S * 1e3 * rho / Math.SQRT2;
        return i;
      }
      zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
      };
      return zoom;
    }(Math.SQRT2, 2, 4);
  }
});

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start, end) {
    var h = hue2((start = hsl(start)).h, (end = hsl(end)).h), s2 = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s2(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}
var hsl_default, hslLong;
var init_hsl = __esm({
  "node_modules/d3-interpolate/src/hsl.js"() {
    init_src();
    init_color2();
    hsl_default = hsl2(hue);
    hslLong = hsl2(nogamma);
  }
});

// node_modules/d3-interpolate/src/lab.js
function lab2(start, end) {
  var l = nogamma((start = lab(start)).l, (end = lab(end)).l), a2 = nogamma(start.a, end.a), b = nogamma(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a2(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}
var init_lab2 = __esm({
  "node_modules/d3-interpolate/src/lab.js"() {
    init_src();
    init_color2();
  }
});

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start, end) {
    var h = hue2((start = hcl(start)).h, (end = hcl(end)).h), c2 = nogamma(start.c, end.c), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c2(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}
var hcl_default, hclLong;
var init_hcl = __esm({
  "node_modules/d3-interpolate/src/hcl.js"() {
    init_src();
    init_color2();
    hcl_default = hcl2(hue);
    hclLong = hcl2(nogamma);
  }
});

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y2) {
    y2 = +y2;
    function cubehelix3(start, end) {
      var h = hue2((start = cubehelix(start)).h, (end = cubehelix(end)).h), s2 = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s2(t);
        start.l = l(Math.pow(t, y2));
        start.opacity = opacity(t);
        return start + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default, cubehelixLong;
var init_cubehelix2 = __esm({
  "node_modules/d3-interpolate/src/cubehelix.js"() {
    init_src();
    init_color2();
    cubehelix_default = cubehelix2(hue);
    cubehelixLong = cubehelix2(nogamma);
  }
});

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values) {
  if (values === void 0) values = interpolate, interpolate = value_default;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}
var init_piecewise = __esm({
  "node_modules/d3-interpolate/src/piecewise.js"() {
    init_value();
  }
});

// node_modules/d3-interpolate/src/quantize.js
function quantize_default(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}
var init_quantize = __esm({
  "node_modules/d3-interpolate/src/quantize.js"() {
  }
});

// node_modules/d3-interpolate/src/index.js
var init_src4 = __esm({
  "node_modules/d3-interpolate/src/index.js"() {
    init_value();
    init_array2();
    init_basis();
    init_basisClosed();
    init_date();
    init_discrete();
    init_hue();
    init_number2();
    init_numberArray();
    init_object();
    init_round();
    init_string();
    init_transform();
    init_zoom();
    init_rgb();
    init_hsl();
    init_lab2();
    init_hcl();
    init_cubehelix2();
    init_piecewise();
    init_quantize();
  }
});

// node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}
var init_constant3 = __esm({
  "node_modules/d3-scale/src/constant.js"() {
  }
});

// node_modules/d3-scale/src/number.js
function number2(x2) {
  return +x2;
}
var init_number3 = __esm({
  "node_modules/d3-scale/src/number.js"() {
  }
});

// node_modules/d3-scale/src/continuous.js
function identity3(x2) {
  return x2;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x2) {
    return (x2 - a2) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a2, b) {
  var t;
  if (a2 > b) t = a2, a2 = b, b = t;
  return function(x2) {
    return Math.max(a2, Math.min(b, x2));
  };
}
function bimap(domain, range2, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range2, interpolate) {
  var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range2[i], range2[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range2 = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity3, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range2.length);
    if (clamp !== identity3) clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform), range2, interpolate)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise2(range2, domain.map(transform), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity3, rescale()) : clamp !== identity3;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity3, identity3);
}
var unit;
var init_continuous = __esm({
  "node_modules/d3-scale/src/continuous.js"() {
    init_src3();
    init_src4();
    init_constant3();
    init_number3();
    unit = [0, 1];
  }
});

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}
var init_formatDecimal = __esm({
  "node_modules/d3-format/src/formatDecimal.js"() {
  }
});

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}
var init_exponent = __esm({
  "node_modules/d3-format/src/exponent.js"() {
    init_formatDecimal();
  }
});

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length3 = 0;
    while (i > 0 && g > 0) {
      if (length3 + g + 1 > width) g = Math.max(1, width - length3);
      t.push(value.substring(i -= g, i + g));
      if ((length3 += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
var init_formatGroup = __esm({
  "node_modules/d3-format/src/formatGroup.js"() {
  }
});

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var init_formatNumerals = __esm({
  "node_modules/d3-format/src/formatNumerals.js"() {
  }
});

// node_modules/d3-format/src/formatSpecifier.js
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
var re;
var init_formatSpecifier = __esm({
  "node_modules/d3-format/src/formatSpecifier.js"() {
    re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    formatSpecifier.prototype = FormatSpecifier.prototype;
    FormatSpecifier.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
    };
  }
});

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out: for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s2[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s2[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}
var init_formatTrim = __esm({
  "node_modules/d3-format/src/formatTrim.js"() {
  }
});

// node_modules/d3-format/src/formatPrefixAuto.js
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}
var prefixExponent;
var init_formatPrefixAuto = __esm({
  "node_modules/d3-format/src/formatPrefixAuto.js"() {
    init_formatDecimal();
  }
});

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
var init_formatRounded = __esm({
  "node_modules/d3-format/src/formatRounded.js"() {
    init_formatDecimal();
  }
});

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default;
var init_formatTypes = __esm({
  "node_modules/d3-format/src/formatTypes.js"() {
    init_formatDecimal();
    init_formatPrefixAuto();
    init_formatRounded();
    formatTypes_default = {
      "%": (x2, p) => (x2 * 100).toFixed(p),
      "b": (x2) => Math.round(x2).toString(2),
      "c": (x2) => x2 + "",
      "d": formatDecimal_default,
      "e": (x2, p) => x2.toExponential(p),
      "f": (x2, p) => x2.toFixed(p),
      "g": (x2, p) => x2.toPrecision(p),
      "o": (x2) => Math.round(x2).toString(8),
      "p": (x2, p) => formatRounded_default(x2 * 100, p),
      "r": formatRounded_default,
      "s": formatPrefixAuto_default,
      "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
      "x": (x2) => Math.round(x2).toString(16)
    };
  }
});

// node_modules/d3-format/src/identity.js
function identity_default(x2) {
  return x2;
}
var init_identity2 = __esm({
  "node_modules/d3-format/src/identity.js"() {
  }
});

// node_modules/d3-format/src/locale.js
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "−" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c2;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c2 = value.charCodeAt(i), 48 > c2 || c2 > 57) {
              valueSuffix = (c2 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group2(value, Infinity);
      var length3 = valuePrefix.length + value.length + valueSuffix.length, padding = length3 < width ? new Array(width - length3 + 1).join(fill) : "";
      if (comma && zero3) value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length3 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length3);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var map3, prefixes;
var init_locale = __esm({
  "node_modules/d3-format/src/locale.js"() {
    init_exponent();
    init_formatGroup();
    init_formatNumerals();
    init_formatSpecifier();
    init_formatTrim();
    init_formatTypes();
    init_formatPrefixAuto();
    init_identity2();
    map3 = Array.prototype.map;
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  }
});

// node_modules/d3-format/src/defaultLocale.js
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
var locale, format, formatPrefix;
var init_defaultLocale = __esm({
  "node_modules/d3-format/src/defaultLocale.js"() {
    init_locale();
    defaultLocale({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });
  }
});

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}
var init_precisionFixed = __esm({
  "node_modules/d3-format/src/precisionFixed.js"() {
    init_exponent();
  }
});

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}
var init_precisionPrefix = __esm({
  "node_modules/d3-format/src/precisionPrefix.js"() {
    init_exponent();
  }
});

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}
var init_precisionRound = __esm({
  "node_modules/d3-format/src/precisionRound.js"() {
    init_exponent();
  }
});

// node_modules/d3-format/src/index.js
var init_src5 = __esm({
  "node_modules/d3-format/src/index.js"() {
    init_defaultLocale();
    init_locale();
    init_formatSpecifier();
    init_precisionFixed();
    init_precisionPrefix();
    init_precisionRound();
  }
});

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count2, specifier) {
  var step = tickStep(start, stop, count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
var init_tickFormat = __esm({
  "node_modules/d3-scale/src/tickFormat.js"() {
    init_src3();
    init_src5();
  }
});

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count2 == null ? 10 : count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null) count2 = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count2);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
var init_linear = __esm({
  "node_modules/d3-scale/src/linear.js"() {
    init_src3();
    init_continuous();
    init_init();
    init_tickFormat();
  }
});

// node_modules/d3-scale/src/identity.js
function identity4(domain) {
  var unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : x2;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), scale) : domain.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return identity4(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number2) : [0, 1];
  return linearish(scale);
}
var init_identity3 = __esm({
  "node_modules/d3-scale/src/identity.js"() {
    init_linear();
    init_number3();
  }
});

// node_modules/d3-scale/src/nice.js
function nice2(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}
var init_nice2 = __esm({
  "node_modules/d3-scale/src/nice.js"() {
  }
});

// node_modules/d3-scale/src/log.js
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x2) => Math.pow(base, x2);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x2) => Math.log(x2) / base);
}
function reflect(f) {
  return (x2, k2) => -f(-x2, k2);
}
function loggish(transform) {
  const scale = transform(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = (count2) => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;
    if (r) [u, v] = [v, u];
    let i = logs(u);
    let j = logs(v);
    let k2;
    let t;
    const n = count2 == null ? 10 : +count2;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k2 = 1; k2 < base; ++k2) {
          t = i < 0 ? k2 / pows(-i) : k2 * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      else for (; i <= j; ++i) {
        for (k2 = base - 1; k2 >= 1; --k2) {
          t = i > 0 ? k2 / pows(-i) : k2 * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = (count2, specifier) => {
    if (count2 == null) count2 = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
      specifier = format(specifier);
    }
    if (count2 === Infinity) return specifier;
    const k2 = Math.max(1, base * count2 / scale.ticks().length);
    return (d) => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = () => {
    return domain(nice2(domain(), {
      floor: (x2) => pows(Math.floor(logs(x2))),
      ceil: (x2) => pows(Math.ceil(logs(x2)))
    }));
  };
  return scale;
}
function log() {
  const scale = loggish(transformer()).domain([1, 10]);
  scale.copy = () => copy(scale, log()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}
var init_log = __esm({
  "node_modules/d3-scale/src/log.js"() {
    init_src3();
    init_src5();
    init_nice2();
    init_continuous();
    init_init();
  }
});

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c2));
  };
}
function transformSymexp(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c2;
  };
}
function symlogish(transform) {
  var c2 = 1, scale = transform(transformSymlog(c2), transformSymexp(c2));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c2 = +_), transformSymexp(c2)) : c2;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}
var init_symlog = __esm({
  "node_modules/d3-scale/src/symlog.js"() {
    init_linear();
    init_continuous();
    init_init();
  }
});

// node_modules/d3-scale/src/pow.js
function transformPow(exponent) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent) : Math.pow(x2, exponent);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform) {
  var scale = transform(identity3, identity3), exponent = 1;
  function rescale() {
    return exponent === 1 ? transform(identity3, identity3) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer());
  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}
var init_pow = __esm({
  "node_modules/d3-scale/src/pow.js"() {
    init_linear();
    init_continuous();
    init_init();
  }
});

// node_modules/d3-scale/src/radial.js
function square(x2) {
  return Math.sign(x2) * x2 * x2;
}
function unsquare(x2) {
  return Math.sign(x2) * Math.sqrt(Math.abs(x2));
}
function radial() {
  var squared = continuous(), range2 = [0, 1], round = false, unknown;
  function scale(x2) {
    var y2 = unsquare(squared(x2));
    return isNaN(y2) ? unknown : round ? Math.round(y2) : y2;
  }
  scale.invert = function(y2) {
    return squared.invert(square(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };
  scale.range = function(_) {
    return arguments.length ? (squared.range((range2 = Array.from(_, number2)).map(square)), scale) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };
  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return radial(squared.domain(), range2).round(round).clamp(squared.clamp()).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
var init_radial = __esm({
  "node_modules/d3-scale/src/radial.js"() {
    init_continuous();
    init_init();
    init_linear();
    init_number3();
  }
});

// node_modules/d3-scale/src/quantile.js
function quantile2() {
  var domain = [], range2 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range2.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : range2[bisect_default(thresholds, x2)];
  }
  scale.invertExtent = function(y2) {
    var i = range2.indexOf(y2);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile2().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}
var init_quantile2 = __esm({
  "node_modules/d3-scale/src/quantile.js"() {
    init_src3();
    init_init();
  }
});

// node_modules/d3-scale/src/quantize.js
function quantize() {
  var x0 = 0, x1 = 1, n = 1, domain = [0.5], range2 = [0, 1], unknown;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range2[bisect_default(domain, x2, 0, n)] : unknown;
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };
  scale.range = function(_) {
    return arguments.length ? (n = (range2 = Array.from(_)).length - 1, rescale()) : range2.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range2.indexOf(y2);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x0, x1]).range(range2).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}
var init_quantize2 = __esm({
  "node_modules/d3-scale/src/quantize.js"() {
    init_src3();
    init_linear();
    init_init();
  }
});

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range2 = [0, 1], unknown, n = 1;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range2[bisect_default(domain, x2, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), n = Math.min(domain.length, range2.length - 1), scale) : range2.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range2.indexOf(y2);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}
var init_threshold = __esm({
  "node_modules/d3-scale/src/threshold.js"() {
    init_src3();
    init_init();
  }
});

// node_modules/d3-time/src/interval.js
function timeInterval(floori, offseti, count2, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = (date2) => {
    const d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = (start, stop, step) => {
    const range2 = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range2;
    let previous;
    do
      range2.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range2;
  };
  interval.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count2) {
    interval.count = (start, end) => {
      t02.setTime(+start), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count2(t02, t12));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}
var t02, t12;
var init_interval = __esm({
  "node_modules/d3-time/src/interval.js"() {
    t02 = /* @__PURE__ */ new Date();
    t12 = /* @__PURE__ */ new Date();
  }
});

// node_modules/d3-time/src/millisecond.js
var millisecond, milliseconds;
var init_millisecond = __esm({
  "node_modules/d3-time/src/millisecond.js"() {
    init_interval();
    millisecond = timeInterval(() => {
    }, (date2, step) => {
      date2.setTime(+date2 + step);
    }, (start, end) => {
      return end - start;
    });
    millisecond.every = (k2) => {
      k2 = Math.floor(k2);
      if (!isFinite(k2) || !(k2 > 0)) return null;
      if (!(k2 > 1)) return millisecond;
      return timeInterval((date2) => {
        date2.setTime(Math.floor(date2 / k2) * k2);
      }, (date2, step) => {
        date2.setTime(+date2 + step * k2);
      }, (start, end) => {
        return (end - start) / k2;
      });
    };
    milliseconds = millisecond.range;
  }
});

// node_modules/d3-time/src/duration.js
var durationSecond, durationMinute, durationHour, durationDay, durationWeek, durationMonth, durationYear;
var init_duration = __esm({
  "node_modules/d3-time/src/duration.js"() {
    durationSecond = 1e3;
    durationMinute = durationSecond * 60;
    durationHour = durationMinute * 60;
    durationDay = durationHour * 24;
    durationWeek = durationDay * 7;
    durationMonth = durationDay * 30;
    durationYear = durationDay * 365;
  }
});

// node_modules/d3-time/src/second.js
var second, seconds;
var init_second = __esm({
  "node_modules/d3-time/src/second.js"() {
    init_interval();
    init_duration();
    second = timeInterval((date2) => {
      date2.setTime(date2 - date2.getMilliseconds());
    }, (date2, step) => {
      date2.setTime(+date2 + step * durationSecond);
    }, (start, end) => {
      return (end - start) / durationSecond;
    }, (date2) => {
      return date2.getUTCSeconds();
    });
    seconds = second.range;
  }
});

// node_modules/d3-time/src/minute.js
var timeMinute, timeMinutes, utcMinute, utcMinutes;
var init_minute = __esm({
  "node_modules/d3-time/src/minute.js"() {
    init_interval();
    init_duration();
    timeMinute = timeInterval((date2) => {
      date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
    }, (date2, step) => {
      date2.setTime(+date2 + step * durationMinute);
    }, (start, end) => {
      return (end - start) / durationMinute;
    }, (date2) => {
      return date2.getMinutes();
    });
    timeMinutes = timeMinute.range;
    utcMinute = timeInterval((date2) => {
      date2.setUTCSeconds(0, 0);
    }, (date2, step) => {
      date2.setTime(+date2 + step * durationMinute);
    }, (start, end) => {
      return (end - start) / durationMinute;
    }, (date2) => {
      return date2.getUTCMinutes();
    });
    utcMinutes = utcMinute.range;
  }
});

// node_modules/d3-time/src/hour.js
var timeHour, timeHours, utcHour, utcHours;
var init_hour = __esm({
  "node_modules/d3-time/src/hour.js"() {
    init_interval();
    init_duration();
    timeHour = timeInterval((date2) => {
      date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
    }, (date2, step) => {
      date2.setTime(+date2 + step * durationHour);
    }, (start, end) => {
      return (end - start) / durationHour;
    }, (date2) => {
      return date2.getHours();
    });
    timeHours = timeHour.range;
    utcHour = timeInterval((date2) => {
      date2.setUTCMinutes(0, 0, 0);
    }, (date2, step) => {
      date2.setTime(+date2 + step * durationHour);
    }, (start, end) => {
      return (end - start) / durationHour;
    }, (date2) => {
      return date2.getUTCHours();
    });
    utcHours = utcHour.range;
  }
});

// node_modules/d3-time/src/day.js
var timeDay, timeDays, utcDay, utcDays, unixDay, unixDays;
var init_day = __esm({
  "node_modules/d3-time/src/day.js"() {
    init_interval();
    init_duration();
    timeDay = timeInterval(
      (date2) => date2.setHours(0, 0, 0, 0),
      (date2, step) => date2.setDate(date2.getDate() + step),
      (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
      (date2) => date2.getDate() - 1
    );
    timeDays = timeDay.range;
    utcDay = timeInterval((date2) => {
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCDate(date2.getUTCDate() + step);
    }, (start, end) => {
      return (end - start) / durationDay;
    }, (date2) => {
      return date2.getUTCDate() - 1;
    });
    utcDays = utcDay.range;
    unixDay = timeInterval((date2) => {
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCDate(date2.getUTCDate() + step);
    }, (start, end) => {
      return (end - start) / durationDay;
    }, (date2) => {
      return Math.floor(date2 / durationDay);
    });
    unixDays = unixDay.range;
  }
});

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
var timeSunday, timeMonday, timeTuesday, timeWednesday, timeThursday, timeFriday, timeSaturday, timeSundays, timeMondays, timeTuesdays, timeWednesdays, timeThursdays, timeFridays, timeSaturdays, utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays;
var init_week = __esm({
  "node_modules/d3-time/src/week.js"() {
    init_interval();
    init_duration();
    timeSunday = timeWeekday(0);
    timeMonday = timeWeekday(1);
    timeTuesday = timeWeekday(2);
    timeWednesday = timeWeekday(3);
    timeThursday = timeWeekday(4);
    timeFriday = timeWeekday(5);
    timeSaturday = timeWeekday(6);
    timeSundays = timeSunday.range;
    timeMondays = timeMonday.range;
    timeTuesdays = timeTuesday.range;
    timeWednesdays = timeWednesday.range;
    timeThursdays = timeThursday.range;
    timeFridays = timeFriday.range;
    timeSaturdays = timeSaturday.range;
    utcSunday = utcWeekday(0);
    utcMonday = utcWeekday(1);
    utcTuesday = utcWeekday(2);
    utcWednesday = utcWeekday(3);
    utcThursday = utcWeekday(4);
    utcFriday = utcWeekday(5);
    utcSaturday = utcWeekday(6);
    utcSundays = utcSunday.range;
    utcMondays = utcMonday.range;
    utcTuesdays = utcTuesday.range;
    utcWednesdays = utcWednesday.range;
    utcThursdays = utcThursday.range;
    utcFridays = utcFriday.range;
    utcSaturdays = utcSaturday.range;
  }
});

// node_modules/d3-time/src/month.js
var timeMonth, timeMonths, utcMonth, utcMonths;
var init_month = __esm({
  "node_modules/d3-time/src/month.js"() {
    init_interval();
    timeMonth = timeInterval((date2) => {
      date2.setDate(1);
      date2.setHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setMonth(date2.getMonth() + step);
    }, (start, end) => {
      return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
    }, (date2) => {
      return date2.getMonth();
    });
    timeMonths = timeMonth.range;
    utcMonth = timeInterval((date2) => {
      date2.setUTCDate(1);
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCMonth(date2.getUTCMonth() + step);
    }, (start, end) => {
      return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
    }, (date2) => {
      return date2.getUTCMonth();
    });
    utcMonths = utcMonth.range;
  }
});

// node_modules/d3-time/src/year.js
var timeYear, timeYears, utcYear, utcYears;
var init_year = __esm({
  "node_modules/d3-time/src/year.js"() {
    init_interval();
    timeYear = timeInterval((date2) => {
      date2.setMonth(0, 1);
      date2.setHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setFullYear(date2.getFullYear() + step);
    }, (start, end) => {
      return end.getFullYear() - start.getFullYear();
    }, (date2) => {
      return date2.getFullYear();
    });
    timeYear.every = (k2) => {
      return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
        date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
        date2.setMonth(0, 1);
        date2.setHours(0, 0, 0, 0);
      }, (date2, step) => {
        date2.setFullYear(date2.getFullYear() + step * k2);
      });
    };
    timeYears = timeYear.range;
    utcYear = timeInterval((date2) => {
      date2.setUTCMonth(0, 1);
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCFullYear(date2.getUTCFullYear() + step);
    }, (start, end) => {
      return end.getUTCFullYear() - start.getUTCFullYear();
    }, (date2) => {
      return date2.getUTCFullYear();
    });
    utcYear.every = (k2) => {
      return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
        date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
        date2.setUTCMonth(0, 1);
        date2.setUTCHours(0, 0, 0, 0);
      }, (date2, step) => {
        date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
      });
    };
    utcYears = utcYear.range;
  }
});

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count2) {
    const reverse2 = stop < start;
    if (reverse2) [start, stop] = [stop, start];
    const interval = count2 && typeof count2.range === "function" ? count2 : tickInterval(start, stop, count2);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse2 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count2) {
    const target = Math.abs(stop - start) / count2;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count2));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count2), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var utcTicks, utcTickInterval, timeTicks, timeTickInterval;
var init_ticks2 = __esm({
  "node_modules/d3-time/src/ticks.js"() {
    init_src3();
    init_duration();
    init_millisecond();
    init_second();
    init_minute();
    init_hour();
    init_day();
    init_week();
    init_month();
    init_year();
    [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
    [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
  }
});

// node_modules/d3-time/src/index.js
var init_src6 = __esm({
  "node_modules/d3-time/src/index.js"() {
    init_interval();
    init_millisecond();
    init_second();
    init_minute();
    init_hour();
    init_day();
    init_week();
    init_month();
    init_year();
    init_ticks2();
  }
});

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c2, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null) c2 = specifier.charAt(++i);
          else pad2 = c2 === "e" ? " " : "0";
          if (format2 = formats2[c2]) c2 = format2(date2, pad2);
          string.push(c2);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c2, parse;
    while (i < n) {
      if (j >= m) return -1;
      c2 = specifier.charCodeAt(i++);
      if (c2 === 37) {
        c2 = specifier.charAt(i++);
        parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c2 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length3 = string.length;
  return sign2 + (length3 < width ? new Array(width - length3 + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
var pads, numberRe, percentRe, requoteRe;
var init_locale2 = __esm({
  "node_modules/d3-time-format/src/locale.js"() {
    init_src6();
    pads = { "-": "", "_": " ", "0": "0" };
    numberRe = /^\s*\d+/;
    percentRe = /^%/;
    requoteRe = /[\\^$*+?|[\]().{}]/g;
  }
});

// node_modules/d3-time-format/src/defaultLocale.js
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}
var locale2, timeFormat, timeParse, utcFormat, utcParse;
var init_defaultLocale2 = __esm({
  "node_modules/d3-time-format/src/defaultLocale.js"() {
    init_locale2();
    defaultLocale2({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
  }
});

// node_modules/d3-time-format/src/isoFormat.js
function formatIsoNative(date2) {
  return date2.toISOString();
}
var isoSpecifier, formatIso, isoFormat_default;
var init_isoFormat = __esm({
  "node_modules/d3-time-format/src/isoFormat.js"() {
    init_defaultLocale2();
    isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
    formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);
    isoFormat_default = formatIso;
  }
});

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso, isoParse_default;
var init_isoParse = __esm({
  "node_modules/d3-time-format/src/isoParse.js"() {
    init_isoFormat();
    init_defaultLocale2();
    parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);
    isoParse_default = parseIso;
  }
});

// node_modules/d3-time-format/src/index.js
var init_src7 = __esm({
  "node_modules/d3-time-format/src/index.js"() {
    init_defaultLocale2();
    init_locale2();
    init_isoFormat();
    init_isoParse();
  }
});

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice2(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var init_time = __esm({
  "node_modules/d3-scale/src/time.js"() {
    init_src6();
    init_src7();
    init_continuous();
    init_init();
    init_nice2();
  }
});

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
var init_utcTime = __esm({
  "node_modules/d3-scale/src/utcTime.js"() {
    init_src6();
    init_src7();
    init_time();
    init_init();
  }
});

// node_modules/d3-scale/src/sequential.js
function transformer2() {
  var x0 = 0, x1 = 1, t03, t13, k10, transform, interpolator = identity3, clamp = false, unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform(x2) - t03) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t03 = transform(x0 = +x0), t13 = transform(x1 = +x1), k10 = t03 === t13 ? 0 : 1 / (t13 - t03), scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range2(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range2(value_default);
  scale.rangeRound = range2(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t03 = t(x0), t13 = t(x1), k10 = t03 === t13 ? 0 : 1 / (t13 - t03);
    return scale;
  };
}
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer2()(identity3));
  scale.copy = function() {
    return copy2(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer2()).domain([1, 10]);
  scale.copy = function() {
    return copy2(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer2());
  scale.copy = function() {
    return copy2(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer2());
  scale.copy = function() {
    return copy2(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}
var init_sequential = __esm({
  "node_modules/d3-scale/src/sequential.js"() {
    init_src4();
    init_continuous();
    init_init();
    init_linear();
    init_log();
    init_symlog();
    init_pow();
  }
});

// node_modules/d3-scale/src/sequentialQuantile.js
function sequentialQuantile() {
  var domain = [], interpolator = identity3;
  function scale(x2) {
    if (x2 != null && !isNaN(x2 = +x2)) return interpolator((bisect_default(domain, x2, 1) - 1) / (domain.length - 1));
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };
  scale.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (_, i) => quantile(domain, i / n));
  };
  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}
var init_sequentialQuantile = __esm({
  "node_modules/d3-scale/src/sequentialQuantile.js"() {
    init_src3();
    init_continuous();
    init_init();
  }
});

// node_modules/d3-scale/src/diverging.js
function transformer3() {
  var x0 = 0, x1 = 0.5, x2 = 1, s2 = 1, t03, t13, t22, k10, k21, interpolator = identity3, transform, clamp = false, unknown;
  function scale(x3) {
    return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform(x3)) - t13) * (s2 * x3 < s2 * t13 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t03 = transform(x0 = +x0), t13 = transform(x1 = +x1), t22 = transform(x2 = +x2), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1, scale) : [x0, x1, x2];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range2(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range2(value_default);
  scale.rangeRound = range2(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t03 = t(x0), t13 = t(x1), t22 = t(x2), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer3()(identity3));
  scale.copy = function() {
    return copy2(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer3()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy2(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}
var init_diverging = __esm({
  "node_modules/d3-scale/src/diverging.js"() {
    init_src4();
    init_continuous();
    init_init();
    init_linear();
    init_log();
    init_sequential();
    init_symlog();
    init_pow();
  }
});

// node_modules/d3-scale/src/index.js
var init_src8 = __esm({
  "node_modules/d3-scale/src/index.js"() {
    init_band();
    init_identity3();
    init_linear();
    init_log();
    init_symlog();
    init_ordinal();
    init_pow();
    init_radial();
    init_quantile2();
    init_quantize2();
    init_threshold();
    init_time();
    init_utcTime();
    init_sequential();
    init_sequentialQuantile();
    init_diverging();
    init_tickFormat();
  }
});

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
function linear_default(context) {
  return new Linear(context);
}
var init_linear2 = __esm({
  "node_modules/d3-shape/src/curve/linear.js"() {
    Linear.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(x2, y2);
            break;
        }
      }
    };
  }
});

// node_modules/d3-shape/src/array.js
function array_default2(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
var slice2;
var init_array3 = __esm({
  "node_modules/d3-shape/src/array.js"() {
    slice2 = Array.prototype.slice;
  }
});

// node_modules/d3-shape/src/constant.js
function constant_default2(x2) {
  return function constant2() {
    return x2;
  };
}
var init_constant4 = __esm({
  "node_modules/d3-shape/src/constant.js"() {
  }
});

// node_modules/d3-path/src/path.js
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k2 = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
    }
  };
}
function path() {
  return new Path();
}
function pathRound(digits = 3) {
  return new Path(+digits);
}
var pi, tau, epsilon, tauEpsilon, Path;
var init_path = __esm({
  "node_modules/d3-path/src/path.js"() {
    pi = Math.PI;
    tau = 2 * pi;
    epsilon = 1e-6;
    tauEpsilon = tau - epsilon;
    Path = class {
      constructor(digits) {
        this._x0 = this._y0 = // start of current subpath
        this._x1 = this._y1 = null;
        this._ = "";
        this._append = digits == null ? append : appendRound(digits);
      }
      moveTo(x2, y2) {
        this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
      }
      closePath() {
        if (this._x1 !== null) {
          this._x1 = this._x0, this._y1 = this._y0;
          this._append`Z`;
        }
      }
      lineTo(x2, y2) {
        this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
      }
      quadraticCurveTo(x1, y1, x2, y2) {
        this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
      }
      bezierCurveTo(x1, y1, x2, y2, x3, y3) {
        this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
      }
      arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        if (this._x1 === null) {
          this._append`M${this._x1 = x1},${this._y1 = y1}`;
        } else if (!(l01_2 > epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._append`L${this._x1 = x1},${this._y1 = y1}`;
        } else {
          let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
          if (Math.abs(t01 - 1) > epsilon) {
            this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
          }
          this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
        }
      }
      arc(x2, y2, r, a0, a1, ccw) {
        x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        if (this._x1 === null) {
          this._append`M${x0},${y0}`;
        } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
          this._append`L${x0},${y0}`;
        }
        if (!r) return;
        if (da < 0) da = da % tau + tau;
        if (da > tauEpsilon) {
          this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
        } else if (da > epsilon) {
          this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
        }
      }
      rect(x2, y2, w, h) {
        this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
      }
      toString() {
        return this._;
      }
    };
    path.prototype = Path.prototype;
  }
});

// node_modules/d3-path/src/index.js
var init_src9 = __esm({
  "node_modules/d3-path/src/index.js"() {
    init_path();
  }
});

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}
var init_path2 = __esm({
  "node_modules/d3-shape/src/path.js"() {
    init_src9();
  }
});

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}
var init_point = __esm({
  "node_modules/d3-shape/src/point.js"() {
  }
});

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default2(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default2(y2);
  function line(data) {
    var i, n = (data = array_default2(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}
var init_line = __esm({
  "node_modules/d3-shape/src/line.js"() {
    init_array3();
    init_constant4();
    init_linear2();
    init_path2();
    init_point();
  }
});

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default2(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default2(0) : constant_default2(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default2(+y1);
  function area(data) {
    var i, j, k2, n = (data = array_default2(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}
var init_area = __esm({
  "node_modules/d3-shape/src/area.js"() {
    init_array3();
    init_constant4();
    init_linear2();
    init_line();
    init_path2();
    init_point();
  }
});

// node_modules/d3-shape/src/pointRadial.js
function pointRadial_default(x2, y2) {
  return [(y2 = +y2) * Math.cos(x2 -= Math.PI / 2), y2 * Math.sin(x2)];
}
var init_pointRadial = __esm({
  "node_modules/d3-shape/src/pointRadial.js"() {
  }
});

// node_modules/d3-shape/src/curve/bump.js
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}
function bumpRadial(context) {
  return new BumpRadial(context);
}
var Bump, BumpRadial;
var init_bump = __esm({
  "node_modules/d3-shape/src/curve/bump.js"() {
    init_pointRadial();
    Bump = class {
      constructor(context, x2) {
        this._context = context;
        this._x = x2;
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
      }
      point(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0: {
            this._point = 1;
            if (this._line) this._context.lineTo(x2, y2);
            else this._context.moveTo(x2, y2);
            break;
          }
          case 1:
            this._point = 2;
          default: {
            if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
            else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
            break;
          }
        }
        this._x0 = x2, this._y0 = y2;
      }
    };
    BumpRadial = class {
      constructor(context) {
        this._context = context;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
      }
      point(x2, y2) {
        x2 = +x2, y2 = +y2;
        if (this._point === 0) {
          this._point = 1;
        } else {
          const p0 = pointRadial_default(this._x0, this._y0);
          const p1 = pointRadial_default(this._x0, this._y0 = (this._y0 + y2) / 2);
          const p2 = pointRadial_default(x2, this._y0);
          const p3 = pointRadial_default(x2, y2);
          this._context.moveTo(...p0);
          this._context.bezierCurveTo(...p1, ...p2, ...p3);
        }
        this._x0 = x2, this._y0 = y2;
      }
    };
  }
});

// node_modules/d3-shape/src/math.js
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi2 : Math.acos(x2);
}
function asin(x2) {
  return x2 >= 1 ? halfPi : x2 <= -1 ? -halfPi : Math.asin(x2);
}
var abs, atan2, cos, max2, min2, sin, sqrt2, epsilon3, pi2, halfPi, tau2;
var init_math2 = __esm({
  "node_modules/d3-shape/src/math.js"() {
    abs = Math.abs;
    atan2 = Math.atan2;
    cos = Math.cos;
    max2 = Math.max;
    min2 = Math.min;
    sin = Math.sin;
    sqrt2 = Math.sqrt;
    epsilon3 = 1e-12;
    pi2 = Math.PI;
    halfPi = pi2 / 2;
    tau2 = 2 * pi2;
  }
});

// node_modules/d3-shape/src/symbol/circle.js
var circle_default;
var init_circle = __esm({
  "node_modules/d3-shape/src/symbol/circle.js"() {
    init_math2();
    circle_default = {
      draw(context, size) {
        const r = sqrt2(size / pi2);
        context.moveTo(r, 0);
        context.arc(0, 0, r, 0, tau2);
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/cross.js
var cross_default;
var init_cross2 = __esm({
  "node_modules/d3-shape/src/symbol/cross.js"() {
    init_math2();
    cross_default = {
      draw(context, size) {
        const r = sqrt2(size / 5) / 2;
        context.moveTo(-3 * r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, -3 * r);
        context.lineTo(r, -3 * r);
        context.lineTo(r, -r);
        context.lineTo(3 * r, -r);
        context.lineTo(3 * r, r);
        context.lineTo(r, r);
        context.lineTo(r, 3 * r);
        context.lineTo(-r, 3 * r);
        context.lineTo(-r, r);
        context.lineTo(-3 * r, r);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/diamond.js
var tan30, tan30_2, diamond_default;
var init_diamond = __esm({
  "node_modules/d3-shape/src/symbol/diamond.js"() {
    init_math2();
    tan30 = sqrt2(1 / 3);
    tan30_2 = tan30 * 2;
    diamond_default = {
      draw(context, size) {
        const y2 = sqrt2(size / tan30_2);
        const x2 = y2 * tan30;
        context.moveTo(0, -y2);
        context.lineTo(x2, 0);
        context.lineTo(0, y2);
        context.lineTo(-x2, 0);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/square.js
var square_default;
var init_square = __esm({
  "node_modules/d3-shape/src/symbol/square.js"() {
    init_math2();
    square_default = {
      draw(context, size) {
        const w = sqrt2(size);
        const x2 = -w / 2;
        context.rect(x2, x2, w, w);
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/star.js
var ka, kr, kx, ky, star_default;
var init_star = __esm({
  "node_modules/d3-shape/src/symbol/star.js"() {
    init_math2();
    ka = 0.8908130915292852;
    kr = sin(pi2 / 10) / sin(7 * pi2 / 10);
    kx = sin(tau2 / 10) * kr;
    ky = -cos(tau2 / 10) * kr;
    star_default = {
      draw(context, size) {
        const r = sqrt2(size * ka);
        const x2 = kx * r;
        const y2 = ky * r;
        context.moveTo(0, -r);
        context.lineTo(x2, y2);
        for (let i = 1; i < 5; ++i) {
          const a2 = tau2 * i / 5;
          const c2 = cos(a2);
          const s2 = sin(a2);
          context.lineTo(s2 * r, -c2 * r);
          context.lineTo(c2 * x2 - s2 * y2, s2 * x2 + c2 * y2);
        }
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt3, triangle_default;
var init_triangle = __esm({
  "node_modules/d3-shape/src/symbol/triangle.js"() {
    init_math2();
    sqrt3 = sqrt2(3);
    triangle_default = {
      draw(context, size) {
        const y2 = -sqrt2(size / (sqrt3 * 3));
        context.moveTo(0, y2 * 2);
        context.lineTo(-sqrt3 * y2, -y2);
        context.lineTo(sqrt3 * y2, -y2);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/wye.js
var c, s, k, a, wye_default;
var init_wye = __esm({
  "node_modules/d3-shape/src/symbol/wye.js"() {
    init_math2();
    c = -0.5;
    s = sqrt2(3) / 2;
    k = 1 / sqrt2(12);
    a = (k / 2 + 1) * 3;
    wye_default = {
      draw(context, size) {
        const r = sqrt2(size / a);
        const x0 = r / 2, y0 = r * k;
        const x1 = x0, y1 = r * k + r;
        const x2 = -x1, y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
        context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
        context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
        context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
        context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
        context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/asterisk.js
var sqrt32, asterisk_default;
var init_asterisk = __esm({
  "node_modules/d3-shape/src/symbol/asterisk.js"() {
    init_math2();
    sqrt32 = sqrt2(3);
    asterisk_default = {
      draw(context, size) {
        const r = sqrt2(size + min2(size / 28, 0.75)) * 0.59436;
        const t = r / 2;
        const u = t * sqrt32;
        context.moveTo(0, r);
        context.lineTo(0, -r);
        context.moveTo(-u, -t);
        context.lineTo(u, t);
        context.moveTo(-u, t);
        context.lineTo(u, -t);
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/diamond2.js
var diamond2_default;
var init_diamond2 = __esm({
  "node_modules/d3-shape/src/symbol/diamond2.js"() {
    init_math2();
    diamond2_default = {
      draw(context, size) {
        const r = sqrt2(size) * 0.62625;
        context.moveTo(0, -r);
        context.lineTo(r, 0);
        context.lineTo(0, r);
        context.lineTo(-r, 0);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/plus.js
var plus_default;
var init_plus = __esm({
  "node_modules/d3-shape/src/symbol/plus.js"() {
    init_math2();
    plus_default = {
      draw(context, size) {
        const r = sqrt2(size - min2(size / 7, 2)) * 0.87559;
        context.moveTo(-r, 0);
        context.lineTo(r, 0);
        context.moveTo(0, r);
        context.lineTo(0, -r);
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/square2.js
var square2_default;
var init_square2 = __esm({
  "node_modules/d3-shape/src/symbol/square2.js"() {
    init_math2();
    square2_default = {
      draw(context, size) {
        const r = sqrt2(size) * 0.4431;
        context.moveTo(r, r);
        context.lineTo(r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, r);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/triangle2.js
var sqrt33, triangle2_default;
var init_triangle2 = __esm({
  "node_modules/d3-shape/src/symbol/triangle2.js"() {
    init_math2();
    sqrt33 = sqrt2(3);
    triangle2_default = {
      draw(context, size) {
        const s2 = sqrt2(size) * 0.6824;
        const t = s2 / 2;
        const u = s2 * sqrt33 / 2;
        context.moveTo(0, -s2);
        context.lineTo(u, t);
        context.lineTo(-u, t);
        context.closePath();
      }
    };
  }
});

// node_modules/d3-shape/src/symbol/times.js
var times_default;
var init_times = __esm({
  "node_modules/d3-shape/src/symbol/times.js"() {
    init_math2();
    times_default = {
      draw(context, size) {
        const r = sqrt2(size - min2(size / 6, 1.7)) * 0.6189;
        context.moveTo(-r, -r);
        context.lineTo(r, r);
        context.moveTo(-r, r);
        context.lineTo(r, -r);
      }
    };
  }
});

// node_modules/d3-shape/src/symbol.js
function Symbol2(type, size) {
  let context = null, path2 = withPath(symbol);
  type = typeof type === "function" ? type : constant_default2(type || circle_default);
  size = typeof size === "function" ? size : constant_default2(size === void 0 ? 64 : +size);
  function symbol() {
    let buffer;
    if (!context) context = buffer = path2();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant_default2(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant_default2(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}
var symbolsFill, symbolsStroke;
var init_symbol = __esm({
  "node_modules/d3-shape/src/symbol.js"() {
    init_constant4();
    init_path2();
    init_asterisk();
    init_circle();
    init_cross2();
    init_diamond();
    init_diamond2();
    init_plus();
    init_square();
    init_square2();
    init_star();
    init_triangle();
    init_triangle2();
    init_wye();
    init_times();
    symbolsFill = [
      circle_default,
      cross_default,
      diamond_default,
      square_default,
      star_default,
      triangle_default,
      wye_default
    ];
    symbolsStroke = [
      circle_default,
      plus_default,
      times_default,
      triangle2_default,
      asterisk_default,
      square2_default,
      diamond2_default
    ];
  }
});

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
function basis_default2(context) {
  return new Basis(context);
}
var init_basis2 = __esm({
  "node_modules/d3-shape/src/curve/basis.js"() {
    Basis.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            point2(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            point2(this, x2, y2);
            break;
        }
        this._x0 = this._x1, this._x1 = x2;
        this._y0 = this._y1, this._y1 = y2;
      }
    };
  }
});

// node_modules/d3-shape/src/noop.js
function noop_default() {
}
var init_noop = __esm({
  "node_modules/d3-shape/src/noop.js"() {
  }
});

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
function basisClosed_default2(context) {
  return new BasisClosed(context);
}
var init_basisClosed2 = __esm({
  "node_modules/d3-shape/src/curve/basisClosed.js"() {
    init_noop();
    init_basis2();
    BasisClosed.prototype = {
      areaStart: noop_default,
      areaEnd: noop_default,
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 1: {
            this._context.moveTo(this._x2, this._y2);
            this._context.closePath();
            break;
          }
          case 2: {
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
            this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
            this._context.closePath();
            break;
          }
          case 3: {
            this.point(this._x2, this._y2);
            this.point(this._x3, this._y3);
            this.point(this._x4, this._y4);
            break;
          }
        }
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._x2 = x2, this._y2 = y2;
            break;
          case 1:
            this._point = 2;
            this._x3 = x2, this._y3 = y2;
            break;
          case 2:
            this._point = 3;
            this._x4 = x2, this._y4 = y2;
            this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
            break;
          default:
            point2(this, x2, y2);
            break;
        }
        this._x0 = this._x1, this._x1 = x2;
        this._y0 = this._y1, this._y1 = y2;
      }
    };
  }
});

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
function basisOpen_default(context) {
  return new BasisOpen(context);
}
var init_basisOpen = __esm({
  "node_modules/d3-shape/src/curve/basisOpen.js"() {
    init_basis2();
    BasisOpen.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
            this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
            break;
          case 3:
            this._point = 4;
          default:
            point2(this, x2, y2);
            break;
        }
        this._x0 = this._x1, this._x1 = x2;
        this._y0 = this._y1, this._y1 = y2;
      }
    };
  }
});

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
function linearClosed_default(context) {
  return new LinearClosed(context);
}
var init_linearClosed = __esm({
  "node_modules/d3-shape/src/curve/linearClosed.js"() {
    init_noop();
    LinearClosed.prototype = {
      areaStart: noop_default,
      areaEnd: noop_default,
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        if (this._point) this._context.closePath();
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        if (this._point) this._context.lineTo(x2, y2);
        else this._point = 1, this._context.moveTo(x2, y2);
      }
    };
  }
});

// node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point3(that, t03, t13) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t03, x1 - dx, y1 - dx * t13, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
function ReflectContext(context) {
  this._context = context;
}
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}
var init_monotone = __esm({
  "node_modules/d3-shape/src/curve/monotone.js"() {
    MonotoneX.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            point3(this, this._t0, slope2(this, this._t0));
            break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        var t13 = NaN;
        x2 = +x2, y2 = +y2;
        if (x2 === this._x1 && y2 === this._y1) return;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            point3(this, slope2(this, t13 = slope3(this, x2, y2)), t13);
            break;
          default:
            point3(this, this._t0, t13 = slope3(this, x2, y2));
            break;
        }
        this._x0 = this._x1, this._x1 = x2;
        this._y0 = this._y1, this._y1 = y2;
        this._t0 = t13;
      }
    };
    (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
      MonotoneX.prototype.point.call(this, y2, x2);
    };
    ReflectContext.prototype = {
      moveTo: function(x2, y2) {
        this._context.moveTo(y2, x2);
      },
      closePath: function() {
        this._context.closePath();
      },
      lineTo: function(x2, y2) {
        this._context.lineTo(y2, x2);
      },
      bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
        this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
      }
    };
  }
});

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i) a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i) m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}
var init_natural = __esm({
  "node_modules/d3-shape/src/curve/natural.js"() {
    Natural.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x = [];
        this._y = [];
      },
      lineEnd: function() {
        var x2 = this._x, y2 = this._y, n = x2.length;
        if (n) {
          this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
          if (n === 2) {
            this._context.lineTo(x2[1], y2[1]);
          } else {
            var px = controlPoints(x2), py = controlPoints(y2);
            for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
              this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
            }
          }
        }
        if (this._line || this._line !== 0 && n === 1) this._context.closePath();
        this._line = 1 - this._line;
        this._x = this._y = null;
      },
      point: function(x2, y2) {
        this._x.push(+x2);
        this._y.push(+y2);
      }
    };
  }
});

// node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}
var init_step = __esm({
  "node_modules/d3-shape/src/curve/step.js"() {
    Step.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x = this._y = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
            break;
          case 1:
            this._point = 2;
          default: {
            if (this._t <= 0) {
              this._context.lineTo(this._x, y2);
              this._context.lineTo(x2, y2);
            } else {
              var x1 = this._x * (1 - this._t) + x2 * this._t;
              this._context.lineTo(x1, this._y);
              this._context.lineTo(x1, y2);
            }
            break;
          }
        }
        this._x = x2, this._y = y2;
      }
    };
  }
});

// node_modules/d3-shape/src/arc.js
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon3) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt2(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D2 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt2(max2(0, r * r * d2 - D2 * D2)), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default2(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path2 = withPath(arc);
  function arc() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context) context = buffer = path2();
    if (r1 < r0) r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon3)) context.moveTo(0, 0);
    else if (da > tau2 - epsilon3) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon3) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon3 && (padRadius ? +padRadius.apply(this, arguments) : sqrt2(r0 * r0 + r1 * r1)), rc = min2(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t03, t13;
      if (rp > epsilon3) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon3) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon3) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon3) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
        if (da < pi2) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt2(ax * ax + ay * ay) * sqrt2(bx * bx + by * by))) / 2), lc = sqrt2(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min2(rc, (r0 - lc) / (kc - 1));
            rc1 = min2(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }
      if (!(da1 > epsilon3)) context.moveTo(x01, y01);
      else if (rc1 > epsilon3) {
        t03 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t13 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t03.cx + t03.x01, t03.cy + t03.y01);
        if (rc1 < rc) context.arc(t03.cx, t03.cy, rc1, atan2(t03.y01, t03.x01), atan2(t13.y01, t13.x01), !cw);
        else {
          context.arc(t03.cx, t03.cy, rc1, atan2(t03.y01, t03.x01), atan2(t03.y11, t03.x11), !cw);
          context.arc(0, 0, r1, atan2(t03.cy + t03.y11, t03.cx + t03.x11), atan2(t13.cy + t13.y11, t13.cx + t13.x11), !cw);
          context.arc(t13.cx, t13.cy, rc1, atan2(t13.y11, t13.x11), atan2(t13.y01, t13.x01), !cw);
        }
      } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon3) || !(da0 > epsilon3)) context.lineTo(x10, y10);
      else if (rc0 > epsilon3) {
        t03 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t13 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t03.cx + t03.x01, t03.cy + t03.y01);
        if (rc0 < rc) context.arc(t03.cx, t03.cy, rc0, atan2(t03.y01, t03.x01), atan2(t13.y01, t13.x01), !cw);
        else {
          context.arc(t03.cx, t03.cy, rc0, atan2(t03.y01, t03.x01), atan2(t03.y11, t03.x11), !cw);
          context.arc(0, 0, r0, atan2(t03.cy + t03.y11, t03.cx + t03.x11), atan2(t13.cy + t13.y11, t13.cx + t13.x11), cw);
          context.arc(t13.cx, t13.cy, rc0, atan2(t13.y11, t13.x11), atan2(t13.y01, t13.x01), !cw);
        }
      } else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a2 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi2 / 2;
    return [cos(a2) * r, sin(a2) * r];
  };
  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default2(+_), arc) : innerRadius;
  };
  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default2(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default2(+_), arc) : cornerRadius;
  };
  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), arc) : padRadius;
  };
  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default2(+_), arc) : startAngle;
  };
  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default2(+_), arc) : endAngle;
  };
  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default2(+_), arc) : padAngle;
  };
  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}
var init_arc = __esm({
  "node_modules/d3-shape/src/arc.js"() {
    init_constant4();
    init_math2();
    init_path2();
  }
});

// node_modules/d3-shape/src/descending.js
function descending_default(a2, b) {
  return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}
var init_descending2 = __esm({
  "node_modules/d3-shape/src/descending.js"() {
  }
});

// node_modules/d3-shape/src/identity.js
function identity_default2(d) {
  return d;
}
var init_identity4 = __esm({
  "node_modules/d3-shape/src/identity.js"() {
  }
});

// node_modules/d3-shape/src/pie.js
function pie_default() {
  var value = identity_default2, sortValues = descending_default, sort2 = null, startAngle = constant_default2(0), endAngle = constant_default2(tau2), padAngle = constant_default2(0);
  function pie(data) {
    var i, n = (data = array_default2(data)).length, j, k2, sum3 = 0, index2 = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau2, Math.max(-tau2, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index2[i] = i] = +value(data[i], i, data)) > 0) {
        sum3 += v;
      }
    }
    if (sortValues != null) index2.sort(function(i2, j2) {
      return sortValues(arcs[i2], arcs[j2]);
    });
    else if (sort2 != null) index2.sort(function(i2, j2) {
      return sort2(data[i2], data[j2]);
    });
    for (i = 0, k2 = sum3 ? (da - n * pa) / sum3 : 0; i < n; ++i, a0 = a1) {
      j = index2[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k2 : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default2(+_), pie) : value;
  };
  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort2 = null, pie) : sortValues;
  };
  pie.sort = function(_) {
    return arguments.length ? (sort2 = _, sortValues = null, pie) : sort2;
  };
  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default2(+_), pie) : startAngle;
  };
  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default2(+_), pie) : endAngle;
  };
  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default2(+_), pie) : padAngle;
  };
  return pie;
}
var init_pie = __esm({
  "node_modules/d3-shape/src/pie.js"() {
    init_array3();
    init_constant4();
    init_descending2();
    init_identity4();
    init_math2();
  }
});

// node_modules/d3-shape/src/curve/radial.js
function Radial(curve) {
  this._curve = curve;
}
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}
var curveRadialLinear;
var init_radial2 = __esm({
  "node_modules/d3-shape/src/curve/radial.js"() {
    init_linear2();
    curveRadialLinear = curveRadial(linear_default);
    Radial.prototype = {
      areaStart: function() {
        this._curve.areaStart();
      },
      areaEnd: function() {
        this._curve.areaEnd();
      },
      lineStart: function() {
        this._curve.lineStart();
      },
      lineEnd: function() {
        this._curve.lineEnd();
      },
      point: function(a2, r) {
        this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
      }
    };
  }
});

// node_modules/d3-shape/src/lineRadial.js
function lineRadial(l) {
  var c2 = l.curve;
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  l.curve = function(_) {
    return arguments.length ? c2(curveRadial(_)) : c2()._curve;
  };
  return l;
}
function lineRadial_default() {
  return lineRadial(line_default().curve(curveRadialLinear));
}
var init_lineRadial = __esm({
  "node_modules/d3-shape/src/lineRadial.js"() {
    init_radial2();
    init_line();
  }
});

// node_modules/d3-shape/src/areaRadial.js
function areaRadial_default() {
  var a2 = area_default().curve(curveRadialLinear), c2 = a2.curve, x0 = a2.lineX0, x1 = a2.lineX1, y0 = a2.lineY0, y1 = a2.lineY1;
  a2.angle = a2.x, delete a2.x;
  a2.startAngle = a2.x0, delete a2.x0;
  a2.endAngle = a2.x1, delete a2.x1;
  a2.radius = a2.y, delete a2.y;
  a2.innerRadius = a2.y0, delete a2.y0;
  a2.outerRadius = a2.y1, delete a2.y1;
  a2.lineStartAngle = function() {
    return lineRadial(x0());
  }, delete a2.lineX0;
  a2.lineEndAngle = function() {
    return lineRadial(x1());
  }, delete a2.lineX1;
  a2.lineInnerRadius = function() {
    return lineRadial(y0());
  }, delete a2.lineY0;
  a2.lineOuterRadius = function() {
    return lineRadial(y1());
  }, delete a2.lineY1;
  a2.curve = function(_) {
    return arguments.length ? c2(curveRadial(_)) : c2()._curve;
  };
  return a2;
}
var init_areaRadial = __esm({
  "node_modules/d3-shape/src/areaRadial.js"() {
    init_radial2();
    init_area();
    init_lineRadial();
  }
});

// node_modules/d3-shape/src/link.js
function linkSource(d) {
  return d.source;
}
function linkTarget(d) {
  return d.target;
}
function link(curve) {
  let source = linkSource, target = linkTarget, x2 = x, y2 = y, context = null, output = null, path2 = withPath(link2);
  function link2() {
    let buffer;
    const argv = slice2.call(arguments);
    const s2 = source.apply(this, argv);
    const t = target.apply(this, argv);
    if (context == null) output = curve(buffer = path2());
    output.lineStart();
    argv[0] = s2, output.point(+x2.apply(this, argv), +y2.apply(this, argv));
    argv[0] = t, output.point(+x2.apply(this, argv), +y2.apply(this, argv));
    output.lineEnd();
    if (buffer) return output = null, buffer + "" || null;
  }
  link2.source = function(_) {
    return arguments.length ? (source = _, link2) : source;
  };
  link2.target = function(_) {
    return arguments.length ? (target = _, link2) : target;
  };
  link2.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), link2) : x2;
  };
  link2.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), link2) : y2;
  };
  link2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link2) : context;
  };
  return link2;
}
function linkHorizontal() {
  return link(bumpX);
}
function linkVertical() {
  return link(bumpY);
}
function linkRadial() {
  const l = link(bumpRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}
var init_link = __esm({
  "node_modules/d3-shape/src/link.js"() {
    init_array3();
    init_constant4();
    init_bump();
    init_path2();
    init_point();
  }
});

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
var bundle_default;
var init_bundle = __esm({
  "node_modules/d3-shape/src/curve/bundle.js"() {
    init_basis2();
    Bundle.prototype = {
      lineStart: function() {
        this._x = [];
        this._y = [];
        this._basis.lineStart();
      },
      lineEnd: function() {
        var x2 = this._x, y2 = this._y, j = x2.length - 1;
        if (j > 0) {
          var x0 = x2[0], y0 = y2[0], dx = x2[j] - x0, dy = y2[j] - y0, i = -1, t;
          while (++i <= j) {
            t = i / j;
            this._basis.point(
              this._beta * x2[i] + (1 - this._beta) * (x0 + t * dx),
              this._beta * y2[i] + (1 - this._beta) * (y0 + t * dy)
            );
          }
        }
        this._x = this._y = null;
        this._basis.lineEnd();
      },
      point: function(x2, y2) {
        this._x.push(+x2);
        this._y.push(+y2);
      }
    };
    bundle_default = function custom(beta) {
      function bundle(context) {
        return beta === 1 ? new Basis(context) : new Bundle(context, beta);
      }
      bundle.beta = function(beta2) {
        return custom(+beta2);
      };
      return bundle;
    }(0.85);
  }
});

// node_modules/d3-shape/src/curve/cardinal.js
function point4(that, x2, y2) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x2),
    that._y2 + that._k * (that._y1 - y2),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
var cardinal_default;
var init_cardinal = __esm({
  "node_modules/d3-shape/src/curve/cardinal.js"() {
    Cardinal.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            point4(this, this._x1, this._y1);
            break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
            break;
          case 1:
            this._point = 2;
            this._x1 = x2, this._y1 = y2;
            break;
          case 2:
            this._point = 3;
          default:
            point4(this, x2, y2);
            break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
      }
    };
    cardinal_default = function custom2(tension) {
      function cardinal(context) {
        return new Cardinal(context, tension);
      }
      cardinal.tension = function(tension2) {
        return custom2(+tension2);
      };
      return cardinal;
    }(0);
  }
});

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
var cardinalClosed_default;
var init_cardinalClosed = __esm({
  "node_modules/d3-shape/src/curve/cardinalClosed.js"() {
    init_noop();
    init_cardinal();
    CardinalClosed.prototype = {
      areaStart: noop_default,
      areaEnd: noop_default,
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 1: {
            this._context.moveTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
          case 2: {
            this._context.lineTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
          case 3: {
            this.point(this._x3, this._y3);
            this.point(this._x4, this._y4);
            this.point(this._x5, this._y5);
            break;
          }
        }
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            this._x3 = x2, this._y3 = y2;
            break;
          case 1:
            this._point = 2;
            this._context.moveTo(this._x4 = x2, this._y4 = y2);
            break;
          case 2:
            this._point = 3;
            this._x5 = x2, this._y5 = y2;
            break;
          default:
            point4(this, x2, y2);
            break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
      }
    };
    cardinalClosed_default = function custom3(tension) {
      function cardinal(context) {
        return new CardinalClosed(context, tension);
      }
      cardinal.tension = function(tension2) {
        return custom3(+tension2);
      };
      return cardinal;
    }(0);
  }
});

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
var cardinalOpen_default;
var init_cardinalOpen = __esm({
  "node_modules/d3-shape/src/curve/cardinalOpen.js"() {
    init_cardinal();
    CardinalOpen.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            point4(this, x2, y2);
            break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
      }
    };
    cardinalOpen_default = function custom4(tension) {
      function cardinal(context) {
        return new CardinalOpen(context, tension);
      }
      cardinal.tension = function(tension2) {
        return custom4(+tension2);
      };
      return cardinal;
    }(0);
  }
});

// node_modules/d3-shape/src/curve/catmullRom.js
function point5(that, x2, y2) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon3) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon3) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
var catmullRom_default;
var init_catmullRom = __esm({
  "node_modules/d3-shape/src/curve/catmullRom.js"() {
    init_math2();
    init_cardinal();
    CatmullRom.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
            break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        if (this._point) {
          var x23 = this._x2 - x2, y23 = this._y2 - y2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            point5(this, x2, y2);
            break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
      }
    };
    catmullRom_default = function custom5(alpha) {
      function catmullRom(context) {
        return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
      }
      catmullRom.alpha = function(alpha2) {
        return custom5(+alpha2);
      };
      return catmullRom;
    }(0.5);
  }
});

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
var catmullRomClosed_default;
var init_catmullRomClosed = __esm({
  "node_modules/d3-shape/src/curve/catmullRomClosed.js"() {
    init_cardinalClosed();
    init_noop();
    init_catmullRom();
    CatmullRomClosed.prototype = {
      areaStart: noop_default,
      areaEnd: noop_default,
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function() {
        switch (this._point) {
          case 1: {
            this._context.moveTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
          case 2: {
            this._context.lineTo(this._x3, this._y3);
            this._context.closePath();
            break;
          }
          case 3: {
            this.point(this._x3, this._y3);
            this.point(this._x4, this._y4);
            this.point(this._x5, this._y5);
            break;
          }
        }
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        if (this._point) {
          var x23 = this._x2 - x2, y23 = this._y2 - y2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            this._x3 = x2, this._y3 = y2;
            break;
          case 1:
            this._point = 2;
            this._context.moveTo(this._x4 = x2, this._y4 = y2);
            break;
          case 2:
            this._point = 3;
            this._x5 = x2, this._y5 = y2;
            break;
          default:
            point5(this, x2, y2);
            break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
      }
    };
    catmullRomClosed_default = function custom6(alpha) {
      function catmullRom(context) {
        return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
      }
      catmullRom.alpha = function(alpha2) {
        return custom6(+alpha2);
      };
      return catmullRom;
    }(0.5);
  }
});

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
var catmullRomOpen_default;
var init_catmullRomOpen = __esm({
  "node_modules/d3-shape/src/curve/catmullRomOpen.js"() {
    init_cardinalOpen();
    init_catmullRom();
    CatmullRomOpen.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x2, y2) {
        x2 = +x2, y2 = +y2;
        if (this._point) {
          var x23 = this._x2 - x2, y23 = this._y2 - y2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            point5(this, x2, y2);
            break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
      }
    };
    catmullRomOpen_default = function custom7(alpha) {
      function catmullRom(context) {
        return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
      }
      catmullRom.alpha = function(alpha2) {
        return custom7(+alpha2);
      };
      return catmullRom;
    }(0.5);
  }
});

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}
var init_none = __esm({
  "node_modules/d3-shape/src/offset/none.js"() {
  }
});

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}
var init_none2 = __esm({
  "node_modules/d3-shape/src/order/none.js"() {
  }
});

// node_modules/d3-shape/src/stack.js
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack_default() {
  var keys = constant_default2([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }
    for (i = 0, oz = array_default2(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default2(Array.from(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default2(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default2(Array.from(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}
var init_stack = __esm({
  "node_modules/d3-shape/src/stack.js"() {
    init_array3();
    init_constant4();
    init_none();
    init_none2();
  }
});

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
    for (y2 = i = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    if (y2) for (i = 0; i < n; ++i) series[i][j][1] /= y2;
  }
  none_default(series, order);
}
var init_expand = __esm({
  "node_modules/d3-shape/src/offset/expand.js"() {
    init_none();
  }
});

// node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}
var init_diverging2 = __esm({
  "node_modules/d3-shape/src/offset/diverging.js"() {
  }
});

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y2 = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y2 / 2;
  }
  none_default(series, order);
}
var init_silhouette = __esm({
  "node_modules/d3-shape/src/offset/silhouette.js"() {
    init_none();
  }
});

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i; ++k2) {
        var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    if (s1) y2 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y2;
  none_default(series, order);
}
var init_wiggle = __esm({
  "node_modules/d3-shape/src/offset/wiggle.js"() {
    init_none();
  }
});

// node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a2, b) {
    return peaks[a2] - peaks[b];
  });
}
function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}
var init_appearance = __esm({
  "node_modules/d3-shape/src/order/appearance.js"() {
    init_none2();
  }
});

// node_modules/d3-shape/src/order/ascending.js
function ascending_default(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a2, b) {
    return sums[a2] - sums[b];
  });
}
function sum2(series) {
  var s2 = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s2 += v;
  return s2;
}
var init_ascending2 = __esm({
  "node_modules/d3-shape/src/order/ascending.js"() {
    init_none2();
  }
});

// node_modules/d3-shape/src/order/descending.js
function descending_default2(series) {
  return ascending_default(series).reverse();
}
var init_descending3 = __esm({
  "node_modules/d3-shape/src/order/descending.js"() {
    init_ascending2();
  }
});

// node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n = series.length, i, j, sums = series.map(sum2), order = appearance_default(series), top = 0, bottom = 0, tops = [], bottoms = [];
  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }
  return bottoms.reverse().concat(tops);
}
var init_insideOut = __esm({
  "node_modules/d3-shape/src/order/insideOut.js"() {
    init_appearance();
    init_ascending2();
  }
});

// node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}
var init_reverse2 = __esm({
  "node_modules/d3-shape/src/order/reverse.js"() {
    init_none2();
  }
});

// node_modules/d3-shape/src/index.js
var init_src10 = __esm({
  "node_modules/d3-shape/src/index.js"() {
    init_arc();
    init_area();
    init_line();
    init_pie();
    init_areaRadial();
    init_lineRadial();
    init_pointRadial();
    init_link();
    init_symbol();
    init_asterisk();
    init_circle();
    init_cross2();
    init_diamond();
    init_diamond2();
    init_plus();
    init_square();
    init_square2();
    init_star();
    init_triangle();
    init_triangle2();
    init_wye();
    init_times();
    init_basisClosed2();
    init_basisOpen();
    init_basis2();
    init_bump();
    init_bundle();
    init_cardinalClosed();
    init_cardinalOpen();
    init_cardinal();
    init_catmullRomClosed();
    init_catmullRomOpen();
    init_catmullRom();
    init_linearClosed();
    init_linear2();
    init_monotone();
    init_natural();
    init_step();
    init_stack();
    init_expand();
    init_diverging2();
    init_none();
    init_silhouette();
    init_wiggle();
    init_appearance();
    init_ascending2();
    init_descending3();
    init_insideOut();
    init_none2();
    init_reverse2();
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

export {
  ascending,
  descending,
  bisector,
  bisectRight,
  bisectLeft,
  bisectCenter,
  bisect_default,
  blur,
  blur2,
  blurImage,
  count,
  cross,
  cumsum,
  variance,
  deviation,
  extent,
  Adder,
  fsum,
  fcumsum,
  InternMap,
  InternSet,
  group,
  groups,
  flatGroup,
  flatRollup,
  rollup,
  rollups,
  index,
  indexes,
  permute,
  sort,
  groupSort,
  ticks,
  tickIncrement,
  tickStep,
  nice,
  thresholdSturges,
  bin,
  max,
  maxIndex,
  min,
  minIndex,
  quickselect,
  greatest,
  quantile,
  quantileSorted,
  quantileIndex,
  thresholdFreedmanDiaconis,
  thresholdScott,
  mean,
  median,
  medianIndex,
  merge,
  mode,
  pairs,
  range,
  rank,
  least,
  leastIndex,
  greatestIndex,
  scan,
  shuffle_default,
  shuffler,
  sum,
  transpose,
  zip,
  every,
  some,
  filter,
  map2 as map,
  reduce,
  reverse,
  difference,
  disjoint,
  intersection,
  superset,
  subset,
  union,
  init_src3 as init_src,
  color,
  rgb,
  hsl,
  gray,
  lab,
  lch,
  hcl,
  cubehelix,
  init_src as init_src2,
  basis_default,
  basisClosed_default,
  rgb_default,
  rgbBasis,
  rgbBasisClosed,
  numberArray_default,
  array_default,
  date_default,
  number_default,
  object_default,
  string_default,
  value_default,
  discrete_default,
  hue_default,
  round_default,
  interpolateTransformCss,
  interpolateTransformSvg,
  zoom_default,
  hsl_default,
  hslLong,
  lab2,
  hcl_default,
  hclLong,
  cubehelix_default,
  cubehelixLong,
  piecewise,
  quantize_default,
  init_src4 as init_src3,
  Path,
  path,
  pathRound,
  init_src9 as init_src4,
  formatSpecifier,
  FormatSpecifier,
  locale_default,
  format,
  formatPrefix,
  defaultLocale,
  precisionFixed_default,
  precisionPrefix_default,
  precisionRound_default,
  init_src5,
  implicit,
  ordinal,
  band,
  point,
  tickFormat,
  linear2 as linear,
  identity4 as identity,
  log,
  symlog,
  pow,
  sqrt,
  radial,
  quantile2,
  quantize,
  threshold,
  timeInterval,
  millisecond,
  milliseconds,
  second,
  seconds,
  timeMinute,
  timeMinutes,
  utcMinute,
  utcMinutes,
  timeHour,
  timeHours,
  utcHour,
  utcHours,
  timeDay,
  timeDays,
  utcDay,
  utcDays,
  unixDay,
  unixDays,
  timeSunday,
  timeMonday,
  timeTuesday,
  timeWednesday,
  timeThursday,
  timeFriday,
  timeSaturday,
  timeSundays,
  timeMondays,
  timeTuesdays,
  timeWednesdays,
  timeThursdays,
  timeFridays,
  timeSaturdays,
  utcSunday,
  utcMonday,
  utcTuesday,
  utcWednesday,
  utcThursday,
  utcFriday,
  utcSaturday,
  utcSundays,
  utcMondays,
  utcTuesdays,
  utcWednesdays,
  utcThursdays,
  utcFridays,
  utcSaturdays,
  timeMonth,
  timeMonths,
  utcMonth,
  utcMonths,
  timeYear,
  timeYears,
  utcYear,
  utcYears,
  utcTicks,
  utcTickInterval,
  timeTicks,
  timeTickInterval,
  init_src6,
  formatLocale,
  timeFormat,
  timeParse,
  utcFormat,
  utcParse,
  defaultLocale2,
  isoFormat_default,
  isoParse_default,
  init_src7,
  time,
  utcTime,
  sequential,
  sequentialLog,
  sequentialSymlog,
  sequentialPow,
  sequentialSqrt,
  sequentialQuantile,
  diverging,
  divergingLog,
  divergingSymlog,
  divergingPow,
  divergingSqrt,
  init_src8,
  arc_default,
  linear_default,
  line_default,
  area_default,
  pie_default,
  lineRadial_default,
  areaRadial_default,
  pointRadial_default,
  bumpX,
  bumpY,
  link,
  linkHorizontal,
  linkVertical,
  linkRadial,
  asterisk_default,
  circle_default,
  cross_default,
  diamond_default,
  diamond2_default,
  plus_default,
  square_default,
  square2_default,
  star_default,
  triangle_default,
  triangle2_default,
  wye_default,
  times_default,
  symbolsFill,
  symbolsStroke,
  Symbol2 as Symbol,
  basis_default2,
  basisClosed_default2,
  basisOpen_default,
  bundle_default,
  cardinal_default,
  cardinalClosed_default,
  cardinalOpen_default,
  catmullRom_default,
  catmullRomClosed_default,
  catmullRomOpen_default,
  linearClosed_default,
  monotoneX,
  monotoneY,
  natural_default,
  step_default,
  stepBefore,
  stepAfter,
  none_default,
  none_default2,
  stack_default,
  expand_default,
  diverging_default,
  silhouette_default,
  wiggle_default,
  appearance_default,
  ascending_default,
  descending_default2 as descending_default,
  insideOut_default,
  reverse_default,
  init_src10 as init_src9,
  require_react_is,
  require_prop_types
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=chunk-DDS6Z2OB.js.map
