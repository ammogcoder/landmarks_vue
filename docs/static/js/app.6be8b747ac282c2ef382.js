webpackJsonp([1],{

/***/ "/wAH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "navbar",
    attrs: {
      "role": "navigation",
      "aria-label": "main navigation"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "navbar-menu"
  }, [_c('div', {
    staticClass: "navbar-end"
  }, [_c('a', {
    staticClass: "navbar-item button",
    on: {
      "click": function($event) {
        _vm.isModalActive = true
      }
    }
  }, [_vm._v("\n            What's this ?\n          ")])])])])]), _vm._v(" "), _c('b-loading', {
    attrs: {
      "active": _vm.modelLoading
    },
    on: {
      "update:active": function($event) {
        _vm.modelLoading = $event
      }
    }
  }), _vm._v(" "), _c('b-modal', {
    attrs: {
      "active": _vm.isModalActive,
      "canCancel": ""
    },
    on: {
      "update:active": function($event) {
        _vm.isModalActive = $event
      }
    }
  }, [_c('div', {
    staticClass: "modal-card"
  }, [_c('section', {
    staticClass: "modal-card-body has-text-centered"
  }, [_c('b', [_vm._v("LandmarksVue")]), _vm._v(" is a project using\n        "), _c('a', {
    attrs: {
      "href": "https://vuejs.org/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Vue.js")]), _vm._v("\n        and\n        "), _c('a', {
    attrs: {
      "href": "https://github.com/transcranial/keras-js",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Keras.js")]), _vm._v(" using a VGG16 convolutional neural network trained on ImageNet and fine-tuned on a landmarks dataset.\n      ")]), _vm._v(" "), _c('footer', {
    staticClass: "modal-card-foot has-text-centered"
  }, [_c('p', [_vm._v("Victor Faramond | 2017")])])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('section', {
    staticClass: "container has-text-centered"
  }, [_c('b-field', [_c('b-upload', {
    attrs: {
      "drag-drop": ""
    },
    on: {
      "input": _vm.onInput
    },
    model: {
      value: (_vm.dropFiles),
      callback: function($$v) {
        _vm.dropFiles = $$v
      },
      expression: "dropFiles"
    }
  }, [_c('section', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "content has-text-centered"
  }, [_c('p', [_c('b-icon', {
    attrs: {
      "icon": "file_upload",
      "size": "is-large"
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v("Drop an image file here or click to upload")])])])])], 1)], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('section', {
    staticClass: "container has-text-centered"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.modelRunning || _vm.output),
      expression: "modelRunning || output"
    }],
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [(_vm.modelRunning) ? _c('div', {
    staticClass: "loader model-loader"
  }) : (_vm.outputClass) ? _c('div', [_c('h3', {
    staticClass: "is-size-2"
  }, [_vm._v(_vm._s(_vm.outputClass))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.outputClassDescription.body))]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "target": "_blank",
      "rel": "noopener",
      "href": _vm.outputClassDescription.url
    }
  }, [_vm._v("Learn more")])])]) : _vm._e()])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navbar-brand"
  }, [_c('a', {
    staticClass: "navbar-item",
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    staticClass: "app-logo",
    attrs: {
      "src": "static/img/icons/icon-128x128.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "app-logo-name"
  }, [_vm._v("LandmarksVue")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-image"
  }, [_c('figure', {
    staticClass: "image has-text-centered"
  }, [_c('canvas', {
    attrs: {
      "id": "input-canvas",
      "width": "150",
      "height": "150"
    }
  })])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6AI7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keras_js__ = __webpack_require__("1xge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_keras_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_keras_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy__ = __webpack_require__("KBYM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_sortBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_blueimp_load_image__ = __webpack_require__("H1si");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_blueimp_load_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_blueimp_load_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ndarray__ = __webpack_require__("Y4Gl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ndarray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ndarray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ndarray_ops__ = __webpack_require__("4pkP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ndarray_ops__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes__ = __webpack_require__("nGOu");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var MODEL_FILE = 'https://cdn.rawgit.com/vfaramond/landmarks-webapp/d3db8742/data/landmarks_recognition/finetuning.json';
var WEIGHTS_FILE = 'https://cdn.rawgit.com/vfaramond/landmarks-webapp/d3db8742/data/landmarks_recognition/finetuning_weights.buf';
var METADATA_FILE = 'https://cdn.rawgit.com/vfaramond/landmarks-webapp/d3db8742/data/landmarks_recognition/finetuning_metadata.json';

var MODEL_FILEPATHS = {
  model: MODEL_FILE,
  weights: WEIGHTS_FILE,
  metadata: METADATA_FILE
};

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (gl && gl instanceof WebGLRenderingContext) {
      this.hasWebgl = true;
    } else {
      this.hasWebgl = false;
    }
  },
  data: function data() {
    return {
      classes: __WEBPACK_IMPORTED_MODULE_6__classes__["a" /* default */],
      dropFiles: [],
      imageLoading: false,
      imageLoadingError: false,
      isModalActive: false,
      model: new __WEBPACK_IMPORTED_MODULE_0_keras_js__["Model"]({
        filepaths: MODEL_FILEPATHS,
        gpu: this.hasWebgl
      }),
      modelLoading: true,
      modelRunning: false,
      output: null
    };
  },


  asyncComputed: {
    outputClassDescription: function outputClassDescription() {
      if (!this.outputClass) {
        return {
          body: '',
          url: ''
        };
      }

      return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('https://kgsearch.googleapis.com/v1/entities:search', {
        params: {
          query: this.outputClass.split(' ').join('+'),
          key: 'AIzaSyCwy-tOOGMLxR9AAMBsxN9PypMQB2drxkU',
          limit: 1
        }
      }).then(function (response) {
        var description = response.data.itemListElement[0].result.detailedDescription;

        return {
          body: description.articleBody,
          url: description.url
        };
      });
    }
  },

  computed: {
    outputClass: function outputClass() {
      if (!this.output) {
        return null;
      }

      var probs = Array.prototype.slice.call(this.output);

      var maxProbability = __WEBPACK_IMPORTED_MODULE_1_lodash_sortBy___default()(probs.map(function (prob, index) {
        return [prob, index];
      }), function (probIndex) {
        return probIndex[0];
      });

      return this.classes[maxProbability[maxProbability.length - 1][1]];
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.model.ready().then(function () {
      _this.modelLoading = false;
    });
  },


  methods: {
    loadImageToCanvas: function loadImageToCanvas(url) {
      var _this2 = this;

      this.imageLoading = true;
      __WEBPACK_IMPORTED_MODULE_2_blueimp_load_image___default()(url, function (img) {
        if (img.type === 'error') {
          _this2.imageLoadingError = true;
          _this2.imageLoading = false;
        } else {
          // Load image data onto input canvas
          var ctx = document.getElementById('input-canvas').getContext('2d');
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.drawImage(img, 0, 0);
          _this2.imageLoadingError = false;
          _this2.imageLoading = false;
          _this2.modelRunning = true;
          // Model predict
          _this2.$nextTick(function () {
            setTimeout(function () {
              _this2.runModel();
            }, 200);
          });
        }
      }, { maxWidth: 150, maxHeight: 150, cover: true, crop: true, canvas: true, crossOrigin: 'Anonymous' });
    },
    onInput: function onInput(files) {
      this.loadImageToCanvas(files[0]);
    },
    progressClass: function progressClass(value) {
      if (value > 0.8) {
        return 'is-success';
      }

      if (value > 0.5) {
        return 'is-warning';
      }

      return 'is-danger';
    },
    runModel: function runModel() {
      var _this3 = this;

      var ctx = document.getElementById('input-canvas').getContext('2d');
      var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      var data = imageData.data,
          width = imageData.width,
          height = imageData.height;

      // data processing
      // see https://github.com/fchollet/keras/blob/master/keras/applications/imagenet_utils.py
      // and https://github.com/fchollet/keras/blob/master/keras/applications/inception_v3.py

      var dataTensor = __WEBPACK_IMPORTED_MODULE_3_ndarray___default()(new Float32Array(data), [width, height, 4]);
      var dataProcessedTensor = __WEBPACK_IMPORTED_MODULE_3_ndarray___default()(new Float32Array(width * height * 3), [width, height, 3]);
      __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default.a.divseq(dataTensor, 255);
      __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default.a.subseq(dataTensor, 0.5);
      __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default.a.mulseq(dataTensor, 2);
      __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default.a.assign(dataProcessedTensor.pick(null, null, 0), dataTensor.pick(null, null, 0));
      __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default.a.assign(dataProcessedTensor.pick(null, null, 1), dataTensor.pick(null, null, 1));
      __WEBPACK_IMPORTED_MODULE_4_ndarray_ops___default.a.assign(dataProcessedTensor.pick(null, null, 2), dataTensor.pick(null, null, 2));

      var inputData = { input_1: dataProcessedTensor.data };

      this.model.predict(inputData).then(function (outputData) {
        _this3.output = outputData.dense_2;
        _this3.modelRunning = false;
      });
    }
  }
});

/***/ }),

/***/ "8a2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('landmarks-recognition')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ABT2":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,Ly8gMkQgQXZlcmFnZSBQb29saW5nIG9wLgovLyBUaGlzIGlzIGFuIGV4dGVuc2lvbiBvZiB3ZWJsYXMuCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS93YXlsb25mbGlubi93ZWJsYXMKCnByZWNpc2lvbiBoaWdocCBmbG9hdDsKCnZhcnlpbmcgdmVjMiBvdXRUZXg7CnVuaWZvcm0gc2FtcGxlcjJEIFg7CnVuaWZvcm0gc2FtcGxlcjJEIHBvb2xJbmRleE1hcHBpbmc7CnVuaWZvcm0gaW50IGlucHV0Um93czsKdW5pZm9ybSBpbnQgY2hhbm5lbHM7CnVuaWZvcm0gaW50IGNoYW5uZWxzUGFkOwp1bmlmb3JtIGludCBwb29sRWxlbWVudHM7CnVuaWZvcm0gaW50IHBvb2xFbGVtZW50c1BhZDsKCmZsb2F0IHNlbGVjdF9pbmRleCh2ZWM0IHYsIGludCBpbmRleCkgewogIGZsb2F0IHZhbCA9IDAuMDsKICBpZiAoaW5kZXggPT0gMCkgewogICAgdmFsID0gdi5yOwogIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkgewogICAgdmFsID0gdi5nOwogIH0gZWxzZSBpZiAoaW5kZXggPT0gMikgewogICAgdmFsID0gdi5iOwogIH0gZWxzZSBpZiAoaW5kZXggPT0gMykgewogICAgdmFsID0gdi5hOwogIH0KICByZXR1cm4gdmFsOwp9Cgp2b2lkIGZpeF9wYWQoaW5vdXQgdmVjNCB2LCBpbnQgcGFkKSB7CiAgdi5hID0gMC4wOwogIGlmIChwYWQgPT0gMikgewogICAgdi5iID0gMC4wOwogIH0gZWxzZSBpZiAocGFkID09IDMpIHsKICAgIHYuYiA9IDAuMDsKICAgIHYuZyA9IDAuMDsKICB9Cn0KCnZvaWQgbWFpbih2b2lkKSB7CiAgLy8gaW5kZXggb2YgZmlyc3QgZWxlbWVudCBpbiBwaXhlbCAobWF0cml4IHNwYWNlKQogIGZsb2F0IGNvbCA9IGZsb29yKG91dFRleC54ICogZmxvYXQoY2hhbm5lbHMgKyBjaGFubmVsc1BhZCkgLSAxLjUpOwoKICBmbG9hdCBwb29sSW5kZXhDb29yZFg7CiAgdmVjNCBwb29sSW5kaWNlczsKICBpbnQgcG9vbEluZGV4UkdCQTsKICBmbG9hdCBwb29sSW5kZXg7CiAgdmVjNCBtYXBwZWRWYWx1ZXM7CiAgZmxvYXQgaW5wdXRDb29yZFk7CiAgdmVjNCBjdXJyZW50U3VtID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAwLjApOwogIGludCBwb29sRWxlbWVudHNFZmZlY3RpdmUgPSBwb29sRWxlbWVudHM7CiAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkgewogICAgaWYgKGkgPj0gcG9vbEVsZW1lbnRzKSB7CiAgICAgIGJyZWFrOwogICAgfQoKICAgIHBvb2xJbmRleENvb3JkWCA9IChmbG9hdChpKSArIDAuNSkgLyBmbG9hdChwb29sRWxlbWVudHMgKyBwb29sRWxlbWVudHNQYWQpOwogICAgcG9vbEluZGljZXMgPSB0ZXh0dXJlMkQocG9vbEluZGV4TWFwcGluZywgdmVjMihwb29sSW5kZXhDb29yZFgsIG91dFRleC55KSk7CiAgICBwb29sSW5kZXhSR0JBID0gaW50KG1vZChmbG9hdChpKSwgNC4wKSk7CiAgICBwb29sSW5kZXggPSBzZWxlY3RfaW5kZXgocG9vbEluZGljZXMsIHBvb2xJbmRleFJHQkEpOwoKICAgIGlmIChwb29sSW5kZXggIT0gLTEuMCkgewogICAgICBpbnB1dENvb3JkWSA9IChwb29sSW5kZXggKyAwLjUpIC8gZmxvYXQoaW5wdXRSb3dzKTsKICAgICAgbWFwcGVkVmFsdWVzID0gdGV4dHVyZTJEKFgsIHZlYzIob3V0VGV4LngsIGlucHV0Q29vcmRZKSk7CiAgICAgIGN1cnJlbnRTdW0gPSBjdXJyZW50U3VtICsgbWFwcGVkVmFsdWVzOwogICAgfSBlbHNlIHsKICAgICAgcG9vbEVsZW1lbnRzRWZmZWN0aXZlID0gcG9vbEVsZW1lbnRzRWZmZWN0aXZlIC0gMTsKICAgIH0KICB9CgogIGN1cnJlbnRTdW0gPSBjdXJyZW50U3VtIC8gZmxvYXQocG9vbEVsZW1lbnRzRWZmZWN0aXZlKTsKCiAgLy8gc2V0IHBhZCB2YWx1ZXMgdG8gMC4wLCBpZiBpbiBwYWRkZWQgcmVnaW9uIG9mIG91dHB1dCB0ZXh0dXJlCiAgaWYgKGNoYW5uZWxzUGFkID4gMCAmJiBjb2wgKyA0LjAgPiBmbG9hdChjaGFubmVscykpIHsKICAgIGZpeF9wYWQobWFwcGVkVmFsdWVzLCBjaGFubmVsc1BhZCk7CiAgfQoKICBnbF9GcmFnQ29sb3IgPSBjdXJyZW50U3VtOwp9Cg=="

/***/ }),

