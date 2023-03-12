import Vue from 'vue'
import App from './App'
import module from './ajax/api/index.js'
import userMixin from './common/rulesMixin.js'
import store from './store'
import commonMixin from './common/commonMixin.js'
import 'element-ui/lib/theme-chalk/index.css';
import {
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Image,
} from 'element-ui';
Vue.use(Input);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Image);

Vue.config.productionTip = false

/* 路由组件扩展 */
import {
	router,
	RouterMount
} from './router'
Vue.use(router)


App.mpType = 'app'
Vue.prototype.$http = module;

const app = new Vue({
	...App,
	store
})

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
