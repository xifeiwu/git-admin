const path = require('path');
const commonUtils = new(require('./lib/utils-common.js'));

// {allowedGroup, props}
function props(config) {
  const GROUPS = {
    admin: ['huffie@re-confirm', 'sduwxf@qq.com'],
    company: ['xifei.wu@finupgroup.com']
  };
  const defaultConfig = {
    IS_CONFIG: true,
    groups: {
      admin: ['read', 'write']
    },
    desc: ''
  }
  config = config ? commonUtils.deepMerge(defaultConfig, config) : defaultConfig;
  for (let group in config.groups) {
    if (GROUPS.hasOwnProperty(group)) {
      config.groups[group] = {
        members: GROUPS[group],
        permissions: config.groups[group]
      }
    } else {
      throw new Error(`group ${group} not exist in GROUPS`);
    }
  }
  /**
   * format of config:
   {
     IS_CONFIG: boolean,
     groups: {
       group: {
          members: [],
          permissions: []
       }
     },
     desc: ''
   }
   * means this repo can be access by members of group with permission read or(and) write
   */
  return config;
}

module.exports = {
  REPO_DIR: path.resolve(__dirname, '../repositories'),
  // GROUPS,
  repos: {
    test: props({
      desc: '一个非常小的git仓库，用于测试git指令'
    }),
    shell: {
      start: props({
        desc: 'summarize bash grammar by demo code'
      }),
      'linux-distro-build': props(),
      project: {},
      vendor: {
        'acme.sh': props({
          desc: '实现https签名的开源项目，并有代码添加',
        })
      },
    },
    huffie: {
      huffie: props(),
      blog: props({
        desc: '基于jekyll的blog，将会被blogs代替'
      }),
      /** 博客相关 */
      blogs: {
        content: props({
          desc: '博客内容，使用markdown语法写的，分门别类的技术总结'
        }),
        backend: props({
          desc: '博客服务，markdown解析归类，提供访问服务。将从容和服务拆开，是为了减少内容部分的体积。'
        }),
      },
      blog_site: props(),
      company: {
        archive: props({
          desc: 'archived materials of companies used to work for'
        }),
        conviva: props({
          desc: 'conviva related materials',
        }),
      },
      'xifeiwu.github.io': props()
    },
    node: {
      start: {
        feature: props({
          desc: 'ts语法，node代码总结。node/start/summary的node部分会逐步迁移到该项目'
        }),
        vendor: props({
          desc: 'A collection of commonly used vendor projects and some common projects based on them in form of gitsubmodule'
        }),
        summary: props({
          desc: 'node代码总结，内容将迁移到node/start/fe, node/start/ts中。TODO: delete'
        }),
        modules: props({
          desc: '展示常用node modules使用方式'
        }),
        busybox: props({
          desc: 'serveral frequently used utilities implemented by ts, exposed in format of command'
        }),
      },
      vendor: {
        'node-http-proxy': props({
          desc: 'http(s)请求转发，加入了一些逻辑，方便请求转发的配置'
        }),
        'cnpmjs.org': props(),
        'angry-bird': props(),
        'shadowsocks-lite': props(),
        'forever-monitor': props(),
        ws: props(),
        forge: props(),
        snabbdom: props(),
        vue: props(),
        axios: props(),
        ssh2: props({
          desc: 'show the logic of ssh2'
        }),
        'tencentcloud-sdk-nodejs': props({
          desc: '腾讯云sdk接口，ref: https://github.com/tencentcloud/tencentcloud-sdk-nodejs',
        }),
        'koa-md-parser': props(),
        'nirvana-logger': props(),
        formidable: props(),
        'dom-align': props(),
        'impress.js': props(),
        'aws4': props(),
        'markdown-it': props(),
        'koa-static-cache': props(),
      },
      module: {
        lib: props({
          desc: '只运行在node环境的公共逻辑。通用逻辑和运行在前端的逻辑放在fe/module/lib中'
        }),
        net: props({
          desc: '封装了一些基于koa, axios, http-proxy, ws等常用模块的通用逻辑'
        }),
      },
      db: {
        feature: props({
          desc: 'study db feature'
        }),
        'assets-manager': props({
          desc: 'manage personal assets',
        }),
      },
      project: {
        'node-server': props({
          desc: '一个简单的node服务，不依赖三方库，将会被basic-server代替'
        }),
        'basic-server': props({
          desc: '提供常用的后端服务'
        }),
        'spa-server': props({
          desc: '为spa项目提供静态服务、转发服务，并尽量使用和webpack.config.js中devServer相同的配置'
        }),
        'eggjs-demo': props({
          desc: '高乐天创建的一个eggjs项目，可以参考typescript及模块分割部分，可以删除'
        }),
        'assist-server': props({
          desc: 'node server to assist some paas logic, such as cas login'
        }),
        'fe-paas': props({
          desc: '量化空间paas前端项目'
        }),
        'assist-server-paas': props({
          desc: 'paas前端的后台管理平台，包括帮助文档管理后台的前端页面几后端接口实现等'
        }),
        stable: {
          'git-admin': props({
            desc: 'manage git repo by code written by node'
          }),
          busybox: props({
            desc: '使用js实现的常用逻辑工具箱，新功能会转向ts，改项目会渐渐停止维护',
            groups: {
              company: ['read']
            }
          }),
        },
      },
      webpack: {
        start: props({
          desc: 'webpack基础展示，基于项目：https://github.com/ruanyf/webpack-demos'
        }),
        'react-tsx-less': props({ desc: '支持tsx, less, react的webpack最小化配置' }),
      },
      assets: props({
        desc: 'assets used for both node, vue and fe'
      }),
      vue: {
        'vue_abc': props({
          desc: '学习vue'
        }),
        'robot': props({
          desc: '结构比较成熟，使用typescript，基于nuxt的一个项目，使用到了pont（好用但不好控）'
        }),
        'assets': props({
          desc: 'vue项目使用的assets，TODO: delete, instead by node/assets'
        }),
        'vue-projects': props({
          desc: '多个vue项目，包括show-case, assist-fe等，放到同一个项目主要是为了共用仓库和webpack配置，减少冗余项目。'
        }),
        'nuxt-ts-el-template': props(),
        'vue-mdEditor': props(),
        components: {
          'element-ui': props(),
          custom: props()
        }
      },
    },
    electron: {
      project: {
        'electron-forge-react': props({
          desc: 'electron-forge with webpack config support react, less'
        }),
        housekeeper: props({
          desc: 'presonal assets manager'
        }),
      }
    },
    fe: {
      start: {
        'browser-feature': props({
          desc: '展示browser的接口，demo code支持static, react',
        }),
        'show-case': props({
          desc: '一些可以展示的页面'
        }),
      },
      module: {
        lib: props({
          desc: '能运行在node和前端环境的公用逻辑，及只能在前端环境运行的逻辑'
        }),
      },
      project: {
        website: props({
          desc: '个人主页node服务端，可以通过config文件灵活配置'
        }),
        calendar: props({
          desc: 'firefox os上的日历项目'
        }),
        sage: props({
          desc: '哲对话项目，需要后端接口，可以使用assist-server提供的接口'
        }),
        'generate-iconfont': props({
          desc: '将svg图片生成字体'
        }),
        'zhangxueli.site': props(),
      },
    },
    react: {
      start: {
        'micro-frontend': props({
          desc: '微前端项目，集成了很多前端项目的入口'
        }),
        'browser-feature': props({
          desc: 'show browser feature in form of react project'
        }),
        'react-start': props({
          desc: 'react相关的基础知识：feature of browser runtime；feature of react；commonly used vendor'
        }),
        'react-deep': props({
          desc: '尝试了解react的内在逻辑'
        }),
        'antd-rc': props({
          desc: '用来学习antd依赖的各种react component'
        }),
        'create-react-app-startup': props({
          desc: '使用create-react-app创建的，每个commit展示了相关的改动，引用了两个常用的submodule'
        }),
        'ahooks-demo-show': props({
          desc: 'show demo code of [ahooks](https://github.com/alibaba/hooks.git)'
        }),
        'react-umi': props({
          desc: '基于umi脚手架的项目，作为react入门'
        }),
      },
      module: {
        components: props({
          desc: 'react通用组件和逻辑，自用'
        }),
        'rc-stater': props({
          desc: 'stater for react component, depends on module/components, fe/module/lib'
        }),
      },
      vendor: {
        'rc-trigger': props({
          desc: 'frok from git@github.com:react-component/trigger.git'
        }),
        'rc-select': props({
          desc: 'frok from git@github.com:react-component/select.git'
        }),
        'rc-field-form': props({
          desc: 'frok from git@github.com:react-component/field-form.git'
        }),
        'rc-table': props({
          desc: 'frok from git@github.com:react-component/table.git'
        }),
        'ahooks': props({
          desc: 'frok from  git@github.com:alibaba/hooks.git'
        }),
      },
      project: {},
    },
    chrome: {
      'show-qrcode': props(),
      'content-scanner': props(),
      busybox: props(),
      assist: props(),
      ydd: props({
        desc: '有道词典chrome插件，可用',
      }),
      'use-case': props(),
    },
    linux: {
      summary: props({
        desc: ''
      }),
      'ubuntu-rebuild': props({
        desc: 'iscas定制cdos的源码'
      }),
      ubuntu: {
        summary: props({
          desc: '基于linux发行版（linuxmint），重新定制iso镜像',
        }),
        'cdos-update': props({
          desc: '一个非常精简的纯shell脚本实现的linuxmin更新相关包的实现逻辑。主要价值在于了解deb打包方式。'
        }),
        'cdosupdate': props({
          desc: '基于linuxmint的mintupdate包，修改了部分逻辑。主要价值在了解linuxmint基于pygtk图形化界面的实现风格。'
        }),
      }
    },
    java: {
      summary: props(),
      'com-server': props(),
      springbootdemo: props(),
      SpringMVCDemo: props(),
    },
    python: {
      start: {
        prime: props(),
        vendor: props(),
      },
      project: {
        'schedule-task': props(),
        'benew-bi-server': props(),
        'benew-bi-analyze': props(),
        'news-task': props(),
        'flask-server': props(),
      }
    },
    android: {
      HybridApp: props(),
      StudyAndroid: props(),
      StudyJava: props(),
      DevJava: props(),
      solitaire: props(),
      photopuzzle: props(),
      'demo-puzzle': props({
        desc: '教学用的android拼图游戏'
      }),
      llk: props(),
      eatdot: props(),
    },
    apple: {
      from_start_to_app_store: props(),
      grammar: props(),
      'ios-demo': props(),
    },
    cpp: {
      'app-store-client': props()
    },
    php: {
      'exam-parser': props()
    },
    work: {
      workcode: props(),
    },
    engineer: {
      'git-howto': props({
        desc: 'show how git works, how it is used for project management'
      })
    },
    meituan: {
      piaofang: props({
        desc: '猫眼专业版'
      }),
      'fe-blog': props({
        desc: '一个使用express, jade为后端架构，以markdown为文章语法的博客系统',
      }),
      'movie-template': props({
        desc: '一个java后端框架'
      }),
    },
    finup: {
      benew: props(),
      'quant-api': props(),
      'spring-boot-demo': props(),
      'benew-quant': props(),
    },
    pwrd: {
      docs: props({
        desc: 'api接口相关：接口描述；接口数据moack，接口调用等；mail项目总结文档，代码片段等'
      }),
      zhuanzhu: props({
        desc: 'plan+前端项目'
      }),
      mail: props({
        desc: '邮箱前端项目'
      }),
      nginx: {
        d1: props({
          desc: 'd1服务器10.12.6.10上nginx的配置'
        }),
        desktop: props({
          desc: '台式机10.46.0.73上nginx的配置'
        }),
        elif: props({
          desc: '服务器124.156.155.64上nginx的配置'
        }),
      },
    },
    conviva: {
      'daas-frontend': props({
        desc: 'daas前端'
      }),
      'semantic-mapper-frontend': props({
        desc: 'Semantic Mapper前端'
      }),
      'rule-engine-frontend': props({
        desc: 'Rule Engine前端'
      }),
      'conviva-ui': props({
        desc: 'conviva ui'
      }),
      'conviva-ui-assist': props({
        desc: 'conviva-ui开发辅助项目'
      }),
      hackathon2022: props({
        desc: 'hackathon 2022'
      }),
      node: {
        common: props({
          desc: 'common logic for conviva node projects',
        }),
      },
      fe: {
        AppHub: props({
          desc: 'AppHub based on qiankun'
        }),
      },
      'instant-filter': {
        'client': props({
          desc: 'Instant-Filter-Client'
        }),
        'server': props({
          desc: 'Instant-Filter-Server'
        }),
        'node-based-assist': props({
          desc: 'A backend service run on node, to provide basic server, proxy server, request from node, etc',
        }),
        'client-assist': props({
          desc: 'assist for development of instant-filter-client, it will embeded in project if-client to show feature of components and some basic logic'
        }),
        'server-assist': props({
          desc: 'assist for development of instant-filter-server, it will embeded in project of if-server for debugging or middle data show'
        }),
      }
    }
  },
  get repoList() {
    const traverse = (prefix = '', obj) => {
      var results = [];
      for (let key in obj) {
        if (obj[key].IS_CONFIG) {
          results.push(prefix.length > 0 ? `${prefix}/${key}` : `${key}`);
        } else {
          results = results.concat(traverse(prefix.length > 0 ? `${prefix}/${key}` : `${key}`, obj[key]));
        }
      }
      return results;
    }
    return traverse('', this.repos);
  },

  get repoMap() {
    const traverse = (prefix = '', obj) => {
      var results = {};
      for (let key in obj) {
        if (obj[key].IS_CONFIG) {
          results[prefix.length > 0 ? `${prefix}/${key}` : `${key}`] = obj[key];
        } else {
          Object.assign(results, traverse(prefix.length > 0 ? `${prefix}/${key}` : `${key}`, obj[key]));
        }
      }
      return results;
    }
    return traverse('', this.repos);
  }
}