/***/ "D6qX":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,Ly8gQmF0Y2ggbm9ybWFsaXphdGlvbiBvcC4KLy8gVGhpcyBpcyBhbiBleHRlbnNpb24gb2Ygd2VibGFzLgovLyBodHRwczovL2dpdGh1Yi5jb20vd2F5bG9uZmxpbm4vd2VibGFzCgpwcmVjaXNpb24gaGlnaHAgZmxvYXQ7Cgp2YXJ5aW5nIHZlYzIgb3V0VGV4Owp1bmlmb3JtIHNhbXBsZXIyRCBYOwp1bmlmb3JtIHNhbXBsZXIyRCBnYW1tYTsKdW5pZm9ybSBzYW1wbGVyMkQgYmV0YTsKdW5pZm9ybSBzYW1wbGVyMkQgbWVhbjsKdW5pZm9ybSBzYW1wbGVyMkQgc3RkOwp1bmlmb3JtIGZsb2F0IGVwc2lsb247CnVuaWZvcm0gaW50IG91dHB1dENvbHM7CnVuaWZvcm0gaW50IG91dHB1dENvbFBhZDsKCnZvaWQgZml4X3BhZChpbm91dCB2ZWM0IHYsIGludCBwYWQpIHsKICB2LmEgPSAwLjA7CiAgaWYgKHBhZCA9PSAyKSB7CiAgICB2LmIgPSAwLjA7CiAgfSBlbHNlIGlmIChwYWQgPT0gMykgewogICAgdi5iID0gMC4wOwogICAgdi5nID0gMC4wOwogIH0KfQoKdm9pZCBtYWluKHZvaWQpIHsKICAvLyBpbmRleCBvZiBmaXJzdCBlbGVtZW50IGluIHBpeGVsIChtYXRyaXggc3BhY2UpCiAgZmxvYXQgY29sID0gZmxvb3Iob3V0VGV4LnggKiBmbG9hdChvdXRwdXRDb2xzICsgb3V0cHV0Q29sUGFkKSAtIDEuNSk7CgogIHZlYzQgX3ggPSB0ZXh0dXJlMkQoWCwgdmVjMihvdXRUZXgueCwgb3V0VGV4LnkpKTsKICB2ZWM0IF9tZWFuID0gdGV4dHVyZTJEKG1lYW4sIHZlYzIob3V0VGV4LngsIDAuNSkpOwogIHZlYzQgX3N0ZCA9IHRleHR1cmUyRChzdGQsIHZlYzIob3V0VGV4LngsIDAuNSkpOwogIHZlYzQgX2dhbW1hID0gdGV4dHVyZTJEKGdhbW1hLCB2ZWMyKG91dFRleC54LCAwLjUpKTsKICB2ZWM0IF9iZXRhID0gdGV4dHVyZTJEKGJldGEsIHZlYzIob3V0VGV4LngsIDAuNSkpOwogIHZlYzQgc3VtVmFsdWVzID0gX2JldGEgKyBfZ2FtbWEgKiAoX3ggLSBfbWVhbikgLyBzcXJ0KF9zdGQgKyBlcHNpbG9uKTsKCiAgLy8gc2V0IHBhZCB2YWx1ZXMgdG8gMC4wLCBpZiBpbiBwYWRkZWQgcmVnaW9uIG9mIG91dHB1dCB0ZXh0dXJlCiAgaWYgKG91dHB1dENvbFBhZCA+IDAgJiYgY29sICsgNC4wID4gZmxvYXQob3V0cHV0Q29scykpIHsKICAgIGZpeF9wYWQoc3VtVmFsdWVzLCBvdXRwdXRDb2xQYWQpOwogIH0KCiAgZ2xfRnJhZ0NvbG9yID0gc3VtVmFsdWVzOwp9Cg=="

