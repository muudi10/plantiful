"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiCalls = {
  getAllPlants: function getAllPlants(setPlants) {
    var endpoint, response, data;
    return regeneratorRuntime.async(function getAllPlants$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = '/plants';
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get(endpoint));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.data);

          case 6:
            data = _context.sent;
            setPlants(data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  getPlantByName: function getPlantByName(setPlantByName, latinname) {
    var endpoint, response, data;
    return regeneratorRuntime.async(function getPlantByName$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoint = "/plants/plantname/".concat(latinname);
            _context2.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get(endpoint));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(response.data[0]);

          case 6:
            data = _context2.sent;
            setPlantByName(data);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  searchPlant: function searchPlant(searchTerm) {
    var endpoint, response, data;
    return regeneratorRuntime.async(function searchPlant$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            endpoint = '/plant';

            if (searchTerm) {
              endpoint = searchTerm + {
                searchTerm: searchTerm
              };
            }

            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get(endpoint));

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return regeneratorRuntime.awrap(response.data);

          case 7:
            data = _context3.sent;

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  userRegister: function userRegister(fields, setMessage) {
    var response;
    return regeneratorRuntime.async(function userRegister$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post("/auth/register", {
              name: fields.name,
              email: fields.email,
              password: fields.password
            }));

          case 3:
            response = _context4.sent;
            response.data && window.location.replace("/loginForm"); //    const data = await response

            console.log(response.data);
            _context4.next = 8;
            return regeneratorRuntime.awrap(setMessage("Form has been submited sucessfully"));

          case 8:
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            setMessage("Failed to submit form");

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  },
  userLogin: function userLogin(loginField, setUser, setIsLoggedIn, userGloblaState, setUserGlobalState) {
    var response;
    return regeneratorRuntime.async(function userLogin$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].post('/auth/login', {
              email: loginField.email,
              password: loginField.password
            }));

          case 3:
            response = _context5.sent;
            console.log(response.data.others._id);
            response && localStorage.setItem("token", JSON.stringify(response.data.token));
            response && localStorage.setItem("userDetails", JSON.stringify(response.data.others));
            response && localStorage.setItem("userPlants", JSON.stringify(response.data.others.userPlants));
            response && setIsLoggedIn(true);
            _context5.next = 11;
            return regeneratorRuntime.awrap(setUserGlobalState(_objectSpread({}, userGloblaState, {
              userDetails: response.data.others,
              token: response.data.token,
              userId: response.data.others,
              userPlants: response.data.userPlants
            })));

          case 11:
            response && setUser(response.data.userPlants); // response && window.location.replace("/dashboard")

            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 14]]);
  }
};
var _default = ApiCalls;
exports["default"] = _default;