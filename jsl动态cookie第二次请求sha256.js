window = {}
document={}
location={}
window.navigator={userAgent: "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36"}
function hash(_0x4ec78b) {
  var _0x49cdba = 8;
  var _0x5982c2 = 0;

  function _0x294102(_0x535bfb, _0x1071e2) {
    var _0x1fc716 = (_0x535bfb & 65535) + (_0x1071e2 & 65535);

    var _0x554ca4 = (_0x535bfb >> 16) + (_0x1071e2 >> 16) + (_0x1fc716 >> 16);

    return _0x554ca4 << 16 | _0x1fc716 & 65535;
  }

  function _0x5b565b(_0x427aeb, _0x50d7e6) {
    return _0x427aeb >>> _0x50d7e6 | _0x427aeb << 32 - _0x50d7e6;
  }

  function _0x27eb17(_0x224977, _0x56f953) {
    return _0x224977 >>> _0x56f953;
  }

  function _0x584366(_0x2e657e, _0x5a8d43, _0x2805ee) {
    return _0x2e657e & _0x5a8d43 ^ ~_0x2e657e & _0x2805ee;
  }

  function _0x182b03(_0x311cc3, _0x4e2b32, _0x1413b5) {
    return _0x311cc3 & _0x4e2b32 ^ _0x311cc3 & _0x1413b5 ^ _0x4e2b32 & _0x1413b5;
  }

  function _0x623370(_0x564ccb) {
    return _0x5b565b(_0x564ccb, 2) ^ _0x5b565b(_0x564ccb, 13) ^ _0x5b565b(_0x564ccb, 22);
  }

  function _0x17e888(_0x3cc789) {
    return _0x5b565b(_0x3cc789, 6) ^ _0x5b565b(_0x3cc789, 11) ^ _0x5b565b(_0x3cc789, 25);
  }

  function _0x54fa06(_0x2a7928) {
    return _0x5b565b(_0x2a7928, 7) ^ _0x5b565b(_0x2a7928, 18) ^ _0x27eb17(_0x2a7928, 3);
  }

  function _0x161def(_0x3b5e7d) {
    return _0x5b565b(_0x3b5e7d, 17) ^ _0x5b565b(_0x3b5e7d, 19) ^ _0x27eb17(_0x3b5e7d, 10);
  }

  function _0x1f482a(_0xbf14, _0x29c2a7) {
    var _0x312f3e = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);

    var _0x50dc67 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);

    var _0x576d59 = new Array(64);

    var _0x13dc13, _0x3f4767, _0x359c97, _0x4fee19, _0x28752d, _0x22df1a, _0x4666b4, _0x2ed5e8, _0x2eb23e, _0x3e25d6;

    var _0x274d62, _0x6262be;

    _0xbf14[_0x29c2a7 >> 5] |= 128 << 24 - _0x29c2a7 % 32;
    _0xbf14[(_0x29c2a7 + 64 >> 9 << 4) + 15] = _0x29c2a7;

    for (var _0x2eb23e = 0; _0x2eb23e < _0xbf14["length"]; _0x2eb23e += 16) {
      _0x13dc13 = _0x50dc67[0];
      _0x3f4767 = _0x50dc67[1];
      _0x359c97 = _0x50dc67[2];
      _0x4fee19 = _0x50dc67[3];
      _0x28752d = _0x50dc67[4];
      _0x22df1a = _0x50dc67[5];
      _0x4666b4 = _0x50dc67[6];
      _0x2ed5e8 = _0x50dc67[7];

      for (var _0x3e25d6 = 0; _0x3e25d6 < 64; _0x3e25d6++) {
        if (_0x3e25d6 < 16) {
          _0x576d59[_0x3e25d6] = _0xbf14[_0x3e25d6 + _0x2eb23e];
        } else {
          _0x576d59[_0x3e25d6] = _0x294102(_0x294102(_0x294102(_0x161def(_0x576d59[_0x3e25d6 - 2]), _0x576d59[_0x3e25d6 - 7]), _0x54fa06(_0x576d59[_0x3e25d6 - 15])), _0x576d59[_0x3e25d6 - 16]);
        }

        _0x274d62 = _0x294102(_0x294102(_0x294102(_0x294102(_0x2ed5e8, _0x17e888(_0x28752d)), _0x584366(_0x28752d, _0x22df1a, _0x4666b4)), _0x312f3e[_0x3e25d6]), _0x576d59[_0x3e25d6]);
        _0x6262be = _0x294102(_0x623370(_0x13dc13), _0x182b03(_0x13dc13, _0x3f4767, _0x359c97));
        _0x2ed5e8 = _0x4666b4;
        _0x4666b4 = _0x22df1a;
        _0x22df1a = _0x28752d;
        _0x28752d = _0x294102(_0x4fee19, _0x274d62);
        _0x4fee19 = _0x359c97;
        _0x359c97 = _0x3f4767;
        _0x3f4767 = _0x13dc13;
        _0x13dc13 = _0x294102(_0x274d62, _0x6262be);
      }

      _0x50dc67[0] = _0x294102(_0x13dc13, _0x50dc67[0]);
      _0x50dc67[1] = _0x294102(_0x3f4767, _0x50dc67[1]);
      _0x50dc67[2] = _0x294102(_0x359c97, _0x50dc67[2]);
      _0x50dc67[3] = _0x294102(_0x4fee19, _0x50dc67[3]);
      _0x50dc67[4] = _0x294102(_0x28752d, _0x50dc67[4]);
      _0x50dc67[5] = _0x294102(_0x22df1a, _0x50dc67[5]);
      _0x50dc67[6] = _0x294102(_0x4666b4, _0x50dc67[6]);
      _0x50dc67[7] = _0x294102(_0x2ed5e8, _0x50dc67[7]);
    }

    return _0x50dc67;
  }

  function _0x5515e9(_0x406abf) {
    var _0x1c419f = Array();

    var _0x5f4ee2 = 255;

    for (var _0x2e6dba = 0; _0x2e6dba < _0x406abf["length"] * _0x49cdba; _0x2e6dba += _0x49cdba) {
      _0x1c419f[_0x2e6dba >> 5] |= (_0x406abf["charCodeAt"](_0x2e6dba / _0x49cdba) & _0x5f4ee2) << 24 - _0x2e6dba % 32;
    }

    return _0x1c419f;
  }

  function _0x51d7f3(_0x2e8edd) {
    var _0xc4fee2 = new RegExp("\n", "g");

    _0x2e8edd = _0x2e8edd["replace"](_0xc4fee2, "\n");
    var _0xe5cb4 = "";

    for (var _0x2d1cdb = 0; _0x2d1cdb < _0x2e8edd["length"]; _0x2d1cdb++) {
      var _0x1d9d77 = _0x2e8edd["charCodeAt"](_0x2d1cdb);

      if (_0x1d9d77 < 128) {
        _0xe5cb4 += String["fromCharCode"](_0x1d9d77);
      } else {
        if (_0x1d9d77 > 127 && _0x1d9d77 < 2048) {
          _0xe5cb4 += String["fromCharCode"](_0x1d9d77 >> 6 | 192);
          _0xe5cb4 += String["fromCharCode"](_0x1d9d77 & 63 | 128);
        } else {
          _0xe5cb4 += String["fromCharCode"](_0x1d9d77 >> 12 | 224);
          _0xe5cb4 += String["fromCharCode"](_0x1d9d77 >> 6 & 63 | 128);
          _0xe5cb4 += String["fromCharCode"](_0x1d9d77 & 63 | 128);
        }
      }
    }

    return _0xe5cb4;
  }

  function _0x4eb6f5(_0x2c984b) {
    var _0x8b0876 = "0123456789abcdef";
    var _0x81ec49 = "";

    for (var _0xcd82d5 = 0; _0xcd82d5 < _0x2c984b["length"] * 4; _0xcd82d5++) {
      _0x81ec49 += _0x8b0876["charAt"](_0x2c984b[_0xcd82d5 >> 2] >> (3 - _0xcd82d5 % 4) * 8 + 4 & 15) + _0x8b0876["charAt"](_0x2c984b[_0xcd82d5 >> 2] >> (3 - _0xcd82d5 % 4) * 8 & 15);
    }

    return _0x81ec49;
  }

  _0x4ec78b = _0x51d7f3(_0x4ec78b);
  return _0x4eb6f5(_0x1f482a(_0x5515e9(_0x4ec78b), _0x4ec78b["length"] * _0x49cdba));
}