/***/ }),

/***/ "H7M0":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,Ly8gVHJhbnNmb3JtIGlucHV0IG1hdHJpeCBYIGJhc2VkIG9uIGluZGV4IG1hcHBpbmdzLCBpbmRleE1hcHBpbmdSb3cgYW5kIGluZGV4TWFwcGluZ0NvbC4KLy8gVGhpcyBpcyBhbiBleHRlbnNpb24gb2Ygd2VibGFzLgovLyBodHRwczovL2dpdGh1Yi5jb20vd2F5bG9uZmxpbm4vd2VibGFzCgpwcmVjaXNpb24gaGlnaHAgZmxvYXQ7Cgp2YXJ5aW5nIHZlYzIgb3V0VGV4Owp1bmlmb3JtIHNhbXBsZXIyRCBYOwp1bmlmb3JtIHNhbXBsZXIyRCBpbmRleE1hcHBpbmdSb3c7CnVuaWZvcm0gc2FtcGxlcjJEIGluZGV4TWFwcGluZ0NvbDsKdW5pZm9ybSBpbnQgaW5wdXRSb3dzOwp1bmlmb3JtIGludCBpbnB1dENvbHM7CnVuaWZvcm0gaW50IG91dHB1dENvbHM7CnVuaWZvcm0gaW50IGlucHV0Q29sUGFkOwp1bmlmb3JtIGludCBvdXRwdXRDb2xQYWQ7CgpmbG9hdCBzZWxlY3RfaW5kZXgodmVjNCB2LCBpbnQgaW5kZXgpIHsKICBmbG9hdCB2YWwgPSAwLjA7CiAgaWYgKGluZGV4ID09IDApIHsKICAgIHZhbCA9IHYucjsKICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHsKICAgIHZhbCA9IHYuZzsKICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHsKICAgIHZhbCA9IHYuYjsKICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHsKICAgIHZhbCA9IHYuYTsKICB9CiAgcmV0dXJuIHZhbDsKfQoKdm9pZCBmaXhfcGFkKGlub3V0IHZlYzQgdiwgaW50IHBhZCkgewogIHYuYSA9IDAuMDsKICBpZiAocGFkID09IDIpIHsKICAgIHYuYiA9IDAuMDsKICB9IGVsc2UgaWYgKHBhZCA9PSAzKSB7CiAgICB2LmIgPSAwLjA7CiAgICB2LmcgPSAwLjA7CiAgfQp9Cgp2b2lkIG1haW4odm9pZCkgewogIC8vIGluZGV4IG9mIGZpcnN0IGVsZW1lbnQgaW4gcGl4ZWwgKG1hdHJpeCBzcGFjZSkKICBmbG9hdCBjb2wgPSBmbG9vcihvdXRUZXgueCAqIGZsb2F0KG91dHB1dENvbHMgKyBvdXRwdXRDb2xQYWQpIC0gMS41KTsKCiAgdmVjNCByb3dJbmRpY2VzID0gdGV4dHVyZTJEKGluZGV4TWFwcGluZ1JvdywgdmVjMihvdXRUZXgueCwgb3V0VGV4LnkpKTsKICB2ZWM0IGNvbEluZGljZXMgPSB0ZXh0dXJlMkQoaW5kZXhNYXBwaW5nQ29sLCB2ZWMyKG91dFRleC54LCBvdXRUZXgueSkpOwoKICBmbG9hdCByb3dJbmRleDsKICBmbG9hdCBjb2xJbmRleDsKICBmbG9hdCBpbnB1dENvb3JkWDsKICBmbG9hdCBpbnB1dENvb3JkWTsKICB2ZWMyIGlucHV0Q29vcmRzOwogIGludCBpbnB1dENoYW5uZWw7CiAgdmVjNCBtYXBwZWRWYWx1ZXMgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDAuMCk7CiAgZm9yIChpbnQgaSA9IDA7IGkgPCA0OyBpKyspIHsKICAgIHJvd0luZGV4ID0gc2VsZWN0X2luZGV4KHJvd0luZGljZXMsIGkpOwogICAgY29sSW5kZXggPSBzZWxlY3RfaW5kZXgoY29sSW5kaWNlcywgaSk7CgogICAgaWYgKHJvd0luZGV4ICE9IC0xLjAgJiYgY29sSW5kZXggIT0gLTEuMCkgewogICAgICBpbnB1dENvb3JkWCA9IChmbG9hdChjb2xJbmRleCkgKyAwLjUpIC8gZmxvYXQoaW5wdXRDb2xzICsgaW5wdXRDb2xQYWQpOwogICAgICBpbnB1dENvb3JkWSA9IChmbG9hdChyb3dJbmRleCkgKyAwLjUpIC8gZmxvYXQoaW5wdXRSb3dzKTsKICAgICAgaW5wdXRDb29yZHMgPSB2ZWMyKGlucHV0Q29vcmRYLCBpbnB1dENvb3JkWSk7CiAgICAgIGlucHV0Q2hhbm5lbCA9IGludChtb2QoY29sSW5kZXgsIDQuMCkpOwogICAgICBpZiAoaSA9PSAwKSB7CiAgICAgICAgbWFwcGVkVmFsdWVzLnIgPSBzZWxlY3RfaW5kZXgodGV4dHVyZTJEKFgsIGlucHV0Q29vcmRzKSwgaW5wdXRDaGFubmVsKTsKICAgICAgfSBlbHNlIGlmIChpID09IDEpIHsKICAgICAgICBtYXBwZWRWYWx1ZXMuZyA9IHNlbGVjdF9pbmRleCh0ZXh0dXJlMkQoWCwgaW5wdXRDb29yZHMpLCBpbnB1dENoYW5uZWwpOwogICAgICB9IGVsc2UgaWYgKGkgPT0gMikgewogICAgICAgIG1hcHBlZFZhbHVlcy5iID0gc2VsZWN0X2luZGV4KHRleHR1cmUyRChYLCBpbnB1dENvb3JkcyksIGlucHV0Q2hhbm5lbCk7CiAgICAgIH0gZWxzZSBpZiAoaSA9PSAzKSB7CiAgICAgICAgbWFwcGVkVmFsdWVzLmEgPSBzZWxlY3RfaW5kZXgodGV4dHVyZTJEKFgsIGlucHV0Q29vcmRzKSwgaW5wdXRDaGFubmVsKTsKICAgICAgfQogICAgfQoKICAgIC8vIHNldCBwYWQgdmFsdWVzIHRvIDAuMCwgaWYgaW4gcGFkZGVkIHJlZ2lvbiBvZiBvdXRwdXQgdGV4dHVyZQogICAgaWYgKG91dHB1dENvbFBhZCA+IDAgJiYgY29sICsgNC4wID4gZmxvYXQob3V0cHV0Q29scykpIHsKICAgICAgZml4X3BhZChtYXBwZWRWYWx1ZXMsIG91dHB1dENvbFBhZCk7CiAgICB9CiAgfQoKICBnbF9GcmFnQ29sb3IgPSBtYXBwZWRWYWx1ZXM7Cn0K"

