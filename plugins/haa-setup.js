import Vue from "vue";
import HaaFormComponents from "haa-form/src/main.js";
import HaaMap from "haa-map/src/main.js";
import HaaBody from "haa-body/src/main.js";
import "haa-form/dist/haa-form.css";
import "haa-map/dist/haa-map.css";
[HaaFormComponents, HaaMap, HaaBody].forEach(x =>
  Vue.use(x)
);