function go(_0x42507b) {
  function _0x146907() {
    var _0xa91bdb = window["navigator"]["userAgent"],
        _0x5aa8d3 = ["Phantom"];

    for (var _0x52dc0a = 0; _0x52dc0a < _0x5aa8d3["length"]; _0x52dc0a++) {
      if (_0xa91bdb["indexOf"](_0x5aa8d3[_0x52dc0a]) != -1) {
        return true;
      }
    }

    if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
      return true;
    }
  }

  if (_0x146907()) {
    return;
  }

  var _0x152622 = new Date();

  function _0x3bd885(_0x40e6d6, _0x2d7a3a) {
    var _0xdcde97 = _0x42507b["chars"]["length"];

    for (var _0x159f77 = 0; _0x159f77 < _0xdcde97; _0x159f77++) {
      for (var _0x47364b = 0; _0x47364b < _0xdcde97; _0x47364b++) {
        var _0x51d5e7 = _0x2d7a3a[0] + _0x42507b["chars"]["substr"](_0x159f77, 1) + _0x42507b["chars"]["substr"](_0x47364b, 1) + _0x2d7a3a[1];

        if (hash(_0x51d5e7) == _0x40e6d6) {
          return [_0x51d5e7, new Date() - _0x152622];
        }
      }
    }
  }

  var _0x2946e3 = _0x3bd885(_0x42507b["ct"], _0x42507b["bts"]);

  if (_0x2946e3) {
    var _0x3f87d8;

    if (_0x42507b["wt"]) {
      _0x3f87d8 = parseInt(_0x42507b["wt"]) > _0x2946e3[1] ? parseInt(_0x42507b["wt"]) - _0x2946e3[1] : 500;
    } else {
      _0x3f87d8 = 1500;
    }
    console.log( _0x42507b["tn"] + "=" + _0x2946e3[0] + ";Max-age=" + _0x42507b["vt"] + "; path = /")
	return  _0x42507b["tn"] + "=" + _0x2946e3[0] + ";Max-age=" + _0x42507b["vt"] + "; path = /"
    setTimeout(function () {
      document["cookie"] = _0x42507b["tn"] + "=" + _0x2946e3[0] + ";Max-age=" + _0x42507b["vt"] + "; path = /";
      location["href"] = location["pathname"] + location["search"];
    }, _0x3f87d8);
  } else {
    alert("请求验证失败");
  }
}

go({
  "bts": ["1664018594.882|0|Gfl", "dUuuNMy90GrnpdNABkjiE4%3D"],
  "chars": "fgziJYqGgRFBMeJBrtTSoK",
  "ct": "24218ad3eb5ba8afb563cbcd668bfbc7ea4942809517a84dd48b552a08c3f96b",
  "ha": "sha256",
  "tn": "__jsl_clearance_s",
  "vt": "3600",
  "wt": "1500"
});