/***/ }),

/***/ "Jkk7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7715ebf4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("8a2l");
function injectStyle (ssrContext) {
  __webpack_require__("qFCL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7715ebf4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buefy__ = __webpack_require__("MMSg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buefy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_buefy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_async_computed__ = __webpack_require__("PlbA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_async_computed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_async_computed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__("M93x");





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_buefy___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_async_computed___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */] }
});

/***/ }),

/***/ "OSEp":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,Ly8gQ29weSB0ZXh0dXJlCi8vIFRoaXMgaXMgYW4gZXh0ZW5zaW9uIG9mIHdlYmxhcy4KLy8gaHR0cHM6Ly9naXRodWIuY29tL3dheWxvbmZsaW5uL3dlYmxhcwoKcHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoKdmFyeWluZyB2ZWMyIG91dFRleDsKdW5pZm9ybSBzYW1wbGVyMkQgc291cmNlOwoKdm9pZCBtYWluKHZvaWQpIHsKICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoc291cmNlLCB2ZWMyKG91dFRleC54LCBvdXRUZXgueSkpOwp9Cg=="

/***/ }),

/***/ "TaZx":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,cHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoKdmFyeWluZyB2ZWMyIG91dFRleDsKdW5pZm9ybSBzYW1wbGVyMkQgWDsKdW5pZm9ybSBpbnQgcmVsdTsKCnZvaWQgbWFpbih2b2lkKSB7CiAgaWYgKHJlbHUgPT0gMSkgewogICAgZ2xfRnJhZ0NvbG9yID0gbWF4KHRleHR1cmUyRChYLCB2ZWMyKG91dFRleC54LCBvdXRUZXgueSkpLCAwLjApOwogIH0gZWxzZSB7CiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoWCwgdmVjMihvdXRUZXgueCwgb3V0VGV4LnkpKTsKICB9Cn0K"

