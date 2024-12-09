# What is this project

1. A git server that can run on protocol of http or ssh.
2. Can config each repo with more info, such as permission, description...

# How to run this project

**Create user git, place this project(and dir repositories for locating all repos) at the HOME path of user git.**
**Write the following config to repositories/git-admin.git/hooks/post-receivels**
```
unset GIT_DIR
cd /home/git/git-admin
git fetch origin
git reset --hard origin/master
```

The hooks will be triggered when code is pushed to git-admin.git, and make sure code under dir `/home/git/git-admin` have the latest update.

**Add commond for customer by writing the following command to .ssh/authorized_keys**

command="/home/git/git-admin/bin/git-server-by-ssh.js sduwxf@qq.com ef296e1131fac75de800bf8cf374cc27",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDgAFkQM7Ki2XrIlpt2n5L8inWB6AZ2IWvIy7cZAA+VAP9bM1LLktSo2WOB+RyyZVViRf3a9MOolRjsbQYGZW85o4ivZYlredSw6jK6Qd7Kb1/STKabhxPLibW4/VPnFyfddIBbxalb4kxnTh2VYwsqPn43yDoFbMTLeZqGK0W7f+e/CJbWCjvQVFUw82uOe+V+DvqWie9cs25YQGEOKN8FI/88XdrTtNRTAGUmmhSnn2Jqr6qR9E7VpGHgWTEkaweNGQCF48fXK9etmmUaAtoIDj+5C48+Zp3WwV5qnvIMrv1RAE3YNYpqI06Lj5vfAOIWTLd84FGSHzGWmCO2tUfb sduwxf@qq.com

# About config.js

We can config repo in file `config.js`, repoes tree are usually organized using follow structure:

```
node					          // take node runtime as example
├── start				        // start to learn feature node runtime and some commonlly used modules of node
│ ├── feature 				  // explore feature of node runtime
│ ├── vendor 			      // Can explore feature and logic of some frequently used third-party projects in ts debug mode
│ └── ...				        // ...
├── vendor				      // third-part projects can be downloaded to this dir(can also managed by start/vendor to run in ts debug mode)
│ ├── socksv5			      // socksv5 run on node
│ ├── formidable		    // parse http request payload to json(or buffer)
│ ├── snabbdom			    // vue做tree diff的代码逻辑
│ └── ...				        // ..
├── module				      // common logic that can be used in almost every node project
│ ├── libs				      // native code without dependency on any third-party modules
│ ├── db				        // common db logic and models base on solution of sequelize
│ ├── net				        // net-related logic based on koa, ws
│ ├── utils				      // logics based on libs, db, net.
│ └── ...				        // ...
├── project				      // My project that implement some feature
│ ├── assist-server		  // spa项目后端服务，但有些细节没有想通，没有达到stable的状态
│ ├── proxy-server	    // 辅助完美邮箱开发的node服务
│ ├── spa-server		    // spa项目后端服务，但有些细节没有想通，没有达到stable的状态
│ └── ...				        // 等
├── tool                // stable and useful project
│ ├── busybox           // A wrapper of useful command
│ ├── git-admin         // git repo manager
│ └── ...
├── webpack				      // 如果vendor项目比较多，可以将相关项目归类的一个文件夹（如，展示webpack功能的相关项目）
│ ├── ruanyf			      // 一个展示基本的webpack使用方式的项目
│ └── ...				        // 等
└── ...					        // 其它自定义文件夹
```

For each coding language, should start from the `feature`(include native module) of the language, accumulate more and more common logic that can be used across multiple projects under dir `module/`, use `vendor` to locate and learn some commonly used third part projects, then can start myself project under dir `projects/` for destinate use case.



### About acme

acme.sh是一个开源的实现的https签名的项目，它通过调用dns提供的接口，在指定域名上加上TXT信息，并进行校验，证明域名所有权后，Let's Encrypt进行签名并返回证书。

相关项目：
bash/vendor/acme.sh，fork自github，添加了”在指定域名上加上TXT信息“的逻辑
pwrd/assist，提供了金山云88dev.cn dns的接口调用，通过node_module axios进行网络请求