/***/ }),

/***/ "nGOu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  0: 'Arc de Triomphe',
  1: 'Big Ben',
  2: 'Casa Loma',
  3: 'Castel Santangelo',
  4: 'Charlottenburg Palace',
  5: 'Colosseum',
  6: 'Dresden Frauenkirche',
  7: 'Eiffel Tower',
  8: 'Independence Hall',
  9: 'Leaning Tower of Pisa',
  10: 'Milan Cathedral',
  11: 'Notre Dame Cathedral',
  12: 'Pantheon',
  13: 'Reichstag',
  14: 'Sacre Coeur Basilica',
  15: 'Savior on Blood Church',
  16: 'St Basil Cathedral',
  17: 'St Louis Cathedral',
  18: 'St Paul Cathedral',
  19: 'Statue of Liberty',
  20: 'Stephansdom',
  21: 'Taj Mahal',
  22: 'Trevi Fountain',
  23: 'Tyn Church',
  24: 'Westminster Abbey'
});

/***/ }),

/***/ "qFCL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v7mS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LandmarksRecognition_vue__ = __webpack_require__("6AI7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30d50130_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_LandmarksRecognition_vue__ = __webpack_require__("/wAH");
function injectStyle (ssrContext) {
  __webpack_require__("Jkk7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30d50130"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LandmarksRecognition_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30d50130_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_LandmarksRecognition_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_LandmarksRecognition__ = __webpack_require__("v7mS");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    LandmarksRecognition: __WEBPACK_IMPORTED_MODULE_0__components_LandmarksRecognition__["a" /* default */]
  }
});

/***/ }),

/***/ "yOcD":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,Ly8gMkQgY29udm9sdXRpb24gZnJhZ21lbnQgc2hhZGVyIC0gYmFzZWQgb24gaW0yY29sICsgZ2VtbSBpbXBsZW1lbnRhdGlvbgovLyBUaGUgaW5wdXQgdGV4dHVyZSwgWCwgaXMgYWxyZWFkeSBjb25maWd1cmVkIGFzIGNvbHVtbiBtYXRyaXgsIGFmdGVyCi8vIGlucHV0X3RyYW5zZm9ybS5nbHNsIGlzIHJ1biBvbiBpdCBpZiBuZWNlc3NhcnkuIFRoZSBvdXRwdXQgdGV4dHVyZSBpcyBpbiBjb2x1bW4KLy8gbWF0cml4IGNvbmZpZ3VyYXRpb24sIGFuZCB3aWxsIG5lZWQgdG8gYmUgcmVzaGFwZWQgb3IgdHJhbnNmb3JtZWQgcHJpb3IgdG8gdGhlCi8vIG5leHQgbGF5ZXIuCgovLyBUaGUgZm9sbG93aW5nIGNvZGUgaXMgYWRhcHRlZCBmcm9tIHdlYmxhcywgc3BlY2lmaWNhbGx5IHRoZSBzZ2VtbSBwYXJ0cy4KLy8gaHR0cHM6Ly9naXRodWIuY29tL3dheWxvbmZsaW5uL3dlYmxhcwovLwovLyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkKLy8KLy8gQ29weXJpZ2h0IChjKSAyMDE1IFdheWxvbiBGbGlubgovLyBNb2RpZmllZCBieSBMZW9uIENoZW4sIDIwMTcKLy8KLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weQovLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbAovLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzCi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwKLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzCi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6Ci8vCi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbAovLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgovLwovLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgovLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwKLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFCi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIKLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwKLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUKLy8gU09GVFdBUkUuCgpwcmVjaXNpb24gaGlnaHAgZmxvYXQ7Cgp2YXJ5aW5nIHZlYzIgb3V0VGV4Owp1bmlmb3JtIHNhbXBsZXIyRCBYOwp1bmlmb3JtIHNhbXBsZXIyRCBXOwp1bmlmb3JtIHNhbXBsZXIyRCBiOwp1bmlmb3JtIGludCBpbnB1dENvbHM7CnVuaWZvcm0gaW50IG91dHB1dENvbHM7CnVuaWZvcm0gaW50IGlucHV0Q29sUGFkOwp1bmlmb3JtIGludCBvdXRwdXRDb2xQYWQ7CnVuaWZvcm0gaW50IHJlbHU7CgovLyBzdW0gb2YgcHJvZHVjdHMgYmV0d2VlbiBlbGVtZW50cyBpbiByb3cgaSAoZnJvbSBYKSB4IGNvbCBqIChmcm9tIEIpCi8vCi8vIENhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiB0aGUgcm93IChmcm9tIFgpIGFuZCBjb2x1bW4gKGZyb20gQikKLy8gaWRlbnRpZmllZCBieSB0aGUgcGFzc2VkIGluZGVjZXMgKG91dHB1dCB0ZXh0dXJlIGNvb3JkaW5hdGUgc3BhY2UpLgovLyBXZSBsb29wIG92ZXIgZWxlbWVudHMgaW4gdGhlIHJvdyBhbmQgY29sdW1uIGFuZCBzdW0gdGhlIHByb2R1Y3QKLy8gdXNpbmcgdGhlIGdsc2wgYGRvdGAgZnVuY3Rpb24gdG8gcHJvY2VzcyBmb3VyIGVsZW1lbnRzIGF0IGEgdGltZS4KLy8gVGhpcyBmb3VyIGVsZW1lbnQgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoYXQgdGhlIG1hdHJpeCBCIGJlCi8vIHRyYW5zcG9zZWQgYmVmb3JlIHRleGVsIHBhY2tpbmcgYW5kIHRoYXQgYm90aCBtYXRyaWNlcyBiZSBwYWRkZWQKLy8gKHdpdGggemVyb3MpIHRvIGEgbXVsdGlwbGUgb2YgZm91ciAoNCkgaW4gdGhlaXIgc2hhcmVkIGRpbWVuc2lvbi4KZmxvYXQgZG90X3Jvd2NvbCAoZmxvYXQgeSwgZmxvYXQgeCwgc2FtcGxlcjJEIFgsIHNhbXBsZXIyRCBXLCBpbnQgSykgewogIGZsb2F0IGRlbHRhX3QgPSAxLiAvIGZsb2F0KEspOyAvLyBzcGFjZSAob24gdGV4dHVyZSkgYmV0d2VlbiBlbGVtZW50cwogIGZsb2F0IHN1bSA9IDAuOyAvLyBzdW0gZm9yIHRoaXMgcm93L2NvbHVtbiBwYWlyCiAgZmxvYXQgeiA9IDAuNSAqICg0LjAgKiBkZWx0YV90KTsvLyBwb3NpdGlvbiBmb3Igc2hhcmVkIGRpbWVuc2lvbiBvbiBzb3VyY2UgdGV4dHVyZXMKCiAgZm9yIChpbnQgbCA9IDA7IGwgPCA0MDk2OyArK2wpIHsKICAgIGlmIChsID49IEsgLyA0KSBicmVhazsgLy8gc3RvcCB3aGVuIHdlIGZpbmlzaCB0aGUgcm93L2NvbHVtbgogICAgLy8gbCBpcyBpbiBwaXhlbCBzcGFjZSwgc28gd2UgZGl2aWRlIGJ5IGZvdXIKCiAgICAvLyByZXRyaWV2ZSBuZXh0IGZvdXIgZWxlbWVudHMgZnJvbSBlYWNoIHRleHR1cmUKICAgIHZlYzQgYV9payA9IHRleHR1cmUyRChYLCB2ZWMyKHosIHkpKTsKICAgIHZlYzQgYl9raiA9IHRleHR1cmUyRChXLCB2ZWMyKHosIHgpKTsKCiAgICAvLyB1c2UgYGRvdGAgdG8gcHJvY2VzcyBmb3VyIGVsZW1lbnRzIGF0IGEgdGltZQogICAgc3VtICs9IGRvdChhX2lrLCBiX2tqKTsKICAgIHogKz0gKDQuMCAqIGRlbHRhX3QpOyAvLyAoeiArIDAuNSkqZGVsdGEKICB9CiAgcmV0dXJuIHN1bTsKfQoKdm9pZCBtYWluKHZvaWQpIHsKCiAgLy8gZ2V0IHRoZSBpbXBsaWVkIHJvdyBhbmQgY29sdW1uIGZyb20gLnkgYW5kIC54IG9mIHBhc3NlZCAob3V0cHV0KQogIC8vIHRleHR1cmUgY29vcmRpbmF0ZS4gVGhlc2UgbWFwIGRpcmVjdGx5IHRvIGlucHV0IHRleHR1cmUgc3BhY2Ugd2hlbgogIC8vIHRoZSByZWxldmFudCBkaW1lbnNpb25zIGFyZSB0aGUgc2FtZS4KICBmbG9hdCByb3dfdCA9IG91dFRleC55OwogIGZsb2F0IGNvbF90ID0gb3V0VGV4Lng7CiAgdmVjNCBiX3YgPSB0ZXh0dXJlMkQoYiwgdmVjMihjb2xfdCwgMC41KSk7CgogIHZlYzQgc3VtX3YgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDAuMCk7CiAgZmxvYXQgY29sID0gKGNvbF90ICogZmxvYXQob3V0cHV0Q29scyArIG91dHB1dENvbFBhZCkgLSAyLjApOyAvLyBpbmRleCBvZiBmaXJzdCBlbGVtZW50IGluIHBpeGVsIChtYXRyaXggc3BhY2UpCiAgc3VtX3YuciA9IGRvdF9yb3djb2wocm93X3QsIChjb2wgKyAwLjUpIC8gZmxvYXQob3V0cHV0Q29scyksIFgsIFcsIGlucHV0Q29scyArIGlucHV0Q29sUGFkKTsKICAvLyBpbiB0aGUgcGFkZGluZyByZWdpb24/CiAgaWYgKG91dHB1dENvbFBhZCA+IDAgJiYgKGNvbCArIDQuMCkgPiBmbG9hdChvdXRwdXRDb2xzKSkgewogICAgLy8gcGFkCiAgICBpZiAob3V0cHV0Q29sUGFkIDwgMykgewogICAgICBzdW1fdi5nID0gZG90X3Jvd2NvbChyb3dfdCwgKGNvbCArIDEuNSkgLyBmbG9hdChvdXRwdXRDb2xzKSwgWCwgVywgaW5wdXRDb2xzICsgaW5wdXRDb2xQYWQpOwogICAgfQogICAgaWYgKG91dHB1dENvbFBhZCA8IDIpIHsKICAgICAgc3VtX3YuYiA9IGRvdF9yb3djb2wocm93X3QsIChjb2wgKyAyLjUpIC8gZmxvYXQob3V0cHV0Q29scyksIFgsIFcsIGlucHV0Q29scyArIGlucHV0Q29sUGFkKTsKICAgIH0KICB9IGVsc2UgewogICAgc3VtX3YuZyA9IGRvdF9yb3djb2wocm93X3QsIChjb2wgKyAxLjUpIC8gZmxvYXQob3V0cHV0Q29scyksIFgsIFcsIGlucHV0Q29scyArIGlucHV0Q29sUGFkKTsKICAgIHN1bV92LmIgPSBkb3Rfcm93Y29sKHJvd190LCAoY29sICsgMi41KSAvIGZsb2F0KG91dHB1dENvbHMpLCBYLCBXLCBpbnB1dENvbHMgKyBpbnB1dENvbFBhZCk7CiAgICBzdW1fdi5hID0gZG90X3Jvd2NvbChyb3dfdCwgKGNvbCArIDMuNSkgLyBmbG9hdChvdXRwdXRDb2xzKSwgWCwgVywgaW5wdXRDb2xzICsgaW5wdXRDb2xQYWQpOwogIH0KCiAgaWYgKHJlbHUgPT0gMSkgewogICAgZ2xfRnJhZ0NvbG9yID0gbWF4KHN1bV92ICsgYl92LCAwLjApOwogIH0gZWxzZSB7CiAgICBnbF9GcmFnQ29sb3IgPSBzdW1fdiArIGJfdjsKICB9Cn0K"

/***/ }),

/***/ "zCnK":
/***/ (function(module, exports) {

module.exports = "data:application/octet-stream;base64,Ly8gMkQgTWF4IFBvb2xpbmcgb3AuCi8vIFRoaXMgaXMgYW4gZXh0ZW5zaW9uIG9mIHdlYmxhcy4KLy8gaHR0cHM6Ly9naXRodWIuY29tL3dheWxvbmZsaW5uL3dlYmxhcwoKcHJlY2lzaW9uIGhpZ2hwIGZsb2F0OwoKdmFyeWluZyB2ZWMyIG91dFRleDsKdW5pZm9ybSBzYW1wbGVyMkQgWDsKdW5pZm9ybSBzYW1wbGVyMkQgcG9vbEluZGV4TWFwcGluZzsKdW5pZm9ybSBpbnQgaW5wdXRSb3dzOwp1bmlmb3JtIGludCBjaGFubmVsczsKdW5pZm9ybSBpbnQgY2hhbm5lbHNQYWQ7CnVuaWZvcm0gaW50IHBvb2xFbGVtZW50czsKdW5pZm9ybSBpbnQgcG9vbEVsZW1lbnRzUGFkOwoKZmxvYXQgc2VsZWN0X2luZGV4KHZlYzQgdiwgaW50IGluZGV4KSB7CiAgZmxvYXQgdmFsID0gMC4wOwogIGlmIChpbmRleCA9PSAwKSB7CiAgICB2YWwgPSB2LnI7CiAgfSBlbHNlIGlmIChpbmRleCA9PSAxKSB7CiAgICB2YWwgPSB2Lmc7CiAgfSBlbHNlIGlmIChpbmRleCA9PSAyKSB7CiAgICB2YWwgPSB2LmI7CiAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7CiAgICB2YWwgPSB2LmE7CiAgfQogIHJldHVybiB2YWw7Cn0KCnZvaWQgZml4X3BhZChpbm91dCB2ZWM0IHYsIGludCBwYWQpIHsKICB2LmEgPSAwLjA7CiAgaWYgKHBhZCA9PSAyKSB7CiAgICB2LmIgPSAwLjA7CiAgfSBlbHNlIGlmIChwYWQgPT0gMykgewogICAgdi5iID0gMC4wOwogICAgdi5nID0gMC4wOwogIH0KfQoKdm9pZCBtYWluKHZvaWQpIHsKICAvLyBpbmRleCBvZiBmaXJzdCBlbGVtZW50IGluIHBpeGVsIChtYXRyaXggc3BhY2UpCiAgZmxvYXQgY29sID0gZmxvb3Iob3V0VGV4LnggKiBmbG9hdChjaGFubmVscyArIGNoYW5uZWxzUGFkKSAtIDEuNSk7CgogIGZsb2F0IHBvb2xJbmRleENvb3JkWDsKICB2ZWM0IHBvb2xJbmRpY2VzOwogIGludCBwb29sSW5kZXhSR0JBOwogIGZsb2F0IHBvb2xJbmRleDsKICB2ZWM0IG1hcHBlZFZhbHVlczsKICBmbG9hdCBpbnB1dENvb3JkWTsKICBjb25zdCBmbG9hdCBtaW4gPSAtMS4wZSswODsKICB2ZWM0IGN1cnJlbnRNYXggPSB2ZWM0KG1pbiwgbWluLCBtaW4sIG1pbik7CiAgZm9yIChpbnQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkgewogICAgaWYgKGkgPj0gcG9vbEVsZW1lbnRzKSB7CiAgICAgIGJyZWFrOwogICAgfQoKICAgIHBvb2xJbmRleENvb3JkWCA9IChmbG9hdChpKSArIDAuNSkgLyBmbG9hdChwb29sRWxlbWVudHMgKyBwb29sRWxlbWVudHNQYWQpOwogICAgcG9vbEluZGljZXMgPSB0ZXh0dXJlMkQocG9vbEluZGV4TWFwcGluZywgdmVjMihwb29sSW5kZXhDb29yZFgsIG91dFRleC55KSk7CiAgICBwb29sSW5kZXhSR0JBID0gaW50KG1vZChmbG9hdChpKSwgNC4wKSk7CiAgICBwb29sSW5kZXggPSBzZWxlY3RfaW5kZXgocG9vbEluZGljZXMsIHBvb2xJbmRleFJHQkEpOwoKICAgIGlmIChwb29sSW5kZXggIT0gLTEuMCkgewogICAgICBpbnB1dENvb3JkWSA9IChwb29sSW5kZXggKyAwLjUpIC8gZmxvYXQoaW5wdXRSb3dzKTsKICAgICAgbWFwcGVkVmFsdWVzID0gdGV4dHVyZTJEKFgsIHZlYzIob3V0VGV4LngsIGlucHV0Q29vcmRZKSk7CiAgICB9CgogICAgY3VycmVudE1heCA9IG1heChjdXJyZW50TWF4LCBtYXBwZWRWYWx1ZXMpOwogIH0KCiAgLy8gc2V0IHBhZCB2YWx1ZXMgdG8gMC4wLCBpZiBpbiBwYWRkZWQgcmVnaW9uIG9mIG91dHB1dCB0ZXh0dXJlCiAgaWYgKGNoYW5uZWxzUGFkID4gMCAmJiBjb2wgKyA0LjAgPiBmbG9hdChjaGFubmVscykpIHsKICAgIGZpeF9wYWQobWFwcGVkVmFsdWVzLCBjaGFubmVsc1BhZCk7CiAgfQoKICBnbF9GcmFnQ29sb3IgPSBjdXJyZW50TWF4Owp9Cg=="

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.6be8b747ac282c2ef382.js.